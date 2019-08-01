import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


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

	const headerStyle = `${(scroll < top - 70) ? "transpNav" : "whiteNav"}`;
	// const toggleNavStyle = isNavVisible ? "cross" : "paralel";
	
	return (
		
		<header className="">
			<div className={`${headerStyle} header`}>
				<div className="logo">PERRINE</div>
				{(!isSmallScreen || isNavVisible) && (
				<nav className="navLinks">
					<Link
				activeClass="active"
				to="home"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>Accueil</Link>
					<Link
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>A propos</Link>
								<Link
				activeClass="active"
				to="skills"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>Compétences</Link>
					<NavLink to="/docsredux">Redux Docs</NavLink>
				</nav>)}
				<button onClick={toggleNav} className="burger">
					<div></div>
				</button>
			</div>
		</header>
	);
};

export default NavBar;
