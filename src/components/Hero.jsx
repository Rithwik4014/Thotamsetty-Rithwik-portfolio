import React from 'react';
import { Download, ArrowDown, Mail, Sparkles, Github, Linkedin } from 'lucide-react';

function Hero() {
  return (
    <section className="hero animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <div className="hero-content">
        <div className="status-badge glass-panel">
          <Sparkles size={16} /> Open to Opportunities
        </div>
        <h1 className="hero-title">Thotamsetty <br/><span className="text-gradient">Rithwik</span></h1>
        <p className="hero-subtitle">Aspiring Software Developer & Data Enthusiast</p>
        <p className="hero-description">"Building smart solutions with code and data"</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span> <ArrowDown size={18} />
          </a>
          <a href="https://drive.google.com/uc?export=download&id=19XofuK-rMheJAFzo9IkmUVp3TbH0LuUo" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <span>Download CV</span> <Download size={18} />
          </a>
        </div>
        
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="https://github.com/Rithwik4014" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-main)', transition: 'all 0.3s', display: 'flex' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'}}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rithwik89" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-main)', transition: 'all 0.3s', display: 'flex' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'}}>
            <Linkedin size={24} />
          </a>
          <a href="#contact" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-main)', transition: 'all 0.3s', display: 'flex' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-3)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'}}>
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
