import React from "react";
import CustomTyped from "./CustomTyped";
import styles from "./TypedName.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function TypedName() {
	return (
		<div className={styles.imgStyle}>
			<h1 className={styles.typed}>
				Hello, I am Perrine! <br/>
				Searching for <span>
				<CustomTyped
					customStrings={["an internship", "a job of Junior Developper"]}
				/></span>
			</h1>
			<div className={styles.social}>
				<FontAwesomeIcon className={styles.socialIcons} icon={faGithub} size="2x"/>
				<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x"/>
				<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x"/>
				<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x"/>
			</div>
		</div>
	);
}

export default TypedName;