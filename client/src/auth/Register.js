import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import registersvg from "./register.jpg";
import "./auth.scss";
import { Container, Form, Button, Divider } from "semantic-ui-react";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
  };

  render() {
    return (
      <div className="white-back">
        <Container>
          <div className="register">
            <div className="register-left">
              <img src={registersvg} alt="register" />
            </div>
            <div className="register-right">
              <h2 className="register-right-title">Join Minor Project</h2>
              <Divider />
              <Form noValidate onSubmit={this.onSubmit}>
                <Form.Input
                  label="Name"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />

                <Form.Input
                  label="Email Address"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    type="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <Form.Input
                    type="password"
                    fluid
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <div className="register-right-bottom">
                  <Button className="button-bg" type="submit">
                    Register
                  </Button>
                  <Link to="/login">Sign in</Link>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Register;
