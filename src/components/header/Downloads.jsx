import React from "react";
import { BiDownArrowCircle } from "react-icons/bi";
import Logic from "./Logic";

export const Downloads = () => {
	const { toggleActive } = Logic();

	return (
		<div className="header_item header_item-download">
			<div className="header_head">
				<button
					className="btn"
					onClick={() => toggleActive("header_item-download")}>
					<BiDownArrowCircle className="icon" />
				</button>
			</div>
			<div className="header_body">
				<div className="header_row">
					<div className="header_col">
						<div className="header_col-label">Downloads</div>
						<div className="header_col-download">
							<img src="/assets/app-store.svg" alt="logo apple store" />
						</div>
						<div className="header_col-download">
							<img src="/assets/google-play.svg" alt="logo google play" />
						</div>
					</div>
					<div className="header_col">
						<div className="header_col-label">Scan Code</div>
						<div className="header_qr-code">
							<img src="/assets/qr-code.png" alt="scan qr-code" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
