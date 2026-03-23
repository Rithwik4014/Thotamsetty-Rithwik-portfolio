import React from 'react';
import { Briefcase, GraduationCap, TreePine, Zap, BookOpen, Building2 } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: "Community Development Project",
      org: "Green Tree Foundation",
      date: "Jul 2024",
      desc: "Participated in community welfare, environmental awareness, and active support initiatives.",
      icon: <TreePine size={24} color="white" />,
      color: "#10b981", // Emerald
      link: "https://drive.google.com/file/d/1lS8OpIdu5DRL3YLBqSeGsNy7j1D6xclO/view"
    },
    {
      title: "Code-A-Haunt Hackathon",
      org: "Hackathon Event",
      date: "Mar 2024",
      desc: "Collaborated on innovative problem-solving during a competitive hackathon event.",
      icon: <Zap size={24} color="white" />,
      color: "#f59e0b", // Amber
      link: "https://drive.google.com/file/d/1YKFeDLOKuitplwOPQfCc4wD9MhaRYq94/view"
    }
  ];

  const education = [
    {
      degree: "B.Tech (CSE)",
      school: "Lovely Professional University",
      date: "2023–Present",
      score: "CGPA: 6.79",
      icon: <GraduationCap size={24} color="white" />,
      color: "#3b82f6" // Blue
    },
    {
      degree: "Intermediate",
      school: "Sri Sathya Sai Junior College",
      date: "2021–2023",
      score: "69.1%",
      icon: <BookOpen size={24} color="white" />,
      color: "#8b5cf6" // Purple
    },
    {
      degree: "Matriculation",
      school: "Bhashyam EM High School",
      date: "2020–2021",
      score: "100%",
      icon: <Building2 size={24} color="white" />,
      color: "#ec4899" // Pink
    }
  ];

  return (
    <section id="education" className="section">
      <div className="timeline-container">
        
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
                <div className="timeline-content glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {React.cloneElement(item.icon, { size: 24, color: item.color })}
                      {item.degree}
                    </h4>
                    <span style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-light)', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>{item.date}</span>
                  </div>
                  <p className="timeline-org" style={{ color: 'var(--accent-2)', marginBottom: '0.5rem' }}>{item.school}</p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Score: {item.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-column animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="timeline-header" style={{flexDirection: 'column', alignItems: 'flex-start', margin: 0, paddingBottom: '3rem'}}>
            <span style={{color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem'}}>BEYOND THE CLASSROOM</span>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Briefcase size={40} className="text-teal" style={{color: 'var(--accent-2)'}} />
              <span>Activities & <span className="text-gradient">Experience</span></span>
            </h3>
          </div>
          <div className="timeline">
            {experiences.map((item, idx) => (
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
                <a href={item.link} target="_blank" rel="noreferrer" className="timeline-content glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: 0 }}>{item.title}</h4>
                    <span style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-light)', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>{item.date}</span>
                  </div>
                  <p className="timeline-org" style={{ color: 'var(--accent-2)', marginBottom: '0.5rem' }}>{item.org}</p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{item.desc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
