import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../pages/Home.scss";



function SocialBar() {
	return (
		<div className ="social">
			<FontAwesomeIcon className="socialIcons" icon={faGithub} size="2x" />
			<FontAwesomeIcon className="socialIcons" icon={faEnvelope} size="2x" />
			<FontAwesomeIcon className="socialIcons" icon={faEnvelope} size="2x" />
			<FontAwesomeIcon className="socialIcons" icon={faEnvelope} size="2x" />
		</div>
	);
}

export default SocialBar;
