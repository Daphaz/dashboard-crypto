import React from "react";
import { Facebook } from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const LoadingSearch = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="search">
			<Facebook
				backgroundColor={bgColor}
				foregroundColor={fgColor}
				width={"100%"}
			/>
		</div>
	);
};
