import React from "react";
import ReactDOM from "react-dom/client"

import './index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App'
import { ContextProvider } from "./contexts/ContextProvider"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
