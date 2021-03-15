import { ADD_DEVISE, SET_ACTIVE_DEVISE } from "./type";

export const addDevise = (item) => {
	return {
		type: ADD_DEVISE,
		payload: { item },
	};
};

export const setActiveDevise = (id) => {
	return {
		type: SET_ACTIVE_DEVISE,
		payload: { id },
	};
};
