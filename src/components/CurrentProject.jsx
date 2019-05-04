import React from 'react';
import {} from 'react-bootstrap';

export default function CurrentProject({ imgSrc }) {
  return (
    <div className="current-project-container">
      <h1 className="mainheader">Colinkz Media</h1>
      <div className="highlight-container">
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        <div className="highlight-content">
          <p className="subheader">SUBHEADER</p>
          <p className="content">CONTENT GOES HERE</p>
        </div>
      </div>

      <div className="highlight-container">
        <div className="highlight-content">
          <p className="subheader">SUBHEADER</p>
          <p className="content">CONTENT GOES HERE</p>
        </div>
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
      </div>

      <div className="highlight-container">
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        <div className="highlight-content">
          <p className="subheader">SUBHEADER</p>
          <p className="content">CONTENT GOES HERE</p>
        </div>
      </div>
    </div>
  )
}