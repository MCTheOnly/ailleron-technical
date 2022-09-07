import { BsInfoCircle, BsPeople } from "react-icons/bs"
import { HiOutlineNewspaper } from "react-icons/hi"
import { GrContact } from "react-icons/gr"
import { MdOutlineLocalOffer } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai"

export const links = [
	// {
	// 	title: 'Dashboard',
	// 	links: [
	// 		{
	// 			name: 'home',
	// 			icon: <AiOutlineHome />,
	// 		},
	// 	],
	// },

	{
		title: 'Pages',
		links: [
			{
				name: 'aboutUs',
				icon: <BsInfoCircle />,
			},
			{
				name: 'news',
				icon: <HiOutlineNewspaper />,
			},
			{
				name: 'offer',
				icon: <MdOutlineLocalOffer />,
			},
			{
				name: 'contact',
				icon: <GrContact color="white" />,
			},
		],
	},



];
