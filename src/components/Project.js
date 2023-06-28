
function Project(data){
    // console.log(data.image);

    // Split the description into paragraphs
    const paragraphs = data.description.split('\n');

    return(
<div className="container">
      <div className="card">
        <div className="row">
          <div className="col-lg-4 img_container">
            <img src={process.env.PUBLIC_URL + data.image} className="card-img" alt="..." />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="card-text">{paragraph}</p>
              ))}
              <div className="d-flex justify-content-end project_buttons_cont">
                <a href={data.linkGitH} className="btn btn-secondary me-2" target="_blank" rel="noreferrer">GitHub repository</a>
                <a href={data.linkDepl} className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    )
}

export default Project;