import Portfolio, {PortfolioItem} from "../Portfolio";

const projects: PortfolioItem[]=[
    {
        title: "Joanna Hulek - My home website",
        time: "from April 2024",
        description: <><p>This is the website you are currently visiting:</p>
            <a href="https://github.com/joannahulek/joannahulek.github.io" className="card-link">GitHub Repository</a></>,
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
        description: <>Together with Marta, we are collaborating to create a minimalist business card that will help her acquire clients and present her portfolio and offer.</>,
        link: <><a href="https://marka-tekst.vercel.app/" target="_blank"
                   className="card-link">MarKa Tekst - business card website</a>
            <br></br>
            <a href="https://github.com/joannahulek/marka"
               target="_blank" className="card-link">GitHub repository</a></>
    },
    {
        title: "Other Projects",
        time: "",
        description: <><p>
            I'm looking for opportunities with React, TypeScript, and JavaScript. I've experience in creating
            responsive websites and mobile apps, focusing on readable code and best practices. I'm eager to learn
            automated testing to deliver best solutions.
        </p>
            <p>I'd be happy to discuss what I can bring to your company as an employee and developer.</p>
        </>,
        link: <a href="https://github.com/joannahulek/" target="_blank" className="card-link">Joanna Hulek on
            GitHub</a>
    }
]

export default function Projects() {
    return (
        Portfolio('Projects', projects)
    )
}