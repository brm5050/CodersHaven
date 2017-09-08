import React from "react";
require("./css/posts.scss");

class Posts extends React.Component {

	

	render() {
		return (
			<div className="container forum-container">
				<div className="header-container">
					<p className="forum-header-lg"> All Posts </p>
				</div>
				<p className="forum-header-sm"> All posts, organized by most recent.</p>
				<button type="button" className="btn btn-custom"> Add a comment </button>

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
							<td className="table-data"> test data </td>
							<td className="table-data"> test data </td>
							<td className="table-data"> test data </td>
							<td className="table-data"> test data </td>
						</tr>
						<tr>
							<td className="table-data"> test data </td>
							<td className="table-data"> test data </td>
							<td className="table-data"> test data </td>
							<td className="table-data"> test data </td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}


export default Posts;




			