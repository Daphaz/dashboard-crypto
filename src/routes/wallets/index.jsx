import React from "react";
import { Layout } from "../../components/Layout";
import { TotalWallet } from "../../components/wallets/TotalWallet";
import { BalanceList } from "../../components/wallets/BalanceList";

const Wallets = () => {
	return (
		<Layout>
			<div className="wallets">
				<div className="wallets_container">
					<TotalWallet />
					<BalanceList />
				</div>
				<aside className="wallets_sidebar"></aside>
			</div>
		</Layout>
	);
};

export default Wallets;
