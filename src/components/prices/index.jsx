import React, { useState } from "react";
import { SortPrices } from "./SortPrices";
import { TablePrices } from "./TablePrices";

export const PricesList = ({ coins }) => {
	const [toggle, setToggle] = useState(true);
	const displayCoin = coins.filter((f) => f.display === "table-row");
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
				<TablePrices
					showMore={toggle}
					coins={coins}
					displayCoin={displayCoin}
				/>
			</div>
			<div className="prices_btns">
				{toggle && displayCoin.length > 1 && (
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
