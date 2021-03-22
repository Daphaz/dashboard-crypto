import React from "react";
import { useSelector } from "react-redux";
import { Item } from "./Item";

export const Activities = () => {
	const activities = useSelector((s) => s.activities);
	return (
		<>
			{activities && (
				<div className="card">
					<div className="card_head">
						<div className="card_title h6">Activities</div>
					</div>
					<div className="card_list">
						{activities.map((ac) => (
							<Item key={ac.id} activitie={ac} />
						))}
					</div>
				</div>
			)}
		</>
	);
};
