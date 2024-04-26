interface Props {
    items: string[][];
    work: string[][][]
}

function Resume (props: Props) {
    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">color</th>
                    <th scope="col">value</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item[0].toString()}</td>
                            <td>{item[1].toString()}</td>
                        </tr>
                    )
                )
                }
                </tbody>
            </table>

            <table className="table">

                {props.work.map((item) => (
                        <tr>
                            <td>{item[0][0]}</td>
                            <td>{item[0][1]}</td>
                            <td>{item[0][2]}</td>
                            <td>{item[1]}</td>
                        </tr>
                    )
                )
                }
            </table>


        </>
    )
}

export default Resume