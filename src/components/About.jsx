import React from 'react';
import { User, Code, Database, Target } from 'lucide-react';

function About() {
  const cards = [
    {
      icon: <User className="card-icon" />,
      title: "Who I Am",
      desc: "Passionate Computer Science student at Lovely Professional University."
    },
    {
      icon: <Code className="card-icon" />,
      title: "What I Do",
      desc: "Focus on problem-solving, algorithms, and modern web experiences."
    },
    {
      icon: <Database className="card-icon" />,
      title: "My Tools",
      desc: "Data analysis enthusiast (Python libraries, visualization, databases)."
    },
    {
      icon: <Target className="card-icon" />,
      title: "My Goal",
      desc: "Building user-friendly applications to solve real-world problems."
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      <div className="about-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="about-card glass-panel animate-fade-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            {card.icon}
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
