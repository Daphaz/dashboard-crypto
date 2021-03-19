import {
	LOAD_BALANCES,
	LOAD_BALANCES_SUCESS,
	ACTIVE_BALANCE,
	ACTIVE_BALANCE_WIDGET,
	ADD_BALANCE,
} from "./type";

const initalState = {
	isLoading: false,
	items: [
		{
			id: "bitcoin",
			amount: 0.026359841,
		},
		{
			id: "ethereum",
			amount: 2.26532684,
		},
	],
};

const reducerBalance = (state = initalState, action) => {
	switch (action.type) {
		case ADD_BALANCE:
			return {
				...state,
				items: [...state.items, action.item],
			};
		case LOAD_BALANCES:
			return {
				...state,
				isLoading: true,
			};
		case LOAD_BALANCES_SUCESS:
			return {
				isLoading: false,
				items: action.items,
			};
		case ACTIVE_BALANCE: {
			const { id } = action;
			const newItems = state.items.map((s) =>
				s.id === id ? { ...s, active: true } : { ...s, active: false }
			);
			return {
				...state,
				items: newItems,
			};
		}
		case ACTIVE_BALANCE_WIDGET:
			const { id, label } = action;
			const newItems = state.items.map((it) => {
				if (it.id === id) {
					return {
						...it,
						percent1h: {
							...it.percent1h,
							active: label === "percent1h" ? true : false,
						},
						percent24h: {
							...it.percent24h,
							active: label === "percent24h" ? true : false,
						},
						percent7d: {
							...it.percent7d,
							active: label === "percent7d" ? true : false,
						},
						percent14d: {
							...it.percent14d,
							active: label === "percent14d" ? true : false,
						},
					};
				} else {
					return it;
				}
			});
			return {
				...state,
				items: newItems,
			};
		default:
			return state;
	}
};

export default reducerBalance;
