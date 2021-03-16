import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import { ThemeContext } from "./helpers/context";

const App = () => {
	const [isDark, setIsDark] = useState(false);
	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Redirect from="/" to="/home" />
			</Switch>
		</ThemeContext.Provider>
	);
};

export default App;
