import React from "react";
import { BiBell } from "react-icons/bi";
import Logic from "./Logic";

export const Notifications = () => {
	const { toggleActive, notifications } = Logic();

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
					{notifications.length > 0 &&
						notifications.map((notif) => {
							const { id, Icon, status, title, time } = notif;
							return (
								<div className="notification" key={id}>
									<div className="notification_icon">
										<Icon className="icon" />
									</div>
									<div className="notification_detail">
										<div className="notification_info">{title}</div>
										<div className="notification_line">
											<span className="time">{time}</span>
											{status && <span className="view"></span>}
										</div>
									</div>
								</div>
							);
						})}
				</div>
				<button className="btn header_btn btn_blue btn_full">
					See all notifications
				</button>
			</div>
		</div>
	);
};
