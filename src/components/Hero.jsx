import React from 'react';
import { Download, ArrowDown, Mail, Sparkles } from 'lucide-react';

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
          <a href="#contact" className="btn btn-secondary">
            <span>Contact Me</span> <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
