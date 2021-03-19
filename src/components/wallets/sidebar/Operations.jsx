import React from "react";
import Logic from "./LogicOperation";

export const Operations = ({
	totalPriceFormated,
	totalBtc,
	balance,
	handleClickClose,
}) => {
	const { inputFocus, removeActive, formValChange, onSubmit, state } = Logic(
		handleClickClose,
		balance
	);

	return (
		<div className="operations" style={{ display: "none" }}>
			<form className="operations_form" onSubmit={onSubmit}>
				<div className="operations_balance">
					<div className="operations_label">Total balance</div>
					<div className="operations_counter">{totalBtc} BTC</div>
					<div className="operations_price">{totalPriceFormated}</div>
				</div>
				<div className="operations_field field js-field" id="amount">
					<div className="field_label">amount in {balance.symbol}</div>
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
					disabled={state.isError.amount.length > 0}>
					Save
				</button>
				{balance.id !== "bitcoin" && (
					<button
						type="submit"
						className="btn operations_btn btn_border btn_full">
						Delete
					</button>
				)}
				<div className="field_errors">
					{state.isError.amount.length > 0 && (
						<span className="invalid-feedback">{state.isError.amount}</span>
					)}
				</div>
			</form>
		</div>
	);
};
