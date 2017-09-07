import React, {Component} from "react";
import Header from "./header";
import Form from "./form";
import Body from "./body";
import Footer from "./footer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
				<Body />
				<Footer />
			</div>
		)
	}
}

export default App;