import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('<Footer /> component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Component render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Footer description exist', () => {
    render(<Footer />);
    const footerDesc = screen.getByTestId('footerDesc');
    expect(footerDesc).toBeInTheDocument();
    expect(footerDesc).toHaveTextContent('© 2022 Gabriela Sánchez Espirilla');
  });
});
