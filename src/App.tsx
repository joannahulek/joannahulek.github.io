import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Projects from "./components/content/Projects";
import PublicSpeaking from "./components/content/PublicSpeaking";
import Initiatives from "./components/content/Initiatives";
import CV from './components/CV';
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
          <section id="portfolio">{Portfolio()}</section>
          <section id="projects">{Projects()}</section>
          <section id="public_speaking">{PublicSpeaking()}</section>
          <section id="initiatives">{Initiatives()}</section>
          <section id="cv">
              <h1>My Resume</h1>
              {CV()}
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
