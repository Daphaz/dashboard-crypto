import React from "react";
import { SideWidget } from "./SideWidget";
import { Operations } from "./Operations";
import { BsX, BsThreeDots } from "react-icons/bs";
import { RiHandCoinLine, RiEditLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import Logic from "./Logic";

export const WalletSidebar = ({ balances }) => {
	const {
		handleActiveDropdown,
		handleClickClose,
		handleClickCloseAdd,
		handleCreate,
		handleEdit,
		inputFocus,
		removeActive,
		showAddWallet,
		balance,
		sortMarkets,
		handleActiveMarket,
		marketFilter,
		totalBtc,
		totalPriceFormated,
		state,
		onSubmit,
		formValChange,
	} = Logic(balances);

	return (
		<aside className="wallets_sidebar">
			<div className="wallets_warp">
				{!showAddWallet ? (
					<>
						{balance && (
							<>
								<button
									className="btn wallets_close"
									onClick={handleClickClose}>
									<BsX className="icon icon-close" />
								</button>
								<div className="wallets_head">
									<div className="wallets_logo">
										<img src={balance.image} alt={`logo ${balance.name}`} />
									</div>
									<div className="wallets_details">
										<div className="wallets_info">{`${balance.symbol.toUpperCase()} Balance`}</div>
										<div className="wallets_company">{balance.name}</div>
									</div>
								</div>
								<div className="wallets_body" style={{ display: "block" }}>
									<div className="wallets_line">
										<div className="wallets_money">1.00</div>
										<div className="wallets_currency">{balance.symbol}</div>
									</div>
									<div className="wallets_code">{balance.prices}</div>
									<div className="wallets_parameters">
										<div className="wallets_parameter">
											<div className="wallets_preview bg-purple">
												<img src="/assets/bitcoin.svg" alt="bitcoin logo" />
											</div>
											<div className="wallets_box">
												<div className="wallets_category">Portfolio</div>
												<div className="wallets_number h6">
													{balance.percentTotal}
												</div>
											</div>
										</div>
										<div className="wallets_parameter">
											<div className="wallets_preview bg-blue">
												<RiHandCoinLine className="hold" />
											</div>
											<div className="wallets_box">
												<div className="wallets_category">Total holdings</div>
												<div className="wallets_number h6">{`${
													balance.amount
												} ${balance.symbol.toUpperCase()}`}</div>
												<div className="wallets_price">
													{balance.pricesTotal}
												</div>
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card_head">
											<div className="card_title h6">
												{marketFilter[0].label}
											</div>
											<div className="dropdown">
												<button
													className="btn dropdown_head"
													onClick={handleActiveDropdown}>
													<BsThreeDots className="icon icon_dots" />
												</button>
												<div className="dropdown_body">
													{sortMarkets.map((mc) => {
														return (
															<div
																key={mc.id}
																className={
																	mc.active
																		? "dropdown_link selected"
																		: "dropdown_link"
																}
																onClick={() => handleActiveMarket(mc.id)}>
																<BiCheck className="check_drop" />
																{mc.label}
															</div>
														);
													})}
												</div>
											</div>
										</div>
										<SideWidget data={balance} />
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
								<Operations
									totalBtc={totalBtc}
									totalPriceFormated={totalPriceFormated}
									balance={balance}
									handleClickClose={handleClickClose}
								/>
							</>
						)}
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
						<form className="operations_form" onSubmit={onSubmit}>
							<div className="operations_balance">
								<div className="operations_label">Total balance</div>
								<div className="operations_counter">{totalBtc} BTC</div>
								<div className="operations_price">{totalPriceFormated}</div>
							</div>
							<div className="operations_field field js-field" id="symbol">
								<div className="field_label">symbol</div>
								<div className="field_warp">
									<input
										type="text"
										className={
											state.isError.symbol.length > 0
												? "field_input js-field-input is-invalid"
												: "field_input js-field-input"
										}
										name="symbol"
										onFocus={() => inputFocus("symbol")}
										onBlur={(e) => removeActive("symbol", e)}
										onChange={formValChange}
									/>
								</div>
							</div>
							<div className="operations_field field js-field" id="amount">
								<div className="field_label">amount</div>
								<div className="field_warp">
									<input
										type="text"
										className={
											state.isError.amount.length > 0
												? "field_input js-field-input is-invalid"
												: "field_input js-field-input"
										}
										name="amount"
										onFocus={() => inputFocus("amount")}
										onBlur={(e) => removeActive("amount", e)}
										onChange={formValChange}
									/>
								</div>
							</div>
							<button
								type="submit"
								className="btn operations_btn btn_blue btn_full"
								disabled={
									state.isError.symbol.length > 0 ||
									state.isError.amount.length > 0
								}>
								Create
							</button>
							<div className="field_errors">
								{state.isError.symbol.length > 0 && (
									<span className="invalid-feedback">
										{state.isError.symbol}
									</span>
								)}
								{state.isError.amount.length > 0 && (
									<span className="invalid-feedback">
										{state.isError.amount}
									</span>
								)}
							</div>
						</form>
					</>
				)}
			</div>
		</aside>
	);
};
