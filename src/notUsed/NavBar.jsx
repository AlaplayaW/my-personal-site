import React, { useState, useEffect } from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = props => {

	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);


	// componentDidMount()
	useEffect(() => {

		const mediaQuery = window.matchMedia("(max-width: 700px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);
		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};

	}, []);


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
	
	
	return (
		<header className={styles.Header} id="NavBar">
			<div className={styles.fixedNav}>
				{(!isSmallScreen || isNavVisible) && (
				<nav className={`${styles.navLinks} nav`}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/docsredux">Redux Docs</NavLink>
				</nav>)}
				<button onClick={toggleNav} className={`${styles.Burger} burger`} >X</button>
			</div>
		</header>
	);
};

export default NavBar;
