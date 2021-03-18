import React from "react";
import { Layout } from "../../components/Layout";
import { TotalWallet } from "../../components/wallets/TotalWallet";
import { BalanceList } from "../../components/wallets/BalanceList";
import { WalletSidebar } from "../../components/wallets/sidebar";

const Wallets = () => {
	return (
		<Layout>
			<div className="wallets">
				<div className="wallets_container">
					<TotalWallet />
					<BalanceList />
				</div>
				<WalletSidebar />
			</div>
		</Layout>
	);
};

export default Wallets;
