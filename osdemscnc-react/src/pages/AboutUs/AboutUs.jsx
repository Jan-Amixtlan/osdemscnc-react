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
              src="https://osdemscnc.com/wp-content/uploads/2024/09/CNC_1-scaled.jpg" 
              alt="CNC Machining"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>ABOUT<br />US</h1>
            </div>
          </div>
          <div className={styles.heroSlide}>
            <img 
              src="https://osdemscnc.com/wp-content/uploads/2024/09/cnc2.jpg" 
              alt="Business and Machines"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>BUSINESS<br />AND</h1>
            </div>
          </div>
          <div className={styles.heroSlide}>
            <img 
              src="https://osdemscnc.com/wp-content/uploads/2024/12/trabajo.jpg" 
              alt="Machines"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>MACHINES</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageColumn}>
              <div className={styles.aboutImage}>
                <img 
                  src="https://osdemscnc.com/wp-content/uploads/2023/11/galeria15.jpg" 
                  alt="OSDEMS CNC History" 
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.aboutContentColumn}>
              <h2 className={styles.aboutHeading}>About us...</h2>
              <div className={styles.aboutText}>
                <p>
                  Our company, OSDEMS Industrial, was founded in 2023 by Daniel Carrillo. 
                  The idea for the business came about when Daniel noticed a gap in the market 
                  for high-quality, precision products. With his background in SMT manufacturing 
                  process and Equipment and his passion for customers best service, best support, 
                  he set out to create a company that would provide effective CNC Manufacturer parts 
                  to any industry bringing just in time solutions while minimizing high cost production.
                </p>
              </div>
              <div className={styles.aboutButton}>
                <button className={styles.moreInfoButton}>
                  <span>more info</span>
                  <svg 
                    className={styles.buttonIcon} 
                    viewBox="0 0 448 512" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                  </svg>
                </button>
              </div>
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

      {/* Links Section */}
      <section className={styles.linksSection}>
        <div className={styles.container}>
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.linkColumnTitle}>Products</h3>
              <div className={styles.linkList}>
                <a href="#" className={styles.linkItem}>Product world</a>
                <a href="#" className={styles.linkItem}>New products</a>
                <a href="#" className={styles.linkItem}>CAD Downloads</a>
                <a href="#" className={styles.linkItem}>On-line catalogue</a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.linkColumnTitle}>Customer Solutions</h3>
              <div className={styles.linkList}>
                <a href="#" className={styles.linkItem}>Configurators</a>
                <a href="#" className={styles.linkItem}>Application examples</a>
                <a href="#" className={styles.linkItem}>Project request</a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.linkColumnTitle}>Service</h3>
              <div className={styles.linkList}>
                <a href="#" className={styles.linkItem}>Contact</a>
                <a href="#" className={styles.linkItem}>Download center</a>
                <a href="#" className={styles.linkItem}>Find contacts</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default AboutUs;
