import { useEffect } from "react";
import { useSelector } from "react-redux";
import { optionBalance } from "../../helpers/apexOptions";

const GenerateChart = () => {
	const balances = useSelector((s) => s.balances.items);
	const coins = useSelector((s) => s.coins.coins);
	return {};
};

export default GenerateChart;
