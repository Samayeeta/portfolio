const SKILLS = [
  'Python','JavaScript','React.js','Flask','MongoDB',
  'Firebase','NLP','Cloud Computing','Git','Vite'
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">My Skills</h2>
      <div className="skill-list">
        {SKILLS.map((s, i) => (
          <span
            className="skill-pill"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}