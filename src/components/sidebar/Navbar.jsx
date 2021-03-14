import React from "react";
import {
	AiOutlineAppstore,
	AiOutlineBarChart,
	AiOutlineWallet,
	AiOutlineCalculator,
	AiOutlineRead,
} from "react-icons/ai";

export const Navbar = () => {
	return (
		<nav className="sidebar_nav">
			<div className="sidebar_item active">
				<div className="sidebar_icon">
					<AiOutlineAppstore className="icon" />
				</div>
				<div className="sidebar_text">Home</div>
			</div>
			<div className="sidebar_item">
				<div className="sidebar_icon">
					<AiOutlineBarChart className="icon" />
				</div>
				<div className="sidebar_text">Prices</div>
			</div>
			<div className="sidebar_item">
				<div className="sidebar_icon">
					<AiOutlineWallet className="icon" />
				</div>
				<div className="sidebar_text">Wallets</div>
			</div>
			<div className="sidebar_item">
				<div className="sidebar_icon">
					<AiOutlineCalculator className="icon" />
				</div>
				<div className="sidebar_text">Arbitrage</div>
			</div>
			<div className="sidebar_item">
				<div className="sidebar_icon">
					<AiOutlineRead className="icon" />
				</div>
				<div className="sidebar_text">News</div>
			</div>
		</nav>
	);
};
