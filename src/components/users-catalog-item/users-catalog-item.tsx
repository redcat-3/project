import React from 'react';
import HashtagsItem from './hashtags-item/hashtags-item';

function UsersCatalogItem(): JSX.Element {
  return (
    <li className="users-catalog__item">
      <div className="thumbnail-user thumbnail-user--role-user">
        <div className="thumbnail-user__image">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/thumbnails/user-01.webp, img/content/thumbnails/user-01@2x.webp 2x"
            />
            <img
              src="img/content/thumbnails/user-01.jpg"
              srcSet="img/content/thumbnails/user-01@2x.jpg 2x"
              width="82"
              height="82"
              alt=""
            />
          </picture>
        </div>
        <div className="thumbnail-user__header">
          <h3 className="thumbnail-user__name">Елизавета</h3>
          <div className="thumbnail-user__location">
            <svg width="14" height="16" aria-hidden="true">
              <use xlinkHref="#icon-location"></use>
            </svg>
            <address className="thumbnail-user__location-address">Петроградская</address>
          </div>
        </div>
        <ul className="thumbnail-user__hashtags-list">
          <HashtagsItem />
          <HashtagsItem />
        </ul>
        <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
      </div>
    </li>
  );
}
export default React.memo(UsersCatalogItem);
