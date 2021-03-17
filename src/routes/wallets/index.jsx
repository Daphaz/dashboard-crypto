import React from "react";
import { Layout } from "../../components/Layout";
import { TotalWallet } from "../../components/wallets/TotalWallet";

const Wallets = () => {
	return (
		<Layout>
			<div className="wallets">
				<div className="wallets_container">
					<TotalWallet />
					<div className="wallets balances"></div>
				</div>
				<aside className="wallets_sidebar"></aside>
			</div>
		</Layout>
	);
};

export default Wallets;
