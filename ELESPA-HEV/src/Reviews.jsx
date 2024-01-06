import React from 'react';
import './Reviews.css';
import Faqs from './Faqs.jsx';

const Reviews = () => {
  return (
    <>
    <h1 className='Txt'>Customer Experiences!!</h1>
    <br></br>
    <br></br>
      <div className="card-container">
        <main className="l-card">
          <section className="l-card__text">
            <p>This is a comment card appearing above a dotted background, and that's really cool!</p>
          </section>
          <section className="l-card__user">
            <div className="l-card__userImage">
              <img src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto" />
            </div>
            <div className="l-card__userInfo">
              <span>Naruto Uzumaki</span>
              <span>Seventh Hokage</span>
            </div>
          </section>
        </main>

        <main className="l-card">
          <section className="l-card__text">
            <p>This is a comment card appearing above a dotted background, and that's really cool!</p>
          </section>
          <section className="l-card__user">
            <div className="l-card__userImage">
              <img src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto" />
            </div>
            <div className="l-card__userInfo">
              <span>Naruto Uzumaki</span>
              <span>Seventh Hokage</span>
            </div>
          </section>
        </main>
      </div>

      <div className="card-container">
        <main className="l-card">
          <section className="l-card__text">
            <p>This is a comment card appearing above a dotted background, and that's really cool!</p>
          </section>
          <section className="l-card__user">
            <div className="l-card__userImage">
              <img src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto" />
            </div>
            <div className="l-card__userInfo">
              <span>Naruto Uzumaki</span>
              <span>Seventh Hokage</span>
            </div>
          </section>
        </main>

        <main className="l-card">
          <section className="l-card__text">
            <p>This is a comment card appearing above a dotted background, and that's really cool!</p>
          </section>
          <section className="l-card__user">
            <div className="l-card__userImage">
              <img src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto" />
            </div>
            <div className="l-card__userInfo">
              <span>Naruto Uzumaki</span>
              <span>Seventh Hokage</span>
            </div>
          </section>
        </main>
        <Faqs/>
      </div>
    </>
  );
};

export default  Reviews;

