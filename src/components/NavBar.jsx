import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const NavBar = props => {
	const [scroll, setScroll] = useState();
	const [top, setTop] = useState();
	// const [height, setHeight] = useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	// componentDidMount()
	useEffect(() => {
		const el = document.querySelector("header");
		console.log(el.offsetTop, el.offsetHeight);
		setTop(el.offsetTop);
		// setHeight(el.offsetHeight);
		window.addEventListener("scroll", handleScroll);
	}, []);

	// componentDidUpdate()
	// useEffect(() => {
	// 		scroll > top
	// 			? (document.body.style.paddingBottom = `${height}px`)
	// 			: (document.body.style.paddingBottom = 0);
	// }, [scroll, top, height]
	// );
	const headerClassName = `${(scroll < top-10) ? styles.noNav : styles.fixedNav}`
	
	
	return (
		
		<header className={styles.Header} id="NavBar">
			<div className={headerClassName}>
				<img className="Logo" src={require("../assets/logo.svg")} alt="logo" />
				<nav className={`${styles.navLinks} Nav`}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/docsredux">Redux Docs</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
