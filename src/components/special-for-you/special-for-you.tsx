import React from 'react';
import SpecialForYouItem from './items/special-for-you-item/special-for-you-item';

function SpecialForYou(): JSX.Element {
  return (
    <section className="special-for-you">
      <div className="container">
        <div className="special-for-you__wrapper">
          <div className="special-for-you__title-wrapper">
            <h2 className="special-for-you__title">Специально подобрано для вас</h2>
            <div className="special-for-you__controls">
              <button className="btn-icon special-for-you__control" type="button" aria-label="previous">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button className="btn-icon special-for-you__control" type="button" aria-label="next">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="special-for-you__list">
            <SpecialForYouItem />
            <SpecialForYouItem />
            <SpecialForYouItem />
          </ul>
        </div>
      </div>
    </section>
  );
}
export default React.memo(SpecialForYou);
