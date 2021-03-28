import React from "react";
import { BiSearch } from "react-icons/bi";

export const Search = () => {
	return (
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
	);
};
