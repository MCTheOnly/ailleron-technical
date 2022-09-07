import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = ({ name, customClass, icon }) => {
	return (
		<button>
			<Link
				to={`/${name}`}
				key={name}
				className={customClass}>
					
				{icon}
				<span>{name}</span>
			</Link>
		</button>
	)
}

export default ContactButton
