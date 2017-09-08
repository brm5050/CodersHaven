import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Posts from "../views/posts";
import SinglePost from "../views/singlePost";
import CreatePost from "../views/createPost";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// continue here. for some reason the bottom of the file doesnt let you comment...
// https://youtu.be/l9eyot_IXLY?t=3m47s

// this might not work cause its in the react router file. might not need the constructor function.
constructor(props) {
 	super(props);

 	this.state={
 		fields: {}
 	};

	//updating values
	this.onChange = updatedValue => {
		this.setState({
		//if you already have props as an object, and you want to pass it in JSX, 
		//you can use ... as a spread operator to pass the whole props object
			fields: {
				//keeping the original values that are in the fields
				...this.state.fields,
				//updating values that were input into the fields
				...updatedValue
			}
		});
	};

 }

export default = function() {(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact render={[] => <Form/>} />
			<Route path="/posts" exact render={[] => <Posts/>} />
			<Route path="/createpost" exact render={[] => <CreatePost/>} />
			<Route path="/singleepost" exact render={[] => <SinglePost/>} />
		</Switch>
	</BrowserRouter>
)};

