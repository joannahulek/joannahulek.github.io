interface Props {
    work: string[][][];
    education: string[][][];
}

function Resume (props: Props) {
    return (
        <>
            {renderTable("Work Experience", props.work)}
            {renderTable("Education", props.education)}
        </>
    )
}

export default Resume

function renderTable(title:string, items:string[][][]) {
    return <table className="table">
        <tr>
            <thead>
                <th>{title}</th>
            </thead>
            <td>
                {items.map((item) => (
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
            </td>
        </tr>
    </table>;
}