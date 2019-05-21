import React, { Component } from 'react';

export default function Experience({ job }) {
  const responsibilities = job.responsibilities.map((item, index) => {
    return (
      <li key={"res" + index}>{item}</li>
    )
  })
  return (
    <div className="resume-content">
      <div className="resume-header">
        <p className="job-title">{job.title}<span className="company-name">{job.company && ", " + job.company}</span></p>
        <p className="job-duration">{job.duration}</p>
      </div>
      {job.organization || job.address && 
        <p className="job-organization">{job.organization}<span className="city">{job.address}</span></p>
      }
      <div className="responsibilities-container">
        <ul>
          {responsibilities}
        </ul>
      </div>
    </div>
  )
}