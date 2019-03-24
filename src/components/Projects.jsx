import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Button, Container, Row, Col, Navbar, Carousel, Jumbotron } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="section-container container-column" fluid={true}>
        <h1 className="mainheader">PROJECTS</h1>
        <Container className="project-container container-row">
          <Col lg={4} sm={12}>
            <p className="subheader">Project Name</p>
          </Col>
          <Col lg={4} sm={12}>
            <p className="subheader">Tech Stack</p>
          </Col>
          <Col lg={4} sm={12}>
            <p className="subheader">Images</p>
            <p className="miniheader">Github URL</p>
          </Col>
        </Container>
      </Container>
    )
  }
}