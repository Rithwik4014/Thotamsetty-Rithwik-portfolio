import React from 'react';
import { Award, BookOpen, Cloud, Monitor, Shield, Globe, Bookmark } from 'lucide-react';

function Certifications() {
  const training = [
    {
      title: "Basics of Data Structures and algorithms",
      date: "Jul '25",
      desc: "Completed a summer training program in Data Structures and Algorithms, focusing on structured problem-solving, complexity analysis, and hands-on implementation of essential algorithms and data structures in C++. Gained exposure to real-world coding challenges and performance optimization.",
      tech: ["Arrays", "Linked Lists", "Stacks", "Queues", "Recursion", "Sorting & Searching"],
      link: "https://drive.google.com/file/d/1I1442AIEVTNX6ya8C0wZNJQHQnSXFZct/view",
      image: "/certifications/dsa.jpg",
      color: "#06B6D4"
    }
  ];

  const certificates = [
    { 
      title: "NPTEL Cloud Computing", 
      date: "Apr 2025", 
      issuer: "", 
      icon: <Cloud size={28} color="white" />,
      link: "https://drive.google.com/file/d/13f4F4G2TmkfzawUHdpCSQ5p3r3RRIdkv/view",
      color: "#8B5CF6"
    },
    { 
      title: "Bits and Bytes \u2013 Google / Coursera", 
      date: "Sep 2024", 
      issuer: "", 
      icon: <Monitor size={28} color="white" />,
      link: "https://www.coursera.org/account/accomplishments/verify/37HZ4SEWJKK1",
      color: "#EC4899"
    },
    { 
      title: "Cyber Security Basics \u2013 MindLuster", 
      date: "Feb 2024", 
      issuer: "", 
      icon: <Shield size={28} color="white" />,
      link: "https://www.mindluster.com/student/certificate/12656117085",
      color: "#F59E0B"
    },
    { 
      title: "Responsive Web Design \u2013 FreeCodeCamp", 
      date: "Nov 2023", 
      issuer: "", 
      icon: <Globe size={28} color="white" />,
      link: "https://www.freecodecamp.org/certification/fcc4c6d589a-aa4f-4a8f-916e-36ba04ea48ca/responsive-web-design",
      color: "#10B981"
    }
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certificates & <span className="text-gradient">Training</span></h2>
      <div className="cert-container">
        
        {/* Training */}
        <div className="training-column animate-fade-up">
          <h3 className="skill-cat-title"><BookOpen size={24} className="text-teal" style={{marginRight: '0.75rem', color: 'var(--accent-2)'}}/> Training Programs</h3>
          {training.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              className="glass-panel cert-card" 
              style={{ 
                textDecoration: 'none', 
                display: 'flex', 
                flexDirection: 'column', 
                padding: 0, 
                overflow: 'hidden', 
                color: 'inherit', 
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.boxShadow = `0 15px 35px -10px ${item.color}`;
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              
              {item.image && (
                <div style={{ overflow: 'hidden', width: '100%', height: '240px', borderBottom: '1px solid var(--border-glass)' }}>
                  <img src={item.image} alt={item.title} className="project-image" />
                </div>
              )}

              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="cert-header">
                  <h4>{item.title}</h4>
                  <span className="cert-date">{item.date}</span>
                </div>
                <p className="cert-desc">{item.desc}</p>
                <div className="project-tags">
                  {item.tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Certificates */}
        <div className="certs-column animate-fade-up" style={{animationDelay: '0.2s'}}>
          <h3 className="skill-cat-title"><Award size={24} className="text-teal" style={{marginRight: '0.75rem', color: 'var(--accent-2)'}}/> Certifications</h3>
          <div className="certs-list">
            {certificates.map((cert, idx) => (
              <a 
                key={idx} 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="glass-panel cert-list-item"
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = cert.color;
                  e.currentTarget.style.boxShadow = `0 10px 25px -5px ${cert.color}60`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="cert-list-icon" style={{ background: cert.color, boxShadow: `0 4px 15px ${cert.color}40` }}>
                  {cert.icon}
                </div>
                <div className="cert-list-content">
                  <h4>{cert.title}</h4>
                  <span className="cert-list-date">{cert.date}</span>
                </div>
                <div className="cert-list-bookmark">
                  <Bookmark size={24} color={cert.color} strokeWidth={1.5} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
