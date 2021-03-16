import React from "react";
import { BiChevronUp, BiCheck } from "react-icons/bi";
import Logic from "./Logic";
import { useSelector, useDispatch } from "react-redux";
import { coreActive, variantActive } from "../../redux/widgets/sort/actions";
import {
	sortAZ,
	sortLast,
	sortMC,
	sortPrice,
	sortVol,
} from "../../redux/widgets/item/action";

export const Sorting = () => {
	const { handleToggle, handleRemove } = Logic();

	const dispatch = useDispatch();

	const sortCore = useSelector((s) => s.sortCore);
	const sortVariant = useSelector((s) => s.sortVariant);

	const coreActiveLabel = sortCore.filter((e) => e.active === true);
	const variantActiveLabel = sortVariant.filter((e) => e.active === true);

	const handleActiveCore = (id) => {
		dispatch(coreActive(id));
		handleRemove();
	};

	const handleActiveVariant = (id) => {
		console.log(id);
		switch (id) {
			case 0:
				dispatch(sortMC());
				dispatch(variantActive(id));
				handleRemove();
				break;
			case 1:
				dispatch(sortAZ());
				dispatch(variantActive(id));
				handleRemove();
				break;
			case 2:
				dispatch(sortVol());
				dispatch(variantActive(id));
				handleRemove();
				break;
			case 3:
				dispatch(sortLast());
				dispatch(variantActive(id));
				handleRemove();
				break;
			case 4:
				dispatch(sortPrice());
				dispatch(variantActive(id));
				handleRemove();
				break;

			default:
				break;
		}
	};

	return (
		<div className="widgets_sorting">
			<div className="widgets_select mobile-show">
				<div id="core-select" className="nice-select select">
					<span className="current" onClick={() => handleToggle("core-select")}>
						{coreActiveLabel[0].label}
					</span>
					<div className="icon-current">
						<BiChevronUp />
					</div>
					<ul className="list">
						{sortCore &&
							sortCore.map((core) => {
								const { id, label, active } = core;
								return (
									<li
										onClick={() => handleActiveCore(id)}
										className={active ? "option selected" : "option"}
										key={id}>
										{label}
									</li>
								);
							})}
					</ul>
				</div>
			</div>
			<div className="widgets_variants mobile-hide ">
				{sortCore &&
					sortCore.map((core) => {
						const { id, label, active } = core;
						return (
							<div
								onClick={() => handleActiveCore(id)}
								className={active ? "widgets_link active" : "widgets_link"}
								key={id}>
								{label}
							</div>
						);
					})}
			</div>
			<div className="widgets_select">
				<div className="nice-select select select_empty" id="select-variant">
					<span
						className="current"
						onClick={() => handleToggle("select-variant")}>
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
										onClick={() => handleActiveVariant(id)}
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
			</div>
		</div>
	);
};
