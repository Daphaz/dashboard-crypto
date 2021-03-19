import { optionWidget, seriesWidget } from "../../../helpers/apexOptions";

const LogicSide = (data) => {
	const {
		name,
		symbol,
		percent1h,
		percent24h,
		percent7d,
		percent14d,
		label,
		series,
	} = data;
	const percents = [percent1h, percent24h, percent7d, percent14d];
	const percentActive = percents.filter((f) => f.active === true);

	const color = percentActive[0].status === "positive" ? "#3DBAA2" : "#FF7A68";
	const options = optionWidget(label, color);
	const serie = seriesWidget(series);
	return {
		name,
		symbol,
		options,
		serie,
		percentActive,
	};
};

export default LogicSide;
