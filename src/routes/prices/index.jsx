import React from "react";
import { Layout } from "../../components/Layout";
import { Search } from "../../components/search";
import { Categories } from "../../components/categories";
import { PricesList } from "../../components/prices";

const Prices = ({ coins }) => {
	return (
		<Layout>
			<div className="page_container">
				<Search />
				<Categories />
				<PricesList coins={coins.coins} />
			</div>
		</Layout>
	);
};

export default Prices;
