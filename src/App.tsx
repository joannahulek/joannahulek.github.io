import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Resume from "./components/CV";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import content from "./components/content/content.json"
import resume from "./components/content/CV.json"
import links from "./components/content/links.json"

function App() {
  return (
      <div className="content">
          {Navbar()}
          <Hero
              summary={content.summary}
              links={links.main}/>
          <section id="bio"><AboutMe bio={content.bio} links={links.main}/></section>
          <section id="portfolio">{Portfolio()}</section>
          <section id="cv"><Resume work={resume.work} education={resume.education} /></section>
          <section id="contact"><Contact/></section>
          {Footer()}
      </div>
  );
}

export default App;
