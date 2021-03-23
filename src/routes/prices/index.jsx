import React from "react";
import { Layout } from "../../components/Layout";
import { Search } from "../../components/search";
import { Categories } from "../../components/categories";

const Prices = ({ coins }) => {
	console.log(coins);
	return (
		<Layout>
			<div className="page_container">
				<Search />
				<Categories />
				<div className="prices"></div>
			</div>
		</Layout>
	);
};

export default Prices;
