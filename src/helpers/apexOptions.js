export const optionWidget = (labels, color) => ({
	chart: {
		group: "sparklines",
		type: "line",
		height: "100%",
		sparkline: {
			enabled: true,
		},
	},
	fill: {
		opacity: 1,
	},
	labels,
	yaxis: {
		min: 0,
	},
	xaxis: {
		type: "datetime",
	},
	colors: [color],
	stroke: {
		width: 2,
		curve: "smooth",
	},
	tooltip: {
		enabled: false,
	},
});

export const seriesWidget = (data) => [
	{
		name: "Sales",
		data,
	},
];
