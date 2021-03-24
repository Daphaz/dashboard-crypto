import React from "react";
import { LoadingItem } from "./LoadingItem";

export const LoadingTable = () => {
	return (
		<div className="prices_table">
			<div className="prices_row prices_row_head">
				<div className="prices_cell"></div>
				<div className="prices_cell">token</div>
				<div className="prices_cell">symbol</div>
				<div className="prices_cell">price</div>
				<div className="prices_cell">24h</div>
				<div className="prices_cell">Market Cap</div>
				<div className="prices_cell">Volume</div>
				<div className="prices_cell">Chart</div>
			</div>
			<LoadingItem />
			<LoadingItem />
		</div>
	);
};
