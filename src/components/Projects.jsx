import React, { Component } from 'react';

import data from '../utils/data';
import Jumbotron from './Jumbotron';
import ImageCard from './ImageCard';
import ProjectDetail from './ProjectDetail';
import PhotoModal from './modal/PhotoModal';

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
    function showModal(e) {
      let src = e.target.dataset.imageSrc;
      document.getElementsByClassName('modal-photo')[0].style.backgroundImage = `url("${src}")`;
      document.getElementById('photo-modal').style.display = "block";
    }
    const viewProject = (index) => {
      let techSkills = data.projects[index].techStack.map((skill, index) => {
        return (
          <li key={index}>{skill}</li>
        )
      })
      let projectImages = data.projects[index].imgSrc.map((src, index) => {
        return (
          <div className="project-image" data-image-src={src} style={{backgroundImage: `url(${src})`}} key={index} onClick={function(e) { showModal(e); }}></div>
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
      let shortDescription;
      if (project.description.length > 100) {
        shortDescription = project.description.slice(0, 100) + "...";
      }
      return (
        <ImageCard 
          title={project.title} 
          description={shortDescription} 
          imgSrc={project.imgSrc[0]} 
          viewProject={viewProject}
          index={index}
          key={index}/>
      )
    })
    return (
      <div className="projects-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
        <PhotoModal></PhotoModal>
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
          <ProjectDetail 
            title={this.state.title}
            description={this.state.description}
            techStack={this.state.techStack}
            projectImages={this.state.projectImages}
            ></ProjectDetail>
        }
      </div>
    )
  }
}