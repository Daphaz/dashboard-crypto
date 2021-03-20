import { DISABLE_ADD_WALLET, ENABLE_ADD_WALLET } from "./type";

export const enableAddWallet = () => {
	return {
		type: ENABLE_ADD_WALLET,
	};
};

export const disableAddWallet = () => {
	return {
		type: DISABLE_ADD_WALLET,
	};
};
