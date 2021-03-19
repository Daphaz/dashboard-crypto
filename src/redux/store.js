import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerNotifications from "./notifications/reducerNotifications";
import reducerLangs from "./lang/reducerLang";
import reducerDevises from "./devises/reducerDevise";
import reducerNav from "./navigations/reducerNav";
import {
	reducerCore,
	reducerVariant,
	reducerMarket,
} from "./widgets/sort/reducer";
import reducerWidget from "./widgets/item/reducer";
import reducerCoins from "./coins/reducer";
import reducerBalance from "./balances/reducer";

const store = createStore(
	combineReducers({
		notifications: reducerNotifications,
		langs: reducerLangs,
		devises: reducerDevises,
		navItems: reducerNav,
		sortCore: reducerCore,
		sortVariant: reducerVariant,
		sortMarket: reducerMarket,
		itemWidget: reducerWidget,
		coins: reducerCoins,
		balances: reducerBalance,
	}),
	applyMiddleware(thunk)
);

export default store;
