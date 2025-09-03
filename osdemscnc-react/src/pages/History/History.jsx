import React from 'react';
import styles from './History.module.css';

const History = () => {
  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={styles.history}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2 className={styles.heroSubtitle}>OSDEMS CNC</h2>
            <h1 className={styles.heroTitle}>CNC MACHINING SERVICE</h1>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
        
        {/* Scroll Button */}
        <div 
          className={styles.scrollButton} 
          onClick={() => scrollToSection(styles.aboutSection)}
          aria-label="Scroll to content"
        >
          <div className={styles.scrollCircle}>
            <div className={styles.scrollArrowContainer}>
              <div className={styles.scrollArrowLine}></div>
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

     

      {/* Footer Links Section */}
      <section className={styles.footerLinksSection}>
        <div className={styles.container}>
          <div className={styles.footerLinksGrid}>
            <div className={styles.linkColumn}>
              <div className={styles.logoSection}>
                <img 
                  src="https://osdemscnc.com/wp-content/uploads/2023/11/LOGO-CNC-512X512.png" 
                  alt="OSDEMS CNC Logo" 
                  className={styles.footerLogo}
                />
                <div className={styles.socialIcons}>
                  <a href="https://www.facebook.com/osdemsmaquinados?mibextid=JRoKGi" 
                     className={styles.socialIcon}
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="Facebook">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCzpFRl3eZQpBrdMwD-BHJdA" 
                     className={styles.socialIcon}
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="YouTube">
                    <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/_parts.cnc_/?igshid=MzMyNGUyNmU2YQ%3D%3D" 
                     className={styles.socialIcon}
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="Instagram">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/osdems-cnc/posts/?feedView=all" 
                     className={styles.socialIcon}
                     target="_blank" 
                     rel="noopener noreferrer"
                     aria-label="LinkedIn">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.linkColumnTitle}>Products</h3>
              <div className={styles.linkList}>
                <a href="#" className={styles.footerLink}>Product world</a>
                <a href="#" className={styles.footerLink}>New products</a>
                <a href="#" className={styles.footerLink}>CAD Downloads</a>
                <a href="#" className={styles.footerLink}>On-line catalogue</a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.linkColumnTitle}>Customer Solutions</h3>
              <div className={styles.linkList}>
                <a href="#" className={styles.footerLink}>Configurators</a>
                <a href="#" className={styles.footerLink}>Application examples</a>
                <a href="#" className={styles.footerLink}>Project request</a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.linkColumnTitle}>Service</h3>
              <div className={styles.linkList}>
                <a href="#" className={styles.footerLink}>Contact</a>
                <a href="#" className={styles.footerLink}>Download center</a>
                <a href="#" className={styles.footerLink}>Find contacts</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
