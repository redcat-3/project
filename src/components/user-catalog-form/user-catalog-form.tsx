import React from "react";
import CheckListItem from "./items/check-list-item/check-list-item";

function UserCatalogForm(): JSX.Element {
  return (
    <div  className="user-catalog-form">
      <h2  className="visually-hidden">Каталог пользователя</h2>
        <div  className="user-catalog-form__wrapper">
          <button  className="btn-flat btn-flat--underlined user-catalog-form__btnback" type="button">
            <svg width="14" height="10" aria-hidden="true">
              <use xlinkHref="#arrow-left"></use>
            </svg><span>Назад</span>
          </button>
          <h3  className="user-catalog-form__title">Фильтры</h3>
          <form  className="user-catalog-form__form">
            <div  className="user-catalog-form__block user-catalog-form__block--location">
                <h4  className="user-catalog-form__block-title">Локация, станция метро</h4>
                <ul  className="user-catalog-form__check-list">
                  <CheckListItem />
                  <CheckListItem />
                  <CheckListItem />
                  <CheckListItem />
                  <CheckListItem />
                </ul>
                <button  className="btn-show-more user-catalog-form__btn-show" type="button"><span>Посмотреть все</span>
                  <svg  className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                    <use xlinkHref="#arrow-down"></use>
                  </svg>
                </button>
            </div>
            <div  className="user-catalog-form__block user-catalog-form__block--spezialization">
              <h4  className="user-catalog-form__block-title">Специализация</h4>
              <ul  className="user-catalog-form__check-list">
                <CheckListItem />
                <CheckListItem />
                <CheckListItem />
                <CheckListItem />
                <CheckListItem />
              </ul>
              <button  className="btn-show-more user-catalog-form__btn-show" type="button"><span>Посмотреть все</span>
                <svg  className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                    <use xlinkHref="#arrow-down"></use>
                </svg>
              </button>
            </div>
            <div  className="user-catalog-form__block user-catalog-form__block--level">
              <h4  className="user-catalog-form__block-title">Ваш уровень</h4>
              <div  className="custom-toggle-radio">
                <div  className="custom-toggle-radio__block">
                  <label>
                    <input type="radio" name="user-agreement" />
                    <span  className="custom-toggle-radio__icon"></span>
                    <span  className="custom-toggle-radio__label">Новичок</span>
                  </label>
                </div>
                <div  className="custom-toggle-radio__block">
                  <label>
                    <input type="radio" name="user-agreement" checked />
                    <span  className="custom-toggle-radio__icon"></span>
                    <span  className="custom-toggle-radio__label">Любитель</span>
                  </label>
                </div>
                <div  className="custom-toggle-radio__block">
                  <label>
                    <input type="radio" name="user-agreement" value="user-agreement-1" />
                    <span  className="custom-toggle-radio__icon"></span>
                    <span  className="custom-toggle-radio__label">Профессионал</span>
                  </label>
                </div>
              </div>
            </div>
            <div  className="user-catalog-form__block">
              <h3  className="user-catalog-form__title user-catalog-form__title--sort">Сортировка</h3>
              <div  className="btn-radio-sort">
                <label>
                  <input type="radio" name="sort" checked />
                  <span  className="btn-radio-sort__label">Тренеры</span>
                </label>
                <label>
                  <input type="radio" name="sort" />
                  <span  className="btn-radio-sort__label">Пользователи</span>
                </label>
              </div>
            </div>
          </form>
        </div>
    </div>
  );
}
export default React.memo(UserCatalogForm);
  