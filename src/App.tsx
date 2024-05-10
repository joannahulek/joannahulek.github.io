import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Resume from "./components/CV";
import CV2 from './components/CV2/CV2';
import Contact from "./components/Contact";
import content from "./components/content/content.json"
import links from "./components/content/links.json"
import resume from "./components/content/CV.json"

function App() {
  return (
      <div className="content">
          {Navbar()}
          <Hero
              summary={content.summary}
              links={links.main}/>
          <section id="bio"><AboutMe bio={content.bio} links={links.main}/></section>
          {/* <section id="portfolio">{Portfolio()}</section> */}
          <section id="cv">
            {CV2()}
                 {/* ** Resume with content imported from JSON
            <Resume work={resume.work} education={resume.education} />
                  */}
        </section>
          <section id="contact"><Contact/></section>
          {Footer()}
      </div>
  );
}

export default App;
