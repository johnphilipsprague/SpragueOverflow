import React from "react"
import logo from "./logo.svg"
import "./Home.css"

function Home() {
	return (
		<div className="Home">
			<div className="Home-div">
				<img src={logo} className="Home-logo" alt="logo" />
				<p>
					{/* Edit <code>src/Home.tsx</code> and save to reload. */}
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

export default Home
