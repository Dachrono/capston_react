import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from './mockStore';
import Details from '../components/Details';

describe('Test for the Details component', () => {
  test('Check if the Details component renders correctly', () => {
    const { container } = render(<Provider store={store}>
        <MemoryRouter initialEntries={['/Canada/Toronto']}>
          <Routes>
            <Route path="/:city/:details" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Check if the Details hvae correct tem value', () => {
    const { container } = render(<Provider store={store}>
        <MemoryRouter initialEntries={['/Canada/Toronto']}>
          <Routes>
            <Route path="/:city/:details" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>);
    expect(screen.getByText('Temperature: 292.79 K , Feels like: 292.87 K')).toBeInTheDocument();
  });
});