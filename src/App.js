import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './scss/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  const [quote, setQuote] = useState({
    message: 'Mathematic is about numbers, equations, computations, or algorithms: It is about understanding.',
    author: 'William Paul Thurston, American mathematician',
  });

  const quotes = [
    {
      message: 'Do not worry about your difficulties in mathematics. I can assure you mine are still greater.',
      author: 'Albert Einstein, German theoretical physicist',
    },
    {
      message: 'The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.',
      author: 'Charles Caleb Colton, English cleric, writer and collector',
    },
    {
      message: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
      author: 'Shakuntala Devi, Indian writer and mental calculator',
    },
    {
      message: 'In mathematics the art of proposing a question must be held of higher value than solving it.',
      author: 'Georg Ferdinand Ludwig Philipp Cantor',
    },
    {
      message: 'Mathematic is about numbers, equations, computations, or algorithms: It is about understanding.',
      author: 'William Paul Thurston, American mathematician',
    },
    {
      message: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
      author: 'Stefan Banach, Polish mathematician',
    },
    {
      message: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
      author: 'Albert Einstein, German theoretical physicist',
    },
    {
      message: 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
      author: 'David Hilbert, German mathematician',
    },
    {
      message: '‘Obvious’ is the most dangerous word in mathematics.',
      author: 'Eric Temple Bell, Scottish mathematician',
    },
    {
      message: 'The essence of math is not to make simple things complicated, but to make complicated things simple.',
      author: 'Stan Gudder, American mathematician',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[newIndex]);
    }, 15000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote quote={quote} />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
