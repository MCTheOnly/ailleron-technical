import React, { createContext, useContext, useEffect, useState } from "react"

const StateContext = createContext({})

export const ContextProvider = ({ children }) => {

	const [activeMenu, setActiveMenu] = useState(false)

	const [screenSize, setScreenSize] = useState(undefined)

	const [isMobile, setIsMobile] = useState(false)

	return (
		<StateContext.Provider value={{
			activeMenu,
			setActiveMenu,
			screenSize,
			setScreenSize,
			isMobile,
			setIsMobile
		}}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
