import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import HomePage from "./components/HomePage/HomePage.js";
import Signup from "./components/signup/signup.js";
import Signin from "./components/signin/signin.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
//main app
//used React routers here to route to the main pages
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
