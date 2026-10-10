const projects = [
  {
    name: "Movie Search",
    description: "A React app that searches movies with the OMDb API.",
    tech: "React, API",
    live: "https://movie-search-omega-seven.vercel.app",
    repo: "https://github.com/bart-dev-svg/movie-search",
  },
  {
    name: "Chiropractic Website",
    description: "A responsive site built for a real local business.",
    tech: "HTML, CSS, Flexbox",
    live: "https://bart-dev-svg.github.io/chiropractic-site/",
    repo: "https://github.com/bart-dev-svg/chiropractic-site",
  },
  {
    name: "Weather App",
    description: "Look up the current weather for any city.",
    tech: "JavaScript, API",
    live: "https://bart-dev-svg.github.io/weather-app/",
    repo: "https://github.com/bart-dev-svg/weather-app",
  },
  {
    name: "To-Do App",
    description: "Add, complete, and delete tasks that save in your browser.",
    tech: "JavaScript, localStorage",
    live: "https://bart-dev-svg.github.io/todo-app/",
    repo: "https://github.com/bart-dev-svg/todo-app",
  },
  {
    name: "Quiz Game",
    description: "A multiple-choice quiz with scoring and replay.",
    tech: "JavaScript",
    live: "https://bart-dev-svg.github.io/quiz-game/",
    repo: "https://github.com/bart-dev-svg/quiz-game",
  },
  {
    name: "Calculator",
    description: "A working calculator built with CSS Grid.",
    tech: "JavaScript, CSS Grid",
    live: "https://bart-dev-svg.github.io/calculator/",
    repo: "https://github.com/bart-dev-svg/calculator",
  },
];

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
            <div className="card-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live site
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;