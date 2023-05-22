import Project from './Project';
import jsonData from './projectList.json'


function ProjectGallery(){
    console.log(jsonData);
    console.log(jsonData.projectList.length);
    return (
        <div>
          {
            
            jsonData.projectList.map((data, index) => (
            <Project key={index} data={data} />
          ))}
        </div>
      );
    }

export default ProjectGallery;