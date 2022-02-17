import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

describe('<Quote /> component', () => {
  it('Component render correctly', () => {
    const quoteExample = {
      message: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
      author: 'Stefan Banach, Polish mathematician',
    };
    const tree = renderer.create(<Quote quote={quoteExample} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
