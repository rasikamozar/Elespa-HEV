import React from 'react';
import './Faqs.css';
import F1 from './Database/images/a4.jpg';
import F2 from './Database/images/a5.jpg';
import F3 from './Database/images/a6.jpg';

const Faqs = () => {
  return (
    <div className="card-container">
      <article className="card">
        <img
          className="card__background"
          src={F1}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="2020"
          height="2100"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">What if this Affect the Quality </h2>
            <p className="card__description">
              No, your Vehicle will be even more effective with the modern Electric Module & the traditional Petrol Engine
            </p>
          </div>
          <button className="card__button">Read more</button>
        </div>
      </article>

      <article className="card">
        <img
          className="card__background"
          src={F2}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="2020"
          height="2100"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">Why Should I opt for this?</h2>
            <p className="card__description">
              This is Cost Saving and a much wiser option to opt for as we don't have to choose between Electric and Petrol as we can have both!!
            </p>
          </div>
          <button className="card__button">Read more</button>
        </div>
      </article>

      <article className="card">
        <img
          className="card__background"
          src={F3}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="2020"
          height="2100"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">Why Should I opt for this?</h2>
            <p className="card__description">
              This is Cost Saving and a much wiser option to opt for as we don't have to choose between Electric and Petrol as we can have both!!
            </p>
          </div>
          <button className="card__button">Read more</button>
        </div>
      </article>
    </div>
  );
};

export default Faqs;

