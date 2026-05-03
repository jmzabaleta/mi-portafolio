function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <article className="project-card">
      
      {/* efecto glow */}
      <div className="card-glow"></div>

      {/* título */}
      <h3 className="project-title">{title}</h3>

      {/* descripción */}
      <p className="project-description">{description}</p>

      {/* tecnologías */}
      <div className="tech-list">
        {tech.map((item, index) => (
          <span key={index} className="tech-item">
            {item}
          </span>
        ))}
      </div>

      {/* botones */}
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>

    </article>
  );
}

export default ProjectCard;