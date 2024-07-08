import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/Bio";
import Projects from "./components/content/Projects";
import PublicSpeaking from "./components/content/PublicSpeaking";
import Initiatives from "./components/content/Initiatives";
import CV from './components/CV';
import Contact from "./components/Contact";
import content from "./components/content/content.json"
import links from "./components/content/links.json"

function App() {
  return (
      <div className="content">
          {Navbar()}
          <Hero
              summary={content.summary}
              links={links.main}/>
          <section id="bio"><AboutMe bio={content.bio} links={links.main}/></section>
          <section id="portfolio">{Projects()}</section>
          <section id="cv">
              <h1>My Resume</h1>
              {CV()}
              {/* ** Resume with content imported from JSON
            <Resume work={resume.work} education={resume.education} />
                  */}
          </section>
          <section id="public_speaking">{PublicSpeaking()}</section>
          <section id="initiatives">{Initiatives()}</section>
          <section id="contact"><Contact/></section>
          {Footer()}
      </div>
  );
}

export default App;
