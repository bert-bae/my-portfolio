import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

import Header from './components/Header'
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Footer/>
      </Router>
    );
  }
}

export default App;