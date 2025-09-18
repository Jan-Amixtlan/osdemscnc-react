import React, { useState, useEffect } from 'react';
import './EvidenceSection.css';

const EvidenceSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const evidenceItems = [
        {
            id: 1,
            title: "Importancia, Funcionamiento y Claves de la Integración del ICT (In-Circuit Test) ",
            year: "2025",
            image: "/ICT.jpg",
            category: "ICT",
            color: "#4ade80",
            gradient: "from-emerald-500 to-teal-400"
        },
        {
            id: 2,
            title: "Importancia, Funcionamiento y Claves de la Integración del FT (Functional Test) ",
            year: "2025",
            image: "/images/supplement-label-guide.jpg",
            category: "FT",
            color: "#60a5fa",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            id: 3,
            title: "Automatización Industrial y Médica",
            year: "2025",
            image: "/images/cofepris-regulation.jpg",
            category: "Automatización",
            color: "#a78bfa",
            gradient: "from-purple-500 to-pink-400"
        },
        {
            id: 4,
            title: "¿Por Qué los AMRs Son Clave Hoy?",
            year: "2025",
            image: "/images/branded-vs-generic.jpg",
            category: "AMRs",
            color: "#fb7185",
            gradient: "from-rose-500 to-orange-400"
        },
        {
            id: 5,
            title: "Precisión Absoluta- El Arte y Ciencia detrás de las Fixturas ICT",
            year: "2025",
            image: "/images/branded-vs-generic.jpg",
            category: "Precisión",
            color: "#fb7185",
            gradient: "from-rose-500 to-orange-400"
        }
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="innovative-evidence-section">
            {/* Fondo animado con partículas */}
            <div className="animated-background">
                <div className="geometric-shapes">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`floating-shape shape-${i + 1}`}
                            style={{
                                animationDelay: `${i * 0.5}s`,
                                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                            }}
                        />
                    ))}
                </div>

                {/* Grid holográfico */}
                <div className="holographic-grid">
                    <div className="grid-lines horizontal"></div>
                    <div className="grid-lines vertical"></div>
                </div>

                {/* Efectos de luz dinámicos */}
                <div
                    className="dynamic-light"
                    style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                    }}
                />
            </div>

            <div className="innovative-container">
                {/* Header con efectos 3D */}
                <div className="innovative-header">
                    <div className="title-container">
                        <h2 className="innovative-title">
                            <span className="title-word" data-text="Aquí">Aquí</span>
                            <span className="title-word" data-text="no">no</span>
                            <span className="title-word" data-text="encontrarás">encontrarás</span>
                            <span className="title-highlight" data-text="«milagros»">«milagros»</span>
                            <span className="title-word" data-text="o">o</span>
                            <span className="title-highlight" data-text="«tips»">«tips»</span>
                            <span className="title-word" data-text="de">de</span>
                            <span className="title-word" data-text="moda.">moda.</span>
                            <br />
                            <span className="title-main" data-text="Encontrarás">Encontrarás</span>
                            <span className="title-glow" data-text="evidencia.">evidencia.</span>
                        </h2>
                    </div>

                    <div className="subtitle-container">
                        <p className="innovative-subtitle">
                            Profundizaremos en la ciencia de la activación celular, desmentiremos
                            mitos de la industria y te daremos las herramientas para que tomes
                            decisiones basadas en ciencia, no en marketing.
                        </p>
                        <div className="accent-line"></div>
                    </div>
                </div>

                {/* Grid de tarjetas innovador */}
                <div className="innovative-grid">
                    {evidenceItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`innovative-card ${activeCard === item.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveCard(item.id)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{
                                '--card-color': item.color,
                                '--animation-delay': `${index * 0.1}s`,
                            }}
                        >
                            {/* Hologram effect */}
                            <div className="card-hologram"></div>

                            {/* Imagen con efectos */}
                            <div className="card-image-wrapper">
                                <div className="card-image-container">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="card-image"
                                        loading="lazy"
                                    />
                                    <div className="image-overlay"></div>
                                    <div className="scan-line"></div>
                                </div>

                                {/* Badges flotantes */}
                                <div className="floating-badges">
                                    <div className="year-badge" style={{ '--badge-color': item.color }}>
                                        <span className="badge-icon">◆</span>
                                        {item.year}
                                    </div>
                                    <div className="category-badge" style={{ '--badge-color': item.color }}>
                                        {item.category}
                                        <div className="badge-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido con animaciones */}
                            <div className="card-content-wrapper">
                                <div className="content-frame">
                                    <h3 className="card-title-innovative">
                                        <span className="title-background"></span>
                                        {item.title}
                                    </h3>

                                    <div className="card-footer">
                                        <button className="futuristic-button">
                                            <span className="button-bg"></span>
                                            <span className="button-text">Explorar</span>
                                            <div className="button-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="button-particles">
                                                {[...Array(6)].map((_, i) => (
                                                    <div key={i} className={`particle particle-${i + 1}`}></div>
                                                ))}
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Indicador de progreso */}
                                <div className="progress-indicator">
                                    <div className="progress-bar"></div>
                                </div>
                            </div>

                            {/* Efectos adicionales */}
                            <div className="card-glow" style={{ '--glow-color': item.color }}></div>
                            <div className="corner-accents">
                                <div className="corner top-left"></div>
                                <div className="corner top-right"></div>
                                <div className="corner bottom-left"></div>
                                <div className="corner bottom-right"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicador de scroll futurista */}
                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <div className="scroll-dot"></div>
                    <span className="scroll-text">DESCUBRIR MÁS</span>
                </div>
            </div>
        </section>
    );
};

export default EvidenceSection;