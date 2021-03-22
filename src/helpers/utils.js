import dateFormat from "dateformat";

//Calc price and format
export const priceFormatted = (price, locale, currency) => {
	if (currency !== "BTC") {
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
		}).format(price);
	} else {
		return `${price.toFixed(8)} Ƀ`;
	}
};

export const totalBtc = (balances) => {
	if (balances.length > 0) {
		return balances.reduce((acc, val) => val.amountBtc + acc, 0).toFixed(8);
	} else {
		return "...";
	}
};

export const totalFiat = (balances, devise) => {
	if (balances.length > 0) {
		return balances.reduce(
			(acc, val) => val.pricesTotal[devise[0].id] + acc,
			0
		);
	} else {
		return "...";
	}
};

export const totalPriceFormated = (totalFiat, devise) => {
	return priceFormatted(totalFiat, devise[0].locale, devise[0].devise);
};

//Colors
export const getRandomColor = () => {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

//Calc math
export const percent = (amount, total) => {
	return (amount / total) * 100;
};

//Date
export const dateFormated = (date) => {
	dateFormat.masks.activities = "mmmm dd, yyyy";
	return dateFormat(date, "activities");
};
