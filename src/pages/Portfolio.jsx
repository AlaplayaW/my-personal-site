import React from "react";
import "../App.scss";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="projects">
          <div className="card">
              <h3>Yukids</h3>
              <div className="image">
                <a href="https://yukids.netlify.com">
                    <img
                      src={require("../assets/portfolio/Yukids.png")}
                      alt="yukids"
                    />
                    <p>Inspiration du site Yuka mais version enfant</p>
                </a>
              </div>
              <div className="buttons">
                <a
                    className="button"
                    href="https://yukids.netlify.com"
                >
                    Site
                </a>
                <a
                    className="button"
                    href="https://github.com/AlaplayaW/wcs-project2-Yuka"
                >
                    Github
                </a>
              </div>
          </div>
          <div className="card">
              <h3>Up Day Mobile</h3>
              <div className="image">
                <a href="https://up-day.web.app">
                    <img
                      src={require("../assets/portfolio/UpDay.png")}
                      alt="upday"
                    />
                    <p>Calendrier mictionnel, version mobile</p>
                </a>
              </div>
              <div className="buttons">
                <a className="button" href="https://up-day.web.app">
                    Site
                </a>
                <a
                    className="button"
                    href="https://github.com/AlaplayaW/up-day-mobile"
                >
                    Github
                </a>
              </div>
          </div>
          <div className="card">
              <h3>Up Day Admin</h3>
              <div className="image">
                <a href="https://up-day-admin.web.app">
                    <img
                      src={require("../assets/portfolio/UpDayAdmin.png")}
                      alt="upday"
                    />
                    <p>Côté administration du site</p>
                </a>
              </div>
              <div className="buttons">
                <a
                    className="button"
                    href="https://up-day-admin.web.app"
                >
                    Site
                </a>
                <a
                    className="button"
                    href="https://github.com/AlaplayaW/up-day-admin"
                >
                    Github
                </a>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;
