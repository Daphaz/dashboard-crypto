import React from "react";
import { BiChevronUp, BiCheck } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { variantActive } from "../../redux/widgets/sort/actions";
import {
	sortCoinAz,
	sortCoin24,
	sortCoinMc,
	sortCoinPrice,
	sortCoinVol,
} from "../../redux/coins/action";

export const SortPrices = () => {
	const dispatch = useDispatch();
	const sortVariant = useSelector((s) => s.sortVariant);
	const variantActiveLabel = sortVariant.filter((e) => e.active === true);

	const handleToggle = (id) => {
		const el = document.getElementById(id);
		el.classList.toggle("open");
	};

	const handleRemove = () => {
		const el = document.getElementById("select-prices");
		el.classList.remove("open");
	};

	const handleActiveVariant = (id, isActive) => {
		if (!isActive) {
			switch (id) {
				case 0:
					dispatch(variantActive(id));
					dispatch(sortCoinMc());
					handleRemove();
					break;
				case 1:
					dispatch(variantActive(id));
					dispatch(sortCoinAz());
					handleRemove();
					break;
				case 2:
					dispatch(variantActive(id));
					dispatch(sortCoinVol());
					handleRemove();
					break;
				case 3:
					dispatch(variantActive(id));
					dispatch(sortCoin24());
					handleRemove();
					break;
				case 4:
					dispatch(variantActive(id));
					dispatch(sortCoinPrice());
					handleRemove();
					break;

				default:
					break;
			}
		} else {
			handleRemove();
		}
	};
	return (
		<div className="nice-select select select_empty" id="select-prices">
			<span className="current" onClick={() => handleToggle("select-prices")}>
				{variantActiveLabel[0].label}
			</span>
			<div className="icon-current">
				<BiChevronUp />
			</div>
			<ul className="list">
				{sortVariant &&
					sortVariant.map((variant) => {
						const { id, label, active } = variant;
						return (
							<li
								onClick={() => handleActiveVariant(id, active)}
								className={active ? "option selected" : "option"}
								key={id}>
								<div className="opt-selected">
									<BiCheck />
								</div>
								{label}
							</li>
						);
					})}
			</ul>
		</div>
	);
};
