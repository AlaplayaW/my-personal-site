import React from 'react';
import '../App.css';
import styles from './About.module.css';
import Diagonal from '../components/Diagonal';

function About() {
  return (
    <div className={styles.div}>
      <h1>About Page</h1>
			<Diagonal />
    </div>
  );
} 

export default About;
