import React from 'react';
import MainNav from './items/main-nav/main-nav';
import HeaderLogo from './items/header-logo/header-logo';
import Search from './items/search/search';

function Header(): JSX.Element {
  const id = `user${1}@pochta.local`;
  return (
    <header className="header">
      <div className="container">
        <HeaderLogo />
        <MainNav id={id} />
        <Search />
      </div>
    </header>
  );
}
export default React.memo(Header);
