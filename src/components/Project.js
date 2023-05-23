
function Project({data}){
    console.log(data.image);
    return(
<div className="container">
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + data.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <div className="d-flex justify-content-end">
                <a href={data.linkGitH} className="btn btn-secondary me-2">GitHub repository</a>
                <a href={data.linkDepl} className="btn btn-secondary">Deployed site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    )
}

export default Project;