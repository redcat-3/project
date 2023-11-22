import FriendsListItem from '../../components/friends-list-item/friends-list-item';
import Header from '../../components/header/header';
import { createUsers } from '../../mocks/users';

const arr = [0];
for (let i = 1; i <= 20; i++) {
	arr.push(i);
}
const users = createUsers(arr);

function CreateTraning(): JSX.Element {
  return (
    <div className="wrapper">
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
                {users.map((item) => (
                  <FriendsListItem />
                ))}
              </ul>
              <div className="show-more friends-list__show-more">
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
export default CreateTraning;
