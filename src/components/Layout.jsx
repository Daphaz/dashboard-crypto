import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }) => {
	return (
		<div className="page">
			<Sidebar />
			<div className="page_content">
				<Header />
				{children}
			</div>
		</div>
	);
};
