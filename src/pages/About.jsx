import React from 'react';
import '../App.scss';
import './About.scss';
import Diagonal from '../components/Diagonal';

function About() {
  return (
    <div className="about">
      <img className="img" src={require("../assets/myPict.jpg")} alt="me" />
      <div className="textArea">
        <h1 className="titre">A propos</h1>
        <p className="texte" >Après une longue réflexion, et un soupçon de motivation, c'est décidé je change de cap! <br/> En route pour le développement web. Je suis consciente que la route sera longue, mais je suis sûre d'être sur la bonne...</p>
      </div>
			<Diagonal />
    </div>
  );
} 

export default About;
