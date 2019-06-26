import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const NavBar = props => {
	const [scroll, setScroll] = useState(0);
	const [top, setTop] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);


	// componentDidMount()
	useEffect(() => {

		const el = document.querySelector("header");
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

	const headerClassName = `${(scroll < top-10) ? styles.noNav : styles.fixedNav}`
	
	
	return (
		
		<header className={styles.Header} id="NavBar">
			<div className={headerClassName}>
				<img className="Logo" src="https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-tropical-cat_2-surfboards-crossed-670595.jpg" alt="logo" />
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
