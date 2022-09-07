import React from 'react'
import Counter from '../Counter'


const Counters = () => {

	return (

		<section className='counters'>
			<Counter
				countStart={10}
				countEnd={100}
				countDuration={10}
			/>
		</section>

	)
}

export default Counters


