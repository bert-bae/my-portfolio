import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Container, Popover, OverlayTrigger } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const sqlCode = (
      <Popover id="sql-popover" title="SQL Code">
        <div>hello</div>
      </Popover>
    )
    return (
      <Navbar className="nav-container" sticky="top" expand="lg" variant="light" bg="light">
        <Navbar.Brand className="nav-logo" href="#">CODEBERT</Navbar.Brand>
        <Container className="navigation" fluid={true}>
          <NavLink className="nav-button" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="nav-button" activeClassName="active" to="/projects">Projects</NavLink>
          <NavLink className="nav-button" activeClassName="active" to="/resume">Resume</NavLink>
          <NavLink className="nav-button" activeClassName="active" to="/about">About</NavLink>
        </Container>
        <div className="sql-trigger">
          <OverlayTrigger 
            trigger="click" 
            placement="right" 
            overlay={sqlCode}>
           <p className="miniheader sql">Show SQL</p>
          </OverlayTrigger>
        </div>
      </Navbar>
    );
  }
}