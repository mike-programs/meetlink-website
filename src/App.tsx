import React from "react";
import Nav from "./components/Nav";
import HeroPage from "./components/HeroPage";
import Section from "./components/Section";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <Nav />
      <HeroPage />
      <Section />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
