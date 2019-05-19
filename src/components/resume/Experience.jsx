import React, { Component } from 'react';

export default function Experience({ job }) {
  const responsibilities = job.responsibilities.map((item) => {
    return (
      <li>{item}</li>
    )
  })
  return (
    <div className="resume-content">
      <div className="resume-header">
        <p className="job-title">{job.title}</p>
        <p className="job-duration">{job.duration}</p>
      </div>
      <p className="job-organization">{job.organization}<span className="city">{job.city}</span></p>
      <div className="responsibilities-container">
        <ul>
          {responsibilities}
        </ul>
      </div>
    </div>
  )
}