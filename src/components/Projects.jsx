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
      image: "/projects/emergency_fund_mockup.png"
    },
    {
      title: "HR Employee Dashboard",
      date: "Mar 2025",
      desc: "Interactive dashboard providing deep insights into attrition rates with Pivot Tables.",
      tags: ["Power BI", "Excel", "Data Analysis"],
      github: "https://github.com/Rithwik4014/HR-employee-dashboard",
      image: "/projects/hr_dashboard_mockup.png"
    },
    {
      title: "AI Based Movie Recommendation",
      date: "Oct 2025",
      desc: "NLP-based recommendation system integrated into a Streamlit UI.",
      tags: ["Python", "NLP", "Streamlit"],
      github: "https://github.com/Rithwik4014/AI-Movie-Recommendation-System",
      image: "/projects/movie_recommendation_mockup.png"
    },
    {
      title: "EV Sales Power BI Dashboard",
      date: "Dec 2025",
      desc: "Dynamic KPIs and interactive visualizations using DAX for real-world EV metrics.",
      tags: ["Power BI", "DAX", "Data Viz"],
      github: "https://github.com/Rithwik4014/ev-sales-dashboard-power-bi",
      image: "/projects/ev_sales_mockup.png"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass-panel animate-fade-up" style={{ animationDelay: `${idx * 0.1}s`, padding: 0, overflow: 'hidden' }}>
            <div style={{ overflow: 'hidden', width: '100%', height: '240px', borderBottom: '1px solid var(--border-glass)' }}>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content" style={{ padding: '2rem' }}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                </div>
              </div>
              <span className="project-date">{project.date}</span>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
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
