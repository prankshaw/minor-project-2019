import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Button from "../Button.js";
import "./Navbar.scss";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <section className="navbar-container">
        <Container>
          <nav className="navbar">
            <div className="navbar-left">
              <Link to="/">Minor Project</Link>
              {/* <Link to="/profiles">Developers</Link> */}
            </div>

            <div className="navbar-right">
              <div>
                <Link to="/register">Join now</Link>
                <Button
                  to="/login"
                  color="#ae123a"
                  background="white"
                  content="Sign in"
                />
              </div>
            </div>
          </nav>
        </Container>
      </section>
    );
  }
}

export default Navbar;
