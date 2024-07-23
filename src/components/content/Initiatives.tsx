import Portfolio, {PortfolioItem} from "../Portfolio";

const projects: PortfolioItem[]=[
    {
        title: <>Be Visible in IT</>,
        time: <>Participant · Jun 2024 - Jan 2025</>,
        description: <>
            A series of workshops that helps to build presonal brand and effectively, reliably promote yourself through your professional achievements.
            <br></br><i>The program also includes preparation and practice of public speaking.</i></>,
        link: <a href="https://www.womenintechnology.pl/be-visible-in-it" target="_blank" className="card-link">Be Visible in IT website</a>
    },
    {
        title: <>Tech Leaders 9th edition</>,
        time: <>Mentee · 20 Feb - 20 Jun 2024</>,
        description: <>
            I work on analyzing and developing my soft skills and gaining deeper knowledge and understanding of Agile, Scrum and Kanban, under the supervision of my mentor Monika. I focus on develop my career path and self-awareness of my predispositions and leadership competences.
            </>,
        link: <><a href="https://techleaders.eu/" target="_blank" className="card-link">Tech Leaders website</a></>
    },
    {
        title: <>UBS Charity Musical</>,
        time: <>Grand Romance · 2023</>,
        description: <>
            As a dancer and theater lover, I joined the cast of the 9th edition of the UBS Charity Musical.
            <br></br>
            During 4 performances at the Variété Theater, we earn over PLN 151,000 for the support and education of the Hearty Foundation's beneficiaries.
        </>,
        link: <>
            <a href="https://www.teatrvariete.pl/repertuar/goscinnie/grand-romance"
                   target="_blank" className="card-link">Variété's repertoire</a>
            <br></br>
            <a href="https://serdeczna.org/blog/2024/03/22/musical-grand-romance-podsumowanie/"
               target="_blank" className="card-link">Summary by Hearty Foundation</a>
        </>
    }
]

export default function Initiatives() {
    return (
        Portfolio('initiatives','Initiatives I participate', projects)
    )
}