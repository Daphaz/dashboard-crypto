import { useSelector, useDispatch } from "react-redux";
import { priceFormatted } from "../../helpers/utils";
import { enableAddWallet } from "../../redux/showWallet/action";

const Logic = (balances) => {
	const dispatch = useDispatch();
	const devise = useSelector((s) => s.devises.filter((d) => d.active === true));

	const handleCreateWallet = () => {
		dispatch(enableAddWallet());
		const side = document.querySelector(".wallets_sidebar");
		const wrapper = document.querySelector(".wallets_warpper");
		side.classList.toggle("visible");
		wrapper.classList.toggle("small");
	};
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

	let bitcoinWallet = {};
	let otherWallet = [];
	balances.forEach((el) => {
		if (el.symbol === "btc") {
			let totalPercent = (el.amount / totalBtc) * 100;
			bitcoinWallet = {
				...el,
				totalPercent: totalPercent.toFixed(2),
			};
		} else {
			let totalPercent = (el.amount / totalBtc) * 100;
			otherWallet.push({
				...el,
				totalPercent: totalPercent.toFixed(2),
			});
		}
	});

	const totalPriceBitcoinWalletFormated = priceFormatted(
		bitcoinWallet.pricesTotal[devise[0].id],
		devise[0].locale,
		devise[0].devise
	);

	const totalPriceOtherWalletFormated = priceFormatted(
		totalFiat - bitcoinWallet.pricesTotal[devise[0].id],
		devise[0].locale,
		devise[0].devise
	);

	const otherTotalBtcAmount = (totalBtc - bitcoinWallet.amount).toFixed(8);

	//Balance
	const handleClickBalance = () => {
		const side = document.querySelector(".wallets_sidebar");
		const wrapper = document.querySelector(".wallets_warpper");
		side.classList.toggle("visible");
		wrapper.classList.toggle("small");
	};

	const handleStarActive = () => {
		const fav = document.querySelector(".favorite");
		fav.classList.toggle("active");
	};

	return {
		bitcoinWallet,
		otherWallet,
		totalBtc,
		totalPriceFormated,
		totalPriceBitcoinWalletFormated,
		handleCreateWallet,
		otherTotalBtcAmount,
		totalPriceOtherWalletFormated,
		handleClickBalance,
		handleStarActive,
	};
};

export default Logic;
