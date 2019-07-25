import React from 'react';
import { Container } from 'react-bootstrap';

export default function Jumbotron({ imageSrc, photoBy, imgUrl, header }) {
  return (
    <Container className="jumbotron-images" fluid>
      <div className="img-overflow">
        <Container className="jumbo" fluid style={{backgroundImage: `url(${imageSrc})`}}></Container>
        <h1 className="jumbotron-header">{ header }</h1>
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