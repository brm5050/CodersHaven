import React from "react";
require("./css/body.scss");
import Posts from "./posts";
import SinglePost from "./singlePost";



class Body extends React.Component {

	constructor() {
	    super();
	    this.state = {
	      showComment: false
	    }
  	}

  	// 

	render() {
		return (
			<div className="container-fluid">
				<Posts />
				<SinglePost />
			</div>	
		)
	}
}

export default Body;

