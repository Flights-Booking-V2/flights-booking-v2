import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/signup/signup.js";
import { Signin, PrivateRoute } from "./components/userAuth/userLogin";
import LandingPage from "./components/LandingPage/landingPage.js";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/aboutUs/aboutUs";
import ContactUs from "./components/contactUs/contactUs";
import Ticket from "./components/ticket/ticket";
import ReactCreditCards from "./components/buyTicket/buyTicket";

//main app
//used React routers here to route to the main pages
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Signin" component={Signin} />
            <Route path="/Signup" component={Signup} />
            <PrivateRoute path="/HomePage" component={HomePage} />
            <PrivateRoute path="/AboutUs" component={AboutUs} />
            <PrivateRoute path="/ContactUs" component={ContactUs} />
            <PrivateRoute path="/Ticket" component={Ticket} />
            <PrivateRoute path="/buyTicket" component={ReactCreditCards} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
