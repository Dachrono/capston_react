import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Test for the Header component', () => {
  test('Check if the Header component renders correctly', () => {
    const { container } = render(<MemoryRouter><Header routeRet="/Canada" /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });

  test('Test the content of ', () => {
    render(<MemoryRouter><Header routeRet="/Canada" /></MemoryRouter>);
    const title = screen.getByText('Weather');
    expect(title).toBeInTheDocument();
  });
});
