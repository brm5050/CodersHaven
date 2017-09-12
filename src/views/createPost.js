// packages
import React from "react";
import { connect } from "react-redux";

// internal files
require("../css/createPost.scss");
// calling it userArticleRequest because userPostRequest could get confuising
import { userArticleRequest } from "../actions/articleActions";

class CreatePost extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			postTitle: "",
			postBody: ""
		}
	}

	onChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	onSubmit(event) {
    event.preventDefault();
		console.log("onSubmit triggered");
		this.props.userArticleRequest(this.state);
  }

	render() {
		return (
			<div className=" container form-container">
				<form onSubmit={this.onSubmit.bind(this)}>
					<h1> Join the community! </h1>
					<div className="form-group form-group-custom ">
						<label className="control-label"> Post title </label>
						<input type="text" value={this.state.postTitle} onChange={this.onChange.bind(this)} name="postTitle" className="form-control"/>
					</div>
					<div className="form-group form-group-custom ">
						<label className="control-label"> Post body </label>
						<textarea type="text" value={this.state.postBody} onChange={this.onChange.bind(this)} name="postBody" className="form-control" rows="3"/>
					</div>
					<div className="form-group">
						<button className="btn btn-custom"> Submit </button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect((state) => {return {} }, {userArticleRequest})(CreatePost);
