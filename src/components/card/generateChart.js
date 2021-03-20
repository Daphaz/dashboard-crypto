/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { optionBalance } from "../../helpers/apexOptions";
import { getRandomColor, priceFormatted } from "../../helpers/utils";
import { filterCoins } from "../../redux/balances/action";

const GenerateChart = () => {
	const dispatch = useDispatch();
	const balances = useSelector((s) => s.balances.items);
	const coins = useSelector((s) => s.coins);
	const devise = useSelector((s) => s.devises.filter((d) => d.active === true));
	const totalBtc = balances
		.reduce((acc, val) => val.amountBtc + acc, 0)
		.toFixed(8);
	let totalFiat, totalPriceFormated;
	let colors = [];
	let labels = [];
	let series = [];
	let options;

	useEffect(() => {
		if (coins.coins.length > 0 && !balances[0].name) {
			dispatch(filterCoins(coins.coins, balances));
		}
	}, [filterCoins, coins.coins]);

	if (balances[0].name) {
		totalFiat = balances.reduce(
			(acc, val) => val.pricesTotal[devise[0].id] + acc,
			0
		);
		totalPriceFormated = priceFormatted(
			totalFiat,
			devise[0].locale,
			devise[0].devise
		);
		balances.forEach((b) => {
			colors.push(getRandomColor());
			labels.push(b.symbol.toUpperCase());
			const totalPercent = (b.amountBtc / totalBtc) * 100;
			series.push(totalPercent.toFixed(2));
		});
		options = optionBalance(labels, colors);
	}

	return {
		options,
		series,
		totalBtc,
		totalPriceFormated,
	};
};

export default GenerateChart;
