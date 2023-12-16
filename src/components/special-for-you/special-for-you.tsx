import React, { TouchEventHandler, useEffect, useState } from 'react';
import { createSpecials } from '../../mocks/workouts';
import './css/style.css';
import SpecialForYouSlide from './items/special-for-you-slide/special-for-you-slide';

function SpecialForYou(): JSX.Element {
  const [items, setItems] = useState(createSpecials(5));
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(0);
  const prevItemIndex = slide - 1 < -1 ? -1 : slide - 1;
  const nextItemIndex = slide + 1 > items.length ? items.length : slide + 1;
  const changeSlide = (direction: number) => {
    let slideNumber = 0;
    if (direction < 0) { 
      if (slide + direction <= -1) {
        slideNumber = -1;
      } else {
        slideNumber = slide + direction;
      }
    }
    if (direction > 0) { 
      if (slide + direction > items.length) {
        slideNumber = items.length;
      } else {
        slideNumber = slide + direction;
      }
    }
    setSlide(slideNumber);
  };

  const handleTouchStart: TouchEventHandler = (evt) => {
    const touchDown = evt.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove: TouchEventHandler = (evt) => {
    if (touchPosition === 0) {
      return;
    }

    const currentPosition = evt.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(0);
  }

  return (
    <section className="special-for-you">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="container slider"
        style={{ width: "100%", height: "100%"}}
      >
        <div className="special-for-you__wrapper">
          <div className="special-for-you__title-wrapper">
            <h2 className="special-for-you__title">Специально подобрано для вас</h2>
            <div className="special-for-you__controls">
              <button
                className="btn-icon special-for-you__control"
                type="button"
                aria-label="previous"
                onClick={() => changeSlide(-1)}
                disabled={prevItemIndex < 0}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button
                className="btn-icon special-for-you__control"
                type="button"
                aria-label="next"
                onClick={() => changeSlide(1)}
                disabled={nextItemIndex >= (items.length - 2)}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul
            className="special-for-you__list slide-list"
            style={{ transform: `translateX(-${slide * 33.4}%)` }}
          >
            {items.map((slide, index) => (
              <SpecialForYouSlide key={index}
                workoutId={slide.workoutId}
                name={slide.name}
                background={slide.background}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default React.memo(SpecialForYou);
