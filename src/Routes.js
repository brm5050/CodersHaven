// packages
import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

// components / styles
import SignUp from "./views/signUp";
import Posts from "./views/posts";
import SinglePost from "./views/SinglePost";
import CreatePost from "./views/CreatePost";
import App from "./components/App";

const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Posts}/>
		<Route path="/signup" component={SignUp}/>
		<Route path="/posts/single" component={SinglePost}/>
		<Route path="/posts/create" component={CreatePost}/>
	</Route>

)

export default Routes
