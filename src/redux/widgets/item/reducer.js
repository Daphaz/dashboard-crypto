import {
	LOAD_DATA_WIDGET,
	LOAD_DATA_WIDGET_ERROR,
	LOAD_DATA_WIDGET_SUCESS,
	SORT_AZ,
	SORT_LAST,
	SORT_MC,
	SORT_PRICE,
	SORT_VOL,
} from "./type";

const initialState = {
	isLoading: false,
	error: "",
	items: [],
};

const reducerWidget = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_WIDGET:
			return { ...state, isLoading: true };
		case LOAD_DATA_WIDGET_SUCESS:
			const filter = action.payload.sort(
				(a, b) => b.market_caps[0] - a.market_caps[0]
			);
			return { ...state, isLoading: false, items: filter, error: "" };
		case LOAD_DATA_WIDGET_ERROR:
			return { ...state, isLoading: false, items: [], error: action.payload };
		case SORT_AZ:
			const sortAz = state.items.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
			return { ...state, items: sortAz };
		case SORT_MC:
			const sortMc = state.items.sort(
				(a, b) => b.market_caps[0] - a.market_caps[0]
			);
			return { ...state, items: sortMc };
		case SORT_VOL:
			const sortVol = state.items.sort((a, b) => b.volumes[0] - a.volumes[0]);
			return { ...state, items: sortVol };
		case SORT_PRICE:
			const sortPrice = state.items.sort((a, b) => b.prices[0] - a.prices[0]);
			return { ...state, items: sortPrice };
		case SORT_LAST:
			const sortLast = state.items.sort((a, b) => b.percent - a.percent);
			return { ...state, items: sortLast };
		default:
			return state;
	}
};

export default reducerWidget;
