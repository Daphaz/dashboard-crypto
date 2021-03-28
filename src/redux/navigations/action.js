import { ADD_NAV_ITEM } from "./type";

export const addNavItem = (item) => {
	return {
		type: ADD_NAV_ITEM,
		payload: { item },
	};
};
