/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import Wallets from "./routes/wallets";
import { apiCallCoins } from "./redux/coins/action";
import { apiCall } from "./redux/widgets/item/action";
import { connect } from "react-redux";

const App = ({ apiCall, apiCallCoins, items }) => {
	useEffect(() => {
		apiCall();
		apiCallCoins();
	}, [apiCallCoins, apiCall]);

	return (
		<Switch>
			<Route
				exact
				path="/home"
				component={(props) => <Home items={items} {...props} />}
			/>
			<Route
				exact
				path="/wallets"
				component={(props) => <Wallets {...props} />}
			/>
			<Redirect from="/" to="/home" />
		</Switch>
	);
};

const mapState = (state) => {
	return {
		coins: state.coins,
		items: state.itemWidget,
	};
};

const mapDispatch = (dispatch) => {
	return {
		apiCallCoins: () => dispatch(apiCallCoins()),
		apiCall: () => dispatch(apiCall()),
	};
};

export default connect(mapState, mapDispatch)(App);
