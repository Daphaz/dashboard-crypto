import { ACTIVE_CAT } from "./type";

const initalState = [
	{
		id: 0,
		label: "Top 100",
		status: true,
	},
	{
		id: 1,
		label: "Stable Coins",
		status: false,
	},
	{
		id: 2,
		label: "Top Gainers",
		status: false,
	},
	{
		id: 3,
		label: "Top Loosers",
		status: false,
	},
	{
		id: 4,
		label: "Top 24H",
		status: false,
	},
	{
		id: 5,
		label: "Top 1H",
		status: false,
	},
];

const reducerCategories = (state = initalState, action) => {
	switch (action.type) {
		case ACTIVE_CAT:
			return state.map((s) =>
				s.id === action.id ? { ...s, status: true } : { ...s, status: false }
			);

		default:
			return state;
	}
};

export default reducerCategories;
