import React from "react";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";

const Home = () => {
	return (
		<div className="page">
			<Sidebar />
			<div className="page_content">
				<Header />
			</div>
		</div>
	);
};

export default Home;
