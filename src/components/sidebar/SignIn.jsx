import React from "react";
import { VscSignIn } from "react-icons/vsc";

export const SignIn = () => {
	return (
		<div className="sidebar_signin">
			<div className="signin">
				<button className="btn">
					<VscSignIn className="icon" />
				</button>
			</div>
		</div>
	);
};
