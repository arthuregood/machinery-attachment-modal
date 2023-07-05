import React, { useState } from 'react';
import './style.css';
import Loading from '../Loading/Loading';
import talkExpert from '../../services/talkExpert.js';
import modal_steps from '../../config/modal_steps';
import CardsModal from '../CardsModal/CardsModal';
import CardsRecommendation from '../CardsRecommendation/CardsRecommendation';
import FindAttachment from './FindAttachment';

const AttachmentModal = (props) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({
    attach: 'Excavator',
    weight: '',
    flow: '',
    length: '',
  });
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [recommended, setRecommended] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const handleCardSelect = (answerIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [Object.keys(prevAnswers)[answerIndex]]: answer,
    }));
    setSelectedCardIndex(answerIndex);
  };

  if (!props.show) {
    return null;
  }

  function back() {
    setStep(step - 1);
    setSelectedCardIndex(null);
  }

  function next() {
    setStep(step + 1);
    setSelectedCardIndex(null);
  }

  function finish() {
    // emulate an async call using setTimeout
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRecommended(true);
    }, 3000);

    setRecommendations(FindAttachment(answers));
  }

  const isCardSelected = selectedCardIndex !== null;
  const isLastStep = step === modal_steps.length - 1;

  if (loading) {
    return (
      <div className="modal">
        <div className="modal-content">
          <Loading />
        </div>
      </div>
    )
  }
  return (
    <div className="modal">
      { !recommended ? (
      <div className="modal-content">
        <div className="modal-header">
          <div className="title">
            <h3>Attachment Finder - Step {step + 1}</h3>
            <p>
              {(answers.attach === 'Excavator'
                ? modal_steps[step].title1
                : modal_steps[step].title2) || modal_steps[step].title}
            </p>
          </div>
          <div className="underline" onClick={props.onClose}>
            Close
          </div>
        </div>
        <div className="modal-body">
          <CardsModal
            step={modal_steps[step]}
            attach={answers.attach}
            onCardSelect={handleCardSelect}
            selectedCardIndex={selectedCardIndex}
          />
        </div>
        <div className="modal-footer">
          <div className="underline" onClick={talkExpert}>
            Not sure? Talk to an expert!
          </div>
          <div className="right">
            {step !== 0 ? (
              <div className="underline" onClick={back}>
                Back
              </div>
            ) : null}
            {isLastStep ? (
              <button
                className="nextButton"
                onClick={finish}
                disabled={!isCardSelected}
              >
                Next
              </button>
            ) : (
              <button className="nextButton" onClick={next} disabled={!isCardSelected}>
                Next
              </button>
            )}
          </div>
        </div>
    </div>) : (
      <div className="modal-content">
        <div className="modal-header">
          <div className="title">
            <h3>{recommendations.length} Wood Splitters match your equipment</h3>
          </div>
          <div className="underline" onClick={props.onClose}>
            Close
          </div>
        </div>
        <div className="modal-body">
          <CardsRecommendation
            recommendations={recommendations}
          />
        </div>
        <div className="modal-footer center">
          <div className="underline" onClick={talkExpert}>
            Not sure? Talk to an expert!
          </div>
        </div>
    </div>
    )
        
      }
    </div>
  );
};

export default AttachmentModal;
