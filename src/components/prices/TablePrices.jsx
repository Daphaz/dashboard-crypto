import React from "react";
import { PriceItem } from "./PriceItem";

export const TablePrices = ({ showMore, coins, displayCoin }) => {
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
			{showMore && displayCoin.length > 1
				? coins.slice(0, 5).map((c) => <PriceItem key={c.id} item={c} />)
				: coins.map((c) => <PriceItem key={c.id} item={c} />)}
		</div>
	);
};
