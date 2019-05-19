import React from 'react';

export default function PhotoModal({ imgSrc }) {
  function closeModal(e) {
    let modal = document.getElementById("photo-modal");
    modal.style.display = "none";
  }
  return (
    <div id="photo-modal" className="modal modal-background">
      <div className="modal-content">
        <div className="modal-photo" style={{ backgroundImage: `url("${imgSrc});`}}>
          <div className="modal-close" onClick={(e) => { closeModal(e) }}>X</div>
        </div>
      </div>
    </div>
  )
}