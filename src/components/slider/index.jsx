import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { AiOutlineClose } from "react-icons/ai";

const options = {
	items: 1,
	nav: false,
	dots: true,
	loop: true,
	smartSpeed: 700,
};

export const Slider = () => {
	return (
		<div className="slider">
			<button className="btn slider_close">
				<AiOutlineClose className="icon_close" />
			</button>
			<div className="slider_container">
				<OwlCarousel options={options}>
					<div className="slider_item">
						<div className="slider_warp">
							<div className="slider_date">March 2021</div>
							<div className="slider_title">Asset Delisting update</div>
							<div className="slider_info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</div>
							<button
								className="btn slider_btn btn_white"
								aria-label="close slide">
								Find out more
							</button>
						</div>
						<div className="slider_preview">
							<img src="/assets/slider.png" alt="slider illustration" />
						</div>
					</div>
					<div className="slider_item">
						<div className="slider_warp">
							<div className="slider_date">March 2021</div>
							<div className="slider_title">Asset Delisting update</div>
							<div className="slider_info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</div>
							<button className="btn slider_btn btn_white">
								Find out more
							</button>
						</div>
						<div className="slider_preview">
							<img src="/assets/slider.png" alt="slider illustration" />
						</div>
					</div>
					<div className="slider_item">
						<div className="slider_warp">
							<div className="slider_date">March 2021</div>
							<div className="slider_title">Asset Delisting update</div>
							<div className="slider_info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</div>
							<button className="btn slider_btn btn_white">
								Find out more
							</button>
						</div>
						<div className="slider_preview">
							<img src="/assets/slider.png" alt="slider illustration" />
						</div>
					</div>
				</OwlCarousel>
			</div>
		</div>
	);
};
