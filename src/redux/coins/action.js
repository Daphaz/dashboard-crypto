import axios from "axios";
import { api } from "../../constants";
import {
	LOAD_DATA_COINS,
	LOAD_DATA_COINS_ERROR,
	LOAD_DATA_COINS_SUCESS,
	SORT_COIN_AZ,
	SORT_COIN_VOL,
	SORT_COIN_24,
	SORT_COIN_MC,
	SORT_COIN_PRICE,
	SORT_COIN_GAINERS,
	SORT_COIN_LOSERS,
	SORT_COIN_TOP100,
	SORT_COIN_TOP1H,
	SORT_COIN_TOP24H,
	SORT_COIN_STABLE,
	SEARCH_COIN,
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

export const sortCoinAz = () => {
	return {
		type: SORT_COIN_AZ,
	};
};

export const sortCoinVol = () => {
	return {
		type: SORT_COIN_VOL,
	};
};

export const sortCoin24 = () => {
	return {
		type: SORT_COIN_24,
	};
};

export const sortCoinMc = () => {
	return {
		type: SORT_COIN_MC,
	};
};

export const sortCoinPrice = () => {
	return {
		type: SORT_COIN_PRICE,
	};
};

export const sortCoinGainers = () => {
	return {
		type: SORT_COIN_GAINERS,
	};
};

export const sortCoinLosers = () => {
	return {
		type: SORT_COIN_LOSERS,
	};
};

export const sortCoinTop100 = () => {
	return {
		type: SORT_COIN_TOP100,
	};
};

export const sortCoinTop1h = () => {
	return {
		type: SORT_COIN_TOP1H,
	};
};

export const sortCoinTop24h = () => {
	return {
		type: SORT_COIN_TOP24H,
	};
};

export const sortCoinStable = () => {
	return {
		type: SORT_COIN_STABLE,
	};
};

export const searchCoin = (text) => {
	return {
		type: SEARCH_COIN,
		text,
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
					total_volumes: [u.total_volume],
					market_caps: [u.market_cap],
					display: "table-row",
				}));

				const dataEur = eur.map((u) => ({
					id: u.id,
					prices: u.current_price,
					total_volume: u.total_volume,
					market_cap: u.market_cap,
				}));

				const dataJpy = jpy.map((u) => ({
					id: u.id,
					prices: u.current_price,
					total_volume: u.total_volume,
					market_cap: u.market_cap,
				}));

				const dataBtc = btc.map((u) => ({
					id: u.id,
					prices: u.current_price,
					total_volume: u.total_volume,
					market_cap: u.market_cap,
				}));

				for await (let u of dataUsd) {
					for (let e of dataEur) {
						if (u.id === e.id) {
							u.prices.push(e.prices);
							u.total_volumes.push(e.total_volume);
							u.market_caps.push(e.market_cap);
						}
					}
					for (let j of dataJpy) {
						if (u.id === j.id) {
							u.prices.push(j.prices);
							u.total_volumes.push(j.total_volume);
							u.market_caps.push(j.market_cap);
						}
					}
					for (let b of dataBtc) {
						if (u.id === b.id) {
							u.prices.push(b.prices);
							u.total_volumes.push(b.total_volume);
							u.market_caps.push(b.market_cap);
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
