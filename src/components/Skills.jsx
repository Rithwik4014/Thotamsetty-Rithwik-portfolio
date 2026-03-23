import React from 'react';
import { Code2, Library, Wrench, Users } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      color: "#06B6D4",
      bgClass: "rgba(6, 182, 212, 0.1)",
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "Libraries",
      icon: <Library size={24} />,
      color: "#8B5CF6",
      bgClass: "rgba(139, 92, 246, 0.1)",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      color: "#EC4899",
      bgClass: "rgba(236, 72, 153, 0.1)",
      skills: ["MySQL", "Excel", "Power BI", "React", "Git"]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      color: "#F59E0B",
      bgClass: "rgba(245, 158, 11, 0.1)",
      skills: ["Problem-solving", "Adaptability", "Teamwork", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx} 
            className="skill-category glass-panel animate-fade-up" 
            style={{ 
              animationDelay: `${idx * 0.15}s`,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = cat.color;
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${cat.color}`;
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Background Icon Watermark */}
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'scale(4)' }}>
              {React.cloneElement(cat.icon, { color: cat.color })}
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.6rem', backgroundColor: cat.bgClass, borderRadius: '0.75rem', display: 'flex', color: cat.color, border: `1px solid ${cat.color}40` }}>
                {cat.icon}
              </div>
              {cat.title}
            </h3>
            
            <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', position: 'relative', zIndex: 1 }}>
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="skill-badge"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-light)',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = cat.bgClass;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = cat.color;
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 5px 15px ${cat.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.color = 'var(--text-light)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
