import { useSelector, useDispatch } from "react-redux";
import { themeDark, themeLight } from "../../redux/theme/action";

const Logic = () => {
	const dispatch = useDispatch();
	const toggle = useSelector((s) => s.theme.isDark);

	const toggleDarkTheme = () => {
		if (!toggle) {
			document.body.classList.add("dark");
			dispatch(themeDark());
		} else {
			document.body.classList.remove("dark");
			dispatch(themeLight());
		}
	};

	const closeSidebar = () => {
		const side = document.querySelector(".sidebar");
		side.classList.remove("active");
		document.body.classList.remove("no-scroll");
		document.querySelector("html").classList.remove("no-scroll");
		document.querySelector(".page").classList.remove("toggle");
		document.querySelector(".header_logo").classList.remove("hidden");
	};

	const handleActiveSidebar = () => {
		const side = document.querySelector(".sidebar");
		const page = document.querySelector(".page");
		console.log(page);
		side.classList.toggle("active");
		page.classList.toggle("wide");
	};

	//Navbar
	const navItems = useSelector((state) => state.navItems);

	return {
		toggle,
		toggleDarkTheme,
		closeSidebar,
		handleActiveSidebar,
		navItems,
	};
};

export default Logic;
