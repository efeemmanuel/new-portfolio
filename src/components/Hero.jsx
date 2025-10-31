import { useEffect, useRef } from 'react';
import '../styles/hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? 'rgba(0, 245, 255, 0.3)' : 'rgba(147, 51, 234, 0.3)';
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <canvas 
        ref={canvasRef} 
        className="hero-canvas"
        aria-hidden="true"
      />
      
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Available for new projects</span>
            <div className="pulse-dot"></div>
          </div>

          <h1 id="hero-heading" className="hero-title">
            <span className="title-line">Hi, I'm Efe Emmanuel —</span>
            <span className="title-gradient">Software Developer</span>
          </h1>

          <p className="hero-description">
            I craft <span className="text-glow">high-performance web applications</span> with 
            React, TypeScript, and modern CSS. Specializing in creating immersive digital 
            experiences with clean code and pixel-perfect execution.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" aria-label="View my projects">
              <span>View Projects</span>
              {/* <div className="btn-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div> */}
              <div className="btn-glow"></div>
            </a>
            
            <a href="#contact" className="btn btn-secondary" aria-label="Get in touch with me">
              <span>Get In Touch</span>
              <div className="btn-sparkle">
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
              </div>
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;