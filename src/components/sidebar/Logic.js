import { useState } from "react";

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
		side.classList.toggle("active");
	};

	return {
		toggle,
		toggleDarkTheme,
		closeSidebar,
		handleActiveSidebar,
	};
};

export default Logic;
