import React from "react";
import "../App.scss";
import "./Portfolio.scss";

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>PORTFOLIO</h1>
            <div className="projects">
                <div className="card">
                    <div className="image">
                        <a
                            href="https://perrinemartyris.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src={require("../assets/portfolio/MonSite.png")}
                                alt="mon site"
                            />
                            <p>En cours de construction.</p>
                        </a>
                    </div>
                    <div className="body">
                        <h3>Mon site</h3>
                        <p>(projet personnel)</p>
                        <div className="buttons">
                            <a
                                className="button"
                                href="https://perrinemartyris.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                            </a>
                            <a
                                className="button"
                                href="https://github.com/AlaplayaW/my-personal-site"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                        <div className="technos">
                            <ul>
                                <li>React</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <a href="https://up-day.web.app" target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src={require("../assets/portfolio/UpDay.png")}
                                alt="upday"
                            />
                            <p>
                                Calendrier mictionnel, version mobile. <br/>
                                Utilisateurs: patients atteints
                                d'incontinence.
                            </p>
                        </a>
                    </div>
                    <div className="body">
                        <h3>Up Day Mobile</h3>
                        <p>(projet collectif réel)</p>
                        <div className="buttons">
                            <a className="button"
                               href="https://up-day.web.app"
                               target="_blank"
                               rel="noopener noreferrer">
                                Site
                            </a>
                            <a
                                className="button"
                                href="https://github.com/AlaplayaW/up-day-mobile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                        <div className="technos">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Sass</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <a href="https://up-day-admin.web.app" target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src={require("../assets/portfolio/UpDayAdmin.png")}
                                alt="upday"
                            />
                            <p>
                                Back-Office du Up Day. <br/>
                                Utilisateurs: professionnels médicaux.
                            </p>
                        </a>
                    </div>
                    <div className="body">
                        <h3>Up Day Admin</h3>
                        <p>(projet collectif réel)</p>
                        <div className="buttons">
                            <a
                                className="button"
                                href="https://up-day-admin.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                            </a>
                            <a
                                className="button"
                                href="https://github.com/AlaplayaW/up-day-admin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                        <div className="technos">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Semantic</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <a href="https://yukids.netlify.com" target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src={require("../assets/portfolio/Yukids.png")}
                                alt="yukids"
                            />
                            <p>
                                Inspiration du site Yuka. <br/>
                                Utilisateurs: enfants.
                            </p>
                        </a>
                    </div>
                    <div className="body">
                        <h3>Yukids</h3>
                        <p>(projet collectif fictif)</p>
                        <div className="buttons">
                            <a
                                className="button"
                                href="https://yukids.netlify.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                            </a>
                            <a
                                className="button"
                                href="https://github.com/AlaplayaW/wcs-project2-Yuka"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                        <div className="technos">
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <a href="https://rmt-agroforesteries.fr" target="_blank"
                        rel="noopener noreferrer">
                            <img
                                src={require("../assets/portfolio/RmtAgro.jpg")}
                                alt="RMT Agroforesteries"
                            />
                            <p>
                            Le RMT AgroforesterieS est un réseau de partenaires professionnels rassemblés autour de la thématique de l’agroforesterie.
                            </p>
                        </a>
                    </div>
                    <div className="body">
                        <h3>RMT Agroforesteries</h3>
                        <p>(commande client)</p>
                        <div className="buttons">
                            <a
                                className="button"
                                href="https://rmt-agroforesteries.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                            </a>
                        </div>
                        <div className="technos">
                            <ul>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <a href="https://domassocies.com" target="_blank"
                        rel="noopener noreferrer">
                            <img
                                src={require("../assets/portfolio/DomAssocies.jpg")}
                                alt="domassocies"
                            />
                            <p>
                                Site pour un cabinet d'avocats.
                            </p>
                        </a>
                    </div>
                    <div className="body">
                        <h3>Dom & Associés</h3>
                        <p>(commande client)</p>
                        <div className="buttons">
                            <a
                                className="button"
                                href="https://domassocies.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                            </a>
                        </div>
                        <div className="technos">
                            <ul>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
