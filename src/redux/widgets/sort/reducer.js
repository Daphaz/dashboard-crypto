import { CORE_ACTIVE, VARIANT_ACTIVE, MARKET_ACTIVE } from "./type";
import { sortCoreState, sortVariantState, sortMarketSidebar } from "./state";

export const reducerCore = (state = sortCoreState, action) => {
	switch (action.type) {
		case CORE_ACTIVE:
			const { id } = action.payload;
			const newState = state.map((s) =>
				s.id === id ? { ...s, active: true } : { ...s, active: false }
			);
			return newState;

		default:
			return state;
	}
};

export const reducerVariant = (state = sortVariantState, action) => {
	switch (action.type) {
		case VARIANT_ACTIVE:
			const { id } = action.payload;
			const newState = state.map((s) =>
				s.id === id ? { ...s, active: true } : { ...s, active: false }
			);
			return newState;

		default:
			return state;
	}
};

export const reducerMarket = (state = sortMarketSidebar, action) => {
	switch (action.type) {
		case MARKET_ACTIVE:
			const { id } = action.payload;
			const newState = state.map((s) =>
				s.id === id ? { ...s, active: true } : { ...s, active: false }
			);
			return newState;

		default:
			return state;
	}
};
