import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'

import Navbar from './Navbar'


const Header = () => {

	const { activeMenu, setActiveMenu, screenSize, setScreenSize, isMobile, setIsMobile } = useStateContext()


	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	})

	useEffect(() => {
		if (screenSize <= 900) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
		console.log(isMobile)
		console.log(screenSize)
	}, [screenSize])

	return (
		<header className={"main-header"}>
			<Navbar />
		</header>
	)
}

export default Header
