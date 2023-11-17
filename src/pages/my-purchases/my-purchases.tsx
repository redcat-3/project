import Header from "../../components/header/header";
import MyPurchasesItem from "./my-purchases-item/my-purchases-item";

function MyPurchases(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="my-purchases">
          <div className="container">
            <div className="my-purchases__wrapper">
              <button className="btn-flat my-purchases__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="my-purchases__title-wrapper">
                <h1 className="my-purchases__title">Мои покупки</h1>
                <div className="my-purchases__controls">
                  <div className="custom-toggle custom-toggle--switch custom-toggle--switch-right my-purchases__switch" data-validate-type="checkbox">
                    <label>
                      <input type="checkbox" value="user-agreement-1" name="user-agreement" /><span className="custom-toggle__icon">
                        <svg width="9" height="6" aria-hidden="true">
                          <use xlinkHref="#arrow-check"></use>
                        </svg></span><span className="custom-toggle__label">Только активные</span>
                    </label>
                  </div>
                </div>
              </div>
              <ul className="my-purchases__list">
                <MyPurchasesItem />
                <MyPurchasesItem />
                <MyPurchasesItem />
              </ul>
              <div className="show-more my-purchases__show-more">
                <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
                <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyPurchases;




