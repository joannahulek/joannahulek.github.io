import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Resume from "./components/CV";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import bio from "./components/content/Bio.json"
import resume from "./components/content/CV.json"
import links from "./components/content/links.json"

function App() {
  return (
      <div className="content">
          {Navbar()}
          <Hero links={links.Main}/>
          <section id="bio"><AboutMe bio={bio}/></section>
          <section id="portfolio">{Portfolio()}</section>
          <section id="cv"><Resume items={resume.Col}/></section>
          <section id="contact">{Contact()}</section>
          {Footer()}
      </div>
  );
}

export default App;
