import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './components/Header'
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
          <Header/>
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