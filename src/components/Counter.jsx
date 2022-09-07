import React, { useRef, useEffect } from 'react'
import CountUp, { useCountUp } from 'react-countup';

import useIsInViewport from '../hooks/useIsInVieeport';

const Counter = ({ countStart, countEnd, countDuration }) => {

	const counterRef = useRef(null)

	const isVisible = useIsInViewport(counterRef)

	const settings = {
		start: countStart,
		end: countEnd,
		duration: countDuration,
		ref: counterRef,
		className: 'counters__counter--container',
	}

	const { pauseResume } = useCountUp({
		...settings
	})

	useEffect(() => {
		pauseResume()
	}, [isVisible])

	return (
		<div>
			<h1 ref={counterRef}></h1>
		</div>
	)
}

export default Counter
