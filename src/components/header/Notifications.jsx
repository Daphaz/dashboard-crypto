import React from "react";
import { BiBell } from "react-icons/bi";
import { VscOutput } from "react-icons/vsc";
import Logic from "./Logic";

export const Notifications = () => {
	const { toggleActive } = Logic();

	return (
		<div className="header_item header_item-notifications">
			<div className="header_head active">
				<button
					className="btn"
					onClick={() => toggleActive("header_item-notifications")}>
					<BiBell className="icon" />
				</button>
			</div>
			<div className="header_body">
				<div className="notifications">
					<div className="notification">
						<div className="notification_icon">
							<VscOutput className="icon" />
						</div>
						<div className="notification_detail">
							<div className="notification_info">
								Wrapped Bitcoin is now listed on Unity Exchange
							</div>
							<div className="notification_line">
								<span className="time">24m ago</span>
								<span className="view"></span>
							</div>
						</div>
					</div>
					<div className="notification">
						<div className="notification_icon">
							<VscOutput className="icon" />
						</div>
						<div className="notification_detail">
							<div className="notification_info">
								Wrapped Bitcoin is now listed on Unity Exchange
							</div>
							<div className="notification_line">
								<span className="time">24m ago</span>
								<span className="view"></span>
							</div>
						</div>
					</div>
				</div>
				<button className="btn header_btn btn_blue btn_full">
					See all notifications
				</button>
			</div>
		</div>
	);
};
