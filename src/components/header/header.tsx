import React from 'react';
import MainNav from './items/main-nav/main-nav';
import HeaderLogo from './items/header-logo/header-logo';
import Search from './items/search/search';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selectors';
import { fetchNotificationsAction } from '../../store/api-actions';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  dispatch(fetchNotificationsAction);
  return (
    <header className="header" title="header">
      <div className="container">
        <HeaderLogo />
        <MainNav userId={user ? user.id : ''} />
        <Search />
      </div>
    </header>
  );
}
export default React.memo(Header);
