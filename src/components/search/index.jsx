import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { formValid } from "../../helpers/validationForm";
import { useSelector, useDispatch } from "react-redux";
import { searchCoin } from "../../redux/coins/action";

const initialState = {
	text: "",
	isError: {
		text: "",
	},
};

export const Search = () => {
	const [state, setState] = useState(initialState);
	const dispatch = useDispatch();
	const coins = useSelector((s) => s.coins.coins);

	const onSubmit = (e) => {
		e.preventDefault();

		if (formValid(state)) {
			const text = state.text.toLowerCase();

			if (state.text !== "") {
				let result = false;
				coins.forEach((coin) => {
					if (coin.name.toLowerCase() === text) {
						result = true;
					}
					if (coin.symbol === text) {
						result = true;
					}
				});
				if (result) {
					dispatch(searchCoin(text));
				} else {
					setState({
						...state,
						isError: {
							text: `No result for ${state.text}`,
						},
					});
				}
			} else {
				setState({
					...state,
					isError: {
						...state.isError,
						text: "field is required",
					},
				});
			}
		} else {
			console.log("Form is invalid!");
		}
	};

	const formValChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		let isError = { ...state.isError };

		switch (name) {
			case "text":
				isError.text =
					parseFloat(value) || parseInt(value)
						? "Choose a token name or symbol"
						: "";
				break;
			default:
				break;
		}
		setState({
			isError,
			[name]: value,
		});
	};

	return (
		<div className="search">
			<div className="search_container">
				<div className="search_warp">
					<div className="search_title h4">Search by token name, or symbol</div>
					<div className="search_info">
						Lorem ipsum dolor, sit amet consectetur adipisicing
					</div>
				</div>
				<form className="search_form" onSubmit={onSubmit}>
					<input
						className="search_input"
						type="text"
						placeholder="Search"
						name="text"
						onChange={formValChange}
					/>
					<button type="submit" className="btn search_btn">
						<BiSearch className="icon" />
					</button>
					<div className="field_errors">
						{state.isError.text.length > 0 && (
							<span className="invalid-feedback">{state.isError.text}</span>
						)}
					</div>
				</form>
				<div className="search_preview">
					<img src="/assets/search.png" alt="banner search prices" />
				</div>
			</div>
		</div>
	);
};
