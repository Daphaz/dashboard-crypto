export const priceFormatted = (price, locale, currency) => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency === "BTC" ? "XBT" : currency,
	}).format(price);
};
