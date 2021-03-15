import React, { useRef, useState, useEffect } from "react";

const slides = [{ id: 0 }, { id: 1 }, { id: 2 }];

export const Slider = () => {
	const [toggle, setToggle] = useState(false);
	const [width, setWidth] = useState(0);
	const [startX, setStartX] = useState(0);
	const [leftFinish, setLeftFinish] = useState(0);
	const slider = useRef();
	const sliderInner = useRef();

	const Resize = () => {
		setWidth(slider.current.clientWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", Resize);

		return () => window.removeEventListener("resize", Resize);
	});

	useEffect(() => {
		if (slider.current) {
			setWidth(slider.current.clientWidth);
		}
	}, [slider]);

	const handleMouseDown = (e) => {
		setStartX(e.clientX - sliderInner.current.offsetLeft);
		slider.current.style.cursor = "grabbing";
		setToggle(true);
	};

	const handleMouseEnter = () => {
		slider.current.style.cursor = "grab";
	};

	const handleMouseUp = () => {
		slider.current.style.cursor = "grab";
		setToggle(false);
	};

	const handleMouseLeave = () => {
		slider.current.style.cursor = "default";
	};

	const handleMouseMouve = (e) => {
		if (!toggle) return;
		e.preventDefault();

		sliderInner.current.style.left = `${e.clientX - startX}px`;
		setLeftFinish(e.clientX - startX);

		checkBoundary();
	};

	function checkBoundary() {
		let outer = slider.current.getBoundingClientRect();
		let inner = sliderInner.current.getBoundingClientRect();

		if (parseInt(sliderInner.current.style.left) > 0) {
			sliderInner.current.style.left = "0px";
		} else if (inner.right < outer.right) {
			sliderInner.current.style.left = `-${inner.width - outer.width}px`;
		}
	}

	return (
		<div
			className="slider"
			ref={slider}
			onPointerDown={handleMouseDown}
			onPointerEnter={handleMouseEnter}
			onPointerUp={handleMouseUp}
			onPointerLeave={handleMouseLeave}
			onPointerMove={handleMouseMouve}>
			<div
				className="slider_inner"
				ref={sliderInner}
				style={{ width: width * slides.length + (slides.length + 1) * 5 }}>
				{slides.map((slide) => (
					<div className="slider_img" key={slide.id} style={{ width }}></div>
				))}
			</div>
		</div>
	);
};
