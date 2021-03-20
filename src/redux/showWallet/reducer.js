import { DISABLE_ADD_WALLET, ENABLE_ADD_WALLET } from "./type";

const initalState = { addWallet: false };

const reducerAddWallet = (state = initalState, action) => {
	switch (action.type) {
		case ENABLE_ADD_WALLET:
			return { addWallet: true };
		case DISABLE_ADD_WALLET:
			return { addWallet: false };

		default:
			return state;
	}
};

export default reducerAddWallet;
