import React from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import Chart from "react-apexcharts";
import LogicSide from "./LogicSide";

export const SideWidget = ({ data }) => {
	const { name, symbol, options, serie, percentActive } = LogicSide(data);

	return (
		<div className="widgets">
			<div className="widgets_box">
				<div className="widgets_top">
					<div className="widgets_company">
						<div className="widgets_details">
							<div className="widgets_category">{name}</div>
							<div className="widgets_info">{symbol.toUpperCase()}</div>
						</div>
					</div>
					<div className="widgets_group">
						{percentActive[0].status === "positive" ? (
							<div className="status positive">
								<BiUpArrowAlt />
								{`+${percentActive[0].value.toFixed(2)} %`}
							</div>
						) : (
							<div className="status negative">
								<BiDownArrowAlt />
								{`${percentActive[0].value.toFixed(2)} %`}
							</div>
						)}
						<div className="widgets_price">{data.prices}</div>
					</div>
				</div>
				<div className="widgets_chart">
					{options && serie && (
						<div id="spark1" style={{ minHeight: 96 }}>
							<Chart options={options} series={serie} height={96} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
