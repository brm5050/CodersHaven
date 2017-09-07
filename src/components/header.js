import React from "react";
require("./css/header.scss");

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar-custom navbar navbar-toggleable-md navbar-light bg-faded">
				<img className="codershaven-logo" src="../imgs/coder-shaven2.png" alt="Coders Haven"/>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    	<a className="nav-item-custom" href="#">Sign up </a>
			    	<a className="nav-item-custom" href="#"> Sign in </a>
			    	<a className="nav-item-custom" href="#"> About </a>
			    	<a className="nav-item-custom" href="#"> Home </a>
				</div>
			</nav>
		)
	}
}

export default Header;

