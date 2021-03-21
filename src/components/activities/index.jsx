import React from "react";
import { BiWallet, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export const Activities = () => {
	return (
		<div className="card">
			<div className="card_head">
				<div className="card_title h6">Activities</div>
			</div>
			<div className="card_list">
				<div className="card_item">
					<div className="card_icon bg-green">
						<BiWallet />
					</div>
					<div className="card_details">
						<div className="card_line">
							<div className="card_category">New Wallet ETH</div>
							<div className="card_date">March 21,2021</div>
						</div>
						<div className="card_status color-green">Complete</div>
						<div className="card_price">1.24564 ETH</div>
					</div>
				</div>
				<div className="card_item">
					<div className="card_icon bg-orange">
						<BiEditAlt />
					</div>
					<div className="card_details">
						<div className="card_line">
							<div className="card_category">Edit Wallet ETH</div>
							<div className="card_date">March 21,2021</div>
						</div>
						<div className="card_status color-green">Complete</div>
						<div className="card_price">2.26532684 ETH</div>
					</div>
				</div>
				<div className="card_item">
					<div className="card_icon bg-purple">
						<AiOutlineDelete />
					</div>
					<div className="card_details">
						<div className="card_line">
							<div className="card_category">Delete Wallet TRX</div>
							<div className="card_date">March 21,2021</div>
						</div>
						<div className="card_status color-green">Complete</div>
						<div className="card_price">3252.124548 TRX</div>
					</div>
				</div>
			</div>
		</div>
	);
};
