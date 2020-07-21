// import React from 'react';
// import NavBar from '../NavBar/NavBar'

// class ContactUs extends React.Component {
//     state = {

//     }
//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <h1>Contact-us Page</h1>
//             </div>
//         )
//     }
// }
// export default ContactUs;

import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import Navbar from "../NavBar/NavBar";

import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
class ContactUs extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "<YOUR_EMAIL_ID>",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "flightsbookingv2",
      { className: "text-primary" },
      "user_YWb6SpcJUMxwFCBTUZfY2"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div>
        <Navbar />
        {/* <Layout> */}
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formBasicEmail">
            <Label className="text-muted">Email address</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup controlId="formBasicName">
            <Label className="text-muted">Name</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup controlId="formBasicSubject">
            <Label className="text-muted">Subject</Label>
            {/* <Input
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
            /> */}
            <select
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
            >
              <option value="Operating Expenses ">Operating Expenses </option>
              <option value="Financial Expenses">Financial Expenses</option>
              <option value="Extraordinary Expenses">
                Extraordinary Expenses
              </option>
              <option value="Non-Operating Expenses">
                Non-Operating Expenses
              </option>
              <option value="Other">Other</option>
            </select>
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            <Label className="text-muted">Message</Label>
            <Input
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default ContactUs;
