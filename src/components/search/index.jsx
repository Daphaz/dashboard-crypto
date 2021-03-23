import React from "react";
import { BiSearch } from "react-icons/bi";

export const Search = () => {
	return (
		<div className="search">
			<div className="search_container">
				<div className="search_warp">
					<div className="search_title h4">Search by token name, or symbol</div>
					<div className="search_info">
						Lorem ipsum dolor, sit amet consectetur adipisicing
					</div>
				</div>
				<div className="search_form">
					<input className="search_input" type="text" placeholder="Search" />
					<button type="submit" className="btn search_btn">
						<BiSearch className="icon" />
					</button>
				</div>
				<div className="search_preview">
					<img src="/assets/figures-2.png" alt="banner search prices" />
				</div>
			</div>
		</div>
	);
};
