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

		];
		const comments = [

		];

		this.state = { articles: articles, comments: comments };
	}

	componentDidMount() {
		fetch('/api/getposts')
			.then(res => res.json())
			.then(articles => {
				this.setState({articles});
				console.log(articles);
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
							<h3 className="text-center" > {articles.author} </h3>
							<h2 className="text-center">  {articles.title} </h2>
							<p className="text-center"> {articles.body} </p>
							<div className="comments">{"the comments should go here"}</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}


export default Posts;
