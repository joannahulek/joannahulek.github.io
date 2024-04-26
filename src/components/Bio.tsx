import image from "./images/JH_lifestyle_foto.jpg"

interface Props {
    bio: string[]
    links: string[][];
}

function AboutMe(props: Props){
    return(
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <p className="card-text">{props.bio}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        {props.links.map((link) => (
                            <a href={link[0]} type="button"
                               className="btn btn-outline-secondary btn-lg px-4">{link[1]}</a>
                        ))}
                    </div>
                </div>
            </div>
            )
            }

            export default AboutMe