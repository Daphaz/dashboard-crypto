import { useState } from "react";
import { useSelector } from "react-redux";

const Logic = () => {
	const [toggle, setToggle] = useState(false);

	const toggleDarkTheme = () => {
		if (!toggle) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		setToggle(!toggle);
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
