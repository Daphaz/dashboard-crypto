import { useSelector, useDispatch } from "react-redux";
import {
	priceFormatted,
	totalBtc,
	totalFiat,
	totalPriceFormated,
	percent,
} from "../../helpers/utils";
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

	const total = {
		btc: totalBtc(balances),
		fiat: totalFiat(balances, devise),
		formated: totalPriceFormated(totalFiat(balances, devise), devise),
	};

	let bitcoinWallet = {};
	balances.forEach((el) => {
		if (el.symbol === "btc") {
			let totalPercent = percent(el.amount, total.btc);
			bitcoinWallet = {
				...el,
				totalPercent: totalPercent.toFixed(2),
			};
		}
	});

	const totalPriceBitcoinWalletFormated = priceFormatted(
		bitcoinWallet.pricesTotal[devise[0].id],
		devise[0].locale,
		devise[0].devise
	);

	const totalPriceOtherWalletFormated = priceFormatted(
		total.fiat - bitcoinWallet.pricesTotal[devise[0].id],
		devise[0].locale,
		devise[0].devise
	);

	const otherTotalBtcAmount = (total.btc - bitcoinWallet.amount).toFixed(8);

	return {
		bitcoinWallet,
		total,
		totalPriceBitcoinWalletFormated,
		handleCreateWallet,
		otherTotalBtcAmount,
		totalPriceOtherWalletFormated,
	};
};

export default Logic;
