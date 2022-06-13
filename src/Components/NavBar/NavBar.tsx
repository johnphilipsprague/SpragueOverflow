import React from "react"
import { NavLink } from "react-router-dom"

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<div>
			<NavLink to="/">Home Page</NavLink>
			<NavLink to="/campuses">Campuses</NavLink>
			<NavLink to="/students">Students</NavLink>
		</div>
	)
}
