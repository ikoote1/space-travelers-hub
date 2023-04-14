import { configureStore } from '@reduxjs/toolkit';
import missionsReducer, { fetchMissions } from '../features/missions/missionsSlice';

describe('missionsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        missions: missionsReducer,
      },
    });
  });

  test('fetchMissions should return an array of missions', async () => {
    await store.dispatch(fetchMissions());
    const { missions } = store.getState().missions;
    expect(Array.isArray(missions)).toBe(true);
    expect(missions.length).toBeGreaterThan(0);
  });

  test('fetchMissions should update the status to "succeeded" on success', async () => {
    await store.dispatch(fetchMissions());
    const { status } = store.getState().missions;
    expect(status).toBe('succeeded');
  });

  test('fetchMissions should update the status to "failed" on error', async () => {
    // Override the fetch function to return an error response
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: 'Not found' }),
    }));

    await store.dispatch(fetchMissions());
    const { status } = store.getState().missions;
    const { error } = store.getState().missions;
    expect(status).toBe('failed');
    expect(error).toBe('HTTP error! status: 404');

    // Restore the fetch function to its original implementation
    global.fetch.mockRestore();
  });
});
