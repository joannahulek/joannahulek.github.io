import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Bio";

function App() {
  return (
      <div className="content">
          {Navbar()}
          <section id="#bio">{AboutMe()}</section>
          {Footer()}
      </div>
  );
}

export default App;
