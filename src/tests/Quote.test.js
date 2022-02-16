import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

describe('<Quote /> component', () => {
  it('Component render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
