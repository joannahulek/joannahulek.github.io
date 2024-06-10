export default function Portfolio(){
    let cardHeight = 300
    return(<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <h3>Projects</h3>
                {Projects(cardHeight)}
            </div>
            <div className="carousel-item">
                <h3>Public speaking</h3>
                {Speaker(cardHeight)}
            </div>
            <div className="carousel-item">
                <h3>Initiatives I participate</h3>
                {Initiatives(cardHeight)}
            </div>
            <div className="carousel-item">
                <h3>Articles written</h3>
                {Writer(cardHeight)}
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
}

function Projects(height:number) {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">JoHu Apps</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Apr - Nov 2018</h6>
                    <p className="card-text">Selected Android apps (native) created as part of this project:</p>
                    <div>
                        <a href="https://github.com/joannahulek/BabyLangu" target="_blank"
                           className="card-link">Baby</a>
                        <a href="https://github.com/joannahulek/BabyLangu-toReform" target="_blank"
                           className="card-link">Langu</a>
                        <br></br>
                        <a href="https://github.com/joannahulek/JoHuComics"
                           target="_blank" className="card-link">JoHuComics</a>
                        <br></br>
                        <a href="https://github.com/joannahulek/johucomics_webserver"
                           target="_blank" className="card-link">JoHuComics - webserver</a>
                        <br></br>
                        <a href="https://github.com/joannahulek/TytusQuiz" target="_blank"
                           className="card-link">TytusQuiz</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Joanna Hulek - home website</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">April - May 2024</h6>
                    <p className="card-text">This is the website you are currently visiting:</p>
                    <a href="https://github.com/joannahulek/joannahulek.github.io"
                       aria-label="mailto" className="card-link">GitHub Repository</a>
                    <div className="mt-auto">
                        <p className="card-text">If you have any questions, suggestions and ideas, or get know about my other projects - feel free to contact me!</p>
                        <a href="mailto:joanna.hulek@gmail.com?&subject=E-mail%20from%20website&body=Hi%20Joanna,%20"
                           aria-label="mailto" className="card-link">E-mail</a>
                        <a href="https://www.linkedin.com/in/joannahulek/" target="_blank"
                           className="card-link">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">MarKa Tekst</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">23th May 2024 - now</h6>
                    <p className="card-text">
                        Together with Marta, we are collaborating to create a minimalist business card that will help
                        her acquire clients and present her portfolio and offer. </p>
                    <div className="mt-auto">
                    <a href="https://marka-tekst.vercel.app/" target="_blank"
                           className="card-link">MarKa Tekst - business card website</a>
                        <br></br>
                        <a href="https://github.com/joannahulek/marka"
                           target="_blank" className="card-link">GitHub repository</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function Speaker(height: number) {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Jak się uczyć programowania? - webinar</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">wakeupandcode.pl · 29 Oct 2017</h6>
                    <p className="card-text">Webinar about how to learning the basics of programming.
                        <br></br>Is the choice of language so important? How to start? How to learn theory and how to
                        organize practical
                        learning. We discusses about workshops, courses, studies, books, events of the IT industry,
                        mentoring, and working on own projects.
                        <br></br>
                        <br></br><i>Conducted together with Joanna Otmianowska.</i></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Czy komputery potrafią robić kanapki?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Koderek · 26 May 2018 & Digit4Kids · 24 Oct
                        2020</h6>
                    <p className="card-text">Workshops on the basics of programming, during which children learned how to build algorithms in practice. We focused on creating clear, precise instructions. Depending on the age group of the participants, they also learned the basics of flowcharts.
                        <br></br><i>Audience: Kids between 4 and 12 y.o.</i></p>
                    <div className="mt-auto">
                    <a href="https://koderek.edu.pl/index20180526.html" target="_blank"
                       className="card-link">Koderek</a>
                    <a href="https://www.eventbrite.co.uk/e/digit4kids-light-czy-komputery-potrafia-robic-kanapki-tickets-123727360867?fbclid=IwZXh0bgNhZW0CMTAAAR2COW8OY_xu6LtZOGqxANcIMvDv0i9chT9N3Ohnnnrh_1aKKtdKDPtRric_aem_ASuVxjEOvSzHjkN-2AYC6KHLgMV_xdzZ9pI2XxAW-pmYiQsAvJPEITalhHjmvy8Vtgj6cvpg9kip4-zoid7etrsE"
                       target="_blank" className="card-link">Digit4Kids</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Niedziela z Babcią</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">2020 - Present</h6>
                    <p className="card-text">Together with my family, I co-create a YT channel, created on the initiative of my mother - the titular grandmother (of my children). We share ideas and inspirations for spending time creatively with the family - doing art work together, having fun, education.
                    <br></br>Maybe it's not IT-related topic, but it's very valuable for me.</p>
                    <div className="mt-auto">
                    <a href="https://www.youtube.com/c/NiedzielazBabcia"
                       target="_blank" className="card-link">Niedziela z Babcią on YouTube</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function Writer(height:number) {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Który język programowania wybrać?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">IT-Leaders.pl · 22 Sep 2017</h6>
                    <p className="card-text">Essay addressed to people who looking for the best career path in IT for them - especially, for programming beginners.</p>
                    <div className="mt-auto">
                    <a href="https://blog.it-leaders.pl/ludzieit-ktory-jezyk-programowania-wybrac-czyli-jak-odnalazlam-swoja-sciezke-kariery/"
                       target="_blank" className="card-link">Read it</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Jak oswoić algorytmy?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">wakeupandcode.pl · 9 Dec 2017</h6>
                    <p className="card-text">Essay about algorithms in our daily life - what is algorithm, how we used them every day, and how to learn algorithms.</p>
                    <div className="mt-auto">
                        <a href="https://www.wakeupandcode.pl/jak-oswoic-algorytmy/" target="_blank"
                           className="card-link">Read it</a>
                    </div>
                    </div>
                </div>
            </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Do you want to cooperate?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Or do you have an idea? Project?</h6>
                    <p className="card-text">Feel free to ping me! I'm happy to get involved in your initiative!</p>
                    <div>
                    <a href="mailto:joanna.hulek@gmail.com?&subject=E-mail%20from%20website&body=Hi%20Joanna,%20"
                       aria-label="mailto" className="card-link">E-mail</a>
                    <a href="https://www.linkedin.com/in/joannahulek/" target="_blank" className="card-link">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function Initiatives(height:number) {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">UBS Charity Musical</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Grand Romance · 2023</h6>
                    <p className="card-text">As a dancer and theater lover, I joined the cast of the 9th edition of the UBS Charity Musical.
                        <br></br>During 4 performances at the Variété Theater, we earn over PLN 151,000 for the support and education of the Hearty Foundation's beneficiaries.</p>
                    <div className="mt-auto">
                    <a href="https://www.teatrvariete.pl/repertuar/goscinnie/grand-romance"
                       target="_blank" className="card-link">Variété's repertoire</a>
                    <br></br>
                    <a href="https://serdeczna.org/blog/2024/03/22/musical-grand-romance-podsumowanie/"
                       target="_blank" className="card-link">Summary by Hearty Foundation</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Tech Leaders 9th edition</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Mentee · 20 Feb - 20 Jun 2024</h6>
                    <p className="card-text">I work on analyzing and developing my soft skills and gaining deeper knowledge and understanding of Agile, Scrum and Kanban, under the supervision of my mentor Monika. I focus on develop my career path and self-awareness of my predispositions and leadership competences.
                        <br></br>I also develop technical skills as a Frontend Developer.</p>
                    <div className="mt-auto">
                    <a href="https://techleaders.eu/" target="_blank" className="card-link">Tech Leaders</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card" style={{height: `${height}px`}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Pasterka po sąsiedzku</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Christmas Eve 2020</h6>
                    <p className="card-text">The first Christmas during the pandemic was a difficult time - many people
                        couldn't meet their famillies and lived in fear of what this time would bring. To cheer them up,
                        I created an event involving singing Christmas carols together at a distance, among neighbors
                        and family. Hundreds of people from all over Poland took part.</p>
                    <div className="mt-auto">
                        <a href="http://www.monikadudek.pl/pasterka-po-sasiedzku/" target="_blank"
                           className="card-link">About event</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}