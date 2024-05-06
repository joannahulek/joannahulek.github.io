interface Props {
    bio: string[][]
    links: string[][];
}

function AboutMe(props: Props){
    return(
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <div className="card-text">
                        {props.bio.map((paragraph)=>(<p>{paragraph}</p>))}
                    </div>
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