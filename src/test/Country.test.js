import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from './mockStore';
import Country from '../components/Country';

describe('Test for the Country component', () => {
  test('Check if the Country component renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Check if the Country have 6 cards with countrys', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.querySelectorAll('.card').length).toBe(6);
  });
});
