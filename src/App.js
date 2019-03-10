import React, { Component } from 'react';
import './App.css';

import { Button, Container, Navbar, Carousel, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar>

          <Carousel indicators="false">
            <Carousel.Item>
              <div class="carousel-item-container">
                <h1>Hello</h1>
              </div>
            </Carousel.Item>
          </Carousel>
      </div>
    );
  }
}

export default App;
