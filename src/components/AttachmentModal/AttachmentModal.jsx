import React from 'react';
import './style.css';

const AttachmentModal = props => {

  if (!props.show) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="title">
            <h3>Título do Modal</h3>
            <p>Subtítulo do Modal</p>
          </div>
          <div className="underline" onClick={props.onClose}>
            Close
          </div>
        </div>
        <div className="modal-body">
          content
        </div>
        <div className="modal-footer">
          <div className="underline">
            Not sure? Talk to an expert!
          </div>
          <div className="right">
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachmentModal;
