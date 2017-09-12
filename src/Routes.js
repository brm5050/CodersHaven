// packages
import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

// components / styles
import SignUp from "./views/signUp";
import Posts from "./views/posts";
import CreateArticle from "./views/createArticle";
import App from "./components/App";

const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Posts}/>
		<Route path="/signup" component={SignUp}/>
		<Route path="/posts/create" component={CreateArticle}/>
	</Route>

)

export default Routes
