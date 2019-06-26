import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "../pages/Home.module.scss";



function SocialBar() {
	return (
		<div className ={styles.social}>
			<FontAwesomeIcon className={styles.socialIcons} icon={faGithub} size="2x" />
			<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x" />
			<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x" />
			<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x" />
		</div>
	);
}

export default SocialBar;
