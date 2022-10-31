import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const projectArray = projects.map((project) => {
    return (
      <div>
        <ProjectItem 
          technologies={project.technologies}
          name={project.name}
          about={project.about}
          id={project.id}
          />
        <li key={project.id}>{project.name}</li>
      </div>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ul>
          {projectArray}
        </ul>
      </div>
    </div>
  );
}
// {/*  */}

export default ProjectList;
