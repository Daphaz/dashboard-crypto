import React from "react";
import { Layout } from "../../components/Layout";
import { Slider } from "../../components/slider";

const Home = () => {
	return (
		<Layout>
			<div className="page_col">
				<Slider />
			</div>
			<div className="page_col">
				<h1>Home 2</h1>
			</div>
		</Layout>
	);
};

export default Home;
