import { ADD_LANG, SET_ACTIVE_LANG } from "./type";
import { Langs } from "./state";

const reducerLang = (state = Langs, action) => {
	switch (action.type) {
		case ADD_LANG:
			const { item } = action.payload;
			return {
				...state,
				item,
			};
		case SET_ACTIVE_LANG:
			const { id } = action.payload;
			const newState = state.map((s) =>
				s.id === id ? { ...s, active: true } : { ...s, active: false }
			);
			return newState;

		default:
			return state;
	}
};

export default reducerLang;
