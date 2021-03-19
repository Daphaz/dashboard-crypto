import {
	LOAD_DATA_COINS,
	LOAD_DATA_COINS_ERROR,
	LOAD_DATA_COINS_SUCESS,
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

		default:
			return state;
	}
};

export default reducerCoins;
