import React from "react";
require("../css/form.scss");
//importing the textfield for material ui

//exporting component so it can render
class Form extends React.Component {

  
//updating state of the input fields within the sign up form 
//onChange function passes event back that is entered. targeting value to update state
//
  render() {
    return (
      <div className=" container form-container">
        <form>
          <h2> Hello </h2>
          <h3> World </h3>
          <button> click </button>
          <h1>Already a member?</h1>
          <h2> Hello </h2>
          <h3> World </h3>
          <button> click </button>
        </form>
      </div>
    );
  }
}

export default Form;


