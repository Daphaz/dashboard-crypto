import {
	AiOutlineAppstore,
	AiOutlineBarChart,
	AiOutlineWallet,
	AiOutlineCalculator,
	AiOutlineRead,
} from "react-icons/ai";

export const Navigations = [
	{
		id: 0,
		Icon: AiOutlineAppstore,
		label: "Home",
		path: "/home",
	},
	{
		id: 1,
		Icon: AiOutlineBarChart,
		label: "Prices",
		path: "/prices",
	},
	{
		id: 2,
		Icon: AiOutlineWallet,
		label: "Wallets",
		path: "/wallets",
	},
	{
		id: 3,
		Icon: AiOutlineCalculator,
		label: "Arbitrage",
		path: "/arbitrage",
	},
	{
		id: 4,
		Icon: AiOutlineRead,
		label: "News",
		path: "/news",
	},
];
