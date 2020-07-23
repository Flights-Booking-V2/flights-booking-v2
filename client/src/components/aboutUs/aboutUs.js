import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
class AboutUs extends React.Component {
  state = {};
  render() {
    return (
      <div className="about">
        <NavBar />
        <div className="Home">
          <h1>About Us</h1>
          {/* <h1>Flight Booking V2</h1> */}
          <div className="P">
            <h2>Our team is:</h2>
            <h3>Scrum Master: Khaled Abousheikh</h3>
            <h4>Development Team Members:</h4>
            <span>Mohammed Abu Shaaban </span>
            <span>Safaa Alshami </span>
            <span>Nasr Shamalkh </span>
            <span>Anas Abdelwahed </span>

            <h2>"If We Don't Have Trust, We Have Nothing."</h2>
            {/* <h3>
          Flights booking is a simple flights booking application. Allows you to
          pick a flight ticket by choosing current location "city" and
          destination location "city".
        </h3>
        <h2>Summary</h2>
        <p>
          It Helps You Stick to Your flight. Tracking Your Needed flights Can
          Reveal Your Issues It Helps You Meet Your Traveling Objectives.
        </p>
        <h2>Problem</h2>
        <p>
          A simple design app that will allow users to search for current
          flights by detection range dates and have an ordered list with
          information upon required flights.
        </p>
        <h2>How to Get Started</h2>
        <p>
          Simply register a new account and then login.Go to Home page and enjoy
          !!!
        </p>
        <h2>Closing and Call to Action</h2>
        <p>If you like our idea, Please send us your feedback.</p> */}
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
