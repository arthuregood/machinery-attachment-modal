import React, { useState } from 'react';
import './App.css';
import talkExpert from './services/talkExpert.js';
import AttachmentModal from './components/AttachmentModal/AttachmentModal';

const App = () => {

  const [show, setShow] = useState(false)

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };


  return (
    <div className="container">
      <button className="button yellow-button" onClick={talkExpert}>
        Talk to an expert today
      </button>
      <button className="button" onClick={openModal}>
        Attachment Finder
      </button>
      <AttachmentModal show={show} onClose={closeModal} />
    </div>
  );
};

export default App;

