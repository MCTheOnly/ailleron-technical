import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai"
import { BsInfoCircle, BsPeople } from "react-icons/bs"
import { HiOutlineNewspaper } from "react-icons/hi"
import { GrContact } from "react-icons/gr"
import { MdOutlineLocalOffer, MdOutlineCancel } from "react-icons/md"

import { useStateContext } from '../contexts/ContextProvider'

import { links } from '../data/links'

const Sidebar = () => {

	const { activeMenu, setActiveMenu } = useStateContext()

	const isActive = true
	const activeLink = 'true'
	const normalLink = 'true'


	return (
		<div className="sidebar__wrapper">
			{activeMenu &&
				<>
					<div className="sidebar__header">
						<Link to="/" onClick={() => setActiveMenu(false)}>
							<AiOutlineHome /> Home
						</Link>

						<button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}>
							<MdOutlineCancel />
						</button>
					</div>

					<div className="sidebar__links">
						{links && links.map((item) => (
							<div key={item.title} className="sidebar__links--wrapper">
								<p>{item.title}</p>
								{item.links && item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={() => { }}
										className={({ isActive }) => isActive ? activeLink : normalLink}>

										{link.icon}
										<span>{link.name}</span>

									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			}

		</div>

	)
}

export default Sidebar
