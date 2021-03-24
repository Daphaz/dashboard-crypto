import { ACTIVE_CAT } from "./type";

export const activeCat = (id) => {
	return {
		type: ACTIVE_CAT,
		id,
	};
};
