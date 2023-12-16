import FriendsListItem from '../../components/friends-list-item/friends-list-item';
import Header from '../../components/header/header';
import { AppRoute, DEFAULT_LIMIT } from '../../constant';
import { redirectToRoute } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { RequestStatus } from '../../types/reaction';
import { createRequests } from '../../mocks/requests';
import { getUser, getUsers, getUsersCount, getUsersDataLoadingStatus } from '../../store/user-process/selectors';
import { useState } from 'react';
import { usersInc } from '../../store/user-process/user-process';
import { useNavigate } from 'react-router-dom';

const usersWithRequest = createRequests(4);

function FriendsList(): JSX.Element {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUsersDataLoading = useAppSelector(getUsersDataLoadingStatus);
  const users = useAppSelector(getUsers);
  const user = useAppSelector(getUser);
  const usersCount = useAppSelector(getUsersCount);
  let renderedUsersCount = users.length + usersWithRequest.length;
  const div = renderedUsersCount%(DEFAULT_LIMIT/2);
  if(div > 0 && renderedUsersCount > DEFAULT_LIMIT) {
    const del = DEFAULT_LIMIT/2 - div;
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
  const goBack = () => {
    navigate(-1);
  };
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
              <h1 className="friends-list__title">Список друзей загружается ...</h1>
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
              <button
                className="btn-flat friends-list__back"
                type="button"
                onClick={goBack}
              >
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
                <span>Назад</span>
              </button>
              <div className="friends-list__title-wrapper">
                <h1 className="friends-list__title">Мои друзья</h1>
              </div>
              <ul className="friends-list__list">
              {usersWithRequest.map((item, index) => (
                  <FriendsListItem key={index}
                    id={item.userId}
                    name={item.name}
                    location={item.location}
                    avatar={item.avatar}
                    trainingReady={item.trainingReady}
                    typeOfTrain={item.typeOfTrain}
                    request={item.request}
                    requestId={item.requestId}
                    userRole={item.role}
                    role={user.role}
                    handleRequestClick={handleRequestClick}
                  />
                ))}
                {users.map((item, index) => (
                  <FriendsListItem key={index}
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    avatar={item.avatar}
                    trainingReady={item.trainingReady}
                    typeOfTrain={item.typeOfTrain}
                    request={false}
                    userRole={item.role}
                    role={user.role}
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
