function Portfolio(){
    return(<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {/* <div className="carousel-item active">
                <h3>Projects</h3>
                {Projects()}
            </div> */}
            <div className="carousel-item active">
                <h3>Public speaking</h3>
                {Speaker()}
            </div>
            <div className="carousel-item">
                <h3>Articles written</h3>
                {Writer()}
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

export default Portfolio


function Projects() {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title 7</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title 8</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title 9</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    </div>;
}

function Speaker() {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Jak się uczyć programowania? - webinar</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">wakeupandcode.pl · 29 Oct 2017</h6>
                    <p className="card-text">Webinar about how to learning the basics of programming, together with
                        Joanna Otmianowska.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Czy komputery potrafią robić kanapki?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Koderek · 26 May 2018 & Digit4Kids · 24 Oct
                        2020</h6>
                    <p className="card-text">Workshops about basics of algorithmic.
                        <br></br><i>Audience: Kids between 4 and 12 y.o.</i></p>
                    <a href="https://koderek.edu.pl/index20180526.html" target="_blank"
                       className="card-link">Koderek</a>
                    <a href="https://www.eventbrite.co.uk/e/digit4kids-light-czy-komputery-potrafia-robic-kanapki-tickets-123727360867?fbclid=IwZXh0bgNhZW0CMTAAAR2COW8OY_xu6LtZOGqxANcIMvDv0i9chT9N3Ohnnnrh_1aKKtdKDPtRric_aem_ASuVxjEOvSzHjkN-2AYC6KHLgMV_xdzZ9pI2XxAW-pmYiQsAvJPEITalhHjmvy8Vtgj6cvpg9kip4-zoid7etrsE"
                       target="_blank" className="card-link">Digit4Kids</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Niedziela z Babcią</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">2020 - Present</h6>
                    <p className="card-text">Maybe is not IT-related, but our family YY channel, initiated by my mother, the titular grandmother (of my kids), is something I co-create.</p>
                    <a href="https://www.youtube.com/c/NiedzielazBabcia"
                       target="_blank" className="card-link">Niedziela z Babcią on YouTube</a>
                </div>
            </div>
        </div>
    </div>;
}


function Writer() {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Który język programowania wybrać?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">IT-Leaders.pl · 22 Sep 2017</h6>
                    <p className="card-text">Essay addressed to people which searching for the best career path in IT for themselves. Especially, for programming beginners.</p>
                    <a href="#https://blog.it-leaders.pl/ludzieit-ktory-jezyk-programowania-wybrac-czyli-jak-odnalazlam-swoja-sciezke-kariery/"
                       target="_blank" className="card-link">Read it</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Jak oswoić algorytmy?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">wakeupandcode.pl · 9 Dec 2017</h6>
                    <p className="card-text">Essay about algorithms in our daily life - what is algorithm and how we used them every day. And how to learn algorithms and look at each activity like a programmer.</p>
                    <a href="https://www.wakeupandcode.pl/jak-oswoic-algorytmy/" target="_blank" className="card-link">Read it</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Do you want to cooperate?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Or do you have an idea? Project?</h6>
                    <p className="card-text">Feel free to ping me! I'm happy to get involved in your initiative!</p>
                    <a href="mailto:joanna.hulek@gmail.com?&subject=E-mail%20from%20website&body=Hi%20Joanna,%20"
                       aria-label="mailto" className="card-link">E-mail</a>
                    <a href="https://www.linkedin.com/in/joannahulek/" target="_blank" className="card-link">LinkedIn</a>
                </div>
            </div>
        </div>
    </div>;
}