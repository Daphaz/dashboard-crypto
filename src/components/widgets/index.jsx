import React, { useEffect } from "react";
import { Sorting } from "./Sorting";
import { Item } from "./items";
import { connect } from "react-redux";
import { apiCall } from "../../redux/widgets/item/action";
import { ItemLoading } from "./items/ItemLoading";
import { SortLoading } from "./SortLoading";

const Widgets = ({ items, apiCall }) => {
	useEffect(() => {
		apiCall();
	}, [apiCall]);

	return (
		<>
			{!items.isLoading && items.error === "" ? (
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

const mapState = (state) => {
	return {
		items: state.itemWidget,
	};
};

const mapDispatch = (dispatch) => {
	return {
		apiCall: () => dispatch(apiCall()),
	};
};

export default connect(mapState, mapDispatch)(Widgets);
