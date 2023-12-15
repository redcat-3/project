import {fireEvent, getByLabelText, getByTitle, render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import MultiRangeSlider from './multi-range-slider';
import { AuthorizationStatus, RangePriceValue } from '../../constant';
import { user } from '../../mocks/users';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: MultiRangeSlider, whith value box', () => {
  const store = mockStore({
    user: {
        authorizationStatus: AuthorizationStatus.Auth,
        user
      }
    });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MultiRangeSlider
              withValue={true}
              minMax={false}
              min={RangePriceValue.Min}
              max={RangePriceValue.Max}
              onChange={() => {}}
            />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/от/i)).toBeInTheDocument();
    expect(screen.getByText(/до/i)).toBeInTheDocument();
  });
});

describe('Component: MultiRangeSlider, whithout value box', () => {
    const store = mockStore({
      user: {
          authorizationStatus: AuthorizationStatus.Auth,
          user
        }
      });
  
    it('should render correctly', () => {
      render(
        <Provider store={store}>
          <HistoryRouter history={history}>
            <HelmetProvider>
              <MultiRangeSlider
                withValue={false}
                minMax={true}
                min={RangePriceValue.Min}
                max={RangePriceValue.Max}
                onChange={() => {}}
              />
            </HelmetProvider>
          </HistoryRouter>
        </Provider>,
      );
  
      expect(screen.getByText(/Минимальное значение/i)).toBeInTheDocument();
      expect(screen.getByText(/Максимальное значение/i)).toBeInTheDocument();
    });
  });
