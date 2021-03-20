import React from "react";
import { Facebook } from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const LoadingTotalWallet = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="wallets_warpper">
			<div className="wallets_row">
				<Facebook backgroundColor={bgColor} foregroundColor={fgColor} />
			</div>
		</div>
	);
};
