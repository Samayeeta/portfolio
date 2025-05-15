import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up">About Me</h2>
      <p data-aos="fade-up">
        I'm a developer and community builder driven by curiosity and a belief in using technology for social good. My interests lie in the overlap of research, systems thinking, and impact-focused design, especially in education, accessibility, and public infrastructure.
      </p>
      <p data-aos="fade-up">
        I care about thoughtful, user-centered work that’s rooted in real-world needs. Whether I’m building software, running events, or collaborating on nonprofit initiatives, I aim to create things that are technically sound, socially relevant, and deeply human.
      </p>
      <div className="social-links" data-aos="fade-up">
        <a href="https://github.com/Samayeeta" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com/in/samayeeta-maitra" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </div>
    </section>
  );
}