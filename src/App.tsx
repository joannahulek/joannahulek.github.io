import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";

function App() {
  return (
      <div className="content">
          {Navbar()}
          <section id="#bio">{AboutMe()}</section>
          <section id="#portfolio">{Portfolio()}</section>

          {Footer()}
      </div>
  );
}

export default App;
