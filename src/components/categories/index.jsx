import React from "react";
import { useSelector } from "react-redux";
import { SelectMobile } from "./SelectMobile";
import { SliderCat } from "./SliderCat";

export const Categories = () => {
	const categories = useSelector((s) => s.categories);
	const catActive = categories.filter((f) => f.status === true);

	return (
		<div className="categories">
			<div className="categories_title h5 mobile-hide">Categories</div>
			<div className="categories_select mobile-show">
				<SelectMobile categories={categories} catActive={catActive} />
			</div>
			<div className="categories_container">
				<SliderCat categories={categories} />
			</div>
		</div>
	);
};
