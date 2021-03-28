import React from "react";
import { Sorting } from "./Sorting";
import { Item } from "./items";
import { ItemLoading } from "./items/ItemLoading";
import { SortLoading } from "./SortLoading";

export const Widgets = ({ items }) => {
	return (
		<>
			{items.items.length > 0 ? (
				<div className="widgets">
					<Sorting />
					<div className="widgets_list">
						{items.items.map((c) => {
							return <Item coin={c} key={c.id} />;
						})}
					</div>
					<div className="widgets_btns">
						<button className="btn widgets_btn btn_blue">
							Discover more assets
						</button>
					</div>
				</div>
			) : (
				<div className="widgets">
					<SortLoading />
					<div className="widgets_list">
						<ItemLoading />
						<ItemLoading />
					</div>
				</div>
			)}
		</>
	);
};
