interface Props{

}

function Navbar(){
    return TogglerNav()
}

function TogglerNav (){
    return(
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerElements" aria-controls="navbarTogglerElements"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {NavElements()}
            </div>
        </nav>
    )
}

function NavElements() {
    return <div className="collapse navbar-collapse" id="navbarTogglerElements">
        <a className="navbar-brand" href="#">Hidden brand</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </div>;
}







export default Navbar