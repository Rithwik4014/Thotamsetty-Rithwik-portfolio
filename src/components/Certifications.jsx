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
      image: "/certifications/dsa.jpg"
    }
  ];

  const certificates = [
    { 
      title: "NPTEL Cloud Computing", 
      date: "Apr 2025", 
      issuer: "", 
      icon: <Cloud size={28} color="white" />,
      link: "https://drive.google.com/file/d/13f4F4G2TmkfzawUHdpCSQ5p3r3RRIdkv/view"
    },
    { 
      title: "Bits and Bytes \u2013 Google / Coursera", 
      date: "Sep 2024", 
      issuer: "", 
      icon: <Monitor size={28} color="white" />,
      link: "https://www.coursera.org/account/accomplishments/verify/37HZ4SEWJKK1"
    },
    { 
      title: "Cyber Security Basics \u2013 MindLuster", 
      date: "Feb 2024", 
      issuer: "", 
      icon: <Shield size={28} color="white" />,
      link: "https://www.mindluster.com/student/certificate/12656117085"
    },
    { 
      title: "Responsive Web Design \u2013 FreeCodeCamp", 
      date: "Nov 2023", 
      issuer: "", 
      icon: <Globe size={28} color="white" />,
      link: "https://www.freecodecamp.org/certification/fcc4c6d589a-aa4f-4a8f-916e-36ba04ea48ca/responsive-web-design"
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
            <a key={idx} href={item.link} target="_blank" rel="noreferrer" className="glass-panel cert-card" style={{ textDecoration: 'none', display: 'block', color: 'inherit', cursor: 'pointer' }}>
              <div className="cert-header">
                <h4>{item.title}</h4>
                <span className="cert-date">{item.date}</span>
              </div>
              <p className="cert-desc">{item.desc}</p>
              {item.image && (
                <div style={{ marginBottom: '2rem', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'} />
                </div>
              )}
              <div className="project-tags">
                {item.tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
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
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="cert-list-icon">
                  {cert.icon}
                </div>
                <div className="cert-list-content">
                  <h4>{cert.title}</h4>
                  <span className="cert-list-date">{cert.date}</span>
                </div>
                <div className="cert-list-bookmark">
                  <Bookmark size={24} color="var(--accent-2)" strokeWidth={1.5} />
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
