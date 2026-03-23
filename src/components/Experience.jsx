import React from 'react';
import { GraduationCap, BookOpen, Building2 } from 'lucide-react';

function Experience() {

  const education = [
    {
      degree: "B.Tech (CSE)",
      school: "Lovely Professional University",
      date: "2023–Present",
      score: "CGPA: 6.79",
      icon: <GraduationCap size={24} color="white" />,
      color: "#06B6D4" // Cyan
    },
    {
      degree: "Intermediate",
      school: "Sri Sathya Sai Junior College",
      date: "2021–2023",
      score: "69.1%",
      icon: <BookOpen size={24} color="white" />,
      color: "#8B5CF6" // Purple
    },
    {
      degree: "Matriculation",
      school: "Bhashyam EM High School",
      date: "2020–2021",
      score: "100%",
      icon: <Building2 size={24} color="white" />,
      color: "#EC4899" // Pink
    }
  ];

  return (
    <section id="education" className="section" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="timeline-container" style={{ width: '100%', maxWidth: '800px' }}>
        
        <div className="timeline-column animate-fade-up">
          <div className="timeline-header" style={{flexDirection: 'column', alignItems: 'flex-start', margin: 0, paddingBottom: '3rem'}}>
            <span style={{color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem'}}>ACADEMIC BACKGROUND</span>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <GraduationCap size={40} className="text-teal" style={{color: 'var(--accent-2)'}} />
              <span>Education & <span className="text-gradient">Degrees</span></span>
            </h3>
          </div>
          <div className="timeline">
            {education.map((item, idx) => (
              <div key={idx} className="timeline-item" style={{ marginBottom: '3rem' }}>
                <div style={{
                  position: 'absolute',
                  left: '-4rem',
                  top: '0',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 15px ${item.color}40`,
                  zIndex: 2
                }}>
                  {item.icon}
                </div>
                <div 
                  className="timeline-content glass-panel" 
                  style={{ 
                    padding: '2rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 10px 30px -10px ${item.color}`;
                    e.currentTarget.style.transform = 'translateX(10px) translateY(-5px)';
                    e.currentTarget.style.background = 'rgba(17, 24, 39, 0.9)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
                    e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {React.cloneElement(item.icon, { size: 24, color: item.color })}
                      {item.degree}
                    </h4>
                    <span style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-light)', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, border: `1px solid ${item.color}30` }}>{item.date}</span>
                  </div>
                  <p className="timeline-org" style={{ color: 'var(--accent-2)', marginBottom: '0.5rem' }}>{item.school}</p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Score: {item.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
