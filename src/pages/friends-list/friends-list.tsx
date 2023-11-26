import FriendsListItem from '../../components/friends-list-item/friends-list-item';
import Header from '../../components/header/header';
import { AppRoute, DEFAULT_LIMIT } from '../../constant';
import { createUserUsers, createUsers, generateUserCoach } from '../../mocks/users';
import { redirectToRoute } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { RequestStatus } from '../../types/reaction';
import { createRequests } from '../../mocks/request';
import { getUsers, getUsersCount, getUsersDataLoadingStatus } from '../../store/user-process/selectors';
import { useState } from 'react';
import { usersInc } from '../../store/user-process/user-process';

const coach = generateUserCoach(2);
const usersWithRequest = createRequests(4);

function FriendsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const isUsersDataLoading = useAppSelector(getUsersDataLoadingStatus);
  const users = useAppSelector(getUsers);
  const usersCount = useAppSelector(getUsersCount);
  let renderedUsersCount = users.length + usersWithRequest.length;
  if((renderedUsersCount%DEFAULT_LIMIT) > 0 && renderedUsersCount > DEFAULT_LIMIT) {
    const del = DEFAULT_LIMIT - renderedUsersCount%DEFAULT_LIMIT;
    dispatch(usersInc(del));
    renderedUsersCount = users.length + usersWithRequest.length;
  }
  const [isMore, setIsMore] = useState(renderedUsersCount < (usersCount + usersWithRequest.length));
  const handleMoreClick = () => {
    if((usersCount + usersWithRequest.length) > renderedUsersCount) {
      renderedUsersCount = renderedUsersCount + DEFAULT_LIMIT;
      dispatch(usersInc(DEFAULT_LIMIT));
      setIsMore(renderedUsersCount < (usersCount + usersWithRequest.length));
    }
  };
  const handleTopClick = () => {
    dispatch(redirectToRoute(AppRoute.Main));
  }
  const handleRequestClick = (requestId: number, status: RequestStatus) => {
    console.log(`Update request ${requestId} to status ${status}`);
  }
  if(isUsersDataLoading) {
    return <div className="wrapper">
    <Helmet>
      <title>FitFriends. Список друзей</title>
    </Helmet>
    <Header />
    <main>
      <section className="friends-list">
        <div className="container">
          <div className="friends-list__wrapper">
            <div className="friends-list__title-wrapper">
              <h1 className="friends-list__title">Loading ...</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>;
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
              {usersWithRequest.map((item) => (
                  <FriendsListItem key={item.userId}
                    id={item.userId}
                    name={item.name}
                    location={item.location}
                    avatar={item.avatar}
                    trainingReady={item.trainingReady}
                    typeOfTrain={item.typeOfTrain}
                    request={item.request}
                    requestId={item.requestId}
                    userRole={item.role}
                    role={coach.role}
                    handleRequestClick={handleRequestClick}
                  />
                ))}
                {users.map((item) => (
                  <FriendsListItem key={item.id}
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    avatar={item.avatar}
                    trainingReady={item.trainingReady}
                    typeOfTrain={item.typeOfTrain}
                    request={false}
                    userRole={item.role}
                    role={coach.role}
                    handleRequestClick={handleRequestClick}
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
