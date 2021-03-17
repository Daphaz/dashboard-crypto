import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import Wallets from "./routes/wallets";
import { ThemeContext } from "./helpers/context";

const App = () => {
	const [isDark, setIsDark] = useState(false);
	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/wallets" component={Wallets} />
				<Redirect from="/" to="/home" />
			</Switch>
		</ThemeContext.Provider>
	);
};

export default App;
