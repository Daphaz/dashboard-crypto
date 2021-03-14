import React from "react";
import { BiChevronUp } from "react-icons/bi";
import Logic from "./Logic";

export const Langs = () => {
	const { toggleActive } = Logic();

	return (
		<div className="header_item header_item-lang">
			<div className="header_head">
				<button
					className="btn"
					onClick={() => toggleActive("header_item-lang")}>
					<span>Eng/USD</span>
					<BiChevronUp className="icon chevronLang" />
				</button>
			</div>
			<div className="header_body">
				<div className="header_lang">
					<div className="header_cel">
						<div className="header_link active">
							<span className="header_flag">us</span>
							English
						</div>
						<div className="header_link">
							<span className="header_flag">us</span>
							English
						</div>
					</div>
					<div className="header_cel">
						<div className="header_link">USD</div>
						<div className="header_link">USD</div>
					</div>
				</div>
			</div>
		</div>
	);
};
