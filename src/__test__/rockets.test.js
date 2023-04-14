import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from './Rockets';
import { getRockets, reserveRockets, cancelRockets } from '../features/rockets/rocketsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rocket: {
        rocketStore: [
          {
            id: '1',
            name: 'Falcon 1',
            description: 'Small launch vehicle',
            flickr_images: ['https://live.staticflickr.com/4043/sets/72157624494458300'],
            reserved: false,
          },
        ],
        isLoading: false,
      },
    });
  });

  it('should render loading state', () => {
    store = mockStore({
      rocket: {
        rocketStore: [],
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render no rockets found', () => {
    store = mockStore({
      rocket: {
        rocketStore: [],
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('No rockets found')).toBeInTheDocument();
  });

  it('should render rocket list', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('Small launch vehicle')).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('should dispatch reserveRockets action', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Reserve Rocket'));

    expect(store.getActions()).toContainEqual(reserveRockets('1'));
  });

  it('should dispatch cancelRockets action', () => {
    store = mockStore({
      rocket: {
        rocketStore: [
          {
            id: '1',
            name: 'Falcon 1',
            description: 'Small launch vehicle',
            flickr_images: ['https://live.staticflickr.com/4043/sets/72157624494458300'],
            reserved: true,
          },
        ],
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Cancel Reservation'));

    expect(store.getActions()).toContainEqual(cancelRockets('1'));
  });

  it('should dispatch getRockets action', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(store.getActions()).toContainEqual(getRockets());
  });
});
