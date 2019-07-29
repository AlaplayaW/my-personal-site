import React from "react";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
// import "../App.scss";


function HomePage() {
	
	return (
		<div className="homePage">
			<Home />
			<About />
			<Resume />
		</div>
	);
}

export default HomePage;
