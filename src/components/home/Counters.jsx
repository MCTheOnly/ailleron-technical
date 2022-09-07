import React from 'react'
import Counter from '../Counter'


const Counters = () => {

	return (

		<section className='counters'>

			<h2>Ailleron Group by the numbers</h2>

			<div className="counters__wrapper">
				<div className="counters__container">
					<Counter
						start={0}
						end={5}
						duration={2}
						prefix={'<span class="string string--red">></span>'}
						suffix={'<span class="string string--black">mln</span>'} />
					<p className='counter-info'>verification sessions<br />by 2021</p>
				</div>
				<div className="counters__container">
					<Counter
						start={0}
						end={200}
						duration={2.4}
						suffix={'<span class="string string--red">+</span>'} />
					<p className='counter-info'>countries for<br />ID verification</p>
				</div>
				<div className="counters__container">
					<Counter
						start={0}
						end={90}
						duration={3.2}
						prefix={'<span class="string string--red"><</span>'}
						suffix={'<span class="string string--black">sec</span>'} />
					<p className='counter-info'>eID complete<br />verification</p>

				</div>
				<div className="counters__container">
					<Counter
						start={0}
						end={10}
						duration={3.8}
						suffix={'<span class="string string--red">+</span>'} />
					<p className='counter-info'>banking<br />clients</p>

				</div>
			</div>

		</section>

	)
}

export default Counters


