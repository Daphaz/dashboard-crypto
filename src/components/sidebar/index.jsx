import React from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Navbar } from "./Navbar";
import { Search } from "./Search";
import { SwitchTheme } from "./SwitchTheme";
import { SignIn } from "./SignIn";
import Logic from "./Logic";

export const Sidebar = () => {
	const { handleActiveSidebar, closeSidebar } = Logic();

	return (
		<aside className="sidebar">
			<div className="sidebar_head">
				<div className="sidebar_logo">
					<img
						src="/assets/logo.png"
						alt="logo krypto"
						className="sidebar_logo_light"
					/>
					<img
						src="/assets/logo-dark.png"
						alt="logo krypto"
						className="sidebar_logo_dark"
					/>
				</div>
				<button className="btn sidebar_toggle" onClick={handleActiveSidebar}>
					<BiMenuAltRight className="icon icon_right" />
					<BiMenuAltLeft className="icon icon_left" />
				</button>
				<button className="btn sidebar_close" onClick={closeSidebar}>
					<AiOutlineClose className="icon icon_close" />
				</button>
			</div>
			<div className="sidebar_body">
				<Navbar />
				<Search />
			</div>
			<div className="sidebar_bottom">
				<SwitchTheme />
				<SignIn />
			</div>
		</aside>
	);
};
