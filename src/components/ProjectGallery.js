import Project from './Project';
import jsonData from './projectList.json'


function ProjectGallery(){
    console.log(jsonData);
    console.log(jsonData.projectList.length);
    return (

        <div className="main_container d-flex flex-wrap projects_container">
          {
            
            jsonData.projectList.map((data, index) => (
            <Project key={index} data={data} />
          ))}
        </div>
      );
    }

export default ProjectGallery;