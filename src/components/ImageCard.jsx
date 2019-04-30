import React, { Component } from 'react';

export default function ImageCard({title, description, imgSrc, projectUrl}) {
  return (
    <a href={projectUrl} alt="Link to Github Project">
      <div className="card-container">
        <div className="card-overflow">
          <div className="card-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </a>
  )
}