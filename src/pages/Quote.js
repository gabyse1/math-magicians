import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({
    message: 'Mathematic is about numbers, equations, computations, or algorithms: It is about understanding.',
    author: 'William Paul Thurston',
  });

  const quotes = [
    {
      message: 'Do not worry about your difficulties in mathematics. I can assure you mine are still greater.',
      author: 'Albert Einstein',
    },
    {
      message: 'The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.',
      author: 'Charles Caleb Colton',
    },
    {
      message: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
      author: 'Shakuntala Devi',
    },
    {
      message: 'In mathematics the art of proposing a question must be held of higher value than solving it.',
      author: 'Georg Ferdinand Ludwig Philipp Cantor',
    },
    {
      message: 'Mathematic is about numbers, equations, computations, or algorithms: It is about understanding.',
      author: 'William Paul Thurston',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[newIndex]);
    }, 30000);
    return () => clearInterval(interval);
  });

  return (
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
};

export default Quote;
