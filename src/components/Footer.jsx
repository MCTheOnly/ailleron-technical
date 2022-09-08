import React from 'react'

import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer__wrapper">

				<div className="footer__copy">
					<p>&copy;2022 3DCode All rights reserved</p>
				</div>

				<div className="footer__nav">
					<nav>
						<ul>
							<li><a href="#">About us</a></li>
							<li><a href="#">Career</a></li>
							<li><a href="#">Privacy policy</a></li>
						</ul>
					</nav>
				</div>

				<div className="footer__social">
					<a href="#"><FaFacebookF className='fb' /></a>
					<a href="#"><AiOutlineInstagram className='ig' /></a>
				</div>

			</div>
		</footer>
	)
}

export default Footer
