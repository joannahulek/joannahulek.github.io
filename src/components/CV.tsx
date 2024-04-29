interface Props {
    work: string[][][];
    education: string[][][];
}

function Resume (props: Props) {
    return (
        <div>
            <hr></hr>
            {renderTable("Work Experience", props.work)}
            <hr></hr>
            {renderTable("Education", props.education)}
            <hr></hr>
        </div>
    )
}

export default Resume

function renderTable(title:string, items:string[][][]) {
    return <div className="row">
        <div className="col"><h2>{title}</h2></div>
        <div className="col-9">{items.map((item) => (
                <table className="table">
                            <thead>
                    <tr>
                                <th colSpan={2}>{item[0][0]}</th>
                            </tr>
                            <tr>
                                <td>{item[0][1]}</td>
                                <td>{item[0][2]}</td>
                            </tr>
                            </thead>
                            <tr>
                                <td colSpan={2}><p></p>
                                    {item[1].map((line)=>(
                                        <p><small>{line}</small></p>
                                    ))}
                                </td>
                            </tr>
                        </table>
                    )
                )
                }
                </div>

    </div>;
}