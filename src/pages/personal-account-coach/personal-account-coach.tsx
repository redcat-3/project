import Header from '../../components/header/header';
import PersonalAccountCoachList from '../../components/personal-account-coach-list/personal-account-coach-list';
import PersonalAccountCoachNav from '../../components/personal-account-coach-nav/personal-account-coach-nav';
import UserInfoEdit from '../../components/user-info-edit/user-info-edit';

function PersonalAccountCoach(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Личный кабинет</h1>
              <UserInfoEdit />
              <div className="inner-page__content">
                <div className="personal-account-coach">
                  <PersonalAccountCoachNav />
                  <div className="personal-account-coach__additional-info">
                    <div className="personal-account-coach__label-wrapper">
                      <h2 className="personal-account-coach__label">Дипломы и сертификаты</h2>
                      <button className="btn-flat btn-flat--underlined personal-account-coach__button" type="button">
                        <svg width="14" height="14" aria-hidden="true">
                          <use xlinkHref="#icon-import"></use>
                        </svg><span>Загрузить</span>
                      </button>
                      <div className="personal-account-coach__controls">
                        <button className="btn-icon personal-account-coach__control" type="button" aria-label="previous">
                          <svg width="16" height="14" aria-hidden="true">
                            <use xlinkHref="#arrow-left"></use>
                          </svg>
                        </button>
                        <button className="btn-icon personal-account-coach__control" type="button" aria-label="next">
                          <svg width="16" height="14" aria-hidden="true">
                            <use xlinkHref="#arrow-right"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <PersonalAccountCoachList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default PersonalAccountCoach;
