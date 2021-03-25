import React from "react";
import { BsStar } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { priceFormatted } from "../../helpers/utils";
import { optionWidget, seriesWidget } from "../../helpers/apexOptions";
import Chart from "react-apexcharts";

export const PriceItem = ({ item }) => {
	const deviseActive = useSelector((s) =>
		s.devises.filter((f) => f.active === true)
	);
	const color = item.percent24h.status === "positive" ? "#3DBAA2" : "#FF7A68";
	const option = optionWidget(item.label, color);
	const series = seriesWidget(item.series);

	return (
		<div className="prices_row">
			<div className="prices_cell">
				<button className="btn favorite">
					<BsStar className="stars stars-outline" />
				</button>
			</div>
			<div className="prices_cell">
				<div className="prices_company">
					<div className="prices_logo">
						<img src={item.image} alt={`logo ${item.name}`} />
					</div>
					<div className="prices_text">{item.name}</div>
				</div>
			</div>
			<div className="prices_cell">{item.symbol.toUpperCase()}</div>
			<div className="prices_cell">
				{priceFormatted(
					item.prices[deviseActive[0].id],
					deviseActive[0].locale,
					deviseActive[0].devise
				)}
			</div>
			<div className="prices_cell">
				{item.percent24h.status === "positive" ? (
					<div className="status positive">
						<BiUpArrowAlt />
						{`+${item.percent24h.value.toFixed(2)} %`}
					</div>
				) : (
					<div className="status negative">
						<BiDownArrowAlt />
						{`${item.percent24h.value.toFixed(2)} %`}
					</div>
				)}
			</div>
			<div className="prices_cell">
				{priceFormatted(
					item.market_caps[deviseActive[0].id],
					deviseActive[0].locale,
					deviseActive[0].devise
				)}
			</div>
			<div className="prices_cell">
				{priceFormatted(
					item.total_volumes[deviseActive[0].id],
					deviseActive[0].locale,
					deviseActive[0].devise
				)}
			</div>
			<div className="prices_cell">
				<div className="prices_chart">
					<div id="spark-1" style={{ minHeight: 30 }}>
						<Chart options={option} series={series} />
					</div>
				</div>
			</div>
		</div>
	);
};
