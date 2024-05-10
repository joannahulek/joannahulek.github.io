function Portfolio(){
    return(<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                {ItemFirst()}
            </div>
            <div className="carousel-item">
                {ItemSecond()}
            </div>
            <div className="carousel-item">
                {ItemThird()}
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


function ItemFirst() {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Czy komputery potrafią robić kanapki?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Koderek 3rd edition · 26 maj 2018</h6>
                    <p className="card-text">Workshops about basics of algorithmic.<br></br>
                        Audience: Kids between 4 and 9 y.o.</p>
                    <a href="https://koderek.edu.pl/index20180526.html" target="_blank" className="card-link">Event
                        website</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Jak oswoić algorytmy?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">wakeupandcode.pl · 9 gru 2017</h6>
                    <p className="card-text"><small>Essay about algorithms in our daily life - how to look at each activity
                        like a programmer and how to learn algorithms.<br></br>
                        (original language - polish)</small></p>
                    <a href="https://www.wakeupandcode.pl/jak-oswoic-algorytmy/" target="_blank" className="card-link">Read
                        it</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Czy komputery potrafią robić kanapki?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Digit4Kids · 24 paź 2020</h6>
                    <p className="card-text">Online workshops for kids.</p>
                    <a href="https://www.eventbrite.co.uk/e/digit4kids-light-czy-komputery-potrafia-robic-kanapki-tickets-123726813229?fbclid=IwZXh0bgNhZW0CMTAAAR0unEoiJU-BpsXld9KdHu5OsTIE50OLoUOMwqm_p9N7mmQCaIgoV50im8I_aem_ASt35erJ2BR5rqUTwm62RSY-7PPSkkeyqKFfdF_vo1y4Gpe3wZDzrFDKzDmy1o1xiWHF4CWf0tlMlWi4s5PdQy-g" target="_blank" className="card-link">kids in age 7-9</a>
                    <a href="https://www.eventbrite.co.uk/e/digit4kids-light-czy-komputery-potrafia-robic-kanapki-tickets-123727360867?fbclid=IwZXh0bgNhZW0CMTAAAR2COW8OY_xu6LtZOGqxANcIMvDv0i9chT9N3Ohnnnrh_1aKKtdKDPtRric_aem_ASuVxjEOvSzHjkN-2AYC6KHLgMV_xdzZ9pI2XxAW-pmYiQsAvJPEITalhHjmvy8Vtgj6cvpg9kip4-zoid7etrsE" target="_blank" className="card-link">kids in age 10-12</a>
                </div>
            </div>
        </div>
    </div>;
}

function ItemSecond() {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title 4</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <a href="" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title 5</h5>
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
                    <h5 className="card-title">Card title 6</h5>
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


function ItemThird() {
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