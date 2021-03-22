import { ADD_ACTIVITIES, DELETE_ACTIVITIES, EDIT_ACTIVITIES } from "./type";

export const addActivities = (date, amount, symbol) => {
	return {
		type: ADD_ACTIVITIES,
		date,
		amount,
		symbol,
	};
};

export const deleteActivities = (date, amount, symbol) => {
	return {
		type: DELETE_ACTIVITIES,
		date,
		amount,
		symbol,
	};
};

export const editActivities = (date, amount, symbol) => {
	return {
		type: EDIT_ACTIVITIES,
		date,
		amount,
		symbol,
	};
};
