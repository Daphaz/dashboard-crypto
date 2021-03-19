import { useContext } from "react";
import { WalletContext } from "../../../helpers/context";
import { priceFormatted } from "../../../helpers/utils";
import { useSelector, useDispatch } from "react-redux";
import { marketActive } from "../../../redux/widgets/sort/actions";
import { activeBalanceWidget } from "../../../redux/balances/action";

const Logic = (balances) => {
	const dispatch = useDispatch();
	const { setShowAddWallet, showAddWallet } = useContext(WalletContext);
	const devise = useSelector((s) => s.devises.filter((f) => f.active === true));
	const sortMarkets = useSelector((s) => s.sortMarket);

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
	};
};

export default Logic;
