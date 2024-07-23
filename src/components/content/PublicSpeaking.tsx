import Portfolio, {PortfolioItem} from "../Portfolio";
import ImageCarousel from "../images/ImageCarousel";
import React from "react";
import TLgala from "../images/portfolio/TechLeadersClosingGala.jpg"
import ScrumCaseStudy from "../images/portfolio/ScrumCaseStudy.jpg"
import Kanapki from "../images/portfolio/Kanapki.jpg"
import FocusPhoto from "../images/focus_photo.jpg"

const projects: PortfolioItem[]=[
    {
        title: <>Nasze cele zmieniają się wraz z nami</>,
        time: <>21th Jun 2024</>,
        description:
            <div className="row">
                <div className="col">
                    <p>Live speech on Closing Gala of 9th edition of Tech Leaders Mentoring Program about my journey in this project.</p>
                </div>
                <div className="col-5">
                    <ImageCarousel
                        images={[TLgala]}
                        alt="Tech Leaders Closing Gala"
                        title="Tech Leaders Closing Gala"
                        width="100%"
                        height=""
                    />
                </div>
                <i>From over a hundred mentees, only three were distinguished with the opportunity to give a speech.</i>
            </div>,
        link: <></>
    },
    {
        title: <>Jak zepsułam Scrum? Case Study</>,
        time: <>webinar · 10th Jun 2024</>,
        description:
            <>
                <p>A case study on the most common mistakes when implementing the Scrum framework.</p>
                <p className="text-center"><ImageCarousel
                    images={[ScrumCaseStudy]}
                    alt="Jak zepsułam Scrum? Case Study"
                    title="Jak zepsułam Scrum? Case Study"
                    width="50%"
                    height=""
                /></p>
            </>,
        link: <></>
    },
    {
        title: <>Czy komputery potrafią robić kanapki?</>,
        time: <>Koderek · 26 May 2018 & Digit4Kids · 24 Oct 2020</>,
        description:
            <div className="row">
                <div className="col">
                    Workshops on the algorithms for kids between 4 and 12 y.o., focused on creating clear, precise instructions. Depending on the age group of the participants, they also learned the basics of flowcharts.
                </div>
                <div className="col-5">
                    <ImageCarousel
                        images={[Kanapki]}
                        alt="Czy komputery potrafią robić kanapki? - Digit4Kids 2020"
                        title="Czy komputery potrafią robić kanapki? - Digit4Kids 2020"
                        width="100%"
                        height=""
                    />
                </div>
            </div>,
        link: <>
            <a href="https://koderek.edu.pl/index20180526.html" target="_blank" className="card-link">Koderek</a>
            <a href="https://www.eventbrite.co.uk/e/digit4kids-light-czy-komputery-potrafia-robic-kanapki-tickets-123727360867?fbclid=IwZXh0bgNhZW0CMTAAAR2COW8OY_xu6LtZOGqxANcIMvDv0i9chT9N3Ohnnnrh_1aKKtdKDPtRric_aem_ASuVxjEOvSzHjkN-2AYC6KHLgMV_xdzZ9pI2XxAW-pmYiQsAvJPEITalhHjmvy8Vtgj6cvpg9kip4-zoid7etrsE"
               target="_blank" className="card-link">Digit4Kids</a>
        </>
    },
    {
        title: <>Jak się uczyć programowania?</>,
        time: <>wakeupandcode.pl · 29 Oct 2017</>,
        description: <>Webinar about how to learning the basics of programming.
            <br></br>Is the choice of language so important? How to start? How to learn theory and how to
            organize practical
            learning. We discusses about workshops, courses, studies, books, events of the IT industry,
            mentoring, and working on own projects.
            <br></br>
            <br></br><i>Conducted together with Joanna Otmianowska.</i></>,
        link: <></>
    },
    {
        title: <>Niedziela z Babcią</>,
        time: <>2020 - Present</>,
        description: <>Together with my family, I co-create a YT channel, created on the initiative of my mother - the
            titular grandmother (of my children). We share ideas and inspirations for spending time creatively with the
            family - doing art work together, having fun, education.
            <br></br>Maybe it's not IT-related topic, but it's very valuable for me.</>,
        link: <a href="https://www.youtube.com/c/NiedzielazBabcia"
                 target="_blank" className="card-link">Niedziela z Babcią on YouTube</a>
    },
    {
        title: <div className="text-center"><i>Do you want to collaborate?</i></div>,
        time: <div className="text-center"><i>Or do you have an idea? Project?</i></div>,
            description:
            <div className="row">
                <div className="col">
                    <p className="text-end"><b><a href="mailto:joanna.hulek@gmail.com?&subject=E-mail%20from%20website&body=Hi%20Joanna,%20"
                             aria-label="mailto" className="card-link">Feel free to contact me!</a></b></p>
                    <p className="">I'm happy to get involved in your initiative. Not only as a speaker, but also help with organization, content creation, and in the development of your website.</p>
                    <p className="text-end">
                        <a href="mailto:joanna.hulek@gmail.com?&subject=E-mail%20from%20website&body=Hi%20Joanna,%20"
                          aria-label="mailto" className="card-link">E-mail</a>
                        <a href="https://www.linkedin.com/in/joannahulek/" target="_blank"
                           className="card-link">LinkedIn</a>
                    </p>
                </div>
                <div className="col-4">
                    <ImageCarousel
                        images={[FocusPhoto]}
                        alt="Joanna Hulek"
                        title="photo by Joanna Dzierzbicka Fotografia"
                        width=""
                        height="200"
                    />
                </div>
            </div>,
        link: <></>
    }
]

export default function PublicSpeaking() {
    return (
        Portfolio('publicSpeaking', 'Public Speaking', projects)
    )
}