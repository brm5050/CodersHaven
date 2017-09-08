import React, {Component} from "react";
import Header from "./header";
import Form from "../views/form";
import Posts from "../views/posts";
import SinglePost from "../views/singlePost";
import CreatePost from "../views/createPost";
import Footer from "./footer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from "./routes";

// no need for css in this file.
//idk github says this is required for it
injectTapEventPlugin();

class App extends React.Component {

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

	render() {
		return (
			<div className= "App">
				<Header />
				<MuiThemeProvider>
					<Form onChange={fields => this.onChange(fields)} />
				</MuiThemeProvider>	
				<Posts />
				<SinglePost />
				<CreatePost />
				<Footer />
			</div>
		)
	}
}

export default App;

/* sept 7th
make a folder for the components that arent the header, footer and body and name it views.
in there. from the app.js you can have a state that renders different views kind of like what handlebars
does but the react components are your templates. 
*/