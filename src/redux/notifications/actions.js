import { ADD_NOTIF } from "./type";

export const addNotif = (item) => {
	return {
		type: ADD_NOTIF,
		payload: { item },
	};
};
