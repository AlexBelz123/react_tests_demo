/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/prefer-query-by-disappearance */
import * as React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '.././../utils/test-utils';
// import * as todo from '../../requests/todo';
import List from './List';
// fake data
export const todo = { userId: 1, id: 1, title: 'test', completed: false };

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(todo),
    } as Response);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('List component', () => {
  test('should show the first todo and remove `Loading...` text', async () => {
    render(<List />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));
    await waitFor(() => screen.getByText(todo.title));
  });
});
