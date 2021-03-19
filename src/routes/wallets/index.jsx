/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import TotalWallet from "../../components/wallets/TotalWallet";
import { LoadingTotalWallet } from "../../components/wallets/LoadingTotalWallet";
import { BalanceList } from "../../components/wallets/BalanceList";
import { LoadingBalanceList } from "../../components/wallets/LoadingBalanceList";
import { WalletSidebar } from "../../components/wallets/sidebar";
import { apiCallCoins } from "../../redux/coins/action";
import { filterCoins } from "../../redux/balances/action";
import { connect } from "react-redux";

const Wallets = ({ apiCallCoins, coins, balances, filterCoins }) => {
	useEffect(() => {
		apiCallCoins();
		if (coins.coins.length > 0) {
			filterCoins(coins.coins, balances.items);
		}
	}, [apiCallCoins, filterCoins, coins.coins]);

	return (
		<Layout>
			{!balances.isLoading && balances.items[0].name ? (
				<div className="wallets">
					<div className="wallets_container">
						<TotalWallet balances={balances.items} />
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

const mapState = (state) => {
	return {
		coins: state.coins,
		balances: state.balances,
	};
};

const mapDispatch = (dispatch) => {
	return {
		apiCallCoins: () => dispatch(apiCallCoins()),
		filterCoins: (coins, balances) => dispatch(filterCoins(coins, balances)),
	};
};

export default connect(mapState, mapDispatch)(Wallets);
