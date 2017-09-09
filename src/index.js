import React from "react";
import ReactDOM from "react-dom";
require("./css/index.scss");
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import Form from "./views/form";
import Posts from "./views/posts";
import SinglePost from "./views/SinglePost";
import CreatePost from "./views/CreatePost";
import App from "./components/App";



const Routes = (
	<Route path="/" component={App}>
		<Route path="/posts" component={Posts}/>
		<Route path="/posts/single" component={SinglePost}/>
		<Route path="/posts/create" component={CreatePost}/>
		<IndexRoute component={Form}/>
	</Route>	

)


ReactDOM.render(
	
	<Router history={hashHistory}
	routes={Routes}
	/>
, document.getElementById("App"));
