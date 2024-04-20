import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Resume from "./components/CV";
import tableContent from "./components/content/CV.json"


function App() {
  return (
      <div className="content">
          {Navbar()}
          <section id="#bio">{AboutMe()}</section>
          <section id="#portfolio">{Portfolio()}</section>
          <section id="#cv"><Resume items={tableContent.Col}/></section>
          {Footer()}
      </div>
  );
}

export default App;
