import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({ scroll: window.scrollY });
	}

	componentDidMount() {
		const el = document.querySelector("nav");
		this.setState({ top: el.offsetTop, height: el.offsetHeight });
		window.addEventListener("scroll", this.handleScroll);
	}

	componentDidUpdate() {
		this.state.scroll > this.state.top
			? (document.body.style.paddingBottom = `${this.state.height}px`)
			: (document.body.style.paddingBottom = 0);
	}
	render() {
		return (
			<nav className={this.state.scroll < this.state.top 
			? `${styles.noNav}` 
			: `${styles.fixedNav}`}>
				<h3>Logo</h3>
				<ul className={styles.navLinks}>
					<NavLink to="/">
						<li>Home</li>
					</NavLink>
					<NavLink to="/about">
						<li>About</li>
					</NavLink>
					<NavLink to="/docsredux">
						<li>Redux Docs</li>
					</NavLink>
				</ul>
			</nav>
		);
	}
}

export default Nav;
