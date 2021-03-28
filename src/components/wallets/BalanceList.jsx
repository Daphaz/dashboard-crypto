import React from "react";
import { Balance } from "./Balance";
import { totalBtc } from "../../helpers/utils";

export const BalanceList = ({ balances }) => {
	const total = totalBtc(balances);

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
				{balances.map((balance, i) => (
					<Balance
						key={balance.id}
						balance={balance}
						totalBtc={total}
						idItem={i}
					/>
				))}
			</div>
		</div>
	);
};
