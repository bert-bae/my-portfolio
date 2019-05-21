import React from 'react';
import { Container, OverlayTrigger, Popover } from 'react-bootstrap';

export default function SocialLinks() {
  const popover =  (
    <Popover id="contact-popover" title="Contact Information">
      <Container className="contact-container">
        <Container className="section-container container-column">
          <p className="sectionheader">Personal Email</p>
          <a className="content-text" href="mailto:elbert.bae@gmail.com?Subject=Mail%20from%20CodeBert">elbert.bae@gmail.com</a>
        </Container>
        <Container className="section-container container-column">
          <p className="sectionheader">Work Email</p>
          <a className="content-text" href="mailto:elbert@colinkz.com?Subject=Tell%20me%20about%20Colinkz!">elbert@colinkz.com</a>
        </Container>
        <Container className="section-container container-column">
          <p className="sectionheader">Phone</p>
          <p className="content-text">(778)-908-0350</p>
        </Container>
      </Container>
    </Popover>
  )
  return (
    <div className="contact-container">
      <div className="center contact-icon">
        <a className="profile-icons" href="https://github.com/bert-bae">
          <span className="fa-stack">
            <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
            <i className="circle-rotate-slow fab fa-github fa-stack-1x"></i>
          </span>
        </a>
      </div>
      <div className="center contact-icon">
      <a className="profile-icons" href="https://www.linkedin.com/in/bert92/">
        <span className="fa-stack">
          <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
          <i className="circle-rotate-slow fab fa-linkedin-in fa-stack-1x"></i>
        </span>
      </a>
      </div>
      <div className="center contact-icon contact-card">
        <OverlayTrigger 
          trigger="click" 
          placement="top" 
          overlay={popover}>
          <span className="fa-stack profile-icons contact-info">
            <i className="circle-rotate fas fa-circle-notch fa-stack-2x"></i>
            <i className="circle-rotate-slow fas fa-user-circle fa-stack-1x"></i>
          </span>
        </OverlayTrigger>
      </div>
    </div>
  )
}