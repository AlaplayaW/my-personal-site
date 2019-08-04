import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Nav.scss";

const NavBar = props => {
	const triggerPoint = 80;
	const [scroll, setScroll] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	// componentDidMount()
	useEffect(() => {
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

	const headerStyle = `${
		scroll < triggerPoint ? "transpNav" : "blackNav"
	}`;
	const toggleNavStyle = isNavVisible ? "cross" : "paralel";

	return (
		<header className={`${headerStyle} ${toggleNavStyle} header`}>
			<div className="logo"><a href="#top"><img src="../favicon.ico " alt=""/></a></div>
			{/* <div className="logo"><a href="#top">PM</a></div> */}
			{(!isSmallScreen || isNavVisible) && (
			<nav className="navLinks">
				<Link
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					Accueil
				</Link>
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					A propos
				</Link>
				<Link
					activeClass="active"
					to="skills"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
				>
					Compétences
				</Link>
			</nav>
			)}
			<button onClick={toggleNav} className="burger">
			<div />
			</button>
		</header>
	);
};

export default NavBar;
