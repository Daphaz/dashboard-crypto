import {
	LOAD_DATA_COINS,
	LOAD_DATA_COINS_ERROR,
	LOAD_DATA_COINS_SUCESS,
	SORT_COIN_AZ,
	SORT_COIN_24,
	SORT_COIN_MC,
	SORT_COIN_PRICE,
	SORT_COIN_VOL,
	SORT_COIN_GAINERS,
	SORT_COIN_LOSERS,
	SORT_COIN_TOP100,
	SORT_COIN_TOP1H,
	SORT_COIN_TOP24H,
	SORT_COIN_STABLE,
	SEARCH_COIN,
} from "./type";

const initialState = {
	isLoading: false,
	error: "",
	coins: [],
};

const reducerCoins = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_COINS:
			return { ...state, isLoading: true };
		case LOAD_DATA_COINS_SUCESS:
			return { ...state, isLoading: false, coins: action.payload, error: "" };
		case LOAD_DATA_COINS_ERROR:
			return { ...state, isLoading: false, coins: [], error: action.payload };
		case SORT_COIN_AZ:
			const sortAz = state.coins.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
			return {
				...state,
				coins: sortAz,
			};
		case SORT_COIN_24:
			const sortLast = state.coins.sort(
				(a, b) => b.percent24h.value - a.percent24h.value
			);
			return { ...state, coins: sortLast };
		case SORT_COIN_MC:
			const sortMc = state.coins.sort(
				(a, b) => b.market_caps[0] - a.market_caps[0]
			);
			return { ...state, coins: sortMc };
		case SORT_COIN_PRICE:
			const sortPrice = state.coins.sort((a, b) => b.prices[0] - a.prices[0]);
			return { ...state, coins: sortPrice };
		case SORT_COIN_VOL:
			const sortVol = state.coins.sort(
				(a, b) => b.total_volumes[0] - a.total_volumes[0]
			);
			return { ...state, coins: sortVol };
		case SORT_COIN_GAINERS:
			const sortGainers = state.coins.map((s) =>
				s.percent24h.status === "positive"
					? { ...s, display: "table-row" }
					: { ...s, display: "none" }
			);
			return { ...state, coins: sortGainers };
		case SORT_COIN_LOSERS:
			const sortLosers = state.coins.map((s) =>
				s.percent24h.status === "negative"
					? { ...s, display: "table-row" }
					: { ...s, display: "none" }
			);
			return { ...state, coins: sortLosers };
		case SORT_COIN_TOP100:
			const sortTop = state.coins.map((s) => ({ ...s, display: "table-row" }));
			return { ...state, coins: sortTop };
		case SORT_COIN_TOP1H:
			const sortLast1h = state.coins.sort(
				(a, b) => b.percent1h.value - a.percent1h.value
			);
			const sortTop1h = sortLast1h.map((s) =>
				s.percent1h.status === "positive"
					? { ...s, display: "table-row" }
					: { ...s, display: "none" }
			);
			return { ...state, coins: sortTop1h };
		case SORT_COIN_TOP24H:
			const sortLast24h = state.coins.sort(
				(a, b) => b.percent24h.value - a.percent24h.value
			);
			const sortTop24h = sortLast24h.map((s) =>
				s.percent24h.status === "positive"
					? { ...s, display: "table-row" }
					: { ...s, display: "none" }
			);
			return { ...state, coins: sortTop24h };
		case SORT_COIN_STABLE:
			const sortStable = state.coins.map((st) => {
				switch (st.id) {
					case "tether":
						return { ...st, display: "table-row" };
					case "usd-coin":
						return { ...st, display: "table-row" };
					case "binance-usd":
						return { ...st, display: "table-row" };
					case "dai":
						return { ...st, display: "table-row" };
					case "terrausd":
						return { ...st, display: "table-row" };
					case "paxos-standard":
						return { ...st, display: "table-row" };
					default:
						return { ...st, display: "none" };
				}
			});
			return { ...state, coins: sortStable };
		case SEARCH_COIN:
			const searchCoin = state.coins.map((s) => {
				if (s.name.toLowerCase() === action.text) {
					return { ...s, display: "table-row" };
				}
				if (s.symbol === action.text) {
					return { ...s, display: "table-row" };
				} else {
					return { ...s, display: "none" };
				}
			});
			return { ...state, coins: searchCoin };

		default:
			return state;
	}
};

export default reducerCoins;
