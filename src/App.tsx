import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Resume from "./components/CV";
import Contact from "./components/Contact";
import bio from "./components/content/Bio.json"
import tableContent from "./components/content/CV.json"

function App() {
  return (
      <div className="content">
          {Navbar()}
          <section id="bio"><AboutMe bio={bio}/></section>
          <section id="portfolio">{Portfolio()}</section>
          <section id="cv"><Resume items={tableContent.Col}/></section>
          <section id="contact">{Contact()}</section>
          {Footer()}
      </div>
  );
}

export default App;
