import React from 'react';

export default function ProjectDetail({ title, description, techStack, projectImages}) {
  return (
    <div className="project-details section-container container-column">
      <div className="inner-container">
        <div className="content-description">
          <h1 className="mainheader">{title}</h1>
          <p className="content-text">{description}</p>
        </div>
        <div className="content-tech">
          <h1 className="mainheader">Tech Stack</h1>
          <ul className="content-text">
            {techStack}
          </ul>
        </div>
      </div>
      <div className="content-images">
        <h1 className="mainheader">Images</h1>
        <div className="images-container">
          {projectImages}
        </div>
      </div>
    </div>
  )
}