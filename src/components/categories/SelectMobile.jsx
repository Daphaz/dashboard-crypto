import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { BiChevronUp } from "react-icons/bi";
import { activeCat } from "../../redux/categories/action";

export const SelectMobile = ({ categories, catActive }) => {
	const dispatch = useDispatch();
	const selectRef = useRef(null);
	const handleToggle = (id) => {
		const el = document.getElementById(id);
		el.classList.toggle("open");
	};

	const handleClick = (id) => {
		dispatch(activeCat(id));
		selectRef.current.classList.remove("open");
	};

	return (
		<>
			{categories.length > 0 && catActive && (
				<div id="cat-select" className="nice-select select" ref={selectRef}>
					<div className="icon-current">
						<BiChevronUp />
					</div>
					<span className="current" onClick={() => handleToggle("cat-select")}>
						{catActive[0].label}
					</span>
					<ul className="list">
						{categories.map((cat) => (
							<li
								className={
									cat.status === true ? "option selected focus" : "option"
								}
								key={cat.id}
								onClick={() => handleClick(cat.id)}>
								{cat.label}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};
