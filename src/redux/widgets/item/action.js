import axios from "axios";
import { api } from "../../../constants";
import {
	LOAD_DATA_WIDGET,
	LOAD_DATA_WIDGET_ERROR,
	LOAD_DATA_WIDGET_SUCESS,
	SORT_AZ,
	SORT_LAST,
	SORT_MC,
	SORT_PRICE,
	SORT_VOL,
	SORT_LOSERS,
	SORT_GAINERS,
	SORT_ASSETS,
} from "./type";

export const loadApiWidget = () => {
	return {
		type: LOAD_DATA_WIDGET,
	};
};

export const loadWidgetSucess = (items) => {
	return {
		type: LOAD_DATA_WIDGET_SUCESS,
		payload: items,
	};
};

export const loadWidgetError = (error) => {
	return {
		type: LOAD_DATA_WIDGET_ERROR,
		payload: error,
	};
};

export const sortAZ = () => {
	return {
		type: SORT_AZ,
	};
};

export const sortLast = () => {
	return {
		type: SORT_LAST,
	};
};

export const sortMC = () => {
	return {
		type: SORT_MC,
	};
};

export const sortPrice = () => {
	return {
		type: SORT_PRICE,
	};
};

export const sortVol = () => {
	return {
		type: SORT_VOL,
	};
};

export const sortGainers = () => {
	return {
		type: SORT_GAINERS,
	};
};

export const sortLosers = () => {
	return {
		type: SORT_LOSERS,
	};
};

export const sortAssets = () => {
	return {
		type: SORT_ASSETS,
	};
};

export const apiCall = () => {
	return async (dispatch) => {
		dispatch(loadApiWidget());
		try {
			const { data: trends } = await axios.get(`${api}/search/trending`);
			const { coins } = trends;
			const newState = coins.map((c) => ({
				id: c.item.id,
				name: c.item.name,
				symbol: c.item.symbol,
				img: c.item.large,
			}));
			const finalState = [];
			for (let state of newState) {
				const { id } = state;
				const { data } = await axios.get(
					`${api}/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
				);
				const prices = [
					data.market_data.current_price.usd,
					data.market_data.current_price.eur,
					data.market_data.current_price.jpy,
					data.market_data.current_price.btc,
				];
				const percent = data.market_data.price_change_percentage_24h;
				const status = percent >= 0 ? "positive" : "negative";
				const series = data.market_data.sparkline_7d.price;
				const labels = series.map((e, i) => i);
				const volumes = [
					data.market_data.total_volume.usd,
					data.market_data.total_volume.eur,
					data.market_data.total_volume.jpy,
					data.market_data.total_volume.btc,
				];
				const market_caps = [
					data.market_data.market_cap.usd,
					data.market_data.market_cap.eur,
					data.market_data.market_cap.jpy,
					data.market_data.market_cap.btc,
				];
				finalState.push({
					...state,
					prices,
					percent,
					status,
					labels,
					series,
					volumes,
					market_caps,
					display: "block",
				});
			}
			dispatch(loadWidgetSucess(finalState));
		} catch (error) {
			dispatch(loadWidgetError(error.message));
		}
	};
};
