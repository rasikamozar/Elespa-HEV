import React from 'react';
import './Services.css'


const CardComponent = () => {
  return (
    <div className="cards-container">
      {[1].map((index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '1440px',  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="..." // Replace with your actual image URL
                className="img-fluid rounded-start"
                alt={`Card ${index}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card {index} title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
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
                <h5 className="card-title">Card {index} title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="..." // Replace with your actual image URL
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
                src="..." // Replace with your actual image URL
                className="img-fluid rounded-start"
                alt={`Card ${index}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card {index} title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
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
                <h5 className="card-title">Card {index} title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="..." // Replace with your actual image URL
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
