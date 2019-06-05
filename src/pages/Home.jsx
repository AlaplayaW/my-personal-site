import React from "react";

import CustomTyped from "../components/CustomTyped";
import SocialBar from "../components/SocialBar";
import Diagonal from "../components/Diagonal";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.imgStyle}></div>
				<h1 className={styles.typed}>
					Hello, I am Perrine! <br />
					Searching for{" "}
					<span>
						<CustomTyped
							customStrings={["an internship", "a job of Junior Developper"]}
						/>
					</span>
				</h1>
				<SocialBar />
				<Diagonal />
			
		</div>
	);
}

export default Home;
