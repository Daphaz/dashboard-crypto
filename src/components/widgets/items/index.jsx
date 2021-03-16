import React from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import Chart from "react-apexcharts";
import { optionWidget, seriesWidget } from "../../../helpers/apexOptions";
import { useSelector } from "react-redux";
import { priceFormatted } from "../../../helpers/utils";

export const Item = ({ coin }) => {
	const {
		img,
		labels,
		series,
		name,
		symbol,
		percent,
		status,
		prices,
		display,
	} = coin;
	const devises = useSelector((s) => s.devises);

	const devise = devises.filter((d) => d.active === true);
	const color = status === "positive" ? "#3DBAA2" : "#FF7A68";
	const options = optionWidget(labels, color);
	const serie = seriesWidget(series);

	return (
		<>
			{display === "block" && (
				<div className="widgets_item">
					<div className="widgets_head">
						<div className="widgets_company">
							<div className="widgets_logo">
								<img src={img} alt="logo bitcoin" />
							</div>
							<div className="widgets_details">
								<div className="widgets_category">{name}</div>
								<div className="widgets_info">{symbol}</div>
							</div>
						</div>
						<div className="widgets_time">24H</div>
					</div>
					<div className="widgets_body">
						<div className="widgets_line">
							<div className="widgets_price">
								{priceFormatted(
									prices[devise[0].id],
									devise[0].locale,
									devise[0].devise
								)}
							</div>
							<div className={`status ${status}`}>
								{status === "positive" ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
								{`${percent.toFixed(2)} %`}
							</div>
						</div>
						<div className="widgets_chart">
							<div id="spark1" style={{ minHeight: 96 }}>
								<Chart options={options} series={serie} height={96} />
							</div>
						</div>
					</div>
					<button className="btn widgets_btn btn_blue btn_full">
						View Asset
					</button>
				</div>
			)}
		</>
	);
};
