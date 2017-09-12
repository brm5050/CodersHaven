import React from "react";
require("../css/style.scss");
import Header from "../components/header";
import Footer from "../components/footer";

class Posts extends React.Component {
	// a discussion board tutorial
	// https://www.youtube.com/watch?v=NMiYaaB0-fI
	constructor(props) {
		super(props);
		const articles = [
			{id: 1, name: "Daniel", title: 'React.js', content: 'I worked on dynamic elements and styling'},
			{id: 2, name: "Chris", title: 'React.js x2', content: 'I worked on dynamic elements and styling as well'},
			{id: 3, name: "Bryan", title: 'AWS', content: 'I set up the AWS server to host our site.'},
			{id: 4, name: "Mike", title: 'Node.js', content: 'I worked on the server with node.js.'}
		];
		var comments = [

		];

		this.state = { articles: articles, comments: comments };
		console.log("this.state: ", this.state);
	}

	componentDidMount() {
		fetch('/api/getposts')
			.then(res => res.json())
			.then(articles => {
				this.setState({articles});
				console.log(articles);
			});

		fetch('/api/getcomments')
			.then(res => res.json())
			.then(comments => {
				this.setState({comments});
				console.log(comments);
			});

	}


	render() {
		let articles = this.state.articles
		console.log("Here are the articles nerd " , articles);
		return (
			<div className="container forum-container">
				<div className="container">
					<h1 className="text-center"> All Posts </h1>
				</div>
				<h2 className="text-center"> All posts, organized by most recent.</h2>
				<div>
					{articles.map(articles =>
						<div id="articleSection" key={articles.id}>
							<h3 className="text-center"> {articles.name} </h3>
							<h2 className="text-center"> {articles.title} </h2>
							<p className="text-center"> {articles.content} </p>
							<div className="comments">{"this.state.comments[0].body"}</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}


export default Posts;
