import { render, fireEvent } from '@testing-library/react';
import BtnComponent from '../components/BtnComponent';

describe('<BtnComponent /> component', () => {
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();
  });

  it('Clicking the button calls the handler once', () => {
    const { getByTestId } = render(<BtnComponent values={['7', '7']} calculateHandler={mockHandler} />);
    const calcBtn = getByTestId('calcBtn');
    fireEvent.click(calcBtn);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('Clicking the correct button called ÷', () => {
    const { getByTestId } = render(<BtnComponent values={['divisi', '÷']} calculateHandler={mockHandler} />);
    const calcBtn = getByTestId('calcBtn');
    fireEvent.click(calcBtn);
    expect(calcBtn.textContent).toBe('÷');
  });
});
