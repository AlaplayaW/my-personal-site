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
        <p>Développeuse web en freelance depuis 2019.<br/>Vous souhaitez obtenir un devis pour la réalisation d'un site web sur mesure, du simple site vitrine à une boutique en ligne? <br/>N'hésitez pas à me contacter afin d'obtenir un devis.</p>
      </div>
			<Diagonal />
    </div>
  );
} 

export default About;
