import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Button from "../Button.js";
import "./Navbar.scss";

class Navbar extends Component {
  // state = { auth: true };

  // componentDidMount() {
  //   const path = window.location.pathname;
  //   if (path === "/" || path === "/register" || path === "/login") {
  //     this.setState({ auth: false });
  //   } else this.setState({ auth: true });
  // }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    let auth = this.props.auth ? true : false;
    return (
      <section className="navbar-container">
        <Container>
          <nav className="navbar">
            <div className="navbar-left">
              <Link to="/">Minor Project</Link>
              {/* <Link to="/profiles">Developers</Link> */}
            </div>

            <div className="navbar-right">
              {!auth && (
                <div>
                  <Link to="/register">Join now</Link>
                  <Button
                    to="/login"
                    color="#ae123a"
                    background="white"
                    content="Sign in"
                  />
                </div>
              )}
              {auth && (
                <div>
                  <Button
                    to="/"
                    color="#294f6d"
                    background="white"
                    content="Logout"
                  />
                </div>
              )}
            </div>
          </nav>
        </Container>
      </section>
    );
  }
}

export default Navbar;
