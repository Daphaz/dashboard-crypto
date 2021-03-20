import { useContext, useState } from "react";
import { WalletContext } from "../../../helpers/context";
import { priceFormatted } from "../../../helpers/utils";
import { useSelector, useDispatch } from "react-redux";
import { marketActive } from "../../../redux/widgets/sort/actions";
import {
	activeBalanceWidget,
	addBalance,
} from "../../../redux/balances/action";

const initalState = {
	symbol: "",
	amount: "",
	isError: {
		symbol: "",
		amount: "",
	},
};

const Logic = (balances) => {
	const [state, setState] = useState(initalState);
	const dispatch = useDispatch();
	const { setShowAddWallet, showAddWallet } = useContext(WalletContext);
	const devise = useSelector((s) => s.devises.filter((f) => f.active === true));
	const sortMarkets = useSelector((s) => s.sortMarket);
	const coins = useSelector((s) => s.coins.coins);
	const coinsSymbol = coins.map((c) => c.symbol);
	const balanceSymbol = balances.map((c) => c.symbol);

	const handleActiveDropdown = () => {
		const drop = document.querySelector(".card .dropdown");
		drop.classList.toggle("active");
	};
	const handleClickClose = () => {
		const side = document.querySelector(".wallets_sidebar");
		const wrapper = document.querySelector(".wallets_warpper");
		const walletBody = document.querySelector(".wallets_body");
		const operations = document.querySelector(".operations");
		side.classList.remove("visible");
		wrapper.classList.remove("small");
		walletBody.style.display = "block";
		operations.style.display = "none";
		setShowAddWallet(false);
	};

	const handleClickCloseAdd = () => {
		const side = document.querySelector(".wallets_sidebar");
		const warpper = document.querySelector(".wallets_warpper");
		side.classList.remove("visible");
		warpper.classList.remove("small");
		setShowAddWallet(false);
	};

	const handleEdit = () => {
		const walletBody = document.querySelector(".wallets_body");
		const operations = document.querySelector(".operations");
		walletBody.style.display = "none";
		operations.style.display = "block";
	};

	const handleCreate = () => {
		setShowAddWallet(true);
	};

	const inputFocus = (value) => {
		const el = document.getElementById(value);
		el.classList.add("active");
	};
	const removeActive = (value, e) => {
		const el = document.getElementById(value);
		if (e.target.value === "") {
			el.classList.remove("active");
		}
	};

	//balances Logic
	const totalBtc = balances
		.reduce((acc, val) => val.amountBtc + acc, 0)
		.toFixed(8);
	const totalFiat = balances.reduce(
		(acc, val) => val.pricesTotal[devise[0].id] + acc,
		0
	);
	const totalPriceFormated = priceFormatted(
		totalFiat,
		devise[0].locale,
		devise[0].devise
	);

	let balance;
	balances.forEach((b) => {
		if (b.active === true) {
			balance = {
				...b,
				prices: priceFormatted(
					b.prices[devise[0].id],
					devise[0].locale,
					devise[0].devise
				),
				pricesTotal: priceFormatted(
					b.pricesTotal[devise[0].id].toFixed(2),
					devise[0].locale,
					devise[0].devise
				),
				percentTotal: `${((b.amountBtc / totalBtc) * 100).toFixed(2)} %`,
			};
		} else {
			return;
		}
	});

	//Sort Markets
	const handleActiveMarket = (id) => {
		dispatch(marketActive(id));
		handleActiveDropdown();
		switch (id) {
			case 0:
				dispatch(activeBalanceWidget(balance.id, "percent1h"));
				break;
			case 1:
				dispatch(activeBalanceWidget(balance.id, "percent24h"));
				break;
			case 2:
				dispatch(activeBalanceWidget(balance.id, "percent7d"));
				break;
			case 3:
				dispatch(activeBalanceWidget(balance.id, "percent14d"));
				break;
			default:
				break;
		}
	};
	const marketFilter = sortMarkets.filter((f) => f.active === true);

	//Validation Form
	const formValid = ({ isError, ...rest }) => {
		let isValid = false;

		Object.values(isError).forEach((val) => {
			if (val.length > 0) {
				isValid = false;
			} else {
				isValid = true;
			}
		});

		Object.values(rest).forEach((val) => {
			if (val === null) {
				isValid = false;
			} else {
				isValid = true;
			}
		});

		return isValid;
	};

	const validCoin = (val) => {
		let isValid = false;
		const symbol = val === "AVAX" ? val : val.toLowerCase();

		coinsSymbol.forEach((sym) => {
			if (sym === symbol) {
				isValid = true;
				balanceSymbol.forEach((s) => {
					if (symbol === s) {
						isValid = false;
					}
				});
			}
		});

		return isValid;
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (formValid(state)) {
			const amount = parseFloat(state.amount);

			if (state.symbol !== "" && state.amount !== "") {
				if (validCoin(state.symbol)) {
					const symbol =
						state.symbol === "AVAX" ? state.symbol : state.symbol.toLowerCase();
					let items = {};
					coins.forEach((c) => {
						if (c.symbol === symbol) {
							const amountBtc = c.prices[3] * amount;
							const pricesTotal = c.prices.map((p) => p * amount);
							items = { ...c, amount, amountBtc, pricesTotal };
						}
					});
					dispatch(addBalance(items));
					handleClickCloseAdd();
					setState(initalState);
				} else {
					let testSym = false;
					balanceSymbol.forEach((s) => {
						if (s === state.symbol.toLowerCase()) {
							testSym = true;
						}
					});
					if (testSym) {
						setState({
							...state,
							isError: {
								...state.isError,
								symbol: "You have this Coin please edit balance !",
							},
						});
					} else {
						setState({
							...state,
							isError: {
								...state.isError,
								symbol: "Symbol not found !",
							},
						});
					}
				}
			} else {
				if (state.symbol === "") {
					setState({
						...state,
						isError: {
							...state.isError,
							symbol: "Symbol is required",
						},
					});
				} else {
					setState({
						...state,
						isError: {
							...state.isError,
							amount: "Amount is required",
						},
					});
				}
			}
		} else {
			console.log("Form is invalid!");
		}
	};

	const formValChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		let isError = { ...state.isError };

		switch (name) {
			case "symbol":
				isError.symbol =
					value.length > 5 ? "Symbol max 5 characaters required" : "";
				isError.symbol = value === "" ? "Symbol is required" : "";
				break;
			case "amount":
				isError.amount =
					parseFloat(value) || parseInt(value) ? "" : "Amount must be a number";
				break;
			default:
				break;
		}

		setState({
			...state,
			isError,
			[name]: value,
		});
	};

	return {
		showAddWallet,
		handleActiveDropdown,
		handleClickClose,
		handleClickCloseAdd,
		handleEdit,
		handleCreate,
		inputFocus,
		removeActive,
		balance,
		sortMarkets,
		handleActiveMarket,
		marketFilter,
		totalBtc,
		totalPriceFormated,
		state,
		onSubmit,
		formValChange,
	};
};

export default Logic;
