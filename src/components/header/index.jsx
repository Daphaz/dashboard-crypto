import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscSignIn } from "react-icons/vsc";
import { Search } from "./Search";
import { Notifications } from "./Notifications";
import { Downloads } from "./Downloads";
import { Langs } from "./Langs";
import Logic from "./Logic";

export const Header = ({ border }) => {
	const { toogleSidebarActive } = Logic();

	return (
		<header className={border ? "header header_border" : "header"}>
			<div className="header_logo">
				<img
					src="/assets/logo_mobile.png"
					alt="logo mobile light"
					className="header_logo_light"
				/>
				<img
					src="/assets/logo_mobile-dark.png"
					alt="logo mobile light"
					className="header_logo_dark"
				/>
			</div>
			<Search />
			<div className="header_group">
				<Notifications />
				<Downloads />
				<Langs />
				<div className="header_item header_item-signin">
					<div className="header_head">
						<button className="btn" aria-label="user connexion">
							<VscSignIn className="icon" />
						</button>
					</div>
				</div>
				<button
					className="btn header_toggle"
					onClick={toogleSidebarActive}
					aria-label="menu">
					<BiMenuAltRight className="icon" />
				</button>
			</div>
		</header>
	);
};
