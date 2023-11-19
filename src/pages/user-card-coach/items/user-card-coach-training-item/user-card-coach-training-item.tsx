import React from "react";
import ThumbnailTrainingHashtagsItem from "../../../../components/thumbnail-training-hashtags-item/thumbnail-training-hashtags-item";

function UserCardCoachTrainingItem(): JSX.Element {
  return (
    <li className="user-card-coach__training-item">
      <div className="thumbnail-training">
        <div className="thumbnail-training__inner">
          <div className="thumbnail-training__image">
            <picture>
              <source 
                type="image/webp" 
                srcSet="img/content/user-card-coach/training-1.webp, img/content/user-card-coach/training-1@2x.webp 2x"
              />
              <img 
                src="img/content/user-card-coach/training-1.jpg" 
                srcSet="img/content/user-card-coach/training-1@2x.jpg 2x" 
                width="330" 
                height="190" 
                alt=""
              />
            </picture>
          </div>
          <p className="thumbnail-training__price">
            <span className="thumbnail-training__price-value">1200</span>
            <span>₽</span>
          </p>
          <h3 className="thumbnail-training__title">Power</h3>
          <div className="thumbnail-training__info">
            <ul className="thumbnail-training__hashtags-list">
              <ThumbnailTrainingHashtagsItem />
              <ThumbnailTrainingHashtagsItem />
            </ul>
            <div className="thumbnail-training__rate">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <span className="thumbnail-training__rate-value">4</span>
            </div>
          </div>
          <div className="thumbnail-training__text-wrapper">
            <p className="thumbnail-training__text">Тренировка на отработку правильной техники работы с тяжелыми весами, укрепления мышц кора и спины.</p>
          </div>
          <div className="thumbnail-training__button-wrapper">
            <a className="btn btn--small thumbnail-training__button-catalog" href="#">Подробнее</a>
            <a className="btn btn--small btn--outlined thumbnail-training__button-catalog" href="#">Отзывы</a>
          </div>
        </div>
      </div>
    </li>
  );
}
export default React.memo(UserCardCoachTrainingItem);