import Projects from "./content/Projects";
import PublicSpeaking from "./content/PublicSpeaking";
import Initiatives from "./content/Initiatives";

function NavElements() {
    return (
        <div className="collapse navbar-collapse" id="navbarTogglerElements">
            <ul className="navbar-nav me-auto">
                <a className="navbar-brand" href="#bio">About Me</a>
                <a className="navbar-brand" href="#portfolio">Portfolio</a>
                <a className="navbar-brand" href="#public_speaking">Public Speaking</a>
                <a className="navbar-brand" href="#initiatives">Other Initiatives</a>
                <a className="navbar-brand" href="#cv">Resume</a>
                <a className="navbar-brand" href="#contact">Contact</a>
            </ul>
        </div>
    )
}

function Navbar() {
    return TogglerNav()
}

export default Navbar

function TogglerNav() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerElements" aria-controls="navbarTogglerElements"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {NavElements()}
            </div>
        </nav>
    )
}