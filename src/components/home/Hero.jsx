import React from 'react'
import SlideDownButton from '../buttons/SlideDownButton'

export const Hero = () => {
	return (
		<section className={'hero'}>
			<div className="hero__wrapper">
				<h1>Ailleron</h1>
				<p>We make financial experiences easy and enjoyable for everyone.</p>
				<SlideDownButton anchor='section-3' />
			</div>
		</section>
	)
}

export default Hero
