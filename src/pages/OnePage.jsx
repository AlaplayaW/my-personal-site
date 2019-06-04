import React from "react";
import TypedName from "./TypedName";
import About from "./About";
import DocsRedux from "./DocsRedux";
import Nav from "../components/Nav";


function OnePage() {
	
	return (
		<div>
			<TypedName />
			<Nav />
			<About />
			<DocsRedux />
		</div>
	);
}

export default OnePage;
