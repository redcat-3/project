import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constant';
import Intro from '../../pages/intro/intro';
import Main from '../../pages/main/main';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <ScrollToTop>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
            key={AppRoute.Main}
          />
          <Route
            path={AppRoute.Intro}
            element={<Intro/>}
            key={AppRoute.Intro}
          />
        </Routes>
      </ScrollToTop>
    </HelmetProvider>
  );
}

export default App;
