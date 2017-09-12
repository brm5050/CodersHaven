// packages
import React from "react";
import { connect } from "react-redux";

// internal files
require("../css/singlePost.scss");
import { userCommentRequest } from "../actions/commentActions";

class SinglePost extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			postComment: ""
		}
	}

	onChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	onSubmit(event) {
    event.preventDefault();
		console.log("onSubmit triggered");
		this.props.userCommentRequest(this.state);
  }

	render() {
		return (

			<div className=" container form-container">
				<form onSubmit={this.onSubmit.bind(this)}>
					<h1>Reply to this post</h1>
					<div className="form-group form-group-custom ">
						<label className="control-label"> Enter your comment: </label>
						<textarea type="text" value={this.state.postComment} onChange={this.onChange.bind(this)} name="postComment" className="form-control" rows="3" placeholder=" Type your comment here!"/>
					</div>
					<div className="form-group">
						<button className="btn btn-custom"> Submit </button>
					</div>
				</form>
			</div>
		)
	}
}
export default connect((state) => {return {} }, {userCommentRequest})(SinglePost);
