import React from 'react';
import './Features.css';
import as1 from './Database/images/ph1.jpeg';
import as2 from './Database/images/ph2.jpeg';
import as3 from './Database/images/ph3.jpeg';
const Features = () => {
  return (
    <div className="card-container" style={{ display: 'flex' }}>
        
      <div className="card" style={{ width: '22rem', height : '23rem'}}>
        <img src={as1} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 >Battery</h4>
          <p className="card-text">
As we come with battery mode, it means more rise and less worrying about the price.</p>
        </div>
      </div>
      <div className="card" style={{ width: '22rem', height : '23rem'}}>
        <img src={as2} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 >BLDC Hub motors</h4>
          <p className="card-text">BLDC Hub motors
Use of BLDC Hub motors gives you the comfort and silence we intend to without compromising on the range.</p>
        </div>
      </div>
     
      
      <div className="card" style={{ width: '22rem', height:'23rem'}}>
        <img src={as3} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 >Hybrid Mode</h4>
          <p className="card-text">Out of charge? Don't worry our giod old pertrol tank has got your back. Now we can only run on pertrol and electricity at one time. Run on electric or petrol, if you like it run it on both (Boost Mode).</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Features;
