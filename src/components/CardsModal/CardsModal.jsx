
import React, { useState } from "react";
import './style.css';

import skid_steer_img from '../../img/skid_steer.png';
import excavator_img from '../../img/excavator.png';
import logs_img from '../../img/logs.png';
import gallon_img from '../../img/gallon.png';


const CardsModal = (data) => {

    const [selected, setSelected] = useState(false)

    function handleSelect(){
        setSelected(!selected)
    }

    function imageList(str, times) {
        return Array.from({ length: times }, () => str);
    }
    
    function imagePath(step, attach) {
        if (step.step === 0) {
            return [excavator_img, skid_steer_img]
        }
    
        let image = (attach === "Excavator" ? excavator_img : skid_steer_img)
    
        if (step.step === 2) {
            image = gallon_img
        }
    
        if (step.step === 3) {
            image = logs_img
        }
        return imageList(image, step.answers.length)
    }
    
    function getSizeByStep(step) {
        if (step === 1) {
            return [75, 100, 125];
        }
        return [125, 125, 125];
    }

    return (
        <div className="cardsContainer">
            {data.step.answers.map((answer, index) => (
                <div onClick={handleSelect} className={selected ? "card selected" : "card"}>
                    {
                        data.step.image1 !== false ?
                        <div className="imageBox">
                            <img height={getSizeByStep(data.step.step)[index]} width={getSizeByStep(data.step.step)[index]} src={imagePath(data.step, data.attach)[index]} alt="" />
                            </div> :
                        null
                    }
                    <h3>{answer}</h3>
                    <h4>{data.step.descriptions[index]}</h4>
                </div>
            ))}
        </div>
    )
}

export default CardsModal;