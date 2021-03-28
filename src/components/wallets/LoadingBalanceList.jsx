import React from "react";
import { LoadingBalance } from "./LoadingBalance";

export const LoadingBalanceList = () => {
	return (
		<div className="balances">
			<div className="balances_title h6">Assets Balances</div>
			<div className="balances_table">
				<div className="balances_row balances_row_head">
					<div className="balances_cell"></div>
					<div className="balances_cell">asset</div>
					<div className="balances_cell">symbol</div>
					<div className="balances_cell">asset price</div>
					<div className="balances_cell">24h market</div>
					<div className="balances_cell">portfolio</div>
					<div className="balances_cell">total balance</div>
				</div>
				<LoadingBalance />
				<LoadingBalance />
			</div>
		</div>
	);
};
