import GymCatalogForm from "../../components/gym-catalog-form/gym-catalog-form";
import Header from "../../components/header/header";
import TrainingCatalogItem from "../../components/training-catalog-item/training-catalog-item";

function TrainingCatalog(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог тренировок</h1>
              <GymCatalogForm />
              <div className="training-catalog">
                <ul className="training-catalog__list">
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                  <TrainingCatalogItem />
                </ul>
                <div className="show-more training-catalog__show-more">
                  <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
                  <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TrainingCatalog;




