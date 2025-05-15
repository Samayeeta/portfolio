import React from 'react';
import AOS from 'aos';

const EXPERIENCE = [
  {
    title: 'Software Engineer Intern',
    company: 'Hirebuddy',
    date: 'Jan 2025 – Present',
    details: [
      'Built AI-powered resume optimization platform with Flask, spaCy, and React.js.',
      'Scaled MongoDB backend for 10K+ monthly requests.',
    ],
  },
  {
    title: 'Hack4Bengal Core Team Member',
    company: 'Hack4Bengal',
    date: 'Feb 2025 – Present',
    details: [
      'Led logistics for 5K+ participant hackathon, overseeing workshops and mentor tracks.',
      'Coordinated sponsor outreach and branding efforts.',
    ],
  },
  {
    title: 'On-site Coordinator',
    company: 'CodeDay Kolkata',
    date: 'Jun 2023 – Present',
    details: [
      'Managed technical setup for 250+ student hackathons.',
      'Developed live-troubleshooting infrastructure and team registration flows.',
    ],
  },
];

export default function Experience() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="experience" id="experience">
      <h2 data-aos="fade-up">Experience</h2>
      <div className="timeline-rows">
        {EXPERIENCE.map((e, i) => (
          <div className="timeline-row" key={i} data-aos="fade-up">
            {/* left placeholder or card */}
            {i % 2 === 0 ? (
              <div className="card">{/* left card */} 
                <h3>{e.title}</h3>
                <p className="company">{e.company}</p>
                <p className="exp-date">{e.date}</p>
                <ul>{e.details.map((d,j)=><li key={j}>{d}</li>)}</ul>
              </div>
            ) : (
              <div className="placeholder" />
            )}

            {/* actual dot on the centre line */}
            <div className="dot" />

            {/* right card or placeholder */}
            {i % 2 === 1 ? (
              <div className="card">{/* right card */} 
                <h3>{e.title}</h3>
                <p className="company">{e.company}</p>
                <p className="exp-date">{e.date}</p>
                <ul>{e.details.map((d,j)=><li key={j}>{d}</li>)}</ul>
              </div>
            ) : (
              <div className="placeholder" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}