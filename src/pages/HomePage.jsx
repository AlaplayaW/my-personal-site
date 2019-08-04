import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
// import "../App.scss";


function HomePage() {
	
	return (
		<div className="homePage">
			<Home />
			<About />
			<Skills />
			<Portfolio />
		</div>
	);
}

export default HomePage;
