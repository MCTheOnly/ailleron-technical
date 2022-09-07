import React from 'react'

import { Hero, Carousel, TwoColumns, Counters } from '../components'

import { useStateContext } from '../contexts/ContextProvider'

const Home = () => {
	const { activeMenu, setActiveMenu } = useStateContext()

	return (
		<div className={activeMenu ? "home page retracted" : "home page"}>
			<Hero />
			<Carousel />
			<TwoColumns />
			<Counters />
		</div>
	)
}

export default Home
