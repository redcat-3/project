const MainNav = (): JSX.Element => (
  <nav className="main-nav">
    <ul className="main-nav__list">
        <li className="main-nav__item"><a className="main-nav__link is-active" href="#" aria-label="На главную">
        <svg width="18" height="18" aria-hidden="true">
            <use xlinkHref="#icon-home"></use>
        </svg></a>
        </li>
        <li className="main-nav__item"><a className="main-nav__link" href="#" aria-label="Личный кабинет">
        <svg width="16" height="18" aria-hidden="true">
            <use xlinkHref="#icon-user"></use>
        </svg></a>
        </li>
        <li className="main-nav__item"><a className="main-nav__link" href="#" aria-label="Друзья">
        <svg width="22" height="16" aria-hidden="true">
            <use xlinkHref="#icon-friends"></use>
        </svg></a>
        </li>
        <li className="main-nav__item main-nav__item--notifications">
          <a className="main-nav__link" href="#" aria-label="Уведомления">
            <svg width="14" height="18" aria-hidden="true">
            <use xlinkHref="#icon-notification"></use>
            </svg>
          </a>
          <div className="main-nav__dropdown">
            <p className="main-nav__label">Оповещения</p>
            <ul className="main-nav__sublist">
            <li className="main-nav__subitem"><a className="notification is-active" href="#">
                <p className="notification__text">Катерина пригласила вас на&nbsp;тренировку</p>
                <time className="notification__time" dateTime="2023-12-23 12:35">23 декабря, 12:35</time></a>
            </li>
            <li className="main-nav__subitem"><a className="notification is-active" href="#">
                <p className="notification__text">Никита отклонил приглашение на&nbsp;совместную тренировку</p>
                <time className="notification__time" dateTime="2023-12-22 09:22">22 декабря, 09:22</time></a>
            </li>
            <li className="main-nav__subitem"><a className="notification is-active" href="#">
                <p className="notification__text">Татьяна добавила вас в&nbsp;друзья</p>
                <time className="notification__time" dateTime="2023-12-18 18:50">18 декабря, 18:50</time></a>
            </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
  
export default MainNav;
  
  
  