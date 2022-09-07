import React from 'react'

import { Hero } from '../components/Hero'
import Carousel from '../components/Carousel'

import { useStateContext } from '../contexts/ContextProvider'

const Home = () => {
	const { activeMenu, setActiveMenu } = useStateContext()

	return (
		<div className={activeMenu ? "home page retracted" : "home page"}>
			<Hero />
			<Carousel />
		</div>
	)
}

export default Home
