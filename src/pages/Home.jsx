import React from "react";

import SocialBar from "../components/SocialBar";
import Diagonal from "../components/Diagonal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import surfboardOnTheBeach from "../assets/surfboardOnTheBeach.jpg";
import MyTyped from "../components/MyTyped";

import "./Home.scss";

function Home() {
	return (
		<div className="home" id="top">
			<img src={surfboardOnTheBeach} alt="surfboard on the beach" />
			<div className="typed">
				<h1>Perrine Martyris</h1>
				{/* <h2 className="row1">Perrine </h2> */}
				<h2 className="row2"><MyTyped
						dataText={["Développeuse . Web & Mobile"]}
						/>
				</h2>
			</div>
			<SocialBar />
			{/* Click on double angle down to go to about section  */}
			<Link
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
				className="bounce"
			>
				<FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
			</Link>
			<Diagonal />
		</div>
	);
}

export default Home;