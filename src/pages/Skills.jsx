import React from "react";
import "../App.scss";
import "./Skills.scss";
// import Diagonal from "../components/Diagonal";
// imports of icons
import css from "../assets/technos/css3.svg";
import html from "../assets/technos/html.svg";
import javascript from "../assets/technos/javascript.svg";
import react from "../assets/technos/react.svg";
import node from "../assets/technos/node.svg";
import mySql from "../assets/technos/mysql.svg";
import git from "../assets/technos/git.svg";
import github from "../assets/technos/github.svg";
import bootstrap from "../assets/technos/bootstrap.svg";
import photoshop from "../assets/technos/photoshop.svg";
import illustrator from "../assets/technos/illustrator.svg";
import indesign from "../assets/technos/indesign.svg";
import sass from "../assets/technos/sass.svg";
import trello from "../assets/technos/trello.svg";
import firebase from "../assets/technos/firebase.svg";
import vsCode from "../assets/technos/vsCode.svg";
import redux from "../assets/technos/redux.svg";
import sequelize from "../assets/technos/sequelize.svg";
import semantic from "../assets/technos/semantic.png";
import scrum from "../assets/technos/scrum.svg";
import postgresql from "../assets/technos/postgresql.svg";

function Skills() {
	return (
		<div className="skills">
			<ul className="hexGrid">
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={html} alt="html" />
							<h3>HTML5</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={css} alt="css" />
							<h3>CSS3</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={sass} alt="sass" />
							<h3>Sass</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={javascript} alt="javascript" />
							<h3>Javascript</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={react} alt="react" />
							<h3>React</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={node} alt="node" />
							<h3>Node</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink" style={{backgroundColor:"#9ae6fc"}}>
							<img src={redux} alt="redux" style={{width:"40px"}}/>
							<h3>Redux</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink" style={{backgroundColor:"#000"}}>
							<img src={sequelize} alt="sequelize" style={{width:"40px"}}/>
							<h3>Sequelize</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink" style={{backgroundColor:"#000"}}>
							<img src={postgresql} alt="postgresql" style={{width:"40px"}}/>
							<h3>PostgreSql</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={semantic} alt="semantic" />
							<h3>Semantic</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={mySql} alt="mySql" />
							<h3>mySQL</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={git} alt="git" />
							<h3>Git</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink" style={{backgroundColor:"#24bcd4"}}>
							<img src={firebase} alt="firebase" style={{width:"50px"}}/>
							<h3>Firebase</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={bootstrap} alt="bootstrap" />
							<h3>Bootstrap</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={github} alt="github" />
							<h3>Github</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={trello} alt="trello" />
							<h3>Trello</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink" style={{backgroundColor:"#292b28"}}>
							<img src={vsCode} alt="vsCode" style={{width:"30px"}}/>
							<h3>VSCode</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink" style={{backgroundColor:"#bfbfbf"}}>
							<img src={scrum} alt="scrum" style={{width:"35px"}}/>
							<h3>Scrum</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={photoshop} alt="photoshop" />
							<h3>Photoshop</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={illustrator} alt="illustrator" />
							<h3>Illustrator</h3>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<img src={indesign} alt="indesign" />
							<h3>InDesign</h3>
						</div>
					</div>
				</li>
			</ul>

			{/*
			<div className="perso">
			<h1>COMPÉTENCES</h1>
				<h2>Techniques <span>+</span> Personnelles</h2>
				<ul className="hexGrid perso">
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<p>Organisation</p>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<p>Travail en équipe</p>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<p>Responsable</p>
						</div>
					</div>
				</li>
				<li className="hex">
					<div className="hexIn">
						<div className="hexLink">
							<p>Adaptabilité</p>
						</div>
					</div>
				</li>
				</ul>
			</div>
			<Diagonal />
	*/}

	</div>

	);
}

export default Skills;
