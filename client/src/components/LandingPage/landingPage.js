import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import info_btn from "./form"
class LandingPage extends React.Component {
  state = {};
  render() {
    return (
      <div className="landing-page">
        <h1>Welcome to Flights records</h1>
        {/* <p>Please Sign in</p> */}
        <button className="PTN">
          <Link to="/Signin">Sign In </Link>
        </button>

        {/* <p>Or, if you dont have an account</p> */}
        <br></br>
        <button className="PTN">
          <Link to="/Signup">Sign Up </Link>
        </button>
      </div>
    );
  }
}
export default LandingPage;
