import renderer from 'react-test-renderer';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('<Calculator /> component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Component render correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator description exist', () => {
    const calcDesc = screen.getByTestId('calc__description');
    expect(calcDesc).toBeInTheDocument();
    expect(calcDesc).toHaveTextContent("Let's do some Math");
  });

  it('Calculator box exist', () => {
    const calcBox = screen.getByTestId('calc__box');
    expect(calcBox).toBeDefined();
  });

  it('Calculator has 19 buttons as children', () => {
    const arrBtns = screen.getAllByTestId('calcBtn');
    expect(arrBtns.length).toBe(19);
  });

  it('Display box displays 8 value after press the button 8', () => {
    const calcDisplayBox = screen.getByTestId('calc__display-box');
    const calcBtns = screen.getAllByTestId('calcBtn');
    calcBtns.forEach((element) => {
      if (element.id === 'calc__btn-8') {
        fireEvent.click(element);
        expect(calcDisplayBox).toHaveTextContent('8');
      }
    });
  });
});
