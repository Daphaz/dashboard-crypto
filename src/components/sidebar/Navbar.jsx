import React from "react";
import { NavLink } from "react-router-dom";
import Logic from "./Logic";

export const Navbar = () => {
	const { navItems } = Logic();
	return (
		<nav className="sidebar_nav">
			{navItems.length > 0 &&
				navItems.map((item) => {
					const { id, Icon, label, path } = item;
					return (
						<NavLink to={path} className="sidebar_item" key={id}>
							<div className="sidebar_icon">
								<Icon className="icon" />
							</div>
							<div className="sidebar_text">{label}</div>
						</NavLink>
					);
				})}
		</nav>
	);
};
