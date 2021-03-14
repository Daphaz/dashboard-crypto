import React from "react";
import {
	BiBell,
	BiMenuAltRight,
	BiDownArrowCircle,
	BiChevronUp,
	BiSearch,
} from "react-icons/bi";
import { VscSignIn, VscOutput } from "react-icons/vsc";

export const Header = () => {
	const toggleActive = (c) => {
		const els = document.querySelectorAll(".header_item");
		els.forEach((e) => {
			if (e.classList.contains(c) && !e.classList.contains("active")) {
				e.classList.add("active");
			} else {
				e.classList.remove("active");
			}
		});
	};

	const toogleSidebarActive = () => {
		const side = document.querySelector(".sidebar");
		side.classList.toggle("active");
		document.body.classList.toggle("no-scroll");
		document.querySelector("html").classList.toggle("no-scroll");
		document.querySelector(".page").classList.toggle("toggle");
		document.querySelector(".header_logo").classList.toggle("hidden");
	};

	return (
		<header className="header header_border">
			<div className="header_logo">Cryptos</div>
			<form className="header_search">
				<input
					className="header_input"
					type="text"
					name="search"
					placeholder="Search"
				/>
				<button type="submit" className="btn">
					<BiSearch className="icon" />
				</button>
			</form>
			<div className="header_group">
				<div className="header_item header_item-notifications">
					<div className="header_head active">
						<button
							className="btn"
							onClick={() => toggleActive("header_item-notifications")}>
							<BiBell className="icon" />
						</button>
					</div>
					<div className="header_body">
						<div className="notifications">
							<div className="notification">
								<div className="notification_icon">
									<VscOutput className="icon" />
								</div>
								<div className="notification_detail">
									<div className="notification_info">
										Wrapped Bitcoin is now listed on Unity Exchange
									</div>
									<div className="notification_line">
										<span className="time">24m ago</span>
										<span className="view"></span>
									</div>
								</div>
							</div>
							<div className="notification">
								<div className="notification_icon">
									<VscOutput className="icon" />
								</div>
								<div className="notification_detail">
									<div className="notification_info">
										Wrapped Bitcoin is now listed on Unity Exchange
									</div>
									<div className="notification_line">
										<span className="time">24m ago</span>
										<span className="view"></span>
									</div>
								</div>
							</div>
						</div>
						<button className="btn header_btn btn_blue btn_full">
							See all notifications
						</button>
					</div>
				</div>
				<div className="header_item header_item-download">
					<div className="header_head">
						<button
							className="btn"
							onClick={() => toggleActive("header_item-download")}>
							<BiDownArrowCircle className="icon" />
						</button>
					</div>
					<div className="header_body">
						<div className="header_row">
							<div className="header_col">
								<div className="header_col-label">Downloads</div>
								<div className="header_col-download">
									<img src="/assets/app-store.svg" alt="logo apple store" />
								</div>
								<div className="header_col-download">
									<img src="/assets/google-play.svg" alt="logo google play" />
								</div>
							</div>
							<div className="header_col">
								<div className="header_col-label">Scan Code</div>
								<div className="header_qr-code">
									<img src="/assets/qr-code.png" alt="scan qr-code" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header_item header_item-lang">
					<div className="header_head">
						<button
							className="btn"
							onClick={() => toggleActive("header_item-lang")}>
							<span>Eng/USD</span>
							<BiChevronUp className="icon chevronLang" />
						</button>
					</div>
					<div className="header_body">
						<div className="header_lang">
							<div className="header_cel">
								<div className="header_link active">
									<span className="header_flag">us</span>
									English
								</div>
								<div className="header_link">
									<span className="header_flag">us</span>
									English
								</div>
							</div>
							<div className="header_cel">
								<div className="header_link">USD</div>
								<div className="header_link">USD</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header_item header_item-signin">
					<div className="header_head">
						<button className="btn">
							<VscSignIn className="icon" />
						</button>
					</div>
				</div>
				<button className="btn header_toggle" onClick={toogleSidebarActive}>
					<BiMenuAltRight className="icon" />
				</button>
			</div>
		</header>
	);
};
