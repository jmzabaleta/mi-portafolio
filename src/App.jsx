import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import "./index.css";

const categories = ["Todos", "Full Stack", "Web", "Backend", "Datos"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    const cursor = document.querySelector(".gamer-cursor");
    const reticle = document.querySelector(".cursor-reticle");

    if (!cursor || !reticle) return undefined;

    const moveCursor = (event) => {
      const x = `${event.clientX}px`;
      const y = `${event.clientY}px`;

      cursor.style.left = x;
      cursor.style.top = y;
      reticle.style.left = x;
      reticle.style.top = y;
    };

    const setHoverState = (event) => {
      const isInteractive = event.target.closest("a, button");
      document.body.classList.toggle("cursor-locked", Boolean(isInteractive));
    };

    window.addEventListener("pointermove", moveCursor);
    document.addEventListener("mouseover", setHoverState);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("mouseover", setHoverState);
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="gamer-cursor" aria-hidden="true"></div>
      <div className="cursor-reticle" aria-hidden="true"></div>
      <div className="grid-bg"></div>
      <div className="arena-light arena-light-one"></div>
      <div className="arena-light arena-light-two"></div>

      <Header />

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content entrance entrance-one">
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
              <a href="#contacto" className="secondary">
                Contactarme
              </a>
              <a href="/CV-ING%20JOSE_Z.pdf" download className="secondary">
                Descargar CV
              </a>
            </div>
          </div>

          <div className="hero-panel entrance entrance-two">
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

            <div className="mouse-stage" aria-hidden="true">
              <div className="mouse-cable"></div>
              <div className="gaming-mouse">
                <span className="mouse-left"></span>
                <span className="mouse-right"></span>
                <span className="mouse-wheel"></span>
                <span className="mouse-logo"></span>
                <span className="mouse-rgb-strip"></span>
                <span className="mouse-side-button side-one"></span>
                <span className="mouse-side-button side-two"></span>
                <span className="mouse-grip left-grip"></span>
                <span className="mouse-grip right-grip"></span>
              </div>
              <div className="mouse-pad-glow"></div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="reveal-on-scroll">
            <span className="section-tag">ABOUT_PLAYER</span>
            <h2>Sobre mí</h2>
          </div>

          <p className="reveal-on-scroll delay-one">
            Soy estudiante de Ingeniería de Sistemas enfocado en crear software
            útil, ordenado y escalable. Me interesa el desarrollo full stack,
            las bases de datos, la inteligencia artificial, el análisis de datos
            y la construcción de productos reales.
          </p>
        </section>

        <section className="skills-section reveal-on-scroll">
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
            ].map((skill, index) => (
              <span key={skill} style={{ "--delay": `${index * 45}ms` }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="stats-section reveal-on-scroll">
          <div className="stat-card" style={{ "--delay": "0ms" }}>
            <strong>10+</strong>
            <span>Proyectos</span>
          </div>

          <div className="stat-card" style={{ "--delay": "90ms" }}>
            <strong>4</strong>
            <span>Tecnologías fuertes</span>
          </div>

          <div className="stat-card" style={{ "--delay": "180ms" }}>
            <strong>Full</strong>
            <span>Stack Mindset</span>
          </div>

          <div className="stat-card" style={{ "--delay": "270ms" }}>
            <strong>24/7</strong>
            <span>Modo aprendizaje</span>
          </div>
        </section>

        <section className="timeline-section reveal-on-scroll">
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

        <section className="certificates-section reveal-on-scroll">
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
            ].map((certificate, index) => (
              <div
                className="certificate-card"
                key={certificate}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <span className="certificate-icon"></span>
                <h3>{certificate}</h3>
                <p>Certificación de formación complementaria.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="projects-section reveal-on-scroll">
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
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-card reveal-on-scroll">
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
