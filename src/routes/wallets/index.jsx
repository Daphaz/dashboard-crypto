/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { TotalWallet } from "../../components/wallets/TotalWallet";
import { LoadingTotalWallet } from "../../components/wallets/LoadingTotalWallet";
import { BalanceList } from "../../components/wallets/BalanceList";
import { LoadingBalanceList } from "../../components/wallets/LoadingBalanceList";
import { WalletSidebar } from "../../components/wallets/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { filterCoins } from "../../redux/balances/action";

const Wallets = ({ location }) => {
	const dispatch = useDispatch();
	const balances = useSelector((s) => s.balances);
	const coins = useSelector((s) => s.coins);

	useEffect(() => {
		if (coins.coins.length > 0) {
			dispatch(filterCoins(coins.coins, balances.items));
		}
	}, [filterCoins, coins.coins]);

	return (
		<Layout>
			{balances && balances.items[0].name ? (
				<div className="wallets">
					<div className="wallets_container">
						<TotalWallet balances={balances.items} location={location} />
						<BalanceList balances={balances.items} />
					</div>
					<WalletSidebar balances={balances.items} />
				</div>
			) : (
				<div className="wallets">
					<div className="wallets_container">
						<LoadingTotalWallet />
						<LoadingBalanceList />
					</div>
				</div>
			)}
		</Layout>
	);
};

export default Wallets;
