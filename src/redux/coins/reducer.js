import {
	LOAD_DATA_COINS,
	LOAD_DATA_COINS_ERROR,
	LOAD_DATA_COINS_SUCESS,
	SORT_COIN_AZ,
	SORT_COIN_24,
	SORT_COIN_MC,
	SORT_COIN_PRICE,
	SORT_COIN_VOL,
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

		default:
			return state;
	}
};

export default reducerCoins;
