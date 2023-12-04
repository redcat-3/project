import { Helmet } from 'react-helmet-async';
import GymCatalogForm from '../../components/gym-catalog-form/gym-catalog-form';
import Header from '../../components/header/header';
import TraningsItem from '../../components/trainings-item/trainings-item'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selectors';
import { getWorkouts, getWorkoutsCount } from '../../store/workout-process/selectors';
import { useState } from 'react';
import { DEFAULT_LIMIT } from '../../constant';
import { workoutsInc } from '../../store/workout-process/workout-process';

function TrainingCatalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const workouts = useAppSelector(getWorkouts);
  const workoutsCount = useAppSelector(getWorkoutsCount);
  let renderedWorkoutsCount = workouts.length;
  const [isMore, setIsMore] = useState(renderedWorkoutsCount < workoutsCount);
  const handleMoreClick = () => {
    if(workoutsCount > renderedWorkoutsCount) {
      renderedWorkoutsCount = renderedWorkoutsCount + DEFAULT_LIMIT;
      dispatch(workoutsInc(DEFAULT_LIMIT));
      setIsMore(renderedWorkoutsCount < workoutsCount);
    }
  };
  return (
    <div className="wrapper">
      <Helmet>
        <title>FitFriends. Каталог тренировок</title>
      </Helmet>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог тренировок</h1>
              <GymCatalogForm types={user.typeOfTrain} />
              <div className="training-catalog">
                <ul className="training-catalog__list" style={{columnGap: 0}}>
                  {workouts.map((item, index) => (
                    <TraningsItem key={index}
                      workout={item}
                    />
                  ))}
                </ul>
                <div className="show-more training-catalog__show-more">
                  {isMore && <button
                    className="btn show-more__button show-more__button--more"
                    type="button"
                    onClick={handleMoreClick}
                  >Показать еще
                  </button>
                  }
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
