import React from 'react';
import './LoadingScreen.scss';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <span>LOADING…</span>
      <div className="loading-box1">
        <div className="loading-box2"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
