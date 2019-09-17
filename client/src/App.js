import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Footer from "./layout/Footer";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Register from "./auth/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
