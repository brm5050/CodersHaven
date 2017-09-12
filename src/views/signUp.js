// packages
import React from "react";
import { connect } from "react-redux";

// internal files
require("../css/form.scss");
import { userSignupRequest } from "../actions/signupActions";

//exporting component so it can render
class SignUp extends React.Component {

  constructor(props) {

    super(props);
    this.state= {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit(event) {
    event.preventDefault();
    // making the props of the userSignupRequest the state of the component were in
    // client side validation video: https://www.youtube.com/watch?v=MOEBvTkHLac&index=9&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY //
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <div className=" container form-container">
        <form onSubmit={this.onSubmit.bind(this)}>
          <h1> Join the community! </h1>
          <div className="form-group">
            <label className="control-label"> Username </label>
            <input type="text" value={this.state.username} onChange={this.onChange.bind(this)} name="username" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="control-label"> Email </label>
            <input type="email" value={this.state.email} onChange={this.onChange.bind(this)} name="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="control-label"> Password </label>
            <input type="password" value={this.state.password} onChange={this.onChange.bind(this)} name="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label className="control-label"> Confirm Password </label>
            <input type="password" value={this.state.passwordConfirm} onChange={this.onChange.bind(this)} name="passwordConfirm" className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn"> Click </button>
          </div>
        </form>
      </div>
    );
  }
}
// using the connect function from redux to grab the userSignupRequest function from signupActions.js
export default connect((state) => {return {} }, {userSignupRequest})(SignUp);
