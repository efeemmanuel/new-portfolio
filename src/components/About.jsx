import { useEffect, useRef } from 'react';
import '../styles/about.css';

const About = () => {
  const imageRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Animate skills with stagger
            if (entry.target.classList.contains('skills-grid')) {
              const skills = entry.target.querySelectorAll('.skill-tag');
              skills.forEach((skill, index) => {
                skill.style.setProperty('--delay', `${index * 0.1}s`);
                skill.classList.add('animate-skill');
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    const skillElements = document.querySelectorAll('.skill-tag');
    skillsRef.current = Array.from(skillElements);
    skillElements.forEach(skill => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-badge">About</div>
          <h2 id="about-heading" className="section-title">
            Crafting Digital Excellence
          </h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-glow"></div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-group">
              <p className="lead-text">
                With <span className="highlight-text">3+ years</span> of expertise in software development, 
                I specialize in building <span className="glow-text">scalable, performant web applications </span> 
                using cutting-edge technologies.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>Performance-First</h4>
                    <p>Optimized applications with lightning-fast load times and smooth interactions</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>Secure & Robust</h4>
                    <p>Enterprise-grade security practices and comprehensive testing strategies</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>User-Centric</h4>
                    <p>Intuitive interfaces designed with empathy and attention to user needs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-section">
  <h3 className="skills-title">
    <span className="title-underline">Core Technologies</span>
  </h3>
  <div className="skills-grid">
    <span className="skill-tag" data-skill="javascript">
      <span className="skill-icon">🚀</span>
      JavaScript
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="python">
      <span className="skill-icon">🐍</span>
      Python
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="react">
      <span className="skill-icon">⚛️</span>
      React.js
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="django">
      <span className="skill-icon">🎸</span>
      Django
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="express">
      <span className="skill-icon">⚡</span>
      Express.js
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="figma">
      <span className="skill-icon">🎨</span>
      Figma
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="sql">
      <span className="skill-icon">🗃️</span>
      SQL
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="html">
      <span className="skill-icon">🌐</span>
      HTML
      <div className="skill-particles"></div>
    </span>
    <span className="skill-tag" data-skill="css">
      <span className="skill-icon">🎨</span>
      CSS
      <div className="skill-particles"></div>
    </span>
  </div>
</div>
          </div>

          <div className="about-visual">
            <div className="visual-container" ref={imageRef}>
              <div className="profile-card">
                <div className="card-glow"></div>
                <div className="profile-image">
                  <div className="image-shimmer"></div>
                  <div className="profile-content">
                    <div className="status-indicator">
                      <div className="status-dot"></div>
                      <span>Available for work</span>
                    </div>
                  </div>
                </div>
                <div className="profile-stats">
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">8+</div>
                    <div className="stat-label">Years</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="element element-1">🚀</div>
                <div className="element element-2">💎</div>
                <div className="element element-3">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;