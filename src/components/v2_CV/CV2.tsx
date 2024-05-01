import { ReactElement } from "react";

type CvElement = {
    label: string;
    company: string;
    time: string;
    description: ReactElement;
}

const iie: CvElement = {
    label: "Information Technology and Econometrics",
    company:"Cracow University of Economics",
    time: "2007-2012",
    description: (<p>
        Bachelor's degree<br></br>
        specialty: Information economics
        </p>)
}

function CV2 () {
    return (
        <div>
            <hr></hr>
            {renderTable("Work Experience", [iie,iie])}
            <hr></hr>
            {renderTable("Education", [iie])}
            <hr></hr>
        </div>
    )
}

export default CV2

function renderTable(title:string, items:CvElement[]) {
    return <div className="row">
        <div className="col"><h2>{title}</h2></div>
        <div className="col-9">{items.map((item) => (
                <table className="table">
                            <thead>
                    <tr>
                                <th colSpan={2}>{item.label}</th>
                            </tr>
                            <tr>
                                <td>{item.company}</td>
                                <td>{item.time}</td>
                            </tr>
                            </thead>
                            <tr>
                                <td colSpan={2}><p></p>
                                    {item.description}
                                </td>
                            </tr>
                        </table>
                    )
                )
                }
                </div>

    </div>;
}