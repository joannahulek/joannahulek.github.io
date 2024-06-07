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
                    <h2 className="line_text">Frontend Developer · Speaker · Scrum Master</h2>
                    <h2 className="line_broken">Frontend Developer</h2>
                    <h2 className="line_broken">Scrum Master</h2>
                    <h2 className="line_broken">Speaker</h2>
                    <img src={image} className="hero mx-lg-auto img-fluid d-block d-md-none" alt="Joanna Hulek"
                         title="by Joanna Dzierzbicka Fotografia" width="100%"
                         loading="lazy"/>
                    <section>
                        <p>
                            I'm <b>addicted to dance</b> and love being surrounded by plants and flowers. <br></br>
                            I enjoy creating <b>responsive websites</b> and clear, <b>easy-to-maintain</b> solutions.
                        </p>
                        <p>
                            Collaboration, <b>sharing knowledge and experience</b>, and co-creating teams that <i>plays
                            for one goal</i> are my passions.
                            That's why the <b>Agile mindset</b> resonates so well with my own <b>values</b>.
                        </p>
                    </section>
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