import React from 'react'

import { Hero, Carousel, TwoColumns } from '../components'

import { useStateContext } from '../contexts/ContextProvider'

const Home = () => {
	const { activeMenu, setActiveMenu } = useStateContext()

	return (
		<div className={activeMenu ? "home page retracted" : "home page"}>
			<Hero />
			<Carousel />
			<TwoColumns />
		</div>
	)
}

export default Home
