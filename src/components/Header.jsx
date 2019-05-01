import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Container, Popover, OverlayTrigger } from 'react-bootstrap';
import data from '../utils/data';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sql: null,
    }
  }

  componentDidMount = () => {
    let page = document.querySelector('.nav-button.active').text.toLowerCase();
    this.setState({
      sql: data[page]
    })
  }

  render() {
    const getScrollPos = () => {
      let header = document.getElementById('main-nav');
      let scrolled = true;
      let position;
      function scroll() {
        if (scrolled) {
          scrolled = false;
          position = document.body.scrollTop || document.documentElement.scrollTop;
          setTimeout(() => {
            scrolled = true;
          }, 100);
        }
      }
      scroll();
      if (position > 100) {
        header.className = "nav-container scrolled";
      } else {
        header.className = "nav-container";
        
      }
    }
    window.addEventListener('scroll', getScrollPos, true);

    const sqlCode = (
      <Popover id="sql-popover" title="SQL Code">
        <div>{this.state.sql}</div>
      </Popover>
    )
    const pageIndicator = (page) => {
      this.setState({
        sql: data[page] || "Not Available",
      })
    }

    return (
      <Navbar id="main-nav" className="nav-container" sticky="top" expand="lg" variant="light" bg="light">
        <Navbar.Brand className="nav-logo" href="#">CODEBERT</Navbar.Brand>
        <Container className="navigation">
          <NavLink className="nav-button" onClick={() => { pageIndicator("home")}} exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="nav-button" onClick={() => { pageIndicator("projects")}} activeClassName="active" to="/projects">Projects</NavLink>
          <NavLink className="nav-button" onClick={() => { pageIndicator("resume")}} activeClassName="active" to="/resume">Resume</NavLink>
          <NavLink className="nav-button" onClick={() => { pageIndicator("about")}} activeClassName="active" to="/about">About</NavLink>
        </Container>
        <OverlayTrigger 
          trigger={['click']} // Hover for desktop, click for mobile
          placement="right" 
          overlay={sqlCode}>
          <div className="sql-trigger">
           <p className="miniheader sql">SQL Query</p>
          </div>
        </OverlayTrigger>
      </Navbar>
    );
  }
}