const PROJECTS = [
  {
    name: 'TechBlogs',
    description:
      'Designed a full-stack blogging platform with semantic search and structured CMS, enabling authors to publish and track engagement seamlessly.',
    stack: ['Flask','Firebase','React','Vite'],
  },
  {
    name: 'IntelliMenu',
    description:
      'Built an automated café ordering and dashboard system, reducing kitchen delays by 40% and synchronizing live order queues.',
    stack: ['Flask','React','Vite'],
  },
  {
    name: 'Accident Analysis App',
    description:
      'Engineered a map-based dashboard for traffic incident data, using spatial clustering to pinpoint high-risk zones for civic planning.',
    stack: ['Flask','Python','GeoJSON'],
  },
  {
    name: 'NeuraGlance AI',
    description:
      'Developed a research tool combining multi-layer web scraping with Gemini-powered sentiment analysis and summarization.',
    stack: ['Next.js','Puppeteer','Node.js'],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="project-list">
        {PROJECTS.map((p,i) => (
          <div className="project-card" key={i} data-aos="fade-up">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="tech-stack">
              {p.stack.map((t,j) => (
                <span className="pill" key={j}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}