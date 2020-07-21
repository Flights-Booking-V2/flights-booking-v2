import React, { Component } from "react";
import "./style.css";
import { login } from './LoginFunc';
import {BrowserRouter ,Router,Route,Link,Switch,Redirect } from 'react-router-dom'

const authintication={
    isLoggedIn : false,
    onAuthintication(){
      this.isLoggedIn=true
    },
    ofAuthintication(){
      this.isLoggedIn=false
    },
    getLoginStatus(){
    return this.isLoggedIn
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authintication.getLoginStatus() === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      signip: "",
      falseSignin: false
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
        email: this.state.email,
        password: this.state.password
    }
    login(user).then(res => {
        if(res) {
            authintication.onAuthintication();
            this.setState({signip: 'sign in successfull'});
            this.props.history.push('/HomePage');
            console.log(res);
        }
    })
    .catch((err) => {
        console.log('Error in logging', err);
        this.setState({falseSignin: true});
    })
  }
  render() {
    return (
      <div>
        <form className="login">
          <h1 className="header">LogIn</h1>
          <h2>{this.state.singip}</h2>
          <label className="email_lab">Email</label>
          <input
            className="email_input input"
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <label className="Password_lab">Password </label>
          <input
            className="password_input input"
            type="password"
            name="password"
            placeholder="Please Enter Your Password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button
            className="button_signin"
            onClick={this.handleSubmit.bind(this)}
          >
            Sign In
          </button>
        </form>
        <div>{this.state.falseSignin ? 'Please Check your info': ''}</div>
      </div>
    );
  }
}

export{

    authintication,
    Signin,
    PrivateRoute,   
  }
