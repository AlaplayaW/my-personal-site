import React from "react";
import "./Diagonal.scss";

function Diagonal() {
	return (
		<div className="diagonal">
			<svg
				className="homeleft"
				width="30%"
				height="20vh"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<path d="M0 100 L100 100 L0 10 Z" />
			</svg>
			<svg
				className="homeright"
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
