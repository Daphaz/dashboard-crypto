import React from "react";
import { Sorting } from "./Sorting";

export const Widgets = () => {
	return (
		<div className="widgets">
			<Sorting />
			<div className="widgets_list"></div>
			<div className="widgets_btns"></div>
		</div>
	);
};
