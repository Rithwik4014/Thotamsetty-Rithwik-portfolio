import React, { useState, useEffect } from 'react';
import { Trophy, Code2, Flame, Award, Loader2 } from 'lucide-react';

function Achievements() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Rithwik4014')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setStats(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">My <span className="text-gradient">Achievements</span></h2>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="glass-panel animate-fade-up" style={{ width: '100%', padding: '3rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.03, transform: 'scale(4)' }}>
            <Trophy size={100} color="var(--accent-1)" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '1rem', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
              <Code2 size={32} color="var(--accent-1)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: 'white' }}>LeetCode Live Stats</h3>
              <a href="https://leetcode.com/u/Rithwik4014/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-2)', textDecoration: 'none', fontSize: '1rem' }}>@Rithwik4014</a>
            </div>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
              <Loader2 className="animate-spin" size={40} style={{ color: 'var(--accent-2)', animation: 'spin 1s linear infinite' }} />
            </div>
          ) : stats ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              
              <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', textAlign: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='#F59E0B'; e.currentTarget.style.boxShadow='0 10px 20px -10px #F59E0B'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.boxShadow='none'}}>
                <Trophy size={32} color="#F59E0B" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '3rem', fontWeight: 800, color: '#F59E0B', margin: '0 0 0.5rem 0' }}>{stats.totalSolved}</h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Problems Solved</span>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', textAlign: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='#10B981'; e.currentTarget.style.boxShadow='0 10px 20px -10px #10B981'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.boxShadow='none'}}>
                <Flame size={32} color="#10B981" style={{ margin: '0 auto 1.5rem auto' }} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', color: '#10B981', fontWeight: 700, fontSize: '1.5rem' }}>{stats.easySolved}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Easy</span>
                  </div>
                  <div style={{ width: '1px', background: 'var(--border-glass)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', color: '#F59E0B', fontWeight: 700, fontSize: '1.5rem' }}>{stats.mediumSolved}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Medium</span>
                  </div>
                  <div style={{ width: '1px', background: 'var(--border-glass)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', color: '#EF4444', fontWeight: 700, fontSize: '1.5rem' }}>{stats.hardSolved}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Hard</span>
                  </div>
                </div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginTop: '1.5rem', fontSize: '1.1rem' }}>Difficulty Breakdown</span>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', textAlign: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='var(--accent-1)'; e.currentTarget.style.boxShadow='0 10px 20px -10px var(--accent-1)'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.boxShadow='none'}}>
                <Award size={32} color="var(--accent-1)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', margin: '0 0 0.5rem 0' }}>{stats.acceptanceRate}%</h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Acceptance Rate</span>
              </div>

            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>Unable to load LeetCode stats.</p>
          )}

        </div>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default Achievements;
