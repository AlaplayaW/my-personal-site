import React from "react";
import styles from "./Diagonal.module.css";

function Diagonal() {
	return (
		<div className={styles.diagonal}>
			<svg
				className={styles.homeleft}
				width="30%"
				height="20vh"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<path d="M0 100 L100 100 L0 10 Z" />
			</svg>
			<svg
				className={styles.homeright}
				width="70%"
				height="20vh"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<path d="M0 100 L100 100 L100 10 Z" />
			</svg>
		</div>
	);
}

export default Diagonal;
