import image from "./images/JH_lifestyle_foto.jpg"

function Hero(){
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-5 py-5">
                <div className="col-lg-8">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">Joanna Hulek</h1>
                    <h2 className="one_line_text">Frontend Developer & Agile Practitioner</h2>
                    <h2 className="line_broken">Frontend Developer</h2>
                    <h2 className="line_broken">& Agile Practitioner</h2>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-4">
                    <img src={image} className="d-block mx-lg-auto img-fluid d-none d-md-block" alt="Joanna Hulek" title="by Joanna Dzierzbicka Fotografia" width="100%"
                         loading="lazy"/>
                </div>
            </div>
        </div>

    )
}

export default Hero


/*

                    <h2 className="text-center">Frontend Developer</h2>
                    <h2 className="text-center">& Agile Practitioner</h2>


* */