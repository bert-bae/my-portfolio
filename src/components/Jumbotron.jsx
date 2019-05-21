import React from 'react';
import { Container } from 'react-bootstrap';

export default function Jumbotron({ imageSrc, photoBy, imgUrl }) {
  return (
    <Container className="home-images" fluid>
      <div className="img-overflow">
        <Container className="home-jumbo" fluid style={{backgroundImage: `url(${imageSrc})`}}></Container>
        <a href={imgUrl}>
          <div className="photo-credit">
            <p className="miniheader">Photo by: {photoBy}</p>
            <p className="miniheader">Unsplashed Link</p>
          </div>
        </a>
      </div>
    </Container>
  )
}