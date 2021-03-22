import { ADD_ACTIVITIES, DELETE_ACTIVITIES, EDIT_ACTIVITIES } from "./type";

const initialState = [
	{
		id: 0,
		type: "add",
		symbol: "ETH",
		amount: 1.24564,
		date: "March 21,2021",
	},
	{
		id: 1,
		type: "edit",
		symbol: "ETH",
		amount: 2.26532684,
		date: "March 21,2021",
	},
	{
		id: 2,
		type: "delete",
		symbol: "TRX",
		amount: 3252.124548,
		date: "March 21,2021",
	},
];

const reducerActivities = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ACTIVITIES: {
			const { date, amount, symbol } = action;
			const id = state[state.length - 1].id + 1;
			return [
				...state,
				{
					id,
					type: "add",
					symbol,
					amount,
					date,
				},
			];
		}
		case EDIT_ACTIVITIES: {
			const { date, amount, symbol } = action;
			const id = state[state.length - 1].id + 1;
			return [
				...state,
				{
					id,
					type: "edit",
					symbol,
					amount,
					date,
				},
			];
		}
		case DELETE_ACTIVITIES: {
			const { date, amount, symbol } = action;
			const id = state[state.length - 1].id + 1;
			return [
				...state,
				{
					id,
					type: "delete",
					symbol,
					amount,
					date,
				},
			];
		}

		default:
			return state;
	}
};

export default reducerActivities;
