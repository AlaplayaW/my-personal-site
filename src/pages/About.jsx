import React from 'react';
import '../App.scss';
import './About.scss';
import Diagonal from '../components/Diagonal';

function About() {
  return (
    <div className="about">
      <img className="img" src={require("../assets/myPict.jpg")} alt="me" />
      <div className="textArea">
        <h1>À PROPOS</h1>
        <p>Suite à une formation en développement web, je suis à la recherche d'une entreprise qui me permettra de monter en compétences dans le dobodye de la programmation. <br/>En échange, une très grande motivation et l'envie d'en apprendre toujours plus.</p>
        <a href="https://drive.google.com/open?id=1kS_qcs1BJcaWfOHQWTNLB1nUS5r-67lL" target="_blank" rel="noopener noreferrer" download="cvPerrineMartyris.pdf">Télécharger mon CV</a>
      </div>
			<Diagonal />
    </div>
  );
} 

export default About;
