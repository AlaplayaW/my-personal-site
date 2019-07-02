import React from 'react';
import '../App.scss';
import './Resume.scss';
import Diagonal from '../components/Diagonal';
// imports of icons
import css from "../assets/technos/css3.svg";
import html from "../assets/technos/html.svg";
import javascript from "../assets/technos/javascript.svg";
import react from "../assets/technos/react.svg";
import node from "../assets/technos/node.svg";
import mySql from "../assets/technos/mySql.svg";
import git from "../assets/technos/git.svg";
import github from "../assets/technos/github.svg";
import bootstrap from "../assets/technos/bootstrap.svg";
import photoshop from "../assets/technos/photoshop.svg";
import illustrator from "../assets/technos/illustrator.svg";
import indesign from "../assets/technos/indesign.svg";
import mac from "../assets/technos/macOs.svg";
import linux from "../assets/technos/linux.svg";
import visualStudioCode from "../assets/technos/visualStudioCode.svg";


function Resume() {
  return (
    <div className="resume">
        <h1>Compétences</h1>
        <div className="card">
          <h2>Environnement de travail (junior)</h2>
          <ul className="ligneA">
            <li><img src={html} alt="html"/><br/>HTML5</li>
            <li><img src={css} alt="css"/><br/>CSS3</li>
            <li><img src={javascript} alt="javascript" /><br/>Javascript</li>
            <li><img src={react} alt="react" /><br/>React</li>
            <li><img src={node} alt="node"/><br/>Node</li>
            <li><img src={mySql} style={{width: "31px", padding: "5px"}} alt="mySql" /><br/>mySQL</li>
            <li><img src={git} style={{width: "29px", padding: "5px"}} alt="git" /><br/>Git</li>
            <li><img src={bootstrap} style={{width: "29px", padding: "5px"}} alt="bootstrap" /><br/>Bootstrap</li>
          </ul>
        </div>
        <div className="card">
          <h2>Outils, Logiciels & Environnements</h2>
          <ul className="ligneB">
            <li><img src={github} alt="github" /><br/>Github</li>
            <li><img src={mac} alt="mac" /><br/>MacOs</li>
            <li><img src={visualStudioCode} alt="visualStudioCode" /><br/>Visual</li>
            <li><img src={linux} alt="linux" /><br/>Linux</li>
            <li><img src={photoshop} alt="photoshop" /><br/>Photoshop</li>
            <li><img src={illustrator} alt="illustrator" /><br/>Illustrator</li>
            <li><img src={indesign} alt="indesign" /><br/>Indesign</li>
          </ul>
        </div>
        <div className="card">
          <h2>Personnelles</h2>
          <ul  className="ligneC">
            <li>Organisation</li>
            <li>Travail en équipe</li>
            <li>Sens des responsabilités</li>
            <li>Flexibilité</li>
          </ul>
        </div>
			<Diagonal />
    </div>
  );
} 

export default Resume;
