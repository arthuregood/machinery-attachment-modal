import React, { useState } from 'react';
import './style.css';
import talkExpert from '../../services/talkExpert.js';
import modal_steps from '../../config/modal_steps';
import CardsModal from '../CardsModal/CardsModal';



const AttachmentModal = props => {

  const [step, setStep] = useState(0)

  const [attach, setAttach] = useState("Excavator")

  if (!props.show) {
    return null
  }

  function back() {
    setStep(step-1)
  }

  function next() {
    setStep(step+1)
  }

  function finish() {
    setStep(step+1)
  }

  function checkAction(action) {
    // get string action and return related function
    if (action === "finish") {
      return finish();
    }
    return next();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="title">
            <h3>Attachment Finder - Step {step+1}</h3>
            <p>{(attach === "Excavator" ? modal_steps[step].title1 : modal_steps[step].title2 )|| modal_steps[step].title } </p>
          </div>
          <div className="underline" onClick={props.onClose}>
            Close
          </div>
        </div>
        <div className="modal-body">    
          <CardsModal
            step={modal_steps[step]}
            attach={attach}
          />
        </div>
        <div className="modal-footer">
          <div className="underline" onClick={talkExpert}>
            Not sure? Talk to an expert!
          </div>
          <div className="right">
            { step !== 0 ? <div className="underline" onClick={back}> Back </div> : null }
            <button className="nextButton" onClick={() => checkAction(modal_steps[step].action)}> Next </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachmentModal;
