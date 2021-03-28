import React from "react";
import ContentLoader from "react-content-loader";
import ThemeState from "../../helpers/theme";

export const LoadingActivitie = () => {
	const { bgColor, fgColor } = ThemeState();
	return (
		<div className="card_item">
			<div className="card_icon">
				<ContentLoader
					style={{ borderRadius: "50%" }}
					speed={1.9}
					width={"100%"}
					height={"100%"}
					backgroundColor={bgColor}
					foregroundColor={fgColor}>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
				</ContentLoader>
			</div>
			<div className="card_details">
				<div className="card_line">
					<div className="card_category">
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
				</div>
				<div className="card_status color-green">
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
				<div className="card_price">
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
			</div>
		</div>
	);
};
