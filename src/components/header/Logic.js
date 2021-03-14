const Logic = () => {
	const toggleActive = (c) => {
		const els = document.querySelectorAll(".header_item");
		els.forEach((e) => {
			if (e.classList.contains(c) && !e.classList.contains("active")) {
				e.classList.add("active");
			} else {
				e.classList.remove("active");
			}
		});
	};

	const toogleSidebarActive = () => {
		const side = document.querySelector(".sidebar");
		side.classList.toggle("active");
		document.body.classList.toggle("no-scroll");
		document.querySelector("html").classList.toggle("no-scroll");
		document.querySelector(".page").classList.toggle("toggle");
		document.querySelector(".header_logo").classList.toggle("hidden");
	};

	return {
		toggleActive,
		toogleSidebarActive,
	};
};

export default Logic;
