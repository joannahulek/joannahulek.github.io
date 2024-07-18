import {ReactElement} from "react";

export interface PortfolioItem{
    title: string
    time: string
    description: ReactElement
    link:ReactElement
}

let cardHeight = 300

export default function Portfolio(id: string, category: string, items: PortfolioItem[]){
    const carouselName = id+'Carousel'
    const carouselNumber = Math.ceil(items.length/3)

    const renderCarouselItems = () => {
        const carouselItems = [];
        for (let i = 0; i < carouselNumber; i++) {
            const start = i * 3;
            const end = start + 3;
            const itemsSlice = items.slice(start, end);
            carouselItems.push(
                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                    {RenderItems(itemsSlice)}
                </div>
            );
        }
        return carouselItems;
    };

    return (<div id={carouselName} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <h3>{category}</h3>
            {renderCarouselItems()}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={'#'+carouselName}
                data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={'#'+carouselName}
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
}

function RenderItems(items:PortfolioItem[]) {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map((item)=> (
            <div className="col">
                <div className="card" style={{height: `${cardHeight}px`}}>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{item.time}</h6>
                        <p className="card-text">{item.description}</p>
                        <div className="mt-auto">{item.link}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>;
}


// previous version below (I left it just to extract content from there)

function Portfolio2(){
    let cardHeight = 300
    return(<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <h3>Projects</h3>
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
    </div>)
}

function Speaker(height: number) {
    return <div className="row row-cols-1 row-cols-md-3 g-4">
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