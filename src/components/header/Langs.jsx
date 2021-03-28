import React from "react";
import { BiChevronUp } from "react-icons/bi";
import Logic from "./Logic";
import { setActiveDevise } from "../../redux/devises/action";
import { setActiveLang } from "../../redux/lang/actions";

export const Langs = () => {
	const { toggleActive, lng, dvs, lang, devises, dispatch } = Logic();

	const handleActiveDevise = (id) => {
		dispatch(setActiveDevise(id));
		toggleActive("header_item-lang");
	};

	const handleActiveLang = (id) => {
		dispatch(setActiveLang(id));
		toggleActive("header_item-lang");
	};

	return (
		<div className="header_item header_item-lang">
			<div className="header_head">
				<button
					className="btn"
					onClick={() => toggleActive("header_item-lang")}>
					<span>
						{lng[0].label}/{dvs[0].devise}
					</span>
					<BiChevronUp className="icon chevronLang" />
				</button>
			</div>
			<div className="header_body">
				<div className="header_lang">
					<div className="header_cel">
						{lang.length > 0 &&
							lang.map((l) => {
								const { id, flag, lang, active } = l;
								return (
									<div
										className={active ? "header_link active" : "header_link"}
										key={id}
										onClick={() => handleActiveLang(id)}>
										<span className="header_flag">{flag}</span>
										{lang}
									</div>
								);
							})}
					</div>
					<div className="header_cel">
						{devises.length > 0 &&
							devises.map((d) => {
								const { id, devise, active } = d;
								return (
									<div
										className={active ? "header_link active" : "header_link"}
										key={id}
										onClick={() => handleActiveDevise(id)}>
										{devise}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
