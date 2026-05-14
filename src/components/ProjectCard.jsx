function ProjectCard({ title, description, tech, github, demo, index = 0 }) {
  return (
    <article
      className="project-card"
      style={{ "--delay": `${index * 90}ms` }}
    >
      <div className="card-glow"></div>
      <div className="card-scan"></div>

      <span className="mission-label">MISSION_{String(index + 1).padStart(2, "0")}</span>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="tech-list">
        {tech.map((item) => (
          <span key={item} className="tech-item">
            {item}
          </span>
        ))}
      </div>

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
