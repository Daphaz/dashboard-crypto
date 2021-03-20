import { THEME_DARK, THEME_LIGHT } from "./type";

const initalState = {
	isDark: false,
};

const reducerTheme = (state = initalState, action) => {
	switch (action.type) {
		case THEME_DARK:
			return { isDark: true };
		case THEME_LIGHT:
			return { isDark: false };
		default:
			return state;
	}
};

export default reducerTheme;
