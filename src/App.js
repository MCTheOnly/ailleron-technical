import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'

import { Button, Header, Navbar, Sidebar, Footer } from './components'
import { Home, AboutUs, News, Offer, Partners, ContactUs } from './pages'
import './App.scss'
import './index.scss'

import { useStateContext } from './contexts/ContextProvider'


const App = () => {

	const { activeMenu } = useStateContext()

	return (
		<div className="App">
			<BrowserRouter>
				<div className="main__wrapper">

					<Header />

					<div>
						{activeMenu ? (
							<div className="sidebar">
								<Sidebar />
							</div>
						) : (
							<div className="sidebar hidden">
								<Sidebar />
							</div>
						)}
					</div>

					<div>
						<Routes>
							{/* Home Page */}
							<Route path="/" element={<Home />} />

							{/* Pages */}
							<Route path="/About Us" element={<AboutUs />} />
							<Route path="/News" element={<News />} />
							<Route path="/Offer" element={<Offer />} />
							<Route path="/Partners" element={<Partners />} />
							<Route path="/Contact" element={<ContactUs />} />

						</Routes>
					</div>

					<Footer />
				</div>
			</BrowserRouter >
		</div >
	)
}
export default App
