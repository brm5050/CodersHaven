import React from "react";
require("../css/singlePost.scss");
import Header from "../components/header";
import Footer from "../components/footer";


class SinglePost extends React.Component {

	
	render() {
		return (

			<div className="container comment-container">
				<div className="header-container">
					<p className="comment-header-lg">Reply to this post</p>
				</div>
				<div className="form-group form-group-custom">
					<p className="title-text"> Enter your comment: </p>
			    	<textarea className="form-control" id="comment" rows="3" placeholder="Sample comment"></textarea>
			  	</div>
			  	<button> Hello world </button>
			</div>
		)
	}
}
//change "name of post to an actual posts data"

export default SinglePost;
