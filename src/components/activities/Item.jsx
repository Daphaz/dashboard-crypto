import React from "react";
import { BiWallet, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export const Item = ({ activitie }) => {
	switch (activitie.type) {
		case "add":
			return (
				<div className="card_item">
					<div className="card_icon bg-green">
						<BiWallet />
					</div>
					<div className="card_details">
						<div className="card_line">
							<div className="card_category">{`New Wallet ${activitie.symbol}`}</div>
							<div className="card_date">{activitie.date}</div>
						</div>
						<div className="card_status color-green">Complete</div>
						<div className="card_price">{`${activitie.amount} ${activitie.symbol}`}</div>
					</div>
				</div>
			);
		case "edit":
			return (
				<div className="card_item">
					<div className="card_icon bg-orange">
						<BiEditAlt />
					</div>
					<div className="card_details">
						<div className="card_line">
							<div className="card_category">{`Edit Wallet ${activitie.symbol}`}</div>
							<div className="card_date">{activitie.date}</div>
						</div>
						<div className="card_status color-green">Complete</div>
						<div className="card_price">{`${activitie.amount} ${activitie.symbol}`}</div>
					</div>
				</div>
			);
		case "delete":
			return (
				<div className="card_item">
					<div className="card_icon bg-purple">
						<AiOutlineDelete />
					</div>
					<div className="card_details">
						<div className="card_line">
							<div className="card_category">{`Delete Wallet ${activitie.symbol}`}</div>
							<div className="card_date">{activitie.date}</div>
						</div>
						<div className="card_status color-green">Complete</div>
						<div className="card_price">{`${activitie.amount} ${activitie.symbol}`}</div>
					</div>
				</div>
			);

		default:
			break;
	}
};
