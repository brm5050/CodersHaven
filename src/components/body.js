import React from "react";
require("./css/body.scss");
import Posts from "./posts";
import Comment from "./comment";


class Body extends React.Component {



	render() {
		return (
			<div className="container">
				<Posts />
				<Comment />
			</div>	
		)
	}
}

export default Body;

