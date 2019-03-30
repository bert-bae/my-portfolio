import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Container className="section-container center" fluid={true}>
          <Col className="center" lg={4} md={4} sm={4}>
            <a className="profile-icons" href="https://github.com/bert-bae">
              <span className="fa-stack fa-2x fa-2x">
                <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
                <i className="circle-rotate-slow fab fa-github fa-stack-1x"></i>
              </span>
            </a>
          </Col>
          <Col className="center" lg={4} md={4} sm={4}>
          <a className="profile-icons" href="https://www.linkedin.com/in/bert92/">
            <span className="fa-stack fa-2x fa-2x">
              <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
              <i className="circle-rotate-slow fab fa-linkedin-in fa-stack-1x"></i>
            </span>
          </a>
          </Col>
          <Col className="center" lg={4} md={4} sm={4}>
            <span className="fa-stack fa-2x fa-2x profile-icons">
              <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
              <i className="circle-rotate-slow fas fa-user-circle fa-stack-1x"></i>
            </span>
          </Col>
        </Container>
      </div>
    )
  } 
}