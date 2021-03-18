import React from "react";

export const Operations = () => {
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
		<div className="operations" style={{ display: "none" }}>
			<form className="operations_form">
				<div className="operations_balance">
					<div className="operations_label">Total balance</div>
					<div className="operations_counter">0.125241 BTC</div>
					<div className="operations_price">7.201.54 USD</div>
				</div>
				<div className="operations_field field js-field" id="amount">
					<div className="field_label">amount in BTC</div>
					<div className="field_warp">
						<input
							type="text"
							className="field_input js-field-input"
							onFocus={() => inputFocus("amount")}
							onBlur={(e) => removeActive("amount", e)}
						/>
					</div>
				</div>
				<button type="submit" className="btn operations_btn btn_blue btn_full">
					Save
				</button>
				<button
					type="submit"
					className="btn operations_btn btn_border btn_full">
					Delete
				</button>
			</form>
		</div>
	);
};
