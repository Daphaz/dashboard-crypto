import { useContext } from "react";
import { ThemeContext } from "./context";

const ThemeState = () => {
	const { isDark } = useContext(ThemeContext);
	const bgColor = !isDark ? "#f4f4f4" : "#242731";
	const fgColor = !isDark ? "#e4e4e4" : "#191b20";

	return {
		bgColor,
		fgColor,
	};
};

export default ThemeState;
