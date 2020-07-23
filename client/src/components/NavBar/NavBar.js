import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

//main navBar that is used on all pages
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //didnt use routing::: used basic link (a tag) routing
  render() {
    return (
      <nav className="navbar">
        <div className="logo">FlightBooking</div>
        <div className="navbar_item">
          <NavLink exact to="/HomePage">
            Home
          </NavLink>
        </div>
        <div className="navbar_item">
          <NavLink to="/AboutUs">About us</NavLink>
        </div>
        <div className="navbar_item">
          <NavLink to="/ContactUs">Contact us</NavLink>
        </div>
        <div className="navbar_item">
          <NavLink to="/">Log out</NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
