// packages
import React from "react";
import { connect } from "react-redux";
import axios from "axios";

// internal files
require("../css/style.scss");
// calling it userArticleRequest because userPostRequest could get confuising
import { userArticleRequest } from "../actions/articleActions";

class CreatePost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			form:{
				author: "",
				title: "",
				body: ""
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onSubmit(event) {
	    event.preventDefault();

	    const newForm = {
				author: "Chris",
				title: "Is",
				body: "Judgemental"
			};

		axios.post('/api/newpost', {
		    firstName: 'Fred',
		    lastName: 'Flintstone'
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });


  	}

  	handleChange(event) {
  		const field = event.target.name;
  		const form  = this.state.form;
  		form[field] = event.target.value;
  		this.setState({form});
  	}

	render() {
		return (
			<div className=" container form-container">
				<form onSubmit={this.onSubmit.bind(this)}>
					<h1> Create your post </h1>
					<div className="form-group form-group-custom ">
						<label className="control-label"> Your name </label>
						<input type="text" value={this.state.author} onChange={this.handleChange} name="author" className="form-control"/>
					</div>
					<div className="form-group form-group-custom ">
						<label className="control-label"> Post title </label>
						<input type="text" value={this.state.title} onChange={this.handleChange} name="title" className="form-control"/>
					</div>
					<div className="form-group form-group-custom ">
						<label className="control-label"> Post body </label>
						<textarea type="text" value={this.state.body} onChange={this.handleChange} name="body" className="form-control" rows="3"/>
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
