import {
    CvElement,
    getWork, workMore,
    getEducation, eduMore,
    getSkills, skillsMore
} from "./content/CvContent";

function CV () {
    return (
        <div>
            <hr></hr>
            {renderTable("Work Experience", getWork(), workMore())}
            <hr></hr>
            {renderTable("Education", getEducation(), eduMore())}
            <hr></hr>
            {renderTable("Skills", getSkills(), skillsMore())}

        </div>
    )
}

export default CV


function renderTable(title:string, items:CvElement[], moreItems:CvElement[]) {
    return <div className="row">
        <div className="col"><h3>{title}</h3></div>
        <div className="col-10">
            {createElement(items)}
            {MoreElements(moreItems)}
        </div>

    </div>;
}

function createElement(items: CvElement[]) {
    return <>
        {items.map((item) => (
                <table className="table">
                    <thead>
                    <tr>
                        <th colSpan={2}>{item.label}</th>
                    </tr>
                    {item.company=="" ? <></> : (
                        <tr>
                            <td className="companyName">{item.company}</td>
                            <td>{item.time}</td>
                        </tr>
                    )}
                    </thead>
                    <tr>
                        <td colSpan={2}>
                            <small>{item.description}</small>
                        </td>
                    </tr>
                </table>
            )
        )
        }
    </>;
}

function MoreElements(moreItems: CvElement[]){
    if (moreItems.length==0){return (<></>)}
    else {
        return (<>
            <button className="btn hide-me btn-outline-secondary btn-lg px-4" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Show more
            </button>
            <div className="collapse" id="collapseExample">
                {createElement(moreItems)}
                <button className="btn btn-outline-secondary btn-lg px-4" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Show less
                </button>
            </div>
        </>)
    }
}