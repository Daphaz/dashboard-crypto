import React, { useEffect } from "react";
import { Sorting } from "./Sorting";
import { Item } from "./items";
import { connect } from "react-redux";
import { apiCall } from "../../redux/widgets/item/action";

const Widgets = ({ items, apiCall }) => {
	console.log(items);

	useEffect(() => {
		apiCall();
	}, [apiCall]);

	return (
		<div className="widgets">
			<Sorting />
			<div className="widgets_list">
				{!items.isLoading && items.error === ""
					? items.items.map((c) => {
							return <Item coin={c} key={c.id} />;
					  })
					: null}
			</div>
			<div className="widgets_btns"></div>
		</div>
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
