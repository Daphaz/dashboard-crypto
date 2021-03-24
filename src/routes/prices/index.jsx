import React from "react";
import { Layout } from "../../components/Layout";
import { Search } from "../../components/search";
import { Categories } from "../../components/categories";
import { PricesList } from "../../components/prices";
import { LoadingSearch } from "../../components/search/LoadingSearch";
import { LoadingCategories } from "../../components/categories/LoadingCategories";
import { LoadingPriceList } from "../../components/prices/LoadingPriceList";

const Prices = ({ coins }) => {
	return (
		<Layout>
			<div className="page_container">
				{coins.coins.length > 0 ? (
					<>
						<Search />
						<Categories />
						<PricesList coins={coins.coins} />
					</>
				) : (
					<>
						<LoadingSearch />
						<LoadingCategories />
						<LoadingPriceList />
					</>
				)}
			</div>
		</Layout>
	);
};

export default Prices;
