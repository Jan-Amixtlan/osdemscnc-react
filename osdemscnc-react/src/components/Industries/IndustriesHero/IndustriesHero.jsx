import React from 'react';
import styles from './IndustriesHero.module.css';

const IndustriesHero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video 
          className={styles.heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/servicios-video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay comentado para mejor visibilidad del video */}
      {/* <div className={styles.heroOverlay}></div> */}
      
      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle} style={{
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            padding: '20px',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)'
          }}>INDUSTRIES</h1>
          <p className={styles.heroSubtitle} style={{
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px 20px',
            borderRadius: '5px',
            backdropFilter: 'blur(3px)'
          }}>Precision automation solutions for every sector</p>
        </div>
        
        {/* Scroll Indicator - Removido */}
        {/* 
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollCircle}>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>
        */}
      </div>
      
      {/* Particles Effect */}
      <div className={styles.particlesContainer}>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesHero;
