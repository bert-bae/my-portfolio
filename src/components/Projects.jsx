import React, { Component } from 'react';

import { Container, Col } from 'react-bootstrap';

import ImageCard from './ImageCard';

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
        {/* <ImageCard title={"hello"} 
          description={"description"} 
          imgSrc={"/images/home-img1.jpg"} 
          projectUrl={"https://www.github.com"}/> */}
      </Container>
    )
  }
}