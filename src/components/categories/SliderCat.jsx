import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { ImCoinDollar } from "react-icons/im";
import { GiBoxingGlove, GiChart } from "react-icons/gi";
import { BiCoinStack, BiLineChart, BiBarChartAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
	sortCoinGainers,
	sortCoinLosers,
	sortCoinTop100,
	sortCoinTop1h,
	sortCoinTop24h,
	sortCoinStable,
} from "../../redux/coins/action";

const options = {
	items: 6,
	nav: false,
	dots: true,
	loop: true,
	smartSpeed: 700,
	responsive: {
		0: {
			items: 1,
			autoHeight: true,
		},
		768: {
			items: 3,
		},
		1024: {
			items: 4,
		},
		1340: {
			items: 5,
		},
	},
};

export const SliderCat = ({ categories }) => {
	const dispatch = useDispatch();

	const handleClickGainers = () => {
		dispatch(sortCoinGainers());
	};

	const handleClickLosers = () => {
		dispatch(sortCoinLosers());
	};

	const handleClickTop100 = () => {
		dispatch(sortCoinTop100());
	};

	const handleClickTop1h = () => {
		dispatch(sortCoinTop1h());
	};

	const handleClickTop24h = () => {
		dispatch(sortCoinTop24h());
	};

	const handleClickStable = () => {
		dispatch(sortCoinStable());
	};

	return (
		<>
			{categories.length > 0 && (
				<OwlCarousel options={options}>
					{categories.map((cat) => {
						switch (cat.id) {
							case 0:
								return (
									<div
										className="categories_item"
										key={cat.id}
										onClick={handleClickTop100}>
										<div className="categories_preview bg-red-gradient">
											<ImCoinDollar />
										</div>
										<div className="categories_text">{cat.label}</div>
									</div>
								);
							case 1:
								return (
									<div
										className="categories_item"
										key={cat.id}
										onClick={handleClickStable}>
										<div className="categories_preview bg-green-gradient">
											<GiBoxingGlove />
										</div>
										<div className="categories_text">{cat.label}</div>
									</div>
								);
							case 2:
								return (
									<div
										className="categories_item"
										key={cat.id}
										onClick={handleClickGainers}>
										<div className="categories_preview bg-pink-gradient">
											<GiChart />
										</div>
										<div className="categories_text">{cat.label}</div>
									</div>
								);
							case 3:
								return (
									<div
										className="categories_item"
										key={cat.id}
										onClick={handleClickLosers}>
										<div className="categories_preview bg-purple-gradient">
											<BiCoinStack />
										</div>
										<div className="categories_text">{cat.label}</div>
									</div>
								);
							case 4:
								return (
									<div
										className="categories_item"
										key={cat.id}
										onClick={handleClickTop24h}>
										<div className="categories_preview bg-blue-gradient">
											<BiBarChartAlt />
										</div>
										<div className="categories_text">{cat.label}</div>
									</div>
								);
							case 5:
								return (
									<div
										className="categories_item"
										key={cat.id}
										onClick={handleClickTop1h}>
										<div className="categories_preview bg-orange-gradient">
											<BiLineChart />
										</div>
										<div className="categories_text">{cat.label}</div>
									</div>
								);
							default:
								return null;
						}
					})}
				</OwlCarousel>
			)}
		</>
	);
};
