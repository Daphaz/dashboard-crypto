import React from "react";
import { BiNavigation } from "react-icons/bi";
import Chart from "react-apexcharts";
import GenerateChart from "./generateChart";
import { LoadingCardWidget } from "./LoadingCardWidget";

export const CardWidget = ({ history }) => {
	const { options, series, totalBtc, totalPriceFormated } = GenerateChart();

	const handleCreateWallet = () => {
		history.push("/wallets", { create: true });
	};

	return (
		<>
			{series.length > 0 && options ? (
				<div className="card card_widget text-center">
					<button
						className="btn card_next"
						onClick={() => history.push("/wallets")}>
						<BiNavigation className="icon" />
					</button>
					<div className="card_chart card_chart_total-balance">
						<div id="chart_total-balance" style={{ minHeight: 220 }}>
							<Chart
								options={options}
								series={series}
								type="radialBar"
								height={220}
							/>
						</div>
					</div>
					<div className="card_inner">
						<div className="card_title h6">Total Balance</div>
						<div className="card_currency">BTC</div>
						<div className="card_number h4">{totalBtc}</div>
						<div className="card_price h6 color-green">
							{totalPriceFormated}
						</div>
						<button
							className="btn card_btn btn_blue"
							onClick={handleCreateWallet}>
							Create
						</button>
					</div>
				</div>
			) : (
				<LoadingCardWidget />
			)}
		</>
	);
};
