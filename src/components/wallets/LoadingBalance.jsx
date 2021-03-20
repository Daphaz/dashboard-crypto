import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const LoadingBalance = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="balances_row">
			<div className="balances_cell">
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
			<div className="balances_cell">
				<div className="balances_company">
					<div className="balances_text">
						<ContentLoader
							style={{ borderRadius: 10 }}
							speed={1.9}
							width={"100%"}
							height={10}
							backgroundColor={bgColor}
							foregroundColor={fgColor}>
							<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
						</ContentLoader>
					</div>
				</div>
			</div>
			<div className="balances_cell">
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
			<div className="balances_cell">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={2.2}
					width={"100%"}
					height={10}
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
			<div className="balances_cell">
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
			<div className="balances_cell">
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
			<div className="balances_cell">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={1.9}
					width={"90%"}
					height={10}
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
		</div>
	);
};
