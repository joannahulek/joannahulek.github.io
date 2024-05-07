import {getEducation, getWork, CvElement, WorkMore, EduMore} from "./CvContent";

function CV2 () {
    return (
        <div>
            <hr></hr>
            {renderTable("Work Experience", getWork(), WorkMore())}
            <hr></hr>
            {renderTable("Education", getEducation(), EduMore())}
            <hr></hr>
        </div>
    )
}

export default CV2


function renderTable(title:string, items:CvElement[], moreItems:CvElement[]) {
    return <div className="row">
        <div className="col"><h2>{title}</h2></div>
        <div className="col-9">
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
                <tr>
                    <td className="companyName">{item.company}</td>
                    <td>{item.time}</td>
                </tr>
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