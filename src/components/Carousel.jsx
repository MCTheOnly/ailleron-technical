import React from 'react'
import Slider from "react-slick";

import { livebank, softwaremind, ailleron } from '../assets'
// import { ReactComponent as Ailleron } from '../assets/ailleron.svg';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
	};

	return (
		<Slider {...settings}>
			<div>
				<img src={livebank} alt="" />
			</div>
			<div>
				<img src={softwaremind} alt="" />
			</div>
			<div>
				<img src={ailleron} alt="" />
			</div>
			<div>
				<img src={livebank} alt="" />
			</div>
			<div>
				<img src={softwaremind} alt="" />
			</div>
			<div>
				<img src={ailleron} alt="" />
			</div>
		</Slider>
	)
}

export default Carousel
