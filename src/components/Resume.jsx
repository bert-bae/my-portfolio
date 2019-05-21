import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import DevSkills from './resume/DevSkills';
import Experience from './resume/Experience';

import data from '../utils/data';
import { workExperience, devSkills, volunteerExperience, education, interests } from '../utils/resumeData';
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
    const formatInterests = interests.map((interest, index) => {
      return (
        <li key={"interest" + index}>{interest}</li>
      )
    })

    return (
      <div className="resume-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
        <div className="section-container container-column">
          <h1 className="mainheader">RESUME</h1>
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