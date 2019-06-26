import React from 'react';
import '../App.css';
import styles from './About.module.css';
import Diagonal from '../components/Diagonal';

function About() {
  return (
    <div id="about" className={styles.about}>
      <img className={styles.img} src={require("../assets/myPict.jpg")} alt="me" />
      <h1 className={styles.titre}>About Me</h1>
      <p className={styles.texte} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio facilis nihil, unde nulla ut doloremque provident quaerat voluptates, sunt hic. Mollitia quaerat reprehenderit doloremque, perspiciatis quos sit fugit recusandae.</p>
			<Diagonal />
    </div>
  );
} 

export default About;
