import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import Wallets from "./routes/wallets";
import { ThemeContext, WalletContext } from "./helpers/context";

const App = () => {
	const [isDark, setIsDark] = useState(false);
	const [showAddWallet, setShowAddWallet] = useState(false);
	return (
		<WalletContext.Provider value={{ showAddWallet, setShowAddWallet }}>
			<ThemeContext.Provider value={{ isDark, setIsDark }}>
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/wallets" component={Wallets} />
					<Redirect from="/" to="/home" />
				</Switch>
			</ThemeContext.Provider>
		</WalletContext.Provider>
	);
};

export default App;
