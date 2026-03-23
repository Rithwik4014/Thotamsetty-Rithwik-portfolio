import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Award, Loader2, ExternalLink } from 'lucide-react';

function Achievements() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const fallbackStats = {
    status: 'success',
    totalSolved: 112,
    easySolved: 34,
    mediumSolved: 63,
    hardSolved: 15,
    acceptanceRate: 86.71,
    ranking: 1341295
  };

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Rithwik4014')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setStats(data);
        } else {
          setStats(fallbackStats);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('LeetCode API failed, using fallback:', err);
        setStats(fallbackStats);
        setLoading(false);
      });
  }, []);

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">My <span className="text-gradient">Achievements</span></h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* LeetCode Card */}
        <div className="glass-panel animate-fade-up" style={{ padding: '3rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
            <div style={{ padding: '1rem', background: 'rgba(255, 161, 22, 0.1)', borderRadius: '1rem', border: '1px solid rgba(255, 161, 22, 0.3)' }}>
              <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" width="32" height="32" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: 'white' }}>LeetCode Live Stats</h3>
              <a href="https://leetcode.com/u/Rithwik4014/" target="_blank" rel="noreferrer" style={{ color: '#FFA116', textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                @Rithwik4014 <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
              <Loader2 className="animate-spin" size={40} style={{ color: '#FFA116', animation: 'spin 1s linear infinite' }} />
            </div>
          ) : stats ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              
              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', textAlign: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='#F59E0B'; e.currentTarget.style.boxShadow='0 10px 20px -10px #F59E0B'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.boxShadow='none'}}>
                <Trophy size={28} color="#F59E0B" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#F59E0B', margin: '0 0 0.5rem 0' }}>{stats.totalSolved}</h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Problems Solved</span>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', textAlign: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='#10B981'; e.currentTarget.style.boxShadow='0 10px 20px -10px #10B981'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.boxShadow='none'}}>
                <Flame size={28} color="#10B981" style={{ margin: '0 auto 1.5rem auto' }} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', color: '#10B981', fontWeight: 700, fontSize: '1.25rem' }}>{stats.easySolved}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Easy</span>
                  </div>
                  <div style={{ width: '1px', background: 'var(--border-glass)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', color: '#F59E0B', fontWeight: 700, fontSize: '1.25rem' }}>{stats.mediumSolved}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Med</span>
                  </div>
                  <div style={{ width: '1px', background: 'var(--border-glass)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', color: '#EF4444', fontWeight: 700, fontSize: '1.25rem' }}>{stats.hardSolved}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hard</span>
                  </div>
                </div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginTop: '1.5rem', fontSize: '0.95rem' }}>Difficulty Breakdown</span>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid var(--border-glass)', textAlign: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='#FFA116'; e.currentTarget.style.boxShadow='0 10px 20px -10px #FFA116'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.boxShadow='none'}}>
                <Award size={28} color="#FFA116" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', margin: '0 0 0.5rem 0' }}>{stats.acceptanceRate}%</h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Acceptance Rate</span>
              </div>

            </div>
          ) : null}
        </div>

        {/* GeeksForGeeks Card */}
        <div className="glass-panel animate-fade-up" style={{ padding: '3rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden', animationDelay: '0.2s', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ padding: '1rem', background: 'rgba(47, 141, 70, 0.1)', borderRadius: '1rem', border: '1px solid rgba(47, 141, 70, 0.3)' }}>
              <img src="https://cdn.simpleicons.org/geeksforgeeks/2F8D46" alt="GeeksForGeeks" width="32" height="32" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: 'white' }}>GeeksForGeeks</h3>
              <a href="https://www.geeksforgeeks.org/profile/rithwik4014?tab=activity" target="_blank" rel="noreferrer" style={{ color: '#2F8D46', textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                @rithwik4014 <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', flex: 1 }}>
            Regularly solving robust algorithmic and data structural challenges to hone my critical problem-solving skills across various topics.
          </p>

          <a href="https://www.geeksforgeeks.org/profile/rithwik4014?tab=activity" target="_blank" rel="noreferrer" className="glass-panel" style={{ 
            padding: '1.5rem', 
            background: 'rgba(47, 141, 70, 0.05)', 
            borderRadius: '1rem', 
            border: '1px solid rgba(47, 141, 70, 0.3)', 
            textAlign: 'center', 
            transition: 'all 0.3s',
            display: 'block',
            textDecoration: 'none'
          }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='#2F8D46'; e.currentTarget.style.boxShadow='0 10px 20px -10px #2F8D46'}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(47, 141, 70, 0.3)'; e.currentTarget.style.boxShadow='none'}}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', margin: '0 0 0.5rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              View GFG Profile <ExternalLink size={20} color="#2F8D46" />
            </h4>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Explore my latest activity and solutions</span>
          </a>

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
