import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialIcons = {
	color: "#fff",
	height: "40px",
	paddingRight: "10px"
};
const social = {
  textAlign: "left",
  gridColumn: "2/3",
  gridRow: "3/4"
};

function SocialBar() {
	return (
		<div style={social}>
			<FontAwesomeIcon style={socialIcons} icon={faGithub} size="2x" />
			<FontAwesomeIcon style={socialIcons} icon={faEnvelope} size="2x" />
			<FontAwesomeIcon style={socialIcons} icon={faEnvelope} size="2x" />
			<FontAwesomeIcon style={socialIcons} icon={faEnvelope} size="2x" />
		</div>
	);
}

export default SocialBar;
