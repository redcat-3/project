import React from 'react';
import FriendRequest from '../friend-request/friend-request';
import { Link } from 'react-router-dom';

type FriendsListItemProps = {
  id: string,
  name: string,
  location: string,
  avatar: string,
  trainingReady: boolean,
  typeOfTrain: string[],
  request: boolean,
  requestId?: number
};

function FriendsListItem({id, name, location, avatar, trainingReady, typeOfTrain, request, requestId}: FriendsListItemProps): JSX.Element {
  const setReadyStatus = (ready: boolean): string => {
    if(ready) {
      return 'thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready';
    } else {
      return 'thumbnail-friend__ready-status thumbnail-friend__ready-status--is-not-ready';
    }
  };
  const handleRequestClick = () => {
    if(requestId) {
      
    }
  };
  return (
    <Link to={`/user-card-user/${id}/`}>
      <li className="friends-list__item">
        <div className="thumbnail-friend">
          <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
            <div className="thumbnail-friend__image-status">
              <div className="thumbnail-friend__image">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${avatar}.webp, ${avatar}@2x.webp 2x,`}
                  />
                  <img
                    src={`${avatar}.png`}
                    srcSet={`${avatar}@2x.jpg 2x`}
                    width="78"
                    height="78"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="thumbnail-friend__header">
              <h2 className="thumbnail-friend__name">{name}</h2>
              <div className="thumbnail-friend__location">
                <svg width="14" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-location"></use>
                </svg>
                <address className="thumbnail-friend__location-address">{location}</address>
              </div>
            </div>
            <ul className="thumbnail-friend__training-types-list">
              {typeOfTrain.map((item)=> (
                <li>
                  <div className="hashtag thumbnail-friend__hashtag">
                    <span>#{item}</span>
                  </div>
                </li>))
              }              
            </ul>
            <div className="thumbnail-friend__activity-bar">
              <div className={setReadyStatus(trainingReady)}><span>Готов к&nbsp;тренировке</span>
              </div>
            </div>
          </div>
          {request && <FriendRequest handleRequestClick={handleRequestClick}/>}
        </div>
      </li>
    </Link>
  );
}
export default React.memo(FriendsListItem);
