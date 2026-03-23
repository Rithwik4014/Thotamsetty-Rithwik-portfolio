import React from 'react';
import { User, Code, Database, Target, MapPin, GraduationCap, Film, BookOpen, Headphones } from 'lucide-react';

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
      
      <div className="about-grid" style={{ marginBottom: '4rem' }}>
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

      <div className="profile-details-row animate-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', animationDelay: '0.2s' }}>
          
        {/* Quick Facts */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: '2.5rem', 
            borderRadius: '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-2)';
            e.currentTarget.style.boxShadow = `0 15px 35px -10px var(--accent-2)`;
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'white' }}>Quick <span className="text-gradient">Facts</span></h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '1rem', display: 'flex', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                <MapPin size={24} color="var(--accent-2)" />
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Location</span>
                <h4 style={{ fontSize: '1.125rem', margin: 0, color: 'white' }}>Phagwara, Punjab</h4>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '1rem', display: 'flex', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                <GraduationCap size={24} color="var(--accent-1)" />
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Education</span>
                <h4 style={{ fontSize: '1.125rem', margin: 0, color: 'white' }}>Pursuing B.Tech in Computer Science</h4>
              </div>
            </div>
          </div>
        </div>

        {/* When I'm Not Coding */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: '2.5rem', 
            borderRadius: '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-3)';
            e.currentTarget.style.boxShadow = `0 15px 35px -10px var(--accent-3)`;
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'white' }}>When I'm Not <span className="text-gradient">Coding</span></h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', transition: 'all 0.3s' }} 
              onMouseOver={e => { e.currentTarget.style.transform='translateX(10px)'; e.currentTarget.style.borderColor='var(--accent-1)'; e.currentTarget.style.background='rgba(139, 92, 246, 0.1)'; }} 
              onMouseOut={e => { e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}
            >
              <Film size={24} color="var(--accent-1)" />
              <h4 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 500, color: 'white' }}>Watching Movies</h4>
            </div>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', transition: 'all 0.3s' }} 
              onMouseOver={e => { e.currentTarget.style.transform='translateX(10px)'; e.currentTarget.style.borderColor='var(--accent-2)'; e.currentTarget.style.background='rgba(6, 182, 212, 0.1)'; }} 
              onMouseOut={e => { e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}
            >
              <BookOpen size={24} color="var(--accent-2)" />
              <h4 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 500, color: 'white' }}>Reading Books</h4>
            </div>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', transition: 'all 0.3s' }} 
              onMouseOver={e => { e.currentTarget.style.transform='translateX(10px)'; e.currentTarget.style.borderColor='var(--accent-3)'; e.currentTarget.style.background='rgba(236, 72, 153, 0.1)'; }} 
              onMouseOut={e => { e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}
            >
              <Headphones size={24} color="var(--accent-3)" />
              <h4 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 500, color: 'white' }}>Listening Music</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
