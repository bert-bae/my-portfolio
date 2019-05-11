import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';

import data from '../utils/data';
import Jumbotron from './Jumbotron';
import ImageCard from './ImageCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProject: data.projects[0],
    }
  }
  render() {
    const scrollRef = React.createRef();
    const viewProject = (index) => {
      this.setState({
        viewProject: data.projects[index],
      });
    }

    // Scrolls the project card section
    const scrollCards = (scrollPx, ref) => {
      ref.scrollLeft += scrollPx;
    }

    const photo = data.jumboPhotos.projectJumbo;

    // Pull data from project list and convert to cards
    const projectCards = data.projects.map((project, index) => {
      return (
        <ImageCard 
          title={project.title} 
          description={project.description} 
          imgSrc={project.imgSrc} 
          viewProject={viewProject}
          index={index}
          key={index}/>
      )
    })
    return (
      <div className="projects-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
        <div className="project-cards">
          <div className="scroll-container" ref={scrollRef}>
            { projectCards }
          </div>
          <div className="control right-container" onClick={() => { scrollCards(258, scrollRef.current) }}>
            <i class="arrow right-control"></i>
          </div>
          <div className="control left-container"  onClick={() => { scrollCards(-258, scrollRef.current) }}>
            <i class="arrow left-control"></i>
          </div>
        </div>
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
      </div>
    )
  }
}