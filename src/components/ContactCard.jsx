import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap';


export default function ContactCard() {
  return (
    <Container className="contact-container">
      <h1 className="sectionheader"><b>Contact Information</b></h1>
      <Container className="section-container container-column">
        <p className="sectionheader">Personal Email</p>
        <p className="content-text">elbert.bae@gmail.com</p>
      </Container>
      <Container className="section-container container-column">
        <p className="sectionheader">Work Email</p>
        <p className="content-text">elbert@colinkz.com</p>
      </Container>
      <Container className="section-container container-column">
        <p className="sectionheader">Phone</p>
        <p className="content-text">(778)-908-0350</p>
      </Container>
    </Container>
  )
}