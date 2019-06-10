import React, {useState, useEffect} from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {

	const [scroll, setScroll] = useState(0);
	const [top, setTop] = useState(0);
	// const [height, setHeight] = useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
	}

	// componentDidMount()
	useEffect(() => {
		const el = document.querySelector("nav");
		console.log(el.offsetTop, el.offsetHeight);
		setTop(el.offsetTop)
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
	
	return (
			<nav className={scroll < top-10 
				? `${styles.noNav}` 
				: `${styles.fixedNav}`}>
				<h3>Logo</h3>
				<ul className={styles.navLinks}>
					<NavLink to="/">
						<li>Home</li>
					</NavLink>
					<NavLink to="/about">
						<li>About</li>
					</NavLink>
					<NavLink to="/docsredux">
						<li>Redux Docs</li>
					</NavLink>
				</ul>
			</nav>
		);

}


export default NavBar;
