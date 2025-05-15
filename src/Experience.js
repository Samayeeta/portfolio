import React from 'react';
import AOS from 'aos';

const EXPERIENCE = [
  {
    title: 'Software Engineer Intern',
    company: 'Hirebuddy',
    date: 'Jan 2025 – Present',
    details: [
      'Spearheading development of an AI-powered resume optimization tool aligned with ATS standards.',
      'Integrated advanced NLP via spaCy to enhance resume parsing and keyword matching.',
      'Built responsive frontend with React.js and Flask backend with real-time MongoDB integration.',
      'Implemented real-time preview and optimization insights to boost user engagement.'
    ],
  },
  {
    title: 'Hackathon Organizer & Core Team Member',
    company: 'Hack4Bengal',
    date: 'Feb 2025 – Present',
    details: [
      'Directed logistics for a 5K+ participant hackathon including mentors, workshops, and judging tracks.',
      'Led sponsor outreach, partnership coordination, and branding execution across digital platforms.'
    ],
  },
  {
    title: 'On-site Coordinator',
    company: 'CodeDay Kolkata',
    date: 'Jun 2023 – Present',
    details: [
      'Managed technical operations for 12- and 24-hour hackathons with 250+ participants.',
      'Created troubleshooting systems and smooth team registration experiences for seamless event flow.',
      'Facilitated live technical support, team building, and participant onboarding resources.'
    ],
  },
  {
  title: 'Co-Founder & Vice President',
  company: 'Hoomans of Calcutta',
  date: 'Jan 2022 – Present',
  details: [
    'Co-founded a youth-led nonprofit driving educational and menstrual health initiatives in Kolkata.',
    'Led campaigns that raised thousands of rupees in donations and distributed 8000+ books city-wide.',
    'Coordinated the donation of 15,000+ sanitary products in collaboration with The Period Society.',
    'Built partnerships with student orgs, driving outreach and logistics across multiple districts.'
  ],
}
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