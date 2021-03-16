import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const SortLoading = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="widgets_sorting">
			<div className="widgets_select mobile-show">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={2}
					width={"100%"}
					height={50}
					viewBox="0 0 100% 100%"
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
			<div className="widgets_select mobile-show">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={2}
					width={"100%"}
					height={50}
					viewBox="0 0 100% 100%"
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
			<ContentLoader
				className="mobile-hide"
				style={{ borderRadius: 10 }}
				speed={2}
				width={"100%"}
				height={50}
				viewBox="0 0 100% 100%"
				backgroundColor={bgColor}
				foregroundColor={fgColor}>
				<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
			</ContentLoader>
		</div>
	);
};
