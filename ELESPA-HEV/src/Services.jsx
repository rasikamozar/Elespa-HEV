import React from 'react';
import './Services.css'
import S1 from './Database/elespa_images/bg_2.jpg';
import S2 from './Database/images/ph1.jpeg';
import S3 from './Database/images/ph3.jpeg';
import S4 from './Database/images/ph2.jpeg';

const CardComponent = () => {
  return (
    <div className="cards-container">
      {[1].map((index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '1440px',  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={S1} // Replace with your actual image URL
                className="img-fluid rounded-start"
                alt={`Card ${index}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Elespa HEV</h5>
                <p className="card-text">
                ELESPA HEV is a company which makes any on-petrol running vehicle Hybrid Electric. It is way better than complete-electric vehicles as there is no need for charging stations. Our Hybrid Electricsystem has a portable battery, so you can charge it anywhere Simply put - Efficient, Convenient, and Inexpensive.
Our Hybrid Electric System Space between Electric and System
                </p>
                <p className="card-text">
                  <small className="text-body-secondary"></small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {[2].map((index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '1240px',  }}>
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Battery Fitting</h5>
                <p className="card-text">
                  Powerfull as well as safe Battery made up of lithium Ferrosphate that charges only in 2 Hours . Runs 80 Km in just 5 INR in a Single Charge
                </p>
                <p className="card-text">
                  <small className="text-body-secondary"></small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={S2} // Replace with your actual image URL
                className="img-fluid rounded-start"
                alt={`Card ${index}`}
              />
            </div>
          </div>
        </div>
      ))}
      
      {[3].map((index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '1440px',  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={S3} // Replace with your actual image URL
                className="img-fluid rounded-start"
                alt={`Card ${index}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">BLDC Hub Motor</h5>
                <p className="card-text">
                  Motor acts as a Generator and also provided regenerative Braking System.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary"></small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {[4].map((index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '1240px',  }}>
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mode Selection Button</h5>
                <p className="card-text">
                   Easy to switch From Petrol to Battery or Vice versa.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary"></small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={S4} // Replace with your actual image URL
                className="img-fluid rounded-start"
                alt={`Card ${index}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
