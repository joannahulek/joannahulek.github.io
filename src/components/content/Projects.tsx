import Portfolio, {PortfolioItem} from "../Portfolio";
import MarKa1 from "../images/portfolio/MarKa1.jpg"
import MarKa2 from "../images/portfolio/MarKa2.jpg"
import MarKa3 from "../images/portfolio/MarKa3.jpg"

let MarkaImages = [MarKa1, MarKa2, MarKa3]

const projects: PortfolioItem[]=[
    {
        title: "Joanna Hulek - My home website",
        time: "from April 2024",
        description: <><p>This is the website you are currently visiting:</p>
            <a href="https://github.com/joannahulek/joannahulek.github.io" className="card-link">Project repository</a></>,
        link: <><p className="card-text">If you have any questions, suggestions and ideas, or get know about my other
            projects - feel free to contact me!</p>
            <a href="mailto:joanna.hulek@gmail.com?&subject=E-mail%20from%20website&body=Hi%20Joanna,%20"
               aria-label="mailto" className="card-link">E-mail</a>
            <a href="https://www.linkedin.com/in/joannahulek/" target="_blank"
               className="card-link">LinkedIn</a></>
    },
    {
        title: "MarKa Tekst - business website",
        time: "May - Jun 2024",
        description:
            <div className="row">
                <div className="col">
                    <a href="https://marka-tekst.vercel.app/" target="_blank"
                       className="card-link">
                        <img src={MarKa1} alt="MarKa Tekst - website" title="MarKa Tekst - website" width="100%" loading="lazy"/>
                    </a>
                </div>
                <div className="col">
                    Together with Marta, we are collaborating to create a minimalist business card that will help her
                    acquire clients and present her portfolio and offer.
                </div>
            </div>,
        link: <><a href="https://marka-tekst.vercel.app/" target="_blank"
                   className="card-link">Website</a>
            <a href="https://github.com/joannahulek/marka"
               target="_blank" className="card-link">Repository</a></>
    },
    {
        title: "Other Projects",
        time: "",
        description: <><p>
            I'm working with React, TypeScript, and JavaScript and I've experience in creating responsive websites, focusing on readable code and best practices.
        </p>
            <p>
                I'd be happy to discuss how can I help you in your project, business or what I can bring to your company as an employee and developer.
            </p>
        </>,
        link: <a href="https://github.com/joannahulek/" target="_blank" className="card-link">My projects on GitHub</a>
    }
]

export default function Projects() {
    return (
        Portfolio('projects','Projects', projects)
    )
}