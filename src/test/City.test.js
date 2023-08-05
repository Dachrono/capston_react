import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from './mockStore';
import City from '../components/City';

describe('Test for the City component', () => {
  test('Check if the City component renders correctly', () => {
    const { container } = render(<Provider store={store}>
        <MemoryRouter initialEntries={['/Canada']}>
          <Routes>
            <Route path="/:city" element={<City />} />
          </Routes>
        </MemoryRouter>
      </Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Check if the City have 3 cards with cities', () => {
    const { container } = render(<Provider store={store}>
        <MemoryRouter initialEntries={['/Canada']}>
          <Routes>
            <Route path="/:city" element={<City />} />
          </Routes>
        </MemoryRouter>
      </Provider>);
    expect(container.querySelectorAll('.cityCard').length).toBe(3);
  });
});
