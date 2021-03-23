import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { ImCoinDollar } from "react-icons/im";
import { GiBoxingGlove, GiChart } from "react-icons/gi";
import {
	BiCoinStack,
	BiLineChart,
	BiBarChartAlt,
	BiChevronUp,
} from "react-icons/bi";

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

export const Categories = () => {
	const handleToggle = (id) => {
		const el = document.getElementById(id);
		el.classList.toggle("open");
	};

	return (
		<div className="categories">
			<div className="categories_title h5 mobile-hide">Categories</div>
			<div className="categories_select mobile-show">
				<div id="cat-select" className="nice-select select">
					<div className="icon-current">
						<BiChevronUp />
					</div>
					<span className="current" onClick={() => handleToggle("cat-select")}>
						Top 100
					</span>
					<ul className="list">
						<li className="option selected focus">Top 100</li>
						<li className="option">Top Gainers</li>
						<li className="option">Top Loosers</li>
						<li className="option">Stable Coins</li>
						<li className="option">Top 24H</li>
						<li className="option">Top 1H</li>
					</ul>
				</div>
			</div>
			<div className="categories_container">
				<OwlCarousel options={options}>
					<div className="categories_item">
						<div className="categories_preview bg-red-gradient">
							<BiBarChartAlt />
						</div>
						<div className="categories_text">Top 100</div>
					</div>
					<div className="categories_item">
						<div className="categories_preview bg-green-gradient">
							<ImCoinDollar />
						</div>
						<div className="categories_text">Stable Coins</div>
					</div>
					<div className="categories_item">
						<div className="categories_preview bg-pink-gradient">
							<GiBoxingGlove />
						</div>
						<div className="categories_text">Top Gainers</div>
					</div>
					<div className="categories_item">
						<div className="categories_preview bg-blue-gradient">
							<GiChart />
						</div>
						<div className="categories_text">Top 24H</div>
					</div>
					<div className="categories_item">
						<div className="categories_preview bg-purple-gradient">
							<BiCoinStack />
						</div>
						<div className="categories_text">Top Loosers</div>
					</div>
					<div className="categories_item">
						<div className="categories_preview bg-orange-gradient">
							<BiLineChart />
						</div>
						<div className="categories_text">Top 1H</div>
					</div>
				</OwlCarousel>
			</div>
		</div>
	);
};
