import ContactSVG from "./ContactSVG";


function Contact(){
    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Get in touch</h5>
                {ContactSVG(128)}
            </div>

        </div>
    )
}

export default Contact