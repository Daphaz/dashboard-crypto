import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

export const Balance = () => {
	const handleClickBalance = () => {
		const side = document.querySelector(".wallets_sidebar");
		const wrapper = document.querySelector(".wallets_warpper");
		side.classList.toggle("visible");
		wrapper.classList.toggle("small");
	};

	const handleStarActive = () => {
		const fav = document.querySelector(".favorite");
		fav.classList.toggle("active");
	};

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
						<img src="/assets/bitcoin.png" alt="logo bitcoin" />
					</div>
					<div className="balances_text">Bitcoin</div>
				</div>
			</div>
			<div className="balances_cell">BTC</div>
			<div className="balances_cell">60,000 $</div>
			<div className="balances_cell">
				<div className="status positive">
					<BiUpArrowAlt />
					2.05 %
				</div>
			</div>
			<div className="balances_cell">100 %</div>
			<div className="balances_cell">
				<div className="balances_number">$60.125.20</div>
				<div className="balances_price">$2.300.58</div>
			</div>
		</div>
	);
};
