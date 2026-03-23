import React from 'react';
import { User, Code, Database, Target } from 'lucide-react';

function About() {
  const cards = [
    {
      icon: <User size={28} />,
      title: "Who I Am",
      desc: "Passionate Computer Science student at Lovely Professional University.",
      color: "#06B6D4",
      bgClass: "rgba(6, 182, 212, 0.1)"
    },
    {
      icon: <Code size={28} />,
      title: "What I Do",
      desc: "Focus on problem-solving, algorithms, and modern web experiences.",
      color: "#8B5CF6",
      bgClass: "rgba(139, 92, 246, 0.1)"
    },
    {
      icon: <Database size={28} />,
      title: "My Tools",
      desc: "Data analysis enthusiast (Python libraries, visualization, databases).",
      color: "#EC4899",
      bgClass: "rgba(236, 72, 153, 0.1)"
    },
    {
      icon: <Target size={28} />,
      title: "My Goal",
      desc: "Building user-friendly applications to solve real-world problems.",
      color: "#F59E0B",
      bgClass: "rgba(245, 158, 11, 0.1)"
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      <div className="about-grid">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="about-card glass-panel animate-fade-up" 
            style={{ 
              animationDelay: `${idx * 0.15}s`,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = card.color;
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${card.color}`;
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            {/* Background Icon Watermark */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.05, transform: 'scale(4)' }}>
              {React.cloneElement(card.icon, { color: card.color })}
            </div>
            
            <div style={{ padding: '0.75rem', backgroundColor: card.bgClass, borderRadius: '1rem', display: 'inline-flex', color: card.color, border: `1px solid ${card.color}40`, marginBottom: '1.5rem' }}>
              {card.icon}
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc" style={{ position: 'relative', zIndex: 1 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
