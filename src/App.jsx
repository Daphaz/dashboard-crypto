import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";

const App = () => {
	return (
		<Switch>
			<Route exact path="/home" component={Home} />
			<Redirect from="/" to="/home" />
		</Switch>
	);
};

export default App;
