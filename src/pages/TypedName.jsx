import React from "react";
import Typed from "react-typed";
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
				<Typed
					strings={[
						"an internship",
						"a job of Junior Developper",
					]}
					typeSpeed={60}
					backSpeed={30}
					backDelay={1000}
					loop
					loopCount={2}
				/></span>
			</h1>
			<div className={styles.social}>
				<FontAwesomeIcon className={styles.socialIcons} icon={faGithub} size="2x"/>
				<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x"/>
				<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x"/>
				<FontAwesomeIcon className={styles.socialIcons} icon={faEnvelope} size="2x"/>
			</div>
			<div className={styles.diagonal}>
				<svg
					className={styles.homeleft}
					width="30%"
					height="180"
					viewBox="0 0 100 102"
          preserveAspectRatio="none"
          fill="white"
				>
					<path d="M0 100 L100 100 L0 10 Z" />
				</svg>
				<svg
					className={styles.homeright}
					width="70%"
					height="180"
					viewBox="0 0 100 102"
          preserveAspectRatio="none"
          fill="white"
				>
					<path d="M0 100 L100 100 L100 10 Z" />
				</svg>
			</div>
		</div>
	);
}

export default TypedName;

//   // HOME TYPED JS
//   if ($('.element').length) {
//     $('.element').each(function () {
//         $(this).typed({
//             strings: [$(this).data('text1'), $(this).data('text2')],
//             loop: $(this).data('loop') ? $(this).data('loop') : false ,
//             backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,
//             typeSpeed: 10,
//         });
//     });
// }
