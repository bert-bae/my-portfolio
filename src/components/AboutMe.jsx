import React from 'react';
import {} from 'react-bootstrap';

export default function AboutMe({ imgSrc }) {
  return (
    <div className="about-me-container">
      <div className="highlight-container">
        <div className="highlight-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        <div className="highlight-content">
          <p className="subheader">About Me</p>
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
          <p className="content">Community, Connection, Culture <br/><br/> As the main software developer for Colinkz Media, I am responsible for the full-stack maintenance and development of our organization's website. Our team works together to create a cultural platform that will be the future gateway used to improving our understanding of diverse cultures and our community. To learn more about the organization:<a href="https://www.colinkz.com/story" alt="Link to Colinkz Media">visit our site!</a>.</p>
        </div>
      </div>
    </div>
  )
}