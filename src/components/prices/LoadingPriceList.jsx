import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../helpers/theme";
import { LoadingTable } from "./LoadingTable";

export const LoadingPriceList = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="prices">
			<div className="prices_head">
				<div className="prices_title h5">
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={2.1}
						width={"80%"}
						height={30}
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
			</div>
			<div className="prices_container">
				<LoadingTable />
			</div>
		</div>
	);
};
