import React from "react";
require("../css/createPost.scss");

class CreatePost extends React.Component {

	constructor(props) {
		super(props);
	 	console.log("this.props.createPost", this.props.createPost);
	}
	
	render() {
		return (
			<h1> Hello World </h1>
		)
	}
}

export default CreatePost;
