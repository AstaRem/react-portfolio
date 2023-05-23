
function Project({data}){
    console.log(data.image);
    return(
        <div className="container">
  {/* <div class="row"> */}
    {/* <div class="col-sm-2"> */}
    


        <div className="card">
            <img src={data.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                {/* <p className="card-text">{data.description}</p> */}
                <a href={data.linkGitH} className="btn btn-secondary">GitHub repository</a>
                <a href={data.linkDepl} className="btn btn-secondary">Deployed site</a>
            </div>
        </div>

        {/* </div>
        </div> */}
        </div>
    )
}

export default Project;