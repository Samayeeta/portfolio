import { useState } from 'react';

export default function Header() {
  const [dark, setDark] = useState(true);
  const toggle = () => {
    setDark(!dark);
    document.body.classList.toggle('light');
  };

  return (
    <nav className="navbar">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <button className="toggle-btn" onClick={toggle}>
        {dark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}