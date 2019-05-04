import React, { Component } from 'react';

import data from '../utils/data';
import Jumbotron from './Jumbotron';
import SocialLinks from './SocialLinks';
import CurrentProject from './CurrentProject';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photo = data.jumboPhotos.homeJumbo;
    return (
      <div className="home-container">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
        <CurrentProject imgSrc={"/images/home-img1.jpg"}/>
        <SocialLinks/>
      </div>
    )
  } 
}