import Header from "../../components/header/header";
import UserCatalogForm from "../../components/user-catalog-form/user-catalog-form";
import UsersCatalogItem from "../../components/users-catalog-item/users-catalog-item";

function UserCatalog(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section  className="inner-page">
          <div  className="container">
            <div  className="inner-page__wrapper">
              <h1  className="visually-hidden">Каталог пользователей</h1>
              <UserCatalogForm />
              <div  className="inner-page__content">
                <div  className="users-catalog">
                  <ul className="users-catalog__list">
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                    <UsersCatalogItem />
                  </ul>
                  <div  className="show-more users-catalog__show-more">
                    <button  className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
                    <button  className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
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

export default UserCatalog;




