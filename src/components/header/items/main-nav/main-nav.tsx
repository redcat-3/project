import { Link, NavLink } from "react-router-dom";
import Notification from "../notification/notification";
import { createNotifications } from "../../../../mocks/notification";
import { useState } from "react";
import { AppRoute } from "../../../../constant";

type MainNavProps = {
  id: string,
};

function MainNav ({id}: MainNavProps): JSX.Element {
  const [notifications, setNotifications] = useState(createNotifications(5));
  const OnNotificationClick = (notificationId: number) => {
    const notificationsNew = notifications;
    if(notificationId) {
      const index = notificationsNew.findIndex(item => item.notificationId === notificationId);
      if (index !== -1) {
        notificationsNew.splice(index, 1);
      }
    }
    setNotifications(notificationsNew);
  }
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink end className={({isActive}) => isActive ? "main-nav__link is-active" : "main-nav__link"}
            aria-label="На главную"
            to={AppRoute.Main}>
            <svg width="18" height="18" aria-hidden="true">
              <use xlinkHref="#icon-home"></use>
            </svg>
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to={`/personal-account/${id}`} end className={({isActive}) => isActive ? "main-nav__link is-active" : "main-nav__link"}
            aria-label="Личный кабинет"
          >
            <svg width="16" height="18" aria-hidden="true">
              <use xlinkHref="#icon-user"></use>
            </svg>
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to={`/friends-list/${id}`} end className={({isActive}) => isActive ? "main-nav__link is-active" : "main-nav__link"}
            aria-label="Друзья"
          >
            <svg width="22" height="16" aria-hidden="true">
              <use xlinkHref="#icon-friends"></use>
            </svg>
          </NavLink>
        </li>
        <li className="main-nav__item main-nav__item--notifications">
          <NavLink to="#" className="main-nav__link" aria-label="Уведомления">
            <svg width="14" height="18" aria-hidden="true">
              <use xlinkHref="#icon-notification"></use>
            </svg>
          </NavLink>
          <div className="main-nav__dropdown">
            <p className="main-nav__label">Оповещения</p>
            <ul className="main-nav__sublist">
              {notifications.map((item) => (
                <Notification key={item.notificationId}
                  notificationId={item.notificationId}
                  text={item.text}
                  createdDate={item.createdDate}
                  isNotificationActive={item.isActive}
                  OnNotificationClick={OnNotificationClick}
                />
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
};
export default MainNav;
