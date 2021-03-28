import React from "react";
import { Layout } from "../../components/Layout";
import { Slider } from "../../components/slider";
import { Widgets } from "../../components/widgets";
import { CardWidget } from "../../components/card/CardWidget";
import { Activities } from "../../components/activities";

const Home = ({ items, history }) => {
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
							<CardWidget history={history} />
							<Activities items={items} />
						</div>
					</div>
				</Layout>
			)}
		</>
	);
};

export default Home;
