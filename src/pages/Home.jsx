import React from "react";

import CustomTyped from "../components/CustomTyped";
import SocialBar from "../components/SocialBar";
import Diagonal from "../components/Diagonal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import surfboardOnTheBeach from "../assets/surfboardOnTheBeach.jpg";

import "./Home.scss";

function Home() {
	return (
		<div className="home">
			<img src={surfboardOnTheBeach} alt="surfboard on the beach" />
			<h1 className="typed">
				Hi, I am Perrine!
				<h2>
					Searching for{" "}
					<span>
						<CustomTyped
							customStrings={["an internship", "a job of Junior Developper"]}
						/>
					</span>
				</h2>
			</h1>
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
