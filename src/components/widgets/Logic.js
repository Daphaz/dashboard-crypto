const Logic = () => {
	const handleToggle = (id) => {
		const remove = id === "select-variant" ? "core-select" : "select-variant";
		const el = document.getElementById(id);
		const elRemove = document.getElementById(remove);
		elRemove.classList.remove("open");
		el.classList.toggle("open");
	};

	const handleRemove = () => {
		const core = document.getElementById("core-select");
		const variant = document.getElementById("select-variant");
		core.classList.remove("open");
		variant.classList.remove("open");
	};

	return {
		handleToggle,
		handleRemove,
	};
};

export default Logic;
