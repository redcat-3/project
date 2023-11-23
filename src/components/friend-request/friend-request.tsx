import React from 'react';

type FriendRequestProps = { 
  handleRequestClick: () => void;
};

function FriendRequest({handleRequestClick}: FriendRequestProps): JSX.Element {
  return (
    <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
      <p className="thumbnail-friend__request-text">Запрос на&nbsp;персональную тренировку</p>
      <div className="thumbnail-friend__button-wrapper">
        <button
          className="btn btn--medium btn--dark-bg thumbnail-friend__button"
          type="button"
          onClick={handleRequestClick}
        >
          Принять
        </button>
        <button className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button"
          type="button"
          onClick={handleRequestClick}
        >
          Отклонить
        </button>
      </div>
    </div>
  );
}
export default React.memo(FriendRequest);
