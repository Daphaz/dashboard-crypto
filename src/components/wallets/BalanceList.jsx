import React from "react";
import { Balance } from "./Balance";

const arTest = [0, 1];

export const BalanceList = () => {
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
					<div className="balances_cell">% portfolio</div>
					<div className="balances_cell">total balance</div>
				</div>
				{arTest.map((a) => (
					<Balance key={a} />
				))}
			</div>
			<div className="balances_btns">
				<button className="btn balances_btn btn_blue">Load more</button>
			</div>
		</div>
	);
};
