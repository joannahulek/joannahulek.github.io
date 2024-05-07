interface Props {
    bio: string[][]
    links: string[][];
}

function MyBiogram(){
    return(<>
        <h4>Journey into Coding</h4>
        <p>I discovered my passion for programming, especially object-oriented, as a teenager at school. And I pursued it studying Information Technology and Econometrics at Cracow University of Economics. When I graduated, I wasn't sure whether my knowledge and code quality were sufficient to become a developer, so I tried something else. After several years, during my maternity leave, I started to miss coding, so I dove into mobile app development on Android. Later, my role as a Web Miner at Evidence Lab gave me an opportunity to deeply analyze thousands of websites. It helped me to gain knowledge useful for growing as a frontend developer.</p>
        <h4>Agile Mindset</h4>
        <p>Working in various companies and projects gave me lots of perspectives and experiences. I discovered that an agile mindset is very close to my own values. A well-organized and transparent workflow definitely helps people deliver better value, but the key is team building, communication, and cooperation - as the essence of Agile lies not just in optimizing processes but in fostering a culture of collaboration and continuous improvement. That makes better become the best. Thanks to my initiative to implement Scrum in an R&D project, I had the opportunity to better understand how the Scrum framework exactly works and also introduce this approach to my teammates.</p>
        <h4>Supporting, Sharing, Speaking</h4>
        <p>Not only code (and agile) is the programmer's life. I find immense fulfillment also in sharing my knowledge, experience, and supporting others in their development. I've spoken at conferences and webinars, wrote essayes, and conducted trainings for my teammates, to share my experiances and knowleadges, . Whether it was through mentoring sessions, training workshops, or performing in a charity musical , I'm driven by a desire to make a positive impact and blending my work with my passions.</p>
    </>)
}

function JsonBiogram(bio: string[][]){
    //call by: {JsonBiogram(props.bio)}
    return(<>{bio.map((paragraph)=>(<p>{paragraph}</p>))}</>)
}

function AboutMe(props: Props){
    return(
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <div className="card-text biogram">{MyBiogram()}</div>
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