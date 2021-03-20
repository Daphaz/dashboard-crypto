import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const LoadingCardWidget = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="card card_widget text-center">
			<div className="card_chart card_chart_total-balance">
				<div id="chart_total-balance" style={{ minHeight: 220 }}>
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={1.9}
						width={"100%"}
						height={"100%"}
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
			</div>
			<div className="card_inner">
				<div className="card_title h6">
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={2.3}
						width={"100%"}
						height={10}
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
				<div className="card_currency" style={{ background: "none" }}>
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={2.1}
						width={"100%"}
						height={10}
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
				<div className="card_number h4">
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={1.8}
						width={"100%"}
						height={10}
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
				<div className="card_price h6">
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={2.4}
						width={"100%"}
						height={10}
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
			</div>
		</div>
	);
};
