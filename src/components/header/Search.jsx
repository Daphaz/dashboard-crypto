import React from "react";
import { BiSearch } from "react-icons/bi";

export const Search = () => {
	return (
		<form className="header_search">
			<input
				className="header_input"
				type="text"
				name="search"
				placeholder="Search"
			/>
			<button type="submit" className="btn" aria-label="search submit">
				<BiSearch className="icon" />
			</button>
		</form>
	);
};
