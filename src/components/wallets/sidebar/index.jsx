import React, { useContext } from "react";
import { SideWidget } from "./SideWidget";
import { Operations } from "./Operations";
import { BsX, BsThreeDots } from "react-icons/bs";
import { RiHandCoinLine, RiEditLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import { WalletContext } from "../../../helpers/context";

export const WalletSidebar = () => {
	const { setShowAddWallet, showAddWallet } = useContext(WalletContext);
	const handleActiveDropdown = () => {
		const drop = document.querySelector(".card .dropdown");
		drop.classList.toggle("active");
	};
	const handleClickClose = () => {
		const side = document.querySelector(".wallets_sidebar");
		const wrapper = document.querySelector(".wallets_warpper");
		const walletBody = document.querySelector(".wallets_body");
		const operations = document.querySelector(".operations");
		side.classList.remove("visible");
		wrapper.classList.remove("small");
		walletBody.style.display = "block";
		operations.style.display = "none";
		setShowAddWallet(false);
	};

	const handleClickCloseAdd = () => {
		const side = document.querySelector(".wallets_sidebar");
		const warpper = document.querySelector(".wallets_warpper");
		side.classList.remove("visible");
		warpper.classList.remove("small");
		setShowAddWallet(false);
	};

	const handleEdit = () => {
		const walletBody = document.querySelector(".wallets_body");
		const operations = document.querySelector(".operations");
		walletBody.style.display = "none";
		operations.style.display = "block";
	};

	const handleCreate = () => {
		setShowAddWallet(true);
	};

	const inputFocus = (value) => {
		const el = document.getElementById(value);
		el.classList.add("active");
	};
	const removeActive = (value, e) => {
		const el = document.getElementById(value);
		if (e.target.value === "") {
			el.classList.remove("active");
		}
	};

	return (
		<aside className="wallets_sidebar">
			<div className="wallets_warp">
				{!showAddWallet ? (
					<>
						<button className="btn wallets_close" onClick={handleClickClose}>
							<BsX className="icon icon-close" />
						</button>
						<div className="wallets_head">
							<div className="wallets_logo">
								<img src="/assets/bitcoin.png" alt="logo bitcoin" />
							</div>
							<div className="wallets_details">
								<div className="wallets_info">BTC Balance</div>
								<div className="wallets_company">Bitcoin</div>
							</div>
						</div>
						<div className="wallets_body" style={{ display: "block" }}>
							<div className="wallets_line">
								<div className="wallets_money">20.1236</div>
								<div className="wallets_currency">BTC</div>
							</div>
							<div className="wallets_code">3.700.32 USD</div>
							<div className="wallets_parameters">
								<div className="wallets_parameter">
									<div className="wallets_preview bg-purple">
										<img src="/assets/bitcoin.svg" alt="bitcoin logo" />
									</div>
									<div className="wallets_box">
										<div className="wallets_category">Portfolio</div>
										<div className="wallets_number h6">2.30 %</div>
										<div className="wallets_price">3.700 USD</div>
									</div>
								</div>
								<div className="wallets_parameter">
									<div className="wallets_preview bg-blue">
										<RiHandCoinLine className="hold" />
									</div>
									<div className="wallets_box">
										<div className="wallets_category">Total holdings</div>
										<div className="wallets_number h6">0.252426 BTC</div>
										<div className="wallets_price">3.700 USD</div>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card_head">
									<div className="card_title h6">24h Markets</div>
									<div className="dropdown">
										<button
											className="btn dropdown_head"
											onClick={handleActiveDropdown}>
											<BsThreeDots className="icon icon_dots" />
										</button>
										<div className="dropdown_body">
											<div className="dropdown_link selected">
												<BiCheck className="check_drop" />
												24h Markets
											</div>
											<div className="dropdown_link">
												<BiCheck className="check_drop" />
												16h Markets
											</div>
											<div className="dropdown_link">
												<BiCheck className="check_drop" />
												8h Markets
											</div>
											<div className="dropdown_link">
												<BiCheck className="check_drop" />
												4h Markets
											</div>
										</div>
									</div>
								</div>
								<SideWidget />
								<div className="card_btns card_btns_mt40">
									<button
										className="btn card_btn btn_blue"
										onClick={handleEdit}>
										<RiEditLine className="icon-edit" />
										Edit
									</button>
									<button
										className="btn card_btn btn_border"
										onClick={handleCreate}>
										Create
									</button>
								</div>
							</div>
						</div>
						<Operations />
					</>
				) : (
					<>
						<button className="btn wallets_close" onClick={handleClickCloseAdd}>
							<BsX className="icon icon-close" />
						</button>
						<div className="wallets_head">
							<div
								className="wallets_preview bg-purple"
								style={{ marginRight: 16 }}>
								<IoWalletOutline className="hold" />
							</div>
							<div className="wallets_details">
								<div className="wallets_info">New Wallet</div>
								<div className="wallets_company">Fill the form</div>
							</div>
						</div>
						<form className="operations_form">
							<div className="operations_balance">
								<div className="operations_label">Total balance</div>
								<div className="operations_counter">0.125241 BTC</div>
								<div className="operations_price">7.201.54 USD</div>
							</div>
							<div className="operations_field field js-field" id="symbol">
								<div className="field_label">symbol</div>
								<div className="field_warp">
									<input
										type="text"
										className="field_input js-field-input"
										onFocus={() => inputFocus("symbol")}
										onBlur={(e) => removeActive("symbol", e)}
									/>
								</div>
							</div>
							<div className="operations_field field js-field" id="amount">
								<div className="field_label">amount</div>
								<div className="field_warp">
									<input
										type="text"
										className="field_input js-field-input"
										onFocus={() => inputFocus("amount")}
										onBlur={(e) => removeActive("amount", e)}
									/>
								</div>
							</div>
							<button
								type="submit"
								className="btn operations_btn btn_blue btn_full">
								Create
							</button>
						</form>
					</>
				)}
			</div>
		</aside>
	);
};
