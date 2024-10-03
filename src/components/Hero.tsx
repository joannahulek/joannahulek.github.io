import image from "./images/hero_photo.jpg";
import ContactSVG from "./ContactSVG";

interface Props {
    summary: string[];
    links: string[][];
}

function Hero(props: Props){
    return(
        <div className="container col-xxl-10 px-4 py-5">
            <div className="row align-items-center g-5 py-5">
                <div className="col-lg-9">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">Joanna Hulek</h1>
                    <h2 className="line_text">Frontend Developer · React</h2>
                    <h2 className="line_broken">Frontend Developer</h2>
                    <h2 className="line_broken">React</h2>
                    <img src={image} className="hero mx-lg-auto img-fluid d-block d-md-none" alt="Joanna Hulek"
                         title="photo by Joanna Dzierzbicka Fotografia" width="100%"
                         loading="lazy"/>
                    <p>
                        I'm addicted to dance, love being surrounded by plants and flowers and enjoy creating <b>responsive websites</b>, <b>mobile apps</b> and clear, <b>easy-to-maintain</b> solutions.
                    </p>
                    <p>
                        I'm developing in <b>React.js</b> and <>React Native</> using <b>TypeScript</b> or <b>JavaScript</b>. I also have a background in Java, Python and experience in web scraping.
                    </p>
                    <p>
                        Collaboration, sharing knowledge and experience, and co-creating teams that <i>play for one goal</i> are my passions. That's why the <b>Agile mindset</b> resonates so well with my own values.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        {ContactSVG(64)}
                    </div>
                </div>
                <div className="col-10 col-sm-6 col-lg-3">
                <img src={image} className="hero d-block mx-lg-auto img-fluid d-none d-md-block" alt="Joanna Hulek"
                         title="by Joanna Dzierzbicka Fotografia" width="100%"
                         loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default Hero