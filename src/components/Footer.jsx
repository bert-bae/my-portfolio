import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <p className="owner">&copy; 2019 Elbert Bae</p>
        <p className="content">Contact information can be found in the following links.</p>
      </div>
      <SocialLinks></SocialLinks>
    </div>
  )
}