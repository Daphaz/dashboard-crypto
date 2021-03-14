import React, { useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft, BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import {
	AiOutlineAppstore,
	AiOutlineBarChart,
	AiOutlineWallet,
	AiOutlineCalculator,
	AiOutlineRead,
} from "react-icons/ai";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";

export const Sidebar = () => {
	const [toggle, setToggle] = useState(false);

	const toggleDarkTheme = () => {
		if (!toggle) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		setToggle(!toggle);
	};

	const closeSidebar = () => {
		const side = document.querySelector(".sidebar");
		side.classList.remove("active");
		document.body.classList.remove("no-scroll");
		document.querySelector("html").classList.remove("no-scroll");
		document.querySelector(".page").classList.remove("toggle");
		document.querySelector(".header_logo").classList.remove("hidden");
	};

	return (
		<aside className="sidebar">
			<div className="sidebar_head">
				<div className="sidebar_logo">Cryptos.</div>
				<button className="btn sidebar_toggle">
					<BiMenuAltRight className="icon icon_right" />
					<BiMenuAltLeft className="icon icon_left" />
				</button>
				<button className="btn sidebar_close" onClick={closeSidebar}>
					<GrClose className="icon icon_close" />
				</button>
			</div>
			<div className="sidebar_body">
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
				<form className="sidebar_search">
					<input
						className="sidebar_input"
						type="text"
						name="search"
						placeholder="Search"
					/>
					<button type="submit" className="btn">
						<BiSearch className="icon icon_search" />
					</button>
				</form>
			</div>
			<div className="sidebar_bottom">
				<label className="switch switch_theme">
					<input
						type="checkbox"
						className="switch_input"
						checked={toggle}
						readOnly
					/>
					<span className="switch_in">
						<span className="switch_box" onClick={toggleDarkTheme}></span>
						<span className="switch_icon">
							<RiLightbulbFlashLine className="icon icon_light" />
							<RiLightbulbFlashFill className="icon icon_dark" />
						</span>
					</span>
				</label>
			</div>
		</aside>
	);
};
