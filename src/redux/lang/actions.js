import { ADD_LANG, SET_ACTIVE_LANG } from "./type";

export const addLang = (item) => {
	return {
		type: ADD_LANG,
		payload: { item },
	};
};

export const setActiveLang = (id) => {
	return {
		type: SET_ACTIVE_LANG,
		payload: { id },
	};
};
