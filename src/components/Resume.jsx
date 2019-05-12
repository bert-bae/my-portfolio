import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';

import data from '../utils/data';
import Jumbotron from './Jumbotron';

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const photo = data.jumboPhotos.resumeJumbo;
    return (
      <div className="App">
        <Jumbotron imageSrc={photo.filepath} photoBy={photo.photographer} imgUrl={photo.link}/>
        <Container className="section-container container-column" fluid={true}>
          <h1 className="mainheader">RESUME</h1>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Journey</h1>
            <p className="content-text">Doggo ipsum very taste wow floofs shoob sub woofer long bois, porgo pupperino. thicc borkdrive. Heckin angery woofer heckin stop it fren shibe most angery pupper I have ever seen, what a nice floof adorable doggo long woofer heckin bork, ur givin me a spook lotsa pats heck. Doge puggo lotsa pats maximum borkdrive fluffer stop it fren, waggy wags lotsa pats aqua doggo heckin good boys doge, floofs big ol pupper long water shoob heckin good boys and girls. Dat tungg tho heckin angery woofer porgo extremely cuuuuuute doge blep, smol sub woofer what a nice floof. Borking doggo smol borking doggo with a long snoot for pats doggo heckin good boys and girls, puggo doge.</p>
          </Col>
          <Col className="subsection bs-column" lg={12} sm={12}>
            <h1 className="subheader">Past Experiences</h1>
            <p className="content-text">Doggo ipsum very taste wow floofs shoob sub woofer long bois, porgo pupperino. thicc borkdrive. Heckin angery woofer heckin stop it fren shibe most angery pupper I have ever seen, what a nice floof adorable doggo long woofer heckin bork, ur givin me a spook lotsa pats heck. Doge puggo lotsa pats maximum borkdrive fluffer stop it fren, waggy wags lotsa pats aqua doggo heckin good boys doge, floofs big ol pupper long water shoob heckin good boys and girls. Dat tungg tho heckin angery woofer porgo extremely cuuuuuute doge blep, smol sub woofer what a nice floof. Borking doggo smol borking doggo with a long snoot for pats doggo heckin good boys and girls, puggo doge.</p>
          </Col>
          <Col className="subsection  bs-column" lg={12} sm={12}>
            <h1 className="subheader">Community</h1>
            <p className="content-text">Doggo ipsum very taste wow floofs shoob sub woofer long bois, porgo pupperino. thicc borkdrive. Heckin angery woofer heckin stop it fren shibe most angery pupper I have ever seen, what a nice floof adorable doggo long woofer heckin bork, ur givin me a spook lotsa pats heck. Doge puggo lotsa pats maximum borkdrive fluffer stop it fren, waggy wags lotsa pats aqua doggo heckin good boys doge, floofs big ol pupper long water shoob heckin good boys and girls. Dat tungg tho heckin angery woofer porgo extremely cuuuuuute doge blep, smol sub woofer what a nice floof. Borking doggo smol borking doggo with a long snoot for pats doggo heckin good boys and girls, puggo doge.</p>
          </Col>
        </Container>
      </div>
    )
  }
}