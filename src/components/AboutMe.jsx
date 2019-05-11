import React from 'react';
import {} from 'react-bootstrap';

export default function AboutMe({ imgSrc }) {
  return (
    <div className="about-me-container">
      <h1 className="mainheader">Hello Hello!</h1>
      <div className="highlight-container">
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        <div className="highlight-content">
          <p className="subheader">About ME</p>
          <p className="content">I am a NodeJS developer with with full-stack knowledge. I have a particular interest in user experience, responsive design, but find it fascinating how data can be analyzed to meet the user and client needs. Having worked in customer service, sales, training, and management in the past, my experience drives me towards creating efficient workflows that improve the experience of organizations and customers.</p>
        </div>
      </div>

      <div className="highlight-container">
        <div className="highlight-content">
          <p className="subheader">My Journey</p>
          <p className="content">I too was once a child... And thought coding was magic. My most notable experience prior to development is management with the YMCA's customer service and sales teams. Having lead and worked in a challenging and fulfilling role motivated me to continue learning about the tools that can and will improve the challenges of a chaotic day-to-day operation. With a background in Psychology and Business from Simon Fraser University, I focus on the experience of users and customers on driving business growth and development. Something that is a core driver in my current development role.</p>
        </div>
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
      </div>

      <div className="highlight-container">
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        <div className="highlight-content">
          <p className="subheader">Present Role</p>
          <p className="content">Community, Connection.</p>
        </div>
      </div>
    </div>
  )
}