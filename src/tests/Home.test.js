import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('<Home /> component', () => {
  it('Component render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
