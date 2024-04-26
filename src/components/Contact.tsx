import ContactSVG from "./ContactSVG";
interface Props{
    links: string[][];
}

function Contact(props: Props){
    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Get in touch</h5>
                {ContactSVG(128)}

            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {props.links.map((link) => (
                    <a href={link[0]} type="button"
                       className="btn btn-outline-secondary btn-lg px-4">{link[1]}</a>
                ))}
            </div>
        </div>
    )
}

export default Contact