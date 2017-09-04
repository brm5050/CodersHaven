import React from 'react';
require("./css/header.scss");

class Header extends React.Component {
	render() {
		return (
			<div className= "navbar">
				<h3 className="test"> Hello World! </h3>
			</div>	
		)
	}
}

export default Header;