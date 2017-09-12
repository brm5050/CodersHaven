import React from "react";
require("../css/posts.scss");
import Header from "../components/header";
import Footer from "../components/footer";

class Posts extends React.Component {
	// a discussion board tutorial
	// https://www.youtube.com/watch?v=NMiYaaB0-fI
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}
	}

	render() {
		return (
			<div className="container forum-container">
				<div className="header-container">
					<p className="forum-header-lg"> All Posts </p>
				</div>
				<p className="forum-header-sm"> All posts, organized by most recent.</p>
				<table className="table">
					<thead>
						<tr>
							<th className="table-header"> Title </th>
							<th className="table-header"> Author </th>
							<th className="table-header"> Comments </th>
							<th className="table-header"> Date posted </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="table-data" value={this.state.title}> test data </td>
							<td className="table-data" value={this.state.author}> test data </td>
							<td className="table-data" value={this.state.commentAmount}> test data </td>
							<td className="table-data" value={this.state.datePosted}> test data </td>
						</tr>
						<tr>
							<td className="table-data" value={this.state.title}> test data </td>
							<td className="table-data" value={this.state.author}> test data </td>
							<td className="table-data" value={this.state.commentAmount}> test data </td>
							<td className="table-data" value={this.state.datePosted}> test data </td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}


export default Posts;
