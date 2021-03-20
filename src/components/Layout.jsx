import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const Layout = ({ children, border }) => {
	return (
		<div className="page">
			<Sidebar />
			<div className="page_content">
				<Header border={border} />
				{children}
			</div>
		</div>
	);
};
