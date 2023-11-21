import React from 'react';

function UserInfoEdit(): JSX.Element {
  return (
    <section className="user-info-edit">
      <div className="user-info-edit__header">
        <div className="input-load-avatar">
          <label>
            <input className="visually-hidden" type="file" name="user-photo-1" accept="image/png, image/jpeg" />
            <span className="input-load-avatar__avatar">
              <img
                src="img/content/user-photo-1.png"
                srcSet="img/content/user-photo-1@2x.png 2x"
                width="98"
                height="98"
                alt="user photo"
              />
            </span>
          </label>
        </div>
        <div className="user-info-edit__controls">
          <button className="user-info-edit__control-btn" aria-label="обновить">
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-change"></use>
            </svg>
          </button>
          <button className="user-info-edit__control-btn" aria-label="удалить">
            <svg width="14" height="16" aria-hidden="true">
              <use xlinkHref="#icon-trash"></use>
            </svg>
          </button>
        </div>
      </div>
      <form className="user-info-edit__form" action="#" method="post">
        <button className="btn-flat btn-flat--underlined user-info-edit__save-button" type="submit" aria-label="Сохранить">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#icon-edit"></use>
          </svg>
          <span>Сохранить</span>
        </button>
        <div className="user-info-edit__section">
          <h2 className="user-info-edit__title">Обо мне</h2>
          <div className="custom-input user-info-edit__input">
            <label>
              <span className="custom-input__label">Имя</span>
              <span className="custom-input__wrapper">
                <input type="text" name="name" value="Валерия" />
              </span>
            </label>
          </div>
          <div className="custom-textarea user-info-edit__textarea">
            <label>
              <span className="custom-textarea__label">Описание</span>
              <textarea name="description" placeholder=" ">Персональный тренер и инструктор групповых программ с опытом  более 4х лет. Специализация: коррекция фигуры и осанки, снижение веса, восстановление после травм, пилатес.</textarea>
            </label>
          </div>
        </div>
        <div className="user-info-edit__section user-info-edit__section--status">
          <h2 className="user-info-edit__title user-info-edit__title--status">Статус</h2>
          <div className="custom-toggle custom-toggle--switch user-info-edit__toggle">
            <label>
              <input type="checkbox" name="ready-for-training" checked />
              <span className="custom-toggle__icon">
                <svg width="9" height="6" aria-hidden="true">
                  <use xlinkHref="#arrow-check"></use>
                </svg>
              </span>
              <span className="custom-toggle__label">Готов тренировать</span>
            </label>
          </div>
        </div>
        <div className="user-info-edit__section">
          <h2 className="user-info-edit__title user-info-edit__title--specialization">Специализация</h2>
          <div className="specialization-checkbox user-info-edit__specialization">
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="yoga" checked /><span className="btn-checkbox__btn">Йога</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="running" /><span className="btn-checkbox__btn">Бег</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="aerobics" checked /><span className="btn-checkbox__btn">Аэробика</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="boxing" /><span className="btn-checkbox__btn">Бокс</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="power" /><span className="btn-checkbox__btn">Силовые</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="pilates" checked /><span className="btn-checkbox__btn">Пилатес</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="stretching" checked /><span className="btn-checkbox__btn">Стрейчинг</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input className="visually-hidden" type="checkbox" name="specialization" value="crossfit" /><span className="btn-checkbox__btn">Кроссфит</span>
              </label>
            </div>
          </div>
        </div>
        <div className="custom-select user-info-edit__select">
          <span className="custom-select__label">Локация</span>
          <div className="custom-select__placeholder">ст. м. Адмиралтейская</div>
          <button className="custom-select__button" type="button" aria-label="Выберите одну из опций">
            <span className="custom-select__text"></span>
            <span className="custom-select__icon">
              <svg width="15" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-down"></use>
              </svg>
            </span>
          </button>
          <ul className="custom-select__list" role="listbox">
          </ul>
        </div>
        <div className="custom-select user-info-edit__select">
          <span className="custom-select__label">Пол</span>
          <div className="custom-select__placeholder">Женский</div>
          <button className="custom-select__button" type="button" aria-label="Выберите одну из опций">
            <span className="custom-select__text"></span>
            <span className="custom-select__icon">
              <svg width="15" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-down"></use>
              </svg>
            </span>
          </button>
          <ul className="custom-select__list" role="listbox">
          </ul>
        </div>
        <div className="custom-select user-info-edit__select">
          <span className="custom-select__label">Уровень</span>
          <div className="custom-select__placeholder">Профессионал</div>
          <button className="custom-select__button" type="button" aria-label="Выберите одну из опций">
            <span className="custom-select__text"></span>
            <span className="custom-select__icon">
              <svg width="15" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-down"></use>
              </svg>
            </span>
          </button>
          <ul className="custom-select__list" role="listbox">
          </ul>
        </div>
      </form>
    </section>
  );
}
export default React.memo(UserInfoEdit);
