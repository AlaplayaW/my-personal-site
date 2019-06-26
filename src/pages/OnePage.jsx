import React from "react";
import Home from "./Home";
import About from "./About";
import DocsRedux from "./DocsRedux";
// import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


function OnePage() {
	
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<DocsRedux />
			<Footer />
		</div>
	);
}

export default OnePage;
