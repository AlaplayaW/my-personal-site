import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {

  const navStyle = {
		color: 'black',
		backgroundColor: 'white'
  };

	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav-links">
        <Link style={navStyle} to="/">
					<li>Home</li>
				</Link>
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<Link style={navStyle} to="/docsredux">
					<li>Redux Docs</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
