
import React, { useState } from "react";
import './style.css';

import skid_steer_img from '../../img/skid_steer.png';
import excavator_img from '../../img/excavator.png';
import logs_img from '../../img/logs.png';
import gallon_img from '../../img/gallon.png';


const CardsModal = ({ step, attach, onCardSelect }) => {
  const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

  const handleCardClick = (index, indexAnswer, answer) => {
    const newSelectedCardIndexes = [...selectedCardIndexes];
    newSelectedCardIndexes[step.step] = index;
    setSelectedCardIndexes(newSelectedCardIndexes);
    onCardSelect(indexAnswer, answer);
  };

  function imageList(str, times) {
    return Array.from({ length: times }, () => str);
  }

  function imagePath(step, attach) {
    if (step.step === 0) {
      return [excavator_img, skid_steer_img];
    }

    let image = attach === 'Excavator' ? excavator_img : skid_steer_img;

    if (step.step === 2) {
      image = gallon_img;
    }

    if (step.step === 3) {
      image = logs_img;
    }
    return imageList(image, step.answers.length);
  }

  function getSizeByStep(step) {
    if (step === 1) {
      return [75, 100, 125];
    }
    return [125, 125, 125];
  }

  return (
    <div className="cardsContainer">
      {step.values.map((value, index) => (
        <div
            key={index}
            onClick={() => handleCardClick(index, step.step, value)}
            className={`card ${selectedCardIndexes[step.step] === index ? 'selected' : ''}`}
        >
          {step.image1 !== false && (
            <div className="imageBox">
              <img
                height={getSizeByStep(step.step)[index]}
                width={getSizeByStep(step.step)[index]}
                src={imagePath(step, attach)[index]}
                alt=""
              />
            </div>
          )}
          <h3>{step.answers[index]}</h3>
          <h4>{step.descriptions[index]}</h4>
        </div>
      ))}
    </div>
  );
};

export default CardsModal;
