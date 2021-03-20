import { useSelector } from "react-redux";

const ThemeState = () => {
	const isDark = useSelector((s) => s.theme.isDark);
	const bgColor = !isDark ? "#f4f4f4" : "#242731";
	const fgColor = !isDark ? "#e4e4e4" : "#191b20";

	return {
		bgColor,
		fgColor,
	};
};

export default ThemeState;
