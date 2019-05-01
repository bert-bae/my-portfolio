import React from 'react';
import { Container } from 'react-bootstrap';

export default function Jumbotron({ imageSrc, photoBy, imgUrl }) {
  return (
    <Container className="home-images" fluid={true}>
      <div className="img-overflow">
        <Container className="home-jumbo" fluid={true} style={{backgroundImage: `url(${imageSrc})`}}></Container>
        <div className="photo-credit">
          <p className="miniheader">Photo by: {photoBy}</p>
          <a href={imgUrl} className="miniheader">Unsplashed Link</a>
        </div>
      </div>
    </Container>
  )
}