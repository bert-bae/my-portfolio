import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap';

export default function HomeQuery() {
  return (
    <Container className="query-container">
      <p className="query-content">SELECT linkedin, github FROM owner WHERE id = 1;</p>
    </Container>
  )
}

export default function AboutQuery() {
  return (
    <Container className="query-container">
      <p className="query-content">SELECT about, </p>
    </Container>
  )
}

export default function ContactQuery() {
  return (
    <Container className="query-container">
      <p className="query-content">SELECT ....</p>
    </Container>
  )
}

export default function ProjectListQuery() {
  return (
    <Container className="query-container">
      <p className="query-content">SELECT ....</p>
    </Container>
  )
}

export default function ProjectQuery() {
  return (
    <Container className="query-container">
      <p className="query-content">SELECT ....</p>
    </Container>
  )
}

export default function ResumeQuery() {
  return (
    <Container className="query-container">
      <p className="query-content">SELECT ....</p>
    </Container>
  )
}