import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up">About Me</h2>
      <p data-aos="fade-up">
        As a B.Tech candidate in Computer Science (Class of 2026), I’ve led end-to-end AI & full-stack projects,
        from intelligent resume parsers to semantic blogging platforms. I thrive at the intersection of Python
        backends, React frontends, and cloud-native scaling.
      </p>
      <p data-aos="fade-up">
        Beyond code, I co-founded youth-led education initiatives impacting thousands, and I organize
        large-scale hackathons—blending technical leadership with community impact. Let’s collaborate
        on transformative products!
      </p>
      <div className="social-links" data-aos="fade-up">
        <a href="https://github.com/Samayeeta" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com/in/samayeeta-maitra" target="_blank" rel="noreferrer"><FaLinkedin/></a>
    
      </div>
    </section>
  );
}