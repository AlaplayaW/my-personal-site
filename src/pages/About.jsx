import React from 'react';
import '../App.css';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.div}>
      <h1>About Page</h1>
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

export default About;
