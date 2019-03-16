import React, { Component } from 'react';
import './App.css';

import { Button, Container, Row, Col, Navbar, Carousel, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>

        <Carousel slide={false} fade={true}>
          <Carousel.Item>
            <div className="carousel-item-container">
              <Container>
                <Row>
                  <Col lg={8} sm={12}>
                    <h1>Personal Summary</h1>
                  </Col> 
                  <Col lg={4} sm={12}>
                    <h1>Chart of my entire experience including development and non-development</h1>
                  </Col> 
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-container">
              <Container>
                <Row>
                  <Col lg={8} sm={12}>
                    <h1>All skills experience chart (line graph)</h1>
                  </Col> 
                  <Col lg={4} sm={12}>
                    <h1>Development Skills (pie chart)</h1>
                  </Col> 
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-container">
              <Row>
                <Col lg={4} sm={12}>
                  My current position and company details
                </Col>
                <Col lg={8} sm={12}>
                  Information about the company and its website
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-container">
              <Row>
                <Col lg={8} sm={12}>
                  IFrame of my other projects
                </Col>
                <Col lg={4} sm={12}>
                  Tech stack and description of project
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default App;
