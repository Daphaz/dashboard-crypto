import React from "react";
import { Layout } from "../../components/Layout";
import { Slider } from "../../components/slider";
import Widgets from "../../components/widgets";

const Home = () => {
	return (
		<Layout>
			<div className="page_row">
				<div className="page_col">
					<Slider />
					<Widgets />
				</div>
				<div className="page_col">
					<h1>Home 2</h1>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
