import FriendsListItem from '../../components/friends-list-item/friends-list-item';
import Header from '../../components/header/header';
import { AppRoute, DEFAULT_LIMIT } from '../../constant';
import { createUserUsers, generateUserCoach } from '../../mocks/users';
import { redirectToRoute } from '../../store/action';
import { UserRole } from '../../types/user-data';
import { useAppDispatch } from '../../hooks';
import { Helmet } from 'react-helmet-async';

const arr = [0];
for (let i = 1; i <= 20; i++) {
	arr.push(i);
}
const users = createUserUsers(arr);
const coach = generateUserCoach(2);

function FriendsList(): JSX.Element {
  const dispatch = useAppDispatch();
  let renderedUsersCount = DEFAULT_LIMIT;
  let renderedUsers = users.slice(0, renderedUsersCount);
  const isMore = renderedUsersCount < users.length;
  const handleMoreClick = () => {
    renderedUsersCount = renderedUsersCount + DEFAULT_LIMIT;
    renderedUsers = users.slice(0, renderedUsersCount);
  };
  const handleTopClick = () => {
    dispatch(redirectToRoute(AppRoute.Main));
  }
  return (
    <div className="wrapper">
      <Helmet>
        <title>FitFriends. Список друзей</title>
      </Helmet>
      <Header />
      <main>
        <section className="friends-list">
          <div className="container">
            <div className="friends-list__wrapper">
              <button className="btn-flat friends-list__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="friends-list__title-wrapper">
                <h1 className="friends-list__title">Мои друзья</h1>
              </div>
              <ul className="friends-list__list">
                {renderedUsers.map((item) => (
                  <FriendsListItem key={item.id}
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    avatar={item.avatar}
                    trainingReady={item.trainingReady}
                    typeOfTrain={item.typeOfTrain.slice(3)}
                    request={false}
                  />
                ))}
              </ul>
              <div className="show-more friends-list__show-more">
                {isMore && 
                  <button
                    className="btn show-more__button show-more__button--more"
                    type="button"
                    onClick={handleMoreClick}
                  >Показать еще</button>
                }
                <button 
                  className="btn show-more__button show-more__button--to-top"
                  type="button"
                  onClick={handleTopClick}
                >Вернуться в начало</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default FriendsList;
