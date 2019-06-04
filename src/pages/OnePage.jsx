import React from "react";
import Home from "./Home";
import About from "./About";
import DocsRedux from "./DocsRedux";
import Nav from "../components/Nav";


function OnePage() {
	
	return (
		<div>
			<Home />
			<Nav />
			<About />
			<DocsRedux />
		</div>
	);
}

export default OnePage;
