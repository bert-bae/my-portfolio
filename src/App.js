import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import { Button, Container, Row, Col, Navbar, Carousel, Jumbotron } from 'react-bootstrap';

import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar sticky="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">CodeBert</Navbar.Brand>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
          </Navbar>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;