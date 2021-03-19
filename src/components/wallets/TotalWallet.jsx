import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import Logic from "./Logic";

const TotalWallet = ({ balances }) => {
	const {
		bitcoinWallet,
		handleCreateWallet,
		otherTotalBtcAmount,
		totalBtc,
		totalPriceBitcoinWalletFormated,
		totalPriceFormated,
		totalPriceOtherWalletFormated,
	} = Logic(balances);

	return (
		<div className="wallets_warpper">
			<div className="wallets_row">
				<div className="wallets_total">
					<div className="wallets_title h6">Total Balance</div>
					<div className="wallets_flex">
						<div className="wallets_number h3">{totalBtc}</div>
						<div className="wallets_currency">BTC</div>
					</div>
					<div className="wallets_price h5 color-gray">
						{totalPriceFormated}
					</div>
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

export default TotalWallet;
