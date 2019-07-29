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
        <p className="texte" >Suite à une formation en développement web, je suis à la recherche d'une entreprise qui me permettra de monter en compétences dans le domaine de la programmation. <br/>En échange, une très grande motivation et l'envie d'en apprendre toujours plus.</p>
      </div>
			<Diagonal />
    </div>
  );
} 

export default About;
