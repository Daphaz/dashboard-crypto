import React from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

export const SideWidget = () => {
	return (
		<div className="widgets">
			<div className="widgets_box">
				<div className="widgets_top">
					<div className="widgets_company">
						<div className="widgets_details">
							<div className="widgets_category">Bitcoin</div>
							<div className="widgets_info">BTC</div>
						</div>
					</div>
					<div className="widgets_group">
						<div className="status positive">
							<BiUpArrowAlt />
							2.05 %
						</div>
						<div className="widgets_price">18,125,50 USD</div>
					</div>
				</div>
				<div className="widegets_chart"></div>
			</div>
		</div>
	);
};
