import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

import Header from './components/Header'
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import PhotoModal from '../src/components/modal/PhotoModal';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <PhotoModal></PhotoModal>
      </Router>
    );
  }
}

export default App;