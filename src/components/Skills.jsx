import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Tools & Technologies",
      skills: ["MySQL", "Excel", "Power BI", "React"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Adaptability", "Teamwork", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category glass-panel animate-fade-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            <h3 className="skill-cat-title">{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
