import React from "react";
require("./css/body.scss");
import Posts from "./posts";
import Singlepost from "./singlePost";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class Body extends React.Component {

	constructor() {
    super();
    this.state = {
      showComment: false
    }
  }

	render() {
		return (
			<div className="container-fluid">
				<Posts />
				<MuiThemeProvider>
				<Singlepost />
				</MuiThemeProvider>
			</div>	
		)
	}
}

export default Body;

