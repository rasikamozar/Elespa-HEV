import React from 'react';
import ReactPlayer from 'react-player';
import video from './Database/demo.mp4';
import './Base.css';

export default function Base() {
  return (
    <div className="container">
      <div className="box">
        <ReactPlayer
          url={video}
          controls={true}
          width={600}
          height={400}
          playing={true}
          muted={true}
        />
      </div>
      <div className="tagline">
      
        <h2>Electrifying India !!!</h2>
        <p>ELESPA HEV is a company which makes any on-petrol running vehicle Hybrid Electric. It is way better than complete-electric vehicles as there is no need for charging stations. Our Hybrid Electricsystem has a portable battery, so you can charge it anywhere Simply put - Efficient, Convenient, and Inexpensive.
Our Hybrid Electric System Space between Electric and System.</p>
      </div>
    </div>
  );
}
