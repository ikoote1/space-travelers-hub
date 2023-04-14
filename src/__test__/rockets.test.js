import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/rockets/Rockets';
import '@testing-library/jest-dom';
import { reserveRockets, cancelRockets } from '../features/rockets/rocketsSlice';

const mockStore = configureMockStore([]);

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rocket: {
        rocketStore: [
          {
            id: 1,
            name: 'Test Rocket x',
            description: 'Test Rocket x description',
            flickr_images: ['#'],
            reserved: false,
          },
          {
            id: 2,
            name: 'Test Rocket y',
            description: 'Test Rocket y description',
            flickr_images: ['#'],
            reserved: false,
          },
        ],
        isLoading: false,
      },
    });
  });

  it('should render the Rockets component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Test Rocket x')).toBeInTheDocument();
    expect(screen.getByText('Test Rocket y')).toBeInTheDocument();
  });

  it('should reserve a rocket when Reserve Rocket button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getAllByText('Reserve Rocket')[0]);

    const actions = store.getActions();
    expect(actions[0].type).toEqual('rocket/reserveRockets');
    expect(actions[0].payload).toEqual(1);
  });

  it('should cancel a reservation when Cancel Reservation button is clicked', () => {
    store.getState().rocket.rocketStore[0].reserved = true;

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getAllByText('Cancel Reservation')[0]);

    const actions = store.getActions();
    expect(actions[0].type).toEqual('rocket/cancelRockets');
    expect(actions[0].payload).toEqual(1);
  });
});
