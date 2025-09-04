import React, { useState, useEffect } from 'react';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const fullText = 'READY to make BIG THINGS HAPPEN?';

  // Imágenes del carrusel (simulando imágenes CNC industriales)
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
      title: "Precision Manufacturing",
      description: "Advanced CNC machining for complex components"
    },
    {
      url: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1200&h=800&fit=crop",
      title: "Industrial Innovation",
      description: "Cutting-edge technology for superior results"
    },
    {
      url: "https://nbmfacilities.com/wp-content/uploads/2024/10/business-5.jpg",
      title: "Quality Engineering",
      description: "Professional solutions for every industry"
    },
    {
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop",
      title: "Modern Manufacturing",
      description: "State-of-the-art equipment and processes"
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

    const section = document.querySelector(`.${styles.contactCta}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypewriterText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // Auto-avanzar carrusel
  useEffect(() => {
    if (isVisible && !isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 12000); // 12 segundos por imagen
      return () => clearInterval(interval);
    }
  }, [isVisible, isPaused, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Pausa 5 segundos después de interacción manual
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Pausa 5 segundos después de interacción manual
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Pausa 5 segundos después de interacción manual
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = "3326225912";
    const message = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios de CNC y manufactura. ¿Podrían proporcionarme más información?");
    
    // Detectar si es móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    
    if (isMobile) {
      // Para móvil: usar protocolo whatsapp:// que abre la app directamente
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
      // Para escritorio: usar WhatsApp Web
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
    
    // Abrir en nueva ventana/pestaña
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Fallback: si no se puede abrir (ej: no tiene WhatsApp instalado en móvil)
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Intentar con el enlace universal como fallback
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.testimonialContent}>
            <h2 className={styles.testimonialTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <blockquote className={styles.testimonialQuote}>
                "I would like to express my utmost appreciation for Osdems CNC, a leading company in the field of advertising. Their commitment to creative design and innovative ideas truly sets them apart in the industry. The team's ability to seamlessly blend creativity with functionality has resulted in remarkable campaigns that resonate with audiences. Osdems CNC consistently demonstrates a deep understanding of market trends, allowing them to craft unique solutions tailored to each client's needs. Their dedication to excellence and forward-thinking approach not only enhances brand visibility but also drives engagement and results. I wholeheartedly recommend Osdems CNC to any organization seeking a partner in innovative advertising solutions. Their passion and expertise make them an invaluable asset in the realm of creative design."
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <span>NR</span>
                </div>
                <div className={styles.authorInfo}>
                  <cite>Noe Rivas</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactCta}>
        {/* Background Layers */}
        <div className={styles.backgroundLayer}></div>
        <div className={styles.overlayGradient}></div>
        
        {/* Animated Elements */}
        <div className={styles.floatingParticles}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`${styles.particle} ${styles[`particle${i + 1}`]}`}></div>
          ))}
        </div>
        
        {/* Animated Gears */}
        <div className={styles.gearContainer}>
          <div className={`${styles.gear} ${styles.gear1}`}>
            <svg viewBox="0 0 100 100" className={styles.gearSvg}>
              <path d="M50,10 L54,18 L62,16 L60,24 L68,26 L64,34 L72,38 L66,44 L72,52 L64,56 L68,64 L60,66 L62,74 L54,72 L50,80 L46,72 L38,74 L40,66 L32,64 L36,56 L28,52 L34,44 L28,38 L36,34 L32,26 L40,24 L38,16 L46,18 Z M50,35 A15,15 0 1,1 50,65 A15,15 0 1,1 50,35" 
                    fill="rgba(0,153,153,0.2)" stroke="rgba(0,153,153,0.4)" strokeWidth="1"/>
            </svg>
          </div>
          <div className={`${styles.gear} ${styles.gear2}`}>
            <svg viewBox="0 0 80 80" className={styles.gearSvg}>
              <path d="M40,8 L43,14 L49,13 L48,19 L54,21 L51,27 L57,30 L53,35 L57,41 L51,44 L54,50 L48,52 L49,58 L43,57 L40,63 L37,57 L31,58 L32,52 L26,50 L29,44 L23,41 L27,35 L23,30 L29,27 L26,21 L32,19 L31,13 L37,14 Z M40,28 A12,12 0 1,1 40,52 A12,12 0 1,1 40,28" 
                    fill="rgba(255,165,0,0.2)" stroke="rgba(255,165,0,0.4)" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.contactContent}>
            {/* Animated Icon */}
            <div className={`${styles.ctaIcon} ${isVisible ? styles.iconAnimate : ''}`}>
              <div className={styles.iconGlow}></div>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            
            {/* Main Title with Stagger Animation */}
            <h1 className={`${styles.contactTitle} ${isVisible ? styles.animate : ''}`}>
              <span className={styles.titleLine1}>Contact Us</span>
            </h1>
            
            {/* Image Carousel */}
            <div className={`${styles.carouselContainer} ${isVisible ? styles.carouselAnimate : ''}`}>
              <div className={styles.carousel}>
                <div 
                  className={styles.carouselTrack}
                  style={{ transform: `translateX(-${currentSlide * 25}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className={styles.carouselSlide}>
                      <div className={styles.slideImage}>
                        <img src={image.url} alt={image.title} />
                        <div className={styles.slideOverlay}>
                          <div className={styles.slideContent}>
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Controls */}
                <button 
                  className={`${styles.carouselButton} ${styles.prevButton}`}
                  onClick={prevSlide}
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                
                <button 
                  className={`${styles.carouselButton} ${styles.nextButton}`}
                  onClick={nextSlide}
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className={styles.carouselDots}>
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Animated Divider */}
            <div className={`${styles.divider} ${isVisible ? styles.dividerAnimate : ''}`}>
              <div className={styles.dividerLine}></div>
              <div className={styles.dividerIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className={styles.dividerLine}></div>
            </div>
            
            {/* Typewriter Effect */}
            <p className={styles.contactDescription}>
              <span className={styles.typewriter}>
                {typewriterText}
                <span className={styles.cursor}>|</span>
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className={styles.contactActions}>
              <button 
                onClick={handleWhatsAppClick}
                className={`${styles.contactButton} ${styles.primaryButton} ${isVisible ? styles.buttonAnimate : ''}`}
                type="button"
              >
                <div className={styles.buttonGlow}></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                <span>Contactar</span>
                <div className={styles.buttonRipple}></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;