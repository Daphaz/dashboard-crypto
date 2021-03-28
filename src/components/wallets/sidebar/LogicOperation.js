import { useState } from "react";
import { useDispatch } from "react-redux";
import { editBalance, deleteBalance } from "../../../redux/balances/action";
import { formValid } from "../../../helpers/validationForm";
import {
	editActivities,
	deleteActivities,
} from "../../../redux/activities/action";
import { dateFormated } from "../../../helpers/utils";

const initialState = {
	amount: "",
	isError: {
		amount: "",
	},
};

const LogicOperation = (handleClickClose, balance) => {
	const [state, setState] = useState(initialState);
	const dispatch = useDispatch();
	const inputFocus = (value) => {
		const el = document.getElementById(value);
		el.classList.add("active");
	};
	const removeActive = (value, e) => {
		const el = document.getElementById(value);
		if (e.target.value === "") {
			el.classList.remove("active");
		}
	};

	const removeItem = () => {
		const date = dateFormated(new Date());
		dispatch(deleteBalance(balance.id));
		handleClickClose();
		setState(initialState);
		dispatch(
			deleteActivities(date, balance.amount, balance.symbol.toUpperCase())
		);
	};

	//Validation Form
	const onSubmit = (e) => {
		e.preventDefault();

		if (formValid(state)) {
			const amount = parseFloat(state.amount);

			if (state.amount !== "") {
				const now = dateFormated(new Date());
				dispatch(editBalance(balance.id, amount));
				handleClickClose();
				setState(initialState);
				dispatch(editActivities(now, amount, balance.symbol.toUpperCase()));
			} else {
				setState({
					...state,
					isError: {
						...state.isError,
						amount: "Amount is required",
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
			case "amount":
				isError.amount =
					parseFloat(value) || parseInt(value) ? "" : "Amount must be a number";
				break;
			default:
				break;
		}
		setState({
			isError,
			[name]: value,
		});
	};
	return {
		inputFocus,
		removeActive,
		formValChange,
		onSubmit,
		state,
		removeItem,
	};
};

export default LogicOperation;
