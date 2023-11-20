import ReactDOM from 'react-dom/client';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
//import { checkAuthAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

//store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store = {store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>,
);

