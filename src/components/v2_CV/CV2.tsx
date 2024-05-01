import { ReactElement } from "react";

type CvElement = {
    label: string;
    company: string;
    time: string;
    description: ReactElement;
}

const ppp: CvElement = {
    label: "aa",
    company:"bb",
    time: "cc",
    description: (<div><h1>ddd</h1></div>)
}

function CV2 () {
    return (
        <div>
            <hr></hr>
            {renderTable("Work Experience", [ppp,ppp])}
            <hr></hr>
            {renderTable("Education", [ppp])}
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