import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('<Footer /> component', () => {
  it('Component render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
