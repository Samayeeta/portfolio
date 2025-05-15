import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div data-aos="fade-up">
        <h1>
          Hi, I’m <strong>Samayeeta Maitra</strong>
        </h1>
        <p className="typewriter">
          <Typewriter
            words={[
              'Software Engineer Intern',
              'Tech for Social Good Enthusiast',
              'Hackathon Organizer',
              'Python + React Developer',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>
      </div>
    </section>
  );
}