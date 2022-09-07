import React from 'react'

import { slidedown } from '../../assets'

const SlideDownButton = ({ anchor }) => {
	return (
		<button className='slide-down'>
			<a href={`#${anchor}`}>
				<img src={slidedown} alt="" />
			</a>
		</button>
	)
}

export default SlideDownButton
