//Widgets Chart
export const optionWidget = (labels, color) => ({
	chart: {
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

// Totaal balance Homepage
export const optionBalance = (labels, colors) => ({
	fontFamily: "Poppins, sans-serif",
	fontSize: 13,
	fontWeight: 500,
	foreColor: "#808191",
	chart: {
		height: "100%",
		type: "radialBar",
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: "16px",
				},
				value: {
					fontSize: "14px",
				},
				total: {
					show: false,
				},
			},
		},
	},
	colors,
	labels,
});
