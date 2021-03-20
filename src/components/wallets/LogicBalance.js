import { useSelector, useDispatch } from "react-redux";
import { priceFormatted } from "../../helpers/utils";
import { activeBalance } from "../../redux/balances/action";

const Logic = (balance, totalBtc) => {
	const devise = useSelector((s) => s.devises.filter((f) => f.active === true));
	const dispatch = useDispatch();

	const handleClickBalance = () => {
		const side = document.querySelector(".wallets_sidebar");
		const wrapper = document.querySelector(".wallets_warpper");
		if (!side.classList.contains("visible")) {
			dispatch(activeBalance(balance.id));
			side.classList.add("visible");
			wrapper.classList.add("small");
		}
	};

	const handleStarActive = (id) => {
		const fav = document.getElementById(`fav${id}`);
		fav.classList.toggle("active");
	};

	const priceBalanceFormated = priceFormatted(
		balance.prices[devise[0].id],
		devise[0].locale,
		devise[0].devise
	);

	const priceBalanceTotalFormated = priceFormatted(
		balance.pricesTotal[devise[0].id].toFixed(2),
		devise[0].locale,
		devise[0].devise
	);

	const totalPercent = ((balance.amountBtc / totalBtc) * 100).toFixed(2);

	return {
		handleClickBalance,
		handleStarActive,
		priceBalanceFormated,
		priceBalanceTotalFormated,
		totalPercent,
	};
};

export default Logic;
