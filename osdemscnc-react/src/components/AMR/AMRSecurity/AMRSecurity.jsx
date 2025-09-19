import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRSecurity.module.css';

const AMRSecurity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef(null);

  const handleVideoError = (e) => {
    console.error('Error loading video:', e);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoError(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.securitySection}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Security and no-code programming for barrier-free flow</h2>
          
          {/* Mobile Video */}
          <div className={styles.videoContainerMobile}>
            <div className={styles.videoWrapper}>
              {!videoError ? (
                <video 
                  className={styles.securityVideo}
                  controls
                  playsInline
                  preload="metadata"
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  width="100%"
                  height="auto"
                >
                  <source src="/Video.mp4" type="video/mp4" />
                  <source src="./Video.mp4" type="video/mp4" />
                  <source src="../../../public/Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className={styles.videoPlaceholder}>
                  <p>Error loading video. Please check the video file.</p>
                  <p>Expected path: /Video.mp4</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop Carousel */}
          <div className={styles.carouselSection}>
            <div className={styles.videoWrapper}>
              {!videoError ? (
                <video 
                  className={styles.securityVideo}
                  controls
                  playsInline
                  preload="metadata"
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  width="100%"
                  height="auto"
                >
                  <source src="/Video.mp4" type="video/mp4" />
                  <source src="./Video.mp4" type="video/mp4" />
                  <source src="../../../public/Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className={styles.videoPlaceholder}>
                  <p>Error loading video. Please check the video file.</p>
                  <p>Expected path: /Video.mp4</p>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMRSecurity;