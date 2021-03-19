import {
	ADD_BALANCE,
	LOAD_BALANCES,
	LOAD_BALANCES_SUCESS,
	ACTIVE_BALANCE,
	ACTIVE_BALANCE_WIDGET,
} from "./type";

export const addBalance = (item) => {
	return {
		type: ADD_BALANCE,
		item,
	};
};

export const activeBalance = (id) => {
	return {
		type: ACTIVE_BALANCE,
		id,
	};
};

export const activeBalanceWidget = (id, label) => {
	return {
		type: ACTIVE_BALANCE_WIDGET,
		id,
		label,
	};
};

const loadBalances = () => {
	return {
		type: LOAD_BALANCES,
	};
};

const loadBalancesSucess = (items) => {
	return {
		type: LOAD_BALANCES_SUCESS,
		items,
	};
};

export const filterCoins = (coins, balances) => {
	return async (dispatch) => {
		await dispatch(loadBalances());
		const items = [];
		for (let coin of coins) {
			for (let b of balances) {
				if (b.id === coin.id) {
					items.push({
						...coin,
						active: false,
						amount: b.amount,
						amountBtc:
							b.id === "bitcoin" ? b.amount : b.amount * coin.prices[3],
						pricesTotal: [
							coin.prices[0] * b.amount,
							coin.prices[1] * b.amount,
							coin.prices[2] * b.amount,
							coin.prices[3] * b.amount,
						],
					});
				}
			}
		}
		dispatch(loadBalancesSucess(items));
	};
};
