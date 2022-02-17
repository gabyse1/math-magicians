import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <main className="page__quote">
    <p className="quote__message">
      &quot;
      { quote.message }
      &quot;
    </p>
    <p className="quote__author">
      &mdash;
      <strong>{ quote.author }</strong>
      &mdash;
    </p>
  </main>
);

Quote.propTypes = {
  quote: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Quote;
