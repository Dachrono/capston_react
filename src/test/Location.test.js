import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Location from '../components/Location';
import '@testing-library/jest-dom/extend-expect';

describe('Test for the location component', () => {
  test('Check if the location component renders correctly', () => {
    const { container } = render(<MemoryRouter><Location /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });

  test('Test the content of select', () => {
    const { container } = render(<MemoryRouter><Location /></MemoryRouter>);
    expect(container.querySelector('select')).toHaveTextContent('Canada');
  });
});
