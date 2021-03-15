import { ADD_DEVISE, SET_ACTIVE_DEVISE } from "./type";
import { Devises } from "./state";

const reducerDevise = (state = Devises, action) => {
	switch (action.type) {
		case ADD_DEVISE:
			const { item } = action.payload;
			return {
				...state,
				item,
			};
		case SET_ACTIVE_DEVISE:
			const { id } = action.payload;
			const newState = state.map((s) =>
				s.id === id ? { ...s, active: true } : { ...s, active: false }
			);
			return newState;

		default:
			return state;
	}
};

export default reducerDevise;
