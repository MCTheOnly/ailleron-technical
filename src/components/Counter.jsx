import React, { useRef, useEffect } from 'react'
import CountUp, { useCountUp } from 'react-countup';

import useIsInViewport from '../hooks/useIsInVieeport';

const Counter = ({ start, end, duration, suffix = '', prefix = '' }) => {

	const counterRef = useRef(null)

	const isVisible = useIsInViewport(counterRef)

	const settings = {
		start,
		end,
		duration,
		suffix,
		prefix,
		ref: counterRef,
	}

	const { pauseResume } = useCountUp({
		...settings
	})

	useEffect(() => {
		pauseResume()
	}, [isVisible])

	return (
		<p className='counter' ref={counterRef}></p>
	)
}

export default Counter
