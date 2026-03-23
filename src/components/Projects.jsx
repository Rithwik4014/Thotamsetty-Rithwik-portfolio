import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Emergency Fund Calculator",
      date: "Apr 2025",
      desc: "Web app with conversational chatbot UI for financial guidance.",
      tags: ["React", "CSS", "Chat UI"],
      github: "https://github.com/Rithwik4014/Emergency-Fund-Caluclator",
      image: "/projects/emergency_fund_mockup.png",
      color: "#06B6D4" // Cyan
    },
    {
      title: "HR Employee Dashboard",
      date: "Mar 2025",
      desc: "Interactive dashboard providing deep insights into attrition rates with Pivot Tables.",
      tags: ["Power BI", "Excel", "Data Analysis"],
      github: "https://github.com/Rithwik4014/HR-employee-dashboard",
      image: "/projects/hr_dashboard_mockup.png",
      color: "#8B5CF6" // Purple
    },
    {
      title: "AI Based Movie Recommendation",
      date: "Oct 2025",
      desc: "NLP-based recommendation system integrated into a Streamlit UI.",
      tags: ["Python", "NLP", "Streamlit"],
      github: "https://github.com/Rithwik4014/AI-Movie-Recommendation-System",
      image: "/projects/movie_recommendation_mockup.png",
      color: "#EC4899" // Pink
    },
    {
      title: "EV Sales Power BI Dashboard",
      date: "Dec 2025",
      desc: "Dynamic KPIs and interactive visualizations using DAX for real-world EV metrics.",
      tags: ["Power BI", "DAX", "Data Viz"],
      github: "https://github.com/Rithwik4014/ev-sales-dashboard-power-bi",
      image: "/projects/ev_sales_mockup.png",
      color: "#F59E0B" // Amber
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="project-card glass-panel animate-fade-up" 
            style={{ 
              animationDelay: `${idx * 0.1}s`, 
              padding: 0, 
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = project.color;
              e.currentTarget.style.boxShadow = `0 15px 35px -10px ${project.color}`;
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <div style={{ overflow: 'hidden', width: '100%', height: '240px', borderBottom: '1px solid var(--border-glass)' }}>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content" style={{ padding: '2rem' }}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>}
                </div>
              </div>
              <span className="project-date">{project.date}</span>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="tag"
                    style={{ transition: 'all 0.3s' }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = project.color;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.backgroundColor = `${project.color}30`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-glass)';
                      e.currentTarget.style.color = 'var(--text-light)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
