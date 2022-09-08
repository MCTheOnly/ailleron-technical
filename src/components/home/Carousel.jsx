import React from 'react'
import Slider from "react-slick";

import { livebank, softwaremind, ailleron } from '../../assets'

const Carousel = () => {

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	};

	return (
		<div id={'slider'}>
			<Slider {...settings}>
				<div className='single-slide'>
					<img src={livebank} alt="" />
				</div>
				<div className='single-slide'>
					<img src={softwaremind} alt="" />
				</div>
				<div className='single-slide'>
					<img src={ailleron} alt="" />
				</div>
				<div className='single-slide'>
					<img src={livebank} alt="" />
				</div>
				<div className='single-slide'>
					<img src={softwaremind} alt="" />
				</div>
				<div className='single-slide'>
					<img src={ailleron} alt="" />
				</div>
				<div className='single-slide'>
					<img src={livebank} alt="" />
				</div>
				<div className='single-slide'>
					<img src={softwaremind} alt="" />
				</div>
				<div className='single-slide'>
					<img src={ailleron} alt="" />
				</div>
			</Slider>
		</div>
	)
}

export default Carousel
