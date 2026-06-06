import "./App.css";
import { profile, skills, projects, experience } from "./data";

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Hi, my name is</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="heroText">{profile.subtitle}</p>

        <div className="actions">
          <a href="#projects">View work</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            View resume
          </a>
        </div>
      </section>

      <section className="section">
        <h3>About</h3>
        <p>
          I am a Full Stack JavaScript Developer with around 5 years of
          experience building production web and mobile applications across
          SaaS platforms, LMS systems, workflow tools, dashboards, APIs, and
          data visualization products.
        </p>
        <p>
          Most of my professional work has been on internal, client-owned, or
          company-owned products, so public links and source code are limited.
          This portfolio focuses on case studies, recreated product
          explanations, and personal demo projects.
        </p>
      </section>

      <section className="section">
        <h3>Skills</h3>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Experience</h3>
        <div className="experienceList">
          {experience.map((item) => (
            <article className="experienceItem" key={item.company}>
              <div>
                <h4>{item.role}</h4>
                <p className="company">{item.company}</p>
              </div>
              <p className="duration">{item.duration}</p>
              <p>{item.description}</p>
              <div className="tech">
                {item.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h3>Selected work</h3>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <p className="type">{project.type}</p>
              <h4>{project.title}</h4>
              <p>{project.description}</p>

              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact">
        <h3>Contact</h3>
        <p>
          Actively looking for React.js, Node.js, MERN, and Full Stack
          JavaScript opportunities.
        </p>
        <div className="actions">
          <a href={`mailto:${profile.email}`}>Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;