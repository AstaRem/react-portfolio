
function Project({data}){
    
    return(
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                {/* <a href="#" className="btn btn-primary">{data.linkGitH}</a> */}
            </div>
        </div>

    )
}

export default Project;