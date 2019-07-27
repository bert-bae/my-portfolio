import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import DevSkills from './resume/DevSkills';
import Experience from './resume/Experience';
import Project from './resume/Project';

import data from '../utils/data';
import { workExperience, devSkills, volunteerExperience, education, interests, aboutMe, contactInfo, projects } from '../utils/resumeData';
import Jumbotron from './Jumbotron';

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photo = data.jumboPhotos.resumeJumbo;
    const formatWorkExp = workExperience.map((job, index) => {
      return (
        <Experience job={job} key={"exp" + index}/>
      );
    })
    const formatVolunteerExp = volunteerExperience.map((job, index) => {
      return (
        <Experience job={job} key={"vol" + index}/>
      );
    })
    const formatDevSkills = devSkills.map((skill, index) => {
      return (
        <DevSkills devSkill={skill} key={"skill" + index}></DevSkills>
      )
    })
    const formatEducation = education.map((school, index) => {
      return (
        <Experience job={school} key={"school" + index}/>
      )
    })
    const formatProjects = projects.map((project, index) => {
      return (
        <Project project={project} key={"project" + index}/>
      )
    })
    const formatInterests = interests.map((interest, index) => {
      return (
        <li key={"interest" + index}>{interest}</li>
      )
    })

    return (
      <div className="resume-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link} header={data.jumboPhotos.resumeJumbo.header}/>
        <div className="section-container container-column">
          <Col className="subsection bs-column">
            <h1 className="resume-name">Elbert Bae</h1>
            <div className="resume-contact-grid">
              <div className="resume-contact">
                <p className="contact-text">
                  <span className="fa-stack">
                    <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                    <i className="circle-rotate-slow fas fa-home fa-stack-1x"></i>
                  </span>
                  <label>{contactInfo.address}</label>
                </p>
                <p className="contact-text">
                  <span className="fa-stack">
                    <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                    <i className="circle-rotate-slow far fa-envelope fa-stack-1x"></i>
                  </span>
                  <label>{contactInfo.email}</label>
                </p>
                <p className="contact-text">
                  <span className="fa-stack">
                    <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                    <i className="circle-rotate-slow fas fa-phone fa-stack-1x"></i>
                  </span>
                  <label>{contactInfo.number}</label>
                </p>
                <a href={contactInfo.website} target="_blank" className="contact-text">
                  <span className="fa-stack">
                    <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                    <i className="circle-rotate-slow fab fa-chrome fa-stack-1x"></i>
                  </span>
                  <label className="link">Website</label>
                </a>
                <a href={contactInfo.github} target="_blank" className="contact-text">
                  <span className="fa-stack">
                    <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                    <i className="circle-rotate-slow fab fa-github fa-stack-1x"></i>
                  </span>
                  <label className="link">GitHub Profile</label>
                </a>
                <a href={contactInfo.linkedin} target="_blank" className="contact-text">
                  <span className="fa-stack">
                    <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                    <i className="circle-rotate-slow fab fa-linkedin-in fa-stack-1x"></i>
                  </span>
                  <label className="link">LinkedIn Profile</label>
                </a>
              </div>
              <div className="resume-about-me">
                <h1 className="subheader">About Me</h1>
                <p className="about-me">{ aboutMe }</p>
              </div>
            </div>
          </Col>
          <Col className="subsection bs-column">
            <h1 className="subheader">Developer Skills</h1>
            <Col className="chartjs-graph skills-container">
              {formatDevSkills}
            </Col> 
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Experiences</h1>
            {formatWorkExp}
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Projects</h1>
            {formatProjects}
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Volunteer Experience</h1>
            {formatVolunteerExp}
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Education</h1>
            {formatEducation}
          </Col>
          <Col className="subsection  bs-column" lg={12} sm={12}>
            <h1 className="subheader">Interests</h1>
            <ul>
              {formatInterests}
            </ul>
          </Col>
        </div>
      </div>
    )
  }
}