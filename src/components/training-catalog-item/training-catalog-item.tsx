import React from "react";
import ThumbnailTrainingHashtagsItem from "../thumbnail-training-hashtags-item/thumbnail-training-hashtags-item";

function TrainingCatalogItem(): JSX.Element {
  return (
    <li className="training-catalog__item">
      <div className="thumbnail-training">
        <div className="thumbnail-training__inner">
          <div className="thumbnail-training__image">
            <picture>
              <source 
                type="image/webp" 
                srcSet="img/content/thumbnails/training-02.webp, img/content/thumbnails/training-02@2x.webp 2x"
              />
              <img 
                src="img/content/thumbnails/training-02.jpg" 
                srcSet="img/content/thumbnails/training-02@2x.jpg 2x" 
                width="330" 
                height="190" 
                alt=""
              />
            </picture>
          </div>
          <p className="thumbnail-training__price">Бесплатно</p>
          <h3 className="thumbnail-training__title">crossfit</h3>
            <div className="thumbnail-training__info">
              <ul className="thumbnail-training__hashtags-list">
                <ThumbnailTrainingHashtagsItem />
                <ThumbnailTrainingHashtagsItem />
              </ul>
            <div className="thumbnail-training__rate">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <span className="thumbnail-training__rate-value">5</span>
            </div>
          </div>
          <div className="thumbnail-training__text-wrapper">
            <p className="thumbnail-training__text">Сложный комплекс упражнений для профессиональных атлетов на&nbsp;отработку показателей в&nbsp;классическом стиле.</p>
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
export default React.memo(TrainingCatalogItem);
  