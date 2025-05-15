const PROJECTS = [
  {
    name: 'TechBlogs',
    description:
      'Developed a semantic blogging platform with a structured CMS, real-time Firebase backend, and SEO optimization. Enabled social sharing and topic-based discovery with intelligent search.',
    stack: ['Flask', 'Firebase', 'React', 'Vite'],
  },
  {
    name: 'IntelliMenu',
    description:
      'Engineered a smart café management system that automated orders, synced live queue dashboards, and improved order accuracy by 40%. Managers accessed sales insights via real-time analytics.',
    stack: ['Flask', 'React', 'Vite'],
  },
  {
    name: 'Edufy (CalHacks Winner)',
    description:
      'Built an accessible learning platform with AI-driven personalization and WCAG 2.0 compliance. Won "Best Education Project" at CalHacks for improving engagement by 40%.',
    stack: ['Flask', 'React', 'Firebase'],
  },
  {
    name: 'NeuraGlance AI',
    description:
      'Created a research companion tool combining Gemini API with Puppeteer for live web scraping, real-time sentiment tagging, and summarization of trending topics.',
    stack: ['Next.js', 'Puppeteer', 'Node.js'],
  },
  {
    name: 'Accident Analysis App',
    description:
      'Built a GIS-enabled dashboard that visualizes traffic accident patterns using spatial clustering and GeoJSON, aiding civic authorities in planning safer roads.',
    stack: ['Flask', 'Python', 'GeoJSON'],
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