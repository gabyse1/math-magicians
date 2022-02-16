import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('<Calculator /> component', () => {
  it('Component render correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator box exist', () => {
    const { getByTestId } = render(<Calculator />);
    const calcBox = getByTestId('calc__box');
    expect(calcBox).toBeDefined();
  });

  it('Calculator has 19 buttons as children', () => {
    const { getAllByTestId } = render(<Calculator />);
    const arrBtns = getAllByTestId('calcBtn');
    expect(arrBtns.length).toBe(19);
  });
});
