import React, { useState, useEffect } from 'react';
import styles from './NextLevel.module.css';

const NextLevel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "next level",
      subtitle: "osdems cnc",
      description: "Does your company need CNC machining?",
      stats: [
        { number: "5+", label: "years\nexperience" },
        { number: "15k", label: "happy\nclients" },
        { number: "10+", label: "professional\ntrainers" }
      ],
      showButton: true
    },
    {
      title: "",
      subtitle: "osdems cnc",
      description: "We are your best option to make your projects a reality. Reliability, quality and commitment distinguish us. Choose excellence, choose us!",
      stats: [
        { number: "50+", label: "Completed\nprojects" },
        { number: "10+", label: "Projects in\nprogress" }
      ],
      showButton: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(`.${styles.nextLevel}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.nextLevel}>
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.triangle}></div>
      </div>
      
      {/* Navigation Arrows */}
      <button className={styles.navArrow} onClick={prevSlide} style={{ left: '20px', top: '45%' }}>
        <i className="fa-caret-up"></i>
      </button>
      
      <button className={styles.navArrow} onClick={nextSlide} style={{ left: '20px', top: '55%' }}>
        <i className="fa-caret-down"></i>
      </button>
      
      <div className={styles.container}>
        <div className={styles.nextLevelContent}>
          <div className={styles.slideIndicator}>
            {currentSlide + 1}/{slides.length}
          </div>
          
          <h2 className={`${styles.nextLevelTitle} ${isVisible ? styles.animate : ''}`}>
            {slides[currentSlide].title && (
              <span className={styles.nextText}>{slides[currentSlide].title}</span>
            )}
            <span className={styles.osdemsText}>osdems</span>
            <span className={styles.cncText}>cnc</span>
          </h2>
          
          <div className={styles.statsContainer}>
            {slides[currentSlide].stats.map((stat, index) => (
              <div key={index} className={`${styles.statCard} ${isVisible ? styles.animate : ''}`}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.contentArea}>
            <p className={`${styles.nextLevelDescription} ${isVisible ? styles.animate : ''}`}>
              {slides[currentSlide].description}
            </p>
            
            {slides[currentSlide].showButton && (
              <button className={`${styles.nextLevelCta} ${isVisible ? styles.animate : ''}`}>
                <span>let's get started!</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;