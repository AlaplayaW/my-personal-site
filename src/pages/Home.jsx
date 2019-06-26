import React from "react";

import CustomTyped from "../components/CustomTyped";
import SocialBar from "../components/SocialBar";
import Diagonal from "../components/Diagonal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import styles from "./Home.module.scss";

function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.imgStyle} />
			<Link 
			activeClass="active"
			to="NavBar"
			spy={true}
			smooth={true}
			offset={0}
			duration= {500}
			className={styles.bounce}
			>
				<FontAwesomeIcon icon={faAngleDoubleDown} size="2x" /></Link>
			<h1 className={styles.typed}>
				Hi, I am Perrine!
				<h2>Searching for{" "}
				<span>
					<CustomTyped
						customStrings={["an internship", "a job of Junior Developper"]}
					/>
				</span>
				</h2>
			</h1>
			<SocialBar />
			<Diagonal />
		</div>
	);
}

export default Home;
