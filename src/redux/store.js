import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerNotifications from "./notifications/reducerNotifications";
import reducerLangs from "./lang/reducerLang";
import reducerDevises from "./devises/reducerDevise";
import reducerNav from "./navigations/reducerNav";

const store = createStore(
	combineReducers({
		notifications: reducerNotifications,
		langs: reducerLangs,
		devises: reducerDevises,
		navItems: reducerNav,
	}),
	applyMiddleware(thunk)
);

export default store;
