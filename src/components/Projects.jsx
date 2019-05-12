import React, { Component } from 'react';

import data from '../utils/data';
import Jumbotron from './Jumbotron';
import ImageCard from './ImageCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      techStack: null,
      projectImages: null,
    }
  }
  
  render() {
    const scrollRef = React.createRef();
    const photo = data.jumboPhotos.projectJumbo;

    // Clicking on a card... trigger state change
    const viewProject = (index) => {
      let techSkills = data.projects[index].techStack.map((skill, index) => {
        return (
          <li key={index}>{skill}</li>
        )
      })
      let projectImages = data.projects[index].imgSrc.map((src, index) => {
        return (
          <div className="project-image" style={{backgroundImage: `url(${src})`}} key={index}></div>
        )
      });
      this.setState({
        title: data.projects[index].title,
        description: data.projects[index].description,
        techStack: techSkills,
        projectImages: projectImages,
      });
    }

    // Scrolls the project card section
    const scrollCards = (scrollPx, ref) => {
      ref.scrollLeft += scrollPx;
    }

    // Pull data from project list and convert to cards
    const projectCards = data.projects.map((project, index) => {
      return (
        <ImageCard 
          title={project.title} 
          description={project.description} 
          imgSrc={project.imgSrc[0]} 
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
            <i className="arrow right-control"></i>
          </div>
          <div className="control left-container"  onClick={() => { scrollCards(-258, scrollRef.current) }}>
            <i className="arrow left-control"></i>
          </div>
        </div>
        {!this.state.title && 
          <div className="project-details section-container container-column">
            <h3 style={{textAlign: "center"}}>Click a card to view project details.</h3>
          </div>        
        }
        {this.state.title &&
          <div className="project-details section-container container-column">
            <div className="inner-container">
              <div className="content-description">
                <h1 className="mainheader">{this.state.title}</h1>
                <p className="content-text">{this.state.description}</p>
              </div>
              <div className="content-tech">
                <h1 className="mainheader">Tech Stack</h1>
                <ul className="content-text">
                  {this.state.techStack}
                </ul>
              </div>
            </div>
            <div className="content-images">
              <h1 className="mainheader">Images</h1>
              <div className="images-container">
                { this.state.projectImages }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}