import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const LoadingCategories = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="categories">
			<div className="categories_title h5 mobile-hide">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={2.1}
					width={"80%"}
					height={25}
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
			<div className="categories_select mobile-show">
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
			<div className="categories_container">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={2.1}
					width={"100%"}
					height={20}
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
		</div>
	);
};
