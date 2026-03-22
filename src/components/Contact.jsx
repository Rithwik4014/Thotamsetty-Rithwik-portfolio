import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

function Contact() {
  return (
    <footer id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '2rem' }}>
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.125rem' }}>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <a href="mailto:rithwikthotamsetty00@gmail.com" className="btn btn-secondary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Mail size={20} /> rithwikthotamsetty00@gmail.com
        </a>
        <a href="tel:+917619789789" className="btn btn-secondary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Phone size={20} /> +91 7619789789
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
        <a href="https://www.linkedin.com/in/rithwik89" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-2)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
          <Linkedin size={28} />
        </a>
        <a href="https://github.com/Rithwik4014" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-3)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
          <Github size={28} />
        </a>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        Designed & Built by <span className="text-gradient" style={{fontWeight: 700}}>Thotamsetty Rithwik</span>
      </p>
    </footer>
  );
}

export default Contact;
