import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Divider } from "semantic-ui-react";

import loginsvg from "./login.jpg";
import "./auth.scss";

import Navbar from "../layout/Navbar";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    let USERS = JSON.parse(localStorage.getItem("users"));

    console.log(USERS);

    if (
      USERS.find(
        usr => usr.email === user.email && usr.password === user.password
      )
    )
      this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="white-back">
        <Navbar />
        <Container>
          <div className="login">
            <div className="login-left">
              <h2 className="login-left-title">Sign in to Minor Project</h2>

              <Divider />

              <Form onSubmit={this.onSubmit}>
                <Form.Input
                  label="Email Address"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  type="password"
                  label="Password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <br />
                <div className="login-left-bottom">
                  <Button primary type="submit">
                    Sign in
                  </Button>
                  <Link to="/register">Register</Link>
                </div>
              </Form>
            </div>
            <div className="login-right">
              <img src={loginsvg} alt="login" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
