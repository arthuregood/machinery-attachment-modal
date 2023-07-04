import React, { useState } from 'react';
import './style.css';
import talkExpert from '../../services/talkExpert.js';
import modal_steps from '../../config/modal_steps';
import skid_steer_img from '../../img/skid_steer.png';
import excavator_img from '../../img/excavator.png';
import logs_img from '../../img/logs.png';



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

  function imagePath() {
    if (step === 3) {
      return logs_img
    }
    if (attach !== "Excavator") {
      return skid_steer_img
    }
    return excavator_img
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
          <img width={100} height={100} src={imagePath(modal_steps[step])} alt={attach}/>

        </div>
        <div className="modal-footer">
          <div className="underline" onClick={talkExpert}>
            Not sure? Talk to an expert!
          </div>
          <div className="right">
            <div>
              { step !== 0 ? <button onClick={back}> Back </button> : null }
              <button onClick={() => checkAction(modal_steps[step].action)}> Next </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachmentModal;
