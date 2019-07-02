import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const NavBar = props => {
	const [scroll, setScroll] = useState(0);
	const [top, setTop] = useState();
	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);


	// componentDidMount()
	useEffect(() => {

		const el = document.querySelector(".about");
		console.log(el.offsetTop, el.offsetHeight);
		setTop(el.offsetTop);
		window.addEventListener("scroll", handleScroll);

		const mediaQuery = window.matchMedia("(max-width: 700px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);
		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};

	}, []);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};

	const headerClassName = `${(scroll < top - 70) ? "transpNav" : "whiteNav"}`
	
	
	return (
		
		<header className="">
			<div className={`${headerClassName} header`}>
				<img src={require("../assets/logo.svg")} className="logo" alt="logo" />
				{(!isSmallScreen || isNavVisible) && (
				<nav className="navLinks">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/docsredux">Redux Docs</NavLink>
				</nav>)}
				<button onClick={toggleNav} className="burger" >X</button>
			</div>
		</header>
	);
};

export default NavBar;
