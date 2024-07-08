import Portfolio, {PortfolioItem} from "../Portfolio";

const projects: PortfolioItem[]=[
    {
        title: "Nasze cele zmieniają się wraz z nami",
        time: "21th Jun 2024",
        description: <><p>Live speech on Closing Gala of 9th edition of Tech Leaders Mentoring Program.
            <br></br>
                The story of my development in this program, about how building self-awareness and competence affects our goals and how strongly we are motivated to act by fulfilling our dreams.
            </p>
            <p>From over a hundred mentees, only three were distinguished with the opportunity to give a speech.</p></>,
        link: <></>
    },
    {
        title: "Jak zepsułam Scrum? Case Study",
        time: "webinar · 10th Jun 2024",
        description: <>A case study on the most common mistakes when implementing the Scrum framework.
            <ul>
                <li>An example story of working with Scrum in a team, to show problems and their consequences</li>
                <li>Presentation of conclusions, drawing attention to mistakes, bad decisions and shortcomings</li>
                <li>Suggestions for novice Scrum Masters and Scrum teams to facilitate an understanding of Scrum</li>
            </ul>
        </>,
        link: <></>
    },
    {
        title: "Czy komputery potrafią robić kanapki?",
        time: "Koderek · 26 May 2018 & Digit4Kids · 24 Oct 2020",
        description: <>
            Workshops on the basics of programming, during which children learned how to build algorithms in practice. We focused on creating clear, precise instructions. Depending on the age group of the participants, they also learned the basics of flowcharts.
            <br></br><i>Audience: Kids between 4 and 12 y.o.</i></>,
        link: <>
            <a href="https://koderek.edu.pl/index20180526.html" target="_blank" className="card-link">Koderek</a>
            <a href="https://www.eventbrite.co.uk/e/digit4kids-light-czy-komputery-potrafia-robic-kanapki-tickets-123727360867?fbclid=IwZXh0bgNhZW0CMTAAAR2COW8OY_xu6LtZOGqxANcIMvDv0i9chT9N3Ohnnnrh_1aKKtdKDPtRric_aem_ASuVxjEOvSzHjkN-2AYC6KHLgMV_xdzZ9pI2XxAW-pmYiQsAvJPEITalhHjmvy8Vtgj6cvpg9kip4-zoid7etrsE"
               target="_blank" className="card-link">Digit4Kids</a>
        </>
    }
]

export default function PublicSpeaking() {
    return (
        Portfolio('Public Speaking', projects)
    )
}