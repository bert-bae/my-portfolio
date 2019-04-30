import React, { Component } from 'react';

export default function ImageCard() {
  let title = "Title goes here";
  let description = "Description goes here";
  return (
    <div className="card-container">
      <div className="card-overflow">
        <div className="card-image"></div>
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}