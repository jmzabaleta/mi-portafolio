import { useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import "./index.css";

const categories = ["Todos", "Full Stack", "Web", "Backend", "Datos"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="grid-bg"></div>
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>

      <Header />

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <span className="tag">SYSTEM ONLINE / PORTFOLIO MODE</span>

            <h1>
              Jose Zabaleta
              <br />
              <span>Full Stack Developer</span>
            </h1>

            <p>
              Creo aplicaciones web, móviles, APIs y soluciones con bases de
              datos, combinando ingeniería, diseño y visión de producto.
            </p>

            <div className="hero-buttons">
              <a href="#proyectos">Ver proyectos</a>
              <a href="#contacto" className="secondary">Contactarme</a>
              <a href="/cv-juan-gonzalez.pdf" download className="secondary">
                Descargar CV
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal">
              <p>{">"} Inicializando portafolio...</p>
              <p>{">"} Cargando proyectos...</p>
              <p>{">"} React: OK</p>
              <p>{">"} .NET: OK</p>
              <p>{">"} PostgreSQL: OK</p>
              <p className="success">{">"} Sistema listo.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div>
            <span className="section-tag">ABOUT_PLAYER</span>
            <h2>Sobre mí</h2>
          </div>

          <p>
            Soy estudiante de Ingeniería de Sistemas enfocado en crear software
            útil, ordenado y escalable. Me interesa el desarrollo full stack,
            las bases de datos, la inteligencia artificial, el análisis de datos
            y la construcción de productos reales.
          </p>
        </section>

        <section className="skills-section">
          <span className="section-tag">SKILL_TREE</span>
          <h2>Habilidades</h2>

          <div className="skills-grid">
            {[
              "React",
              "JavaScript",
              "C#",
              ".NET 8",
              "Flutter",
              "PostgreSQL",
              "Oracle SQL",
              "Power BI",
              "Git",
              "APIs REST",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <strong>10+</strong>
            <span>Proyectos</span>
          </div>

          <div className="stat-card">
            <strong>4</strong>
            <span>Tecnologías fuertes</span>
          </div>

          <div className="stat-card">
            <strong>Full</strong>
            <span>Stack Mindset</span>
          </div>

          <div className="stat-card">
            <strong>24/7</strong>
            <span>Modo aprendizaje</span>
          </div>
        </section>

        <section className="timeline-section">
          <span className="section-tag">PLAYER_HISTORY</span>
          <h2>Ruta de aprendizaje</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <h3>Bases de datos</h3>
                <p>
                  Diseño relacional, Oracle SQL, PostgreSQL, procedimientos,
                  triggers y modelos de datos.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <h3>Desarrollo de software</h3>
                <p>
                  Aplicaciones en C#, arquitectura por capas, APIs REST y buenas
                  prácticas de código.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <h3>Frontend y móvil</h3>
                <p>
                  Interfaces modernas con React, Flutter y diseño visual
                  orientado a experiencia de usuario.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <h3>Analítica de datos</h3>
                <p>
                  Data Warehouse, arquitectura Medallion, Kimball, KPIs y
                  visualización en Power BI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="certificates-section">
          <span className="section-tag">ACHIEVEMENTS_UNLOCKED</span>
          <h2>Certificados</h2>

          <div className="certificates-grid">
            {[
              "Bases de Datos",
              "HTML",
              "CSS",
              "JavaScript",
              "Big Data",
              "Inteligencia Artificial Básica",
            ].map((certificate) => (
              <div className="certificate-card" key={certificate}>
                <span className="certificate-icon">◆</span>
                <h3>{certificate}</h3>
                <p>Certificación de formación complementaria.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="projects-section">
          <span className="section-tag">QUEST_LOG</span>
          <h2>Mis Proyectos</h2>

          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-card">
            <span className="section-tag">FINAL_STAGE</span>

            <h2>¿Construimos algo?</h2>

            <p>
              Estoy abierto a proyectos, prácticas, colaboraciones y
              oportunidades para seguir creciendo como desarrollador.
            </p>

            <div className="contact-actions">
              <a href="mailto:tuCorreo@gmail.com">Enviar correo</a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;