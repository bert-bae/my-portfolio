import React from 'react';

export default function ImageCard({title, description, imgSrc, viewProject, index}) {
  return (
    <div className="view-project" onClick={() => { viewProject(index); }} alt="View project details">
      <div className="card-container">
        <div className="card-overflow">
          <div className="card-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  )
}