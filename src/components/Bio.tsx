import image from "./images/JH_lifestyle_foto.jpg"

interface Props {
    bio: string[]
}

function AboutMe(props: Props){
    return(
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="mirror rounded" width="40%" alt="JH" title="Joanna Dzierzbicka Fotografia" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><big>{props.bio}</big></p>
                        <p className="card-text">{props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe