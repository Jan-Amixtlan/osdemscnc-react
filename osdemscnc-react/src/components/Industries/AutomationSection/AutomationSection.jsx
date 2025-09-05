import React, { useEffect, useRef, useState } from 'react';
import styles from './AutomationSection.module.css';

const AutomationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Enhanced Efficiency",
      description: "Increase productivity by up to 40% through automation of repetitive processes."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Consistent Quality",
      description: "Reduce human errors and maintain uniform quality standards throughout production."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M12 2v6l3-3-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12h-6l3-3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22v-6l-3 3 3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12h6l-3 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Scalability",
      description: "Easily adapt production to market demands without compromising quality."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 12h1c1 0 2-1 2-2V7c0-1-1-2-2-2h-1v7z" stroke="currentColor" strokeWidth="2"/>
          <path d="M11 12H9c-1 0-2-1-2-2V7c0-1 1-2 2-2h2v7z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Cost Reduction",
      description: "Minimize long-term operational costs and optimize material resource usage."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.automationSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.decorativeCircle}></div>
        <div className={styles.decorativeCircle2}></div>
        <div className={styles.geometricPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Why Automation Matters in Today's Competitive Market</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Industrial automation is not just a trend, it's a strategic necessity 
            that defines the future of competitive manufacturing.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={styles.benefitCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className={styles.statisticsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>40%</div>
            <div className={styles.statLabel}>Productivity Increase</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>60%</div>
            <div className={styles.statLabel}>Error Reduction</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>25%</div>
            <div className={styles.statLabel}>Operational Cost Savings</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>80%</div>
            <div className={styles.statLabel}>Quality Improvement</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Transform Your Industry?</h3>
          <p className={styles.ctaDescription} style={{ color: 'white' }}>
            Discover how our automation solutions can revolutionize 
            your production process and take you to the next level of competitiveness.
          </p>
          <button className={styles.ctaButton}>
            <span>Free Consultation</span>
            <svg viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
