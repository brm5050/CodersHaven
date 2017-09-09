import React from "react";
require("../css/singlePost.scss");
import Header from "../components/header";
import Footer from "../components/footer";


class SinglePost extends React.Component {

	
	render() {
		return (
			<div className="container comment-container">
				<div className="header-container">
					<p className="comment-header-lg"> Add a comment </p>
				</div>
				<div className="form-group form-group-custom">
					<p className="title-text"> Enter a title: </p>
   					<input type="text" className="form-control" id="title" placeholder="Title"></input>
  				</div>
				<div className="form-group form-group-custom">
					<p className="title-text"> Enter your comment: </p>
			    	<textarea className="form-control" id="comment" rows="3" placeholder="Sample comment"></textarea>
			  	</div>
			  	<button type="button" className="btn btn-custom"> Submit </button>
			</div>
		)
	}
}

export default SinglePost;
