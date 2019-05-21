import React, { Component } from 'react';
import { Pie } from 'react-chartjs';
import { Container, Col } from 'react-bootstrap';

import data from '../utils/data';
import Jumbotron from './Jumbotron';

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photo = data.jumboPhotos.homeJumbo;
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
      percentageInnerCutout : 50, // This is 0 for Pie charts
    
      //Number - Amount of animation steps
      animationSteps : 200,
    
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
      <div className="about-me-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>    
        <Container className="section-container" fluid>
          <Col lg={8} md={6} sm={12}>
            <h1 className="mainheader">ABOUT ME</h1>
            <p className="content-text">Doggo ipsum very taste wow floofs shoob sub woofer long bois, porgo pupperino. thicc borkdrive. Heckin angery woofer heckin stop it fren shibe most angery pupper I have ever seen, what a nice floof adorable doggo long woofer heckin bork, ur givin me a spook lotsa pats heck. Doge puggo lotsa pats maximum borkdrive fluffer stop it fren, waggy wags lotsa pats aqua doggo heckin good boys doge, floofs big ol pupper long water shoob heckin good boys and girls. Dat tungg tho heckin angery woofer porgo extremely cuuuuuute doge blep, smol sub woofer what a nice floof. Borking doggo smol borking doggo with a long snoot for pats doggo heckin good boys and girls, puggo doge.</p>
          </Col> 
          <Col className="chartjs-graph" lg={4} md={6} sm={12}>
            <Pie data={pieData} options={options} width="300" height="250"/>
          </Col> 
        </Container>
        <Container className="section-container" fluid>
          <Col lg={4} md={6} sm={12}>
            <h1 className="mainheader">DEVELOPER SKILLS</h1>
            <Container className="container-row" fluid>
              <ul>
                <li>SQL</li>
                <li>SQL</li>
                <li>SQL</li>
              </ul>
              <ul>
                <li>SQL</li>
                <li>SQL</li>
                <li>SQL</li>
              </ul>
              <ul>
                <li>SQL</li>
                <li>SQL</li>
                <li>SQL</li>
              </ul>
            </Container>
          </Col> 
          <Col className="chartjs-graph skills-container" lg={8} md={6} sm={12}>
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container>
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container> 
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container> 
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container> 
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container> 
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container> 
            <Container className="dev-skill">
              <Pie data={pieData} options={options} width="50" height="50"/>
              <p className="miniheader">SQL</p>
            </Container>
          </Col> 
        </Container>
      </div>
    )
  }
}