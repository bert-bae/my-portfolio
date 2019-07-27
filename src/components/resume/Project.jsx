import React from 'react';

export default function Project({ project }) {
  const stack = project.techStack.map((tech) => {
    return (
      <li>{tech}</li>
    )
  })
  return (
    <div className="resume-content">
      <div className="resume-header">
        <p className="project-title">{project.title}<a className="link-to-repo" href={project.projectUrl}>Github Repo</a></p>
      </div>
      <div className="project-details-container">
        <div className="project-description">
          <p className="sectionheader">Description</p>
          <p className="content">{project.description}</p>
        </div>
        <div className="project-tech">
          <p className="sectionheader">Tech Stack</p>
          <ul className="content">{stack}</ul>
        </div>
      </div>
    </div>
  )
}