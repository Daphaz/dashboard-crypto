import { Notifications } from "./state";
import { ADD_NOTIF } from "./type";

const reducerNotifications = (state = Notifications, action) => {
	switch (action.type) {
		case ADD_NOTIF:
			const { item } = action.payload;
			return {
				...state,
				item,
			};

		default:
			return state;
	}
};

export default reducerNotifications;
