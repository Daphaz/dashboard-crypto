import { CORE_ACTIVE, VARIANT_ACTIVE } from "./type";

export const coreActive = (id) => {
	return {
		type: CORE_ACTIVE,
		payload: { id },
	};
};

export const variantActive = (id) => {
	return {
		type: VARIANT_ACTIVE,
		payload: { id },
	};
};
