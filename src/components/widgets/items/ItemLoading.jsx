import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../../helpers/theme";

export const ItemLoading = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="widgets_item">
			<div className="widgets_head">
				<div className="widgets_company">
					<div className="widgets_logo">
						<ContentLoader
							style={{ borderRadius: "50%" }}
							speed={2}
							width={"100%"}
							height={"100%"}
							viewBox="0 0 100% 100%"
							backgroundColor={bgColor}
							foregroundColor={fgColor}>
							<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
						</ContentLoader>
					</div>
					<div className="widgets_details">
						<div className="widgets_category">
							<ContentLoader
								style={{ borderRadius: 10, marginBottom: 5 }}
								speed={2}
								width={"100%"}
								height={20}
								viewBox="0 0 100% 100%"
								backgroundColor={bgColor}
								foregroundColor={fgColor}>
								<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
							</ContentLoader>
						</div>
						<div className="widgets_info">
							<ContentLoader
								style={{ borderRadius: 10 }}
								speed={2}
								width={"100%"}
								height={10}
								viewBox="0 0 100% 100%"
								backgroundColor={bgColor}
								foregroundColor={fgColor}>
								<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
							</ContentLoader>
						</div>
					</div>
				</div>
				<div style={{ alignSelf: "flex-start" }}>
					<ContentLoader
						style={{ borderRadius: 10 }}
						speed={2}
						width={30}
						height={25}
						viewBox="0 0 100% 100%"
						backgroundColor={bgColor}
						foregroundColor={fgColor}>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
					</ContentLoader>
				</div>
			</div>
			<div className="widgets_body">
				<ContentLoader
					style={{ borderRadius: 10 }}
					speed={2}
					width={"100%"}
					height={"100%"}
					viewBox="0 0 100% 100%"
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
		</div>
	);
};
