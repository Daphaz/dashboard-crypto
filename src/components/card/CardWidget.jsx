import React from "react";
import { BiNavigation } from "react-icons/bi";
import Chart from "react-apexcharts";
import GenerateChart from "./generateChart";

export const CardWidget = () => {
	GenerateChart();
	return (
		<div className="card card_widget text-center">
			<button className="btn card_next">
				<BiNavigation className="icon" />
			</button>
			<div className="card_chart card_chart_total-balance">
				<div id="chart_total-balance" style={{ minHeight: 220 }}>
					{/* <Chart options={options} series={series} /> */}
				</div>
			</div>
			<div className="card_inner"></div>
		</div>
	);
};
