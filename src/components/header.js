import React from "react";
require("../css/header.scss");

class Header extends React.Component {

	constructor(props) {
	 	super(props);
	 	// setting the initial state to false
	 	this.state={
	 		createPost: false
	 	};

	 	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// on click the state is set to true. in the render section, there is a handle on the create post button
	 	this.setState({createPost: true});
	}

	render() {
		return (
			<nav className="navbar-custom navbar navbar-toggleable-md navbar-light bg-faded">
				<img className="codershaven-logo" src="../imgs/coder-shaven2.png" alt="Coders Haven"/>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    	<a className="nav-item-custom" href="#"> Sign up / Sign in </a>
			    	<a className="nav-item-custom" onClick={this.handleClick}> Create Post </a>
			    	<a className="nav-item-custom" href="#"> About </a>
			    	<a className="nav-item-custom" href="#"> Home </a>
				</div>
			</nav>
		)
	}
}
// now you have to make a function in the createPost.js to make it show
export default Header;

// look into react-router
