import axios from "axios";
import { api } from "../../constants";
import {
	LOAD_DATA_COINS,
	LOAD_DATA_COINS_ERROR,
	LOAD_DATA_COINS_SUCESS,
} from "./type";

export const loadApiCoins = () => {
	return {
		type: LOAD_DATA_COINS,
	};
};

export const loadCoinsSucess = (items) => {
	return {
		type: LOAD_DATA_COINS_SUCESS,
		payload: items,
	};
};

export const loadCoinsError = (error) => {
	return {
		type: LOAD_DATA_COINS_ERROR,
		payload: error,
	};
};

let datas;

export const apiCallCoins = () => {
	return async (dispatch) => {
		dispatch(loadApiCoins());
		try {
			if (!datas) {
				const { data: usd } = await axios.get(
					`${api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d`
				);
				const { data: eur } = await axios.get(
					`${api}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d`
				);
				const { data: jpy } = await axios.get(
					`${api}/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d`
				);
				const { data: btc } = await axios.get(
					`${api}/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d`
				);

				const dataUsd = usd.map((u) => ({
					id: u.id,
					symbol: u.symbol,
					name: u.name,
					image: u.image,
					prices: [u.current_price],
					percent1h: {
						value: u.price_change_percentage_1h_in_currency,
						status:
							u.price_change_percentage_1h_in_currency >= 0
								? "positive"
								: "negative",
						active: true,
					},
					percent24h: {
						value: u.price_change_percentage_24h_in_currency,
						status:
							u.price_change_percentage_24h_in_currency >= 0
								? "positive"
								: "negative",
						active: false,
					},
					percent7d: {
						value: u.price_change_percentage_7d_in_currency,
						status:
							u.price_change_percentage_7d_in_currency >= 0
								? "positive"
								: "negative",
						active: false,
					},
					percent14d: {
						value: u.price_change_percentage_14d_in_currency,
						status:
							u.price_change_percentage_14d_in_currency >= 0
								? "positive"
								: "negative",
						active: false,
					},
					series: u.sparkline_in_7d.price,
					label: u.sparkline_in_7d.price.map((e, i) => i),
				}));

				const dataEur = eur.map((u) => ({
					id: u.id,
					prices: u.current_price,
				}));

				const dataJpy = jpy.map((u) => ({
					id: u.id,
					prices: u.current_price,
				}));

				const dataBtc = btc.map((u) => ({
					id: u.id,
					prices: u.current_price,
				}));

				for await (let u of dataUsd) {
					for (let e of dataEur) {
						if (u.id === e.id) {
							u.prices.push(e.prices);
						}
					}
					for (let j of dataJpy) {
						if (u.id === j.id) {
							u.prices.push(j.prices);
						}
					}
					for (let b of dataBtc) {
						if (u.id === b.id) {
							u.prices.push(b.prices);
						}
					}
				}
				datas = dataUsd;
				dispatch(loadCoinsSucess(dataUsd));
			} else {
				dispatch(loadCoinsSucess(datas));
			}
		} catch (error) {
			dispatch(loadCoinsError(error.message));
		}
	};
};
