import image from "./images/JH_lifestyle_foto.jpg"

interface Props {
    bio: string[]
}

function AboutMe(props: Props){
    return(
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <p className="card-text">{props.bio}</p>
                    <a href="#portfolio" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            )
            }

            export default AboutMe