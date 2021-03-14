import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }) => {
	return (
		<div className="page">
			<Sidebar />
			<div className="page_content">
				<Header />
				<div className="page_row">{children}</div>
			</div>
		</div>
	);
};
