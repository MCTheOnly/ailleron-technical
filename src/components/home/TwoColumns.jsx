import React from 'react'

import ContactButton from '../buttons/ContactButton'

import { phones } from '../../assets'
import { GrContact } from 'react-icons/gr'

const TwoColumns = () => {
	return (
		<section className='two-columns' id="section-3">

			<div className="two-columns__column two-columns__column--left">
				<h2>Lorem ipsum dolor<br />Sit ament</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<ContactButton
					name='Contact'
					customClass={'contact-button'}
					icon={<GrContact />} />
			</div>

			<div className="two-columns__column two-columns__column--right">
				<figure>
					<img src={phones} alt="" />
				</figure>
			</div>

		</section >
	)
}

export default TwoColumns
