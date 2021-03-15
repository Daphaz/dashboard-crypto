import { ADD_NAV_ITEM } from "./type";
import { Navigations } from "./state";

const reducerNav = (state = Navigations, action) => {
	switch (action.type) {
		case ADD_NAV_ITEM:
			const { item } = action.payload;
			return {
				...state,
				item,
			};

		default:
			return state;
	}
};

export default reducerNav;
