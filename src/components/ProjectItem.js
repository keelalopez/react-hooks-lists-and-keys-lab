import React from "react";


function ProjectItem({ name, about, technologies, id }) {
  const newTechArray = technologies.map((tech) => {
    return (
      <span key={tech}>{tech}</span>
    )
  })

  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <ul>
        {newTechArray}
        </ul>
      </div>
    </div>
  );
}

export default ProjectItem;
