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
			const add = {
				id: state[state.length - 1].id + 1,
				type: "add",
				symbol,
				amount,
				date,
			};
			return {
				...state,
				add,
			};
		}
		case EDIT_ACTIVITIES: {
			const { date, amount, symbol } = action;
			const edit = {
				id: state[state.length - 1].id + 1,
				type: "edit",
				symbol,
				amount,
				date,
			};
			return {
				...state,
				edit,
			};
		}
		case DELETE_ACTIVITIES: {
			const { date, amount, symbol } = action;
			const del = {
				id: state[state.length - 1].id + 1,
				type: "delete",
				symbol,
				amount,
				date,
			};
			return {
				...state,
				del,
			};
		}

		default:
			return state;
	}
};

export default reducerActivities;
