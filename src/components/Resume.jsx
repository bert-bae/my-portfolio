import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs';

import Experience from './resume/Experience';

import data from '../utils/data';
import Jumbotron from './Jumbotron';

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photo = data.jumboPhotos.resumeJumbo;
    let pieData = [
      {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }
    ];
    let options = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,
    
      //String - The colour of each segment stroke
      segmentStrokeColor : "#fff",
    
      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,
    
      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 0, // This is 0 for Pie charts
    
      //Number - Amount of animation steps
      animationSteps : 75,
    
      //String - Animation easing effect
      animationEasing : "easeOutBounce",
    
      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,
    
      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,
      
      //String - A legend template
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
    };

    return (
      <div className="resume-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
        <div className="section-container container-column" fluid={true}>
          <h1 className="mainheader">RESUME</h1>
          <Col className="subsection bs-column" fluid={true}>
            <h1 className="subheader">Developer Skills</h1>
            <Col className="chartjs-graph skills-container">
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div>
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div> 
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div> 
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div> 
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div> 
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div> 
              <div className="dev-skill">
                <Pie data={pieData} options={options} width="50" height="50"/>
                <p className="miniheader">SQL</p>
              </div>
            </Col> 
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Experiences</h1>
            {/* <div className="resume-content">
              <div className="resume-header">
                <p className="job-title">Job Title</p>
                <p className="job-duration">Sept 12 - Sept 12, 2019</p>
              </div>
              <p className="job-organization">CoLinkz Media<span className="city">Vancouver, BC</span></p>
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