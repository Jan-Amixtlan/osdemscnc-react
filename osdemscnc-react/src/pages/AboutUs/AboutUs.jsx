import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroSlider}>
          <div className={styles.heroSlide}>
            <img 
              src="/AboutUs1.jpg" 
              alt="CNC Machining"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>ABOUT<br />US</h1>
            </div>
          </div>
          <div className={styles.heroSlide}>
            <img 
              src="/AboutUs2.jpg" 
              alt="Business and Machines"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>BUSINESS<br />AND</h1>
            </div>
          </div>
          <div className={styles.heroSlide}>
            <img 
              src="/AboutUs3.jpg" 
              alt="Machines"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>MACHINES</h1>
            </div>
          </div>
        </div>
      </section>

      

      {/* Main Content Section */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.contentColumn}>
              <p className={styles.description}>
                The company is headquartered in Guadalajara, México precision beyond people's imagination.<br />
                As a supplier of "integration of machine tools and control devices" higher quality products and provide better services to meet customers needs.<br />
                Our Expertise comes from more than just building a part but creating a long lasting partnership with every customer.
              </p>
            </div>
            <div className={styles.contentColumn}>
              <p className={styles.description}>
                Based in Guadalajara, Mexico, our company delivers precision that exceeds expectations.<br />
                We specialize in the seamless integration of machine tools and control systems, offering high-quality products and exceptional service tailored to our customers' needs.<br />
                Our true strength lies not only in what we build, but in the long-term relationships we forge with every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className={styles.container}>
          <h2 className={styles.locationTitle}>Guadalajara, Mexico</h2>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.imageGallery}>
            <div className={styles.gallerySlider}>
              <div className={styles.gallerySlide}>
                <img 
                  src="https://osdemscnc.com/wp-content/uploads/2024/12/kndckhnchc9.png" 
                  alt="CNC Workshop"
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.gallerySlide}>
                <img 
                  src="https://osdemscnc.com/wp-content/uploads/2024/12/j3bjkdb3d.png" 
                  alt="Precision Machining"
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.gallerySlide}>
                <img 
                  src="https://osdemscnc.com/wp-content/uploads/2024/12/mxkcoc.png" 
                  alt="Quality Control"
                  className={styles.galleryImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    
    </div>
  );
};

export default AboutUs;
