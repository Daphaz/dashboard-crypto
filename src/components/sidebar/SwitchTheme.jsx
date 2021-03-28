import React from "react";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import Logic from "./Logic";

export const SwitchTheme = () => {
	const { toggle, toggleDarkTheme } = Logic();

	return (
		<label className="switch switch_theme">
			<input
				type="checkbox"
				className="switch_input"
				checked={toggle}
				readOnly
			/>
			<span className="switch_in">
				<span className="switch_box" onClick={toggleDarkTheme}></span>
				<span className="switch_icon">
					<RiLightbulbFlashLine className="icon icon_light" />
					<RiLightbulbFlashFill className="icon icon_dark" />
				</span>
			</span>
		</label>
	);
};
