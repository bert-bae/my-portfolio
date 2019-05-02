import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';

import data from '../utils/data';
import Jumbotron from './Jumbotron';
import ImageCard from './ImageCard';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photo = data.jumboPhotos.projectJumbo;
    return (
      <div class="projects-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
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
      </div>
    )
  }
}