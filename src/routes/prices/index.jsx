import React from "react";
import { Layout } from "../../components/Layout";
import { Search } from "../../components/search";

const Prices = () => {
	return (
		<Layout>
			<div className="page_container">
				<Search />
				<div className="categories"></div>
				<div className="prices"></div>
			</div>
		</Layout>
	);
};

export default Prices;
