import React from 'react';
import Nav from './components/Nav';
import HeroPage from './components/HeroPage';
import Section from './components/Section';
import Card from './components/Card';
import Ratings from './components/Ratings';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <HeroPage />
      <Section />
      <Card />
      <Ratings />
      <Footer />
    </div>
  );
}

export default App;
