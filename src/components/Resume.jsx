import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import DevSkills from './resume/DevSkills';
import Experience from './resume/Experience';

import data from '../utils/data';
import { workExperience, devSkills } from '../utils/resumeData';
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
    const formatDevSkills = devSkills.map((skill, index) => {
      return (
        <DevSkills devSkill={skill} key={"skill" + index}></DevSkills>
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
            {/* <div className="resume-content">
              <div className="resume-header">
                <p className="job-title">Volunteering Title</p>
                <p className="job-duration"><i>Sept 12 - Sept 12, 2019</i></p>
              </div>
              <p className="job-organization">IVHQ<span className="city"><i>Vancouver, BC</i></span></p>
              <div className="responsibilities-container">
                <ul>
                  <li>Responsibility 1</li>
                  <li>Responsibility 2</li>
                  <li>Responsibility 3</li>
                  <li>Responsibility 4</li>
                </ul>
              </div>
            </div> */}
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Journey</h1>
            <p className="content-text">Doggo ipsum very taste wow floofs shoob sub woofer long bois, porgo pupperino. thicc borkdrive. Heckin angery woofer heckin stop it fren shibe most angery pupper I have ever seen, what a nice floof adorable doggo long woofer heckin bork, ur givin me a spook lotsa pats heck. Doge puggo lotsa pats maximum borkdrive fluffer stop it fren, waggy wags lotsa pats aqua doggo heckin good boys doge, floofs big ol pupper long water shoob heckin good boys and girls. Dat tungg tho heckin angery woofer porgo extremely cuuuuuute doge blep, smol sub woofer what a nice floof. Borking doggo smol borking doggo with a long snoot for pats doggo heckin good boys and girls, puggo doge.</p>
          </Col>
          <Col className="subsection  bs-column" lg={12} sm={12}>
            <h1 className="subheader">Interests</h1>
            <p className="content-text">Doggo ipsum very taste wow floofs shoob sub woofer long bois, porgo pupperino. thicc borkdrive. Heckin angery woofer heckin stop it fren shibe most angery pupper I have ever seen, what a nice floof adorable doggo long woofer heckin bork, ur givin me a spook lotsa pats heck. Doge puggo lotsa pats maximum borkdrive fluffer stop it fren, waggy wags lotsa pats aqua doggo heckin good boys doge, floofs big ol pupper long water shoob heckin good boys and girls. Dat tungg tho heckin angery woofer porgo extremely cuuuuuute doge blep, smol sub woofer what a nice floof. Borking doggo smol borking doggo with a long snoot for pats doggo heckin good boys and girls, puggo doge.</p>
          </Col>
        </div>
      </div>
    )
  }
}