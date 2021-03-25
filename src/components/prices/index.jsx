import React, { useState } from "react";
import { SortPrices } from "./SortPrices";
import { TablePrices } from "./TablePrices";

export const PricesList = ({ coins }) => {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="prices">
			<div className="prices_head">
				<div className="prices_title h5">
					Today's
					<br />
					Cryptocurrency Prices
				</div>
				<SortPrices />
			</div>
			<div className="prices_container">
				<TablePrices showMore={toggle} coins={coins} />
			</div>
			<div className="prices_btns">
				{toggle && (
					<button
						className="btn prices_btn btn_blue"
						onClick={() => setToggle(!toggle)}>
						Load More
					</button>
				)}
			</div>
		</div>
	);
};
