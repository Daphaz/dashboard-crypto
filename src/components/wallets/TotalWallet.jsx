/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { CgShapeCircle } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import Logic from "./Logic";

export const TotalWallet = ({ balances, location }) => {
	const {
		bitcoinWallet,
		handleCreateWallet,
		otherTotalBtcAmount,
		total,
		totalPriceBitcoinWalletFormated,
		totalPriceOtherWalletFormated,
	} = Logic(balances);

	useEffect(() => {
		if (location.state !== null) {
			handleCreateWallet();
		}
	}, [location]);

	return (
		<div className="wallets_warpper">
			<div className="wallets_row">
				<div className="wallets_total">
					<div className="wallets_title h6">Total Balance</div>
					<div className="wallets_flex">
						<div className="wallets_number h3">{total.btc}</div>
						<div className="wallets_currency">BTC</div>
					</div>
					<div className="wallets_price h5 color-gray">{total.formated}</div>
				</div>
				{bitcoinWallet && (
					<div className="wallets_group">
						<div className="wallets_box">
							<div className="wallets_info">BTC Balance</div>
							<div
								className="wallets_progress bg-purple"
								style={{
									width: `${bitcoinWallet.totalPercent}%`,
								}}></div>
						</div>
						<div className="wallets_box">
							<div className="wallets_info">Other Balances</div>
							<div
								className="wallets_progress bg-blue"
								style={{
									width: `${100 - bitcoinWallet.totalPercent}%`,
								}}></div>
						</div>
					</div>
				)}
			</div>
			{bitcoinWallet && (
				<div className="wallets_inner">
					<div className="wallets_list">
						<div className="wallets_item">
							<div className="wallets_icon">
								<CgShapeCircle fontSize={24} />
							</div>
							<div className="wallets_details">
								<div className="wallets_info">BTC Balance</div>
								<div className="wallets_number h6">{`${bitcoinWallet.amount} BTC`}</div>
								<div className="wallets_price">
									{totalPriceBitcoinWalletFormated}
								</div>
							</div>
						</div>
						<div className="wallets_item">
							<div className="wallets_icon blue">
								<CgShapeCircle fontSize={24} />
							</div>
							<div className="wallets_details">
								<div className="wallets_info">Other Balances</div>
								<div className="wallets_number h6">
									{otherTotalBtcAmount} BTC
								</div>
								<div className="wallets_price">
									{totalPriceOtherWalletFormated}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="wallets_btns">
				<button
					className="btn wallets_btn btn_blue"
					onClick={handleCreateWallet}>
					<IoWalletOutline className="icon icon_wallet" />
					Create
				</button>
			</div>
		</div>
	);
};
