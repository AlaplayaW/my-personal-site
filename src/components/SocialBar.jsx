import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../pages/Home.scss";



function SocialBar() {
	return (
		<div className ="social">
			<a href="https://github.com/AlaplayaW" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialIcons" icon={faGithub} size="2x" /></a>
			<a href="https://www.linkedin.com/in/perrinemartyris" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="socialIcons" icon={faLinkedin} size="2x" /></a>
			<a href="mailto:perrinemartyris@gmail.com"><FontAwesomeIcon className="socialIcons" icon={faEnvelope} size="2x" /></a>
		</div>
	);
}

export default SocialBar;
