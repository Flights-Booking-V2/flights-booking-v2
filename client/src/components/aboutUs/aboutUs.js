import React from "react";
import NavBar from "../NavBar/NavBar";

class AboutUs extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <h1>About-us Page</h1>
        <h1>Flight Booking version 2</h1>
        <h2>Our team is:</h2>
        <h3>Scrum Master: Khaled Abousheikh</h3>
        <h3>
          Development Team Members: Safaa Alshami , Anas Abdelwahed , Nasr
          Shamalkh and Mohammed AbuShaaban
        </h3>
        <h3>"If We Don't Have Trust, We Have Nothing."</h3>
        <h3>
          Flights booking is a simple flights booking application. Allows you to
          pick a flight ticket by choosing current location "city" and
          destination location "city".
        </h3>
        <h3>Summary</h3>
        <p>
          It Helps You Stick to Your flight. Tracking Your Needed flights Can
          Reveal Your Issues It Helps You Meet Your Traveling Objectives.
        </p>
        <h3>Problem</h3>
        <p>
          A simple design app that will allow users to search for current
          flights by detection range dates and have an ordered list with
          information upon required flights.
        </p>
        <h3>How to Get Started</h3>
        <p>
          Simply register a new account and then login.Go to Home page and enjoy
          !!!
        </p>
        <h3>Closing and Call to Action</h3>
        <p>If you like our idea, Please send us your feedback.</p>
      </div>
    );
  }
}
export default AboutUs;
