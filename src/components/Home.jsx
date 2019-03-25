import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Container className="image-container container-row">
          <Col className="container-column" lg={6}>
            <img src="/images/home1.jpg" className="home-image1" alt="Image Part 1"></img>
            <img src="/images/home3.jpg" className="home-image3" alt="Image Part 3"></img>
            <img src="/images/home5.jpg" className="home-image5" alt="Image Part 5"></img>
            <img src="/images/home7.jpg" className="home-image7" alt="Image Part 7"></img>
          </Col>
          <Col className="container-column" lg={6}>
            <img src="/images/home2.jpg" className="home-image2" alt="Image Part 2"></img>
            <img src="/images/home4.jpg" className="home-image4" alt="Image Part 4"></img>
            <img src="/images/home6.jpg" className="home-image6" alt="Image Part 6"></img>
            <img src="/images/home8.jpg" className="home-image8" alt="Image Part 8"></img>
          </Col>
        </Container>
        <Container className="section-container center" fluid={true}>
          <Col className="center" lg={4} md={4} sm={4}>
            <a href="https://github.com/bert-bae">
              <span className="fa-stack fa-2x fa-2x">
                <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                <i className="circle-rotate-slow fab fa-github fa-stack-1x"></i>
              </span>
            </a>
          </Col>
          <Col className="center" lg={4} md={4} sm={4}>
          <a href="https://www.linkedin.com/in/bert92/">
            <span className="fa-stack fa-2x fa-2x">
              <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
              <i className="circle-rotate-slow fab fa-linkedin-in fa-stack-1x"></i>
            </span>
          </a>
          </Col>
          <Col className="center" lg={4} md={4} sm={4}>
            <span className="fa-stack fa-2x fa-2x">
              <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
              <i className="circle-rotate-slow fas fa-user-circle fa-stack-1x"></i>
            </span>
          </Col>
        </Container>
      </div>
    )
  } 
}