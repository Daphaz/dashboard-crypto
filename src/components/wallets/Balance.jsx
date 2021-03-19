import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import LogicBalance from "./LogicBalance";

export const Balance = ({ balance, totalBtc }) => {
	const {
		handleClickBalance,
		handleStarActive,
		priceBalanceFormated,
		priceBalanceTotalFormated,
		totalPercent,
	} = LogicBalance(balance, totalBtc);

	return (
		<div className="balances_row" onClick={handleClickBalance}>
			<div className="balances_cell">
				<button className="btn favorite" onClick={handleStarActive}>
					<BsStar className="stars stars-outline" />
					<BsStarFill className="stars stars-fill" />
				</button>
			</div>
			<div className="balances_cell">
				<div className="balances_company">
					<div className="balances_logo">
						<img src={balance.image} alt={`logo ${balance.name}`} />
					</div>
					<div className="balances_text">{balance.name}</div>
				</div>
			</div>
			<div className="balances_cell">{balance.symbol.toUpperCase()}</div>
			<div className="balances_cell">{priceBalanceFormated}</div>
			<div className="balances_cell">
				{balance.percent24h.status === "positive" ? (
					<div className="status positive">
						<BiUpArrowAlt />
						{`+${balance.percent24h.value.toFixed(2)} %`}
					</div>
				) : (
					<div className="status negative">
						<BiDownArrowAlt />
						{`${balance.percent24h.value.toFixed(2)} %`}
					</div>
				)}
			</div>
			<div className="balances_cell">{`${totalPercent} %`}</div>
			<div className="balances_cell">
				<div className="balances_number">{balance.amount}</div>
				<div className="balances_price">{priceBalanceTotalFormated}</div>
			</div>
		</div>
	);
};
