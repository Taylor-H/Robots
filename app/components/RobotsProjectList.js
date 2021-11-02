import React from 'react';
import { Link } from 'react-router-dom';
import { Title3} from './styled-components';
const RobotsProjectList = (props) => {
  const projects = props.projects;
  return (
    <div className="projects container">
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <Title3>{project.title}</Title3>
            {/* <p>{project.description}</p> */}
            {/* <h1>{project.title}</h1>
            <span>{project.deadline}</span>
            <h6>Completed: {project.completed}</h6> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RobotsProjectList
