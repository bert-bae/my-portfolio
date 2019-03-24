import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar sticky="top" expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">CodeBert</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
      </Navbar>
    );
  }
}