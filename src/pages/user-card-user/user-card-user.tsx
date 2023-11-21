import Header from '../../components/header/header';
import UserCardGallaryItem from './items/user-card-gallary-item/user-card-gallary-item';

function UserCardCoach(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button className="btn-flat inner-page__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className="user-card">
                  <h1 className="visually-hidden">Карточка пользователя</h1>
                  <div className="user-card__wrapper">
                    <div className="user-card__content">
                      <div className="user-card__head">
                        <h2 className="user-card__title">Катерина</h2>
                      </div>
                      <div className="user-card__label">
                        <a href="">
                          <svg className="user-card-coach__icon-location" width="12" height="14" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <span>Невский проспект</span>
                        </a>
                      </div>
                      <div className="user-card__status">
                        <span>Готов к тренировке</span>
                      </div>
                      <div className="user-card__text">
                        <p>Привет! Я&nbsp;Катерина и&nbsp;мне 27 лет. Обожаю спорт и&nbsp;все, что с&nbsp;ним связанно. Регулярно хожу на&nbsp;тренировки по&nbsp;кроссфиту, также занимаюсь йогой, рястяжкой и&nbsp;пилатесом.</p>
                        <p>Занимаюсь как с&nbsp;тренером индивидуально, так и&nbsp;на&nbsp;групповых занятиях. Люблю соревнования и&nbsp;челленджи, так что присоединяйтесь, давайте объединяться и&nbsp;заниматься вместе!&#41;</p>
                      </div>
                      <ul className="user-card__hashtag-list">
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#йога</span></div>
                        </li>
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#кроссфит</span></div>
                        </li>
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#пилатес</span></div>
                        </li>
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#любитель</span></div>
                        </li>
                      </ul>
                      <button className="btn user-card__btn" type="button">Добавить в друзья</button>
                    </div>
                    <div className="user-card__gallary">
                      <ul className="user-card__gallary-list">
                        <UserCardGallaryItem />
                        <UserCardGallaryItem />
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default UserCardCoach;
