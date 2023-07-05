import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Loading the attachments...</h2>
        <p>We are selecting the best attachments for your equipment!</p>
    </div>
  );
};

export default Loading;
