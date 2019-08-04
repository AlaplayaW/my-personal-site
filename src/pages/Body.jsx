import React from "react";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";


function Body() {
	
	return (
		<div className="body">
			<Home />
			<About />
			<Skills />
			<Portfolio />
		</div>
	);
}

export default Body;
