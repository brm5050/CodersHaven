import React from "react";
require("./css/body.scss");
import Posts from "./posts";
import Comment from "./comment";



class Body extends React.Component {

	constructor() {
    super();
    this.state = {
      showComment: false
    }
  }

	render() {
		return (
			<div className="container-fluid">
				<Posts />
				<Comment />
			</div>	
		)
	}
}

export default Body;

