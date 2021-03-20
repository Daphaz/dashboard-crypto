import React from "react";
import { Layout } from "../../components/Layout";
import { Slider } from "../../components/slider";
import { Widgets } from "../../components/widgets";
import { CardWidget } from "../../components/card/CardWidget";

const Home = ({ items }) => {
	return (
		<>
			{items && (
				<Layout border>
					<div className="page_row">
						<div className="page_col">
							<Slider />
							<Widgets items={items} />
						</div>
						<div className="page_col">
							<CardWidget />
						</div>
					</div>
				</Layout>
			)}
		</>
	);
};

export default Home;
