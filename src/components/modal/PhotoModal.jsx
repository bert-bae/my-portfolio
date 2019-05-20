import React, { Component } from 'react';

export default class PhotoModal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const modal = document.getElementsByClassName('modal-photo')[0];
    const closeModal = (e) => {
      let modal = document.getElementById("photo-modal");
      modal.style.display = "none";
    }
    const nextImage = (e) => {
      let index = modal.dataset.imageIndex + 1;
      let currentImage = document.getElementsByClassName('project-image')[index];
      modal.style.backgroundImage = `url("${currentImage.dataset.imageSrc}")`;
    }
    const prevImage = (e) => {
      let index = modal.dataset.imageIndex - 1;
      let currentImage = document.getElementsByClassName('project-image')[index];
      modal.style.backgroundImage = `url("${currentImage.dataset.imageSrc}")`;
    }
    return (
      <div id="photo-modal" className="modal modal-background">
        <div className="modal-content">
          <div className="modal-photo" data-image-index="null" style={{ backgroundImage: `url("${this.props.imageSrc})`}}>
            <div className="modal-close" onClick={(e) => { closeModal(e) }}>Close</div>
            <div className="modal-next" onClick={(e) => { nextImage(e) }}>Close</div>
            <div className="modal-prev" onClick={(e) => { prevImage(e) }}>Close</div>
          </div>
        </div>
      </div>
    )
  }
}