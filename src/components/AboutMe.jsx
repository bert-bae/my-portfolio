import React from "react";
import SocialLinks from "./SocialLinks";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="highlight-container">
        <div
          className="highlight-image odd"
          style={{ backgroundImage: `url(images/home-1.jpg)` }}
        ></div>
        <div className="highlight-content">
          <p className="subheader">About Me</p>
          <p className="content">
            My name is Elbert Bae and I am a currently full-stack NodeJS
            developer, but experimenting with other languages on the side. I
            have a particular interest in user experience and responsive design,
            but find it fascinating how data can be analyzed to meet the user
            and client needs. Having worked in customer service, sales,
            training, and management in the past, my experience drives me
            towards creating efficient workflows that improve the experience of
            organizations and customers. Achievable through simple, elegant
            designs, and intuitive user experiences!
          </p>
        </div>
      </div>

      <div className="highlight-container">
        <div className="highlight-content">
          <p className="subheader">My Journey</p>
          <p className="content">
            I too was once a child... And thought coding was magic. My most
            notable experience prior to development is management with the
            YMCA's customer service and sales teams. Having lead and worked in a
            challenging and fulfilling role motivated me to continue learning
            about the tools that can and will improve the challenges of a
            chaotic day-to-day operation. With a background in Psychology and
            Business from Simon Fraser University, I focus on the experience of
            users and customers on driving business growth and development.
            Something that is a core driver in why I began my path into software
            development.
          </p>
        </div>
        <div
          className="highlight-image even"
          style={{ backgroundImage: `url(images/home-2.jpg)` }}
        ></div>
      </div>

      <div className="highlight-container">
        <div
          className="highlight-image odd"
          style={{ backgroundImage: `url(images/home-3.jpg)` }}
        ></div>
        <div className="highlight-content">
          <p className="subheader">Present Role</p>
          <p className="content">
            Market Insight Research <br />
            <br /> As a part of Rival Technologies software engineering team, I
            work alongside market researchers on our market research tool. No
            one enjoys lengthy email surveys, so create a conversational one
            with Rival Technologies application. We create tools for market
            researchers that enable them to engage with the consumers to get
            better insight into their customers.
            <a
              href="https://www.rivaltech.com/"
              alt="Link to Rival Tecnologies"
            >
              Check it out!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
