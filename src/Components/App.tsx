import React from "react"
import logo from "../logo.svg"
import "./App.css"
import { NavBar } from "./NavBar"

function App() {
	return (
		<div className="App">
			{/* <NavBar /> */}
			<div className="App-div">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{/* Edit <code>src/App.tsx</code> and save to reload. */}
					John is currently working tirelessly on Sprague Overflow at
					the moment.
				</p>
				<p>Enjoy this gif of a kitten while you wait!</p>
				<img
					alt={"Silly Cat Gif"}
					src={"https://i.imgur.com/zlFH5oo.gif"}
				/>
			</div>
		</div>
	)
}

export default App
