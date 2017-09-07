import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
// no need for css in this file.

class App extends React.Component {
	render() {
		return (
			<div className= "App">
				<Header />
				<Body />
				<Footer />
			</div>
		)
	}
}

export default App;