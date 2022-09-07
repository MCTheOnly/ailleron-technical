import React, { useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/images/logo.svg';

import { useStateContext } from '../contexts/ContextProvider'

import { links } from '../data/links'

const NavButton = ({ className, title, customFunc, icon, color, dotColor }) => (

	<button type="button" className={(className)} onClick={customFunc} style={{ color }}>
		<span className="navbar__notificationDot" style={{ backgroundColor: dotColor }} />
		{icon}
	</button>
)

const Navbar = () => {

	const activeLink = 'true'
	const normalLink = 'true'
	const isActive = true

	const { activeMenu, setActiveMenu } = useStateContext()

	return (
		<div className="navbar">
			<NavButton
				className="navbar__menu-button"
				title="Menu"
				customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color="#000"
				icon={<AiOutlineMenu />} />

			<Link className="navbar__logo" to="/" onClick={() => { }}>
				<Logo />
			</Link>

			<nav className="navbar__links">
				{links && links.map((item) => (
					<ul key={item.title} className="navbar__links--wrapper">
						{item.links && item.links.map((link) => (
							<li key={link.name}>
								<NavLink
									to={`/${link.name}`}
									key={link.name}
									onClick={() => { }}
									className={`${isActive ? activeLink : normalLink} ${link.name === 'contact' ? 'contact-button' : ''}`}>

									{link.icon}
									<span>{link.name}</span>

								</NavLink>
							</li>
						))}
					</ul>
				))}
			</nav>


		</div >
	)
}

export default Navbar
