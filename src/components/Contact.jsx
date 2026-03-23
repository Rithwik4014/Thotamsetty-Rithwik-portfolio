import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

function Contact() {
  return (
    <footer id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '2rem' }}>
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.125rem' }}>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* Contact Form Box matches the user's reference image */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 1rem 4rem 1rem' }}>
        <form 
          className="glass-panel animate-fade-up" 
          style={{ 
            padding: '3rem 2.5rem', 
            borderRadius: '1.5rem',
            width: '100%',
            maxWidth: '550px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-1)';
            e.currentTarget.style.boxShadow = `0 15px 35px -10px var(--accent-1)`;
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-light)', fontWeight: 500, fontSize: '0.95rem', textAlign: 'left' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              style={{ 
                width: '100%', 
                padding: '1rem 1.25rem', 
                borderRadius: '0.75rem', 
                border: '1px solid rgba(255,255,255,0.1)', 
                background: 'rgba(255,255,255,0.03)',
                outline: 'none', 
                fontFamily: 'inherit', 
                fontSize: '1rem', 
                color: 'white',
                transition: 'all 0.3s'
              }} 
              onFocus={e => {e.currentTarget.style.borderColor='var(--accent-1)'; e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow='0 0 15px rgba(6, 182, 212, 0.2)'}}
              onBlur={e => {e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.boxShadow='none'}}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-light)', fontWeight: 500, fontSize: '0.95rem', textAlign: 'left' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              style={{ 
                width: '100%', 
                padding: '1rem 1.25rem', 
                borderRadius: '0.75rem', 
                border: '1px solid rgba(255,255,255,0.1)', 
                background: 'rgba(255,255,255,0.03)',
                outline: 'none', 
                fontFamily: 'inherit', 
                fontSize: '1rem', 
                color: 'white',
                transition: 'all 0.3s'
              }} 
              onFocus={e => {e.currentTarget.style.borderColor='var(--accent-2)'; e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow='0 0 15px rgba(139, 92, 246, 0.2)'}}
              onBlur={e => {e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.boxShadow='none'}}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-light)', fontWeight: 500, fontSize: '0.95rem', textAlign: 'left' }}>Message</label>
            <textarea 
              placeholder="How can we help?" 
              rows="4" 
              style={{ 
                width: '100%', 
                padding: '1rem 1.25rem', 
                borderRadius: '0.75rem', 
                border: '1px solid rgba(255,255,255,0.1)', 
                background: 'rgba(255,255,255,0.03)',
                outline: 'none', 
                fontFamily: 'inherit', 
                fontSize: '1rem', 
                resize: 'vertical', 
                color: 'white',
                transition: 'all 0.3s'
              }}
              onFocus={e => {e.currentTarget.style.borderColor='var(--accent-3)'; e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow='0 0 15px rgba(236, 72, 153, 0.2)'}}
              onBlur={e => {e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.boxShadow='none'}}
            ></textarea>
          </div>
          <button type="submit" style={{ 
            marginTop: '1.5rem',
            padding: '1.125rem', 
            borderRadius: '0.75rem', 
            background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)', 
            color: 'white', 
            border: 'none', 
            fontWeight: 700, 
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)'
          }} 
          onMouseOver={e => {e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(6, 182, 212, 0.6)'}} 
          onMouseOut={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.4)'}}
          >
            Send Message
          </button>
        </form>
      </div>

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
