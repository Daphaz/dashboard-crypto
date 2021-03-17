import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { CgShapeCircle } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";

export const TotalWallet = () => {
	return (
		<div className="wallets_warpper">
			<div className="wallets_row">
				<div className="wallets_total">
					<div className="wallets_title h6">Total Balance</div>
					<div className="wallets_flex">
						<div className="wallets_number h3">0.25984575</div>
						<div className="wallets_currency">BTC</div>
					</div>
					<div className="wallets_price h5 color-gray">3,700,60 USD</div>
				</div>
				<div className="wallets_group">
					<div className="wallets_box">
						<div className="wallets_info">BTC Balance</div>
						<div className="wallets_progress bg-purple"></div>
					</div>
					<div className="wallets_box">
						<div className="wallets_info">Assets Balance</div>
						<div className="wallets_progress bg-blue"></div>
					</div>
				</div>
			</div>
			<div className="wallets_inner">
				<div className="wallets_list">
					<div className="wallets_item">
						<div className="wallets_icon">
							<CgShapeCircle fontSize={24} />
						</div>
						<div className="wallets_details">
							<div className="wallets_info">BTC Balance</div>
							<div className="wallets_number h6">0.24568742 BTC</div>
							<div className="wallets_price">3,700.80 USD</div>
						</div>
					</div>
					<div className="wallets_item">
						<div className="wallets_icon blue">
							<CgShapeCircle fontSize={24} />
						</div>
						<div className="wallets_details">
							<div className="wallets_info">Assets Balance</div>
							<div className="wallets_number h6">0.24568742 BTC</div>
							<div className="wallets_price">3,700.80 USD</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wallets_btns">
				<button className="btn wallets_btn btn_blue">
					<BiEditAlt className="icon icon_edit" />
					Edit
				</button>
				<button className="btn wallets_btn btn_border">
					<IoWalletOutline className="icon icon_edit" />
					Create
				</button>
			</div>
		</div>
	);
};
