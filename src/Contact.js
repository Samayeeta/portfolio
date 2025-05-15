import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up">
        I’m always eager to collaborate on innovative projects. Feel free to email me at{' '}
        <a href="mailto:samayeetamaitra202@gmail.com">
          samayeetamaitra202@gmail.com
        </a>.
      </p>
      <a
        href="mailto:samayeetamaitra202@gmail.com"
        className="button"
        data-aos="fade-up"
      >
        <FaEnvelope /> Send Email
      </a>
    </section>
  );
}