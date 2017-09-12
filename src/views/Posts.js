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
			{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
			{id: 2, title: 'Installation', content: 'You can install React from npm.'}
		];
		var comments = [

		];

		this.state = {articles}
		this.state = {comments}
		console.log("this.state: ", this.state);

	}

	componentDidMount() {
		fetch('/api/getposts')
			.then(res => res.json())
			.then(articles => this.setState({articles}));

		fetch('/api/getcomments')
			.then(res => res.json())
			.then(comments => this.setState({comments}));

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
						<div>
							<h2 className="text-center" key={articles.index}> {articles.title} </h2>
							<p className="text-center"> {articles.body} </p>
							{comments.map(comments => 
								<div className="comments">{comments.body}</div>
							)}
						</div>
					)}
				</div>
			</div>
		)
	}
}


export default Posts;
