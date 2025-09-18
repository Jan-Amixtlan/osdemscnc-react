import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ArticleDetail.module.css';

const ArticleDetail = () => {
    const { id } = useParams();

    // Datos de los artículos (puedes mover esto a un contexto o archivo separado)
    const articles = {
        1: {
            title: "Importancia, Funcionamiento y Claves de la Integración del ICT (In-Circuit Test)",
            category: "ICT",
            year: "2025",
            image: "/ICT.jpg",
            color: "#2563eb",
            content: {
                introduction: "Importancia, Funcionamiento y Claves de la Integración del ICT (In-Circuit Test)",
                sections: [
                    {
                        title: "ÍNDICE",
                        content: "1. Introducción al ICT\n2. Importancia del ICT en la Manufactura Electrónica\n3. Funcionamiento del Sistema ICT\n4. Estructura de un Sistema ICT\n5. Claves para una Integración Exitosa\n6. Importancia del Servicio PostVenta, Capacitación y Soporte\n7. OSDEMS CNC como Proveedor Integral"
                    },
                    {
                        title: "Introducción al ICT",
                        content: "El In-Circuit Test (ICT) o prueba en circuito es una metodología de prueba electrónica que verifica la funcionalidad, calidad y rendimiento de las placas de circuito impreso (PCBs) mediante el acceso a los componentes individuales a través de un banco de pruebas especializado. Como proveedor de soluciones de manufactura avanzada, OSDEMS CNC (osdemscnc.com) ofrece sistemas ICT integrados que garantizan la máxima calidad en la producción electrónica."
                    },
                    {
                        title: "Importancia del ICT en la Manufactura Electrónica",
                        content: "1. Detección temprana de defectos \n •	Identifica fallas en componentes (resistencias, capacitores, integrados) y errores de ensamblaje (cortocircuitos, soldaduras frías) antes de que lleguen a etapas posteriores de producción . \n •	Reduce los costos de retrabajo y scrap al detectar problemas en fases iniciales del proceso ."
                    },
                    {
                        title: "Proceso de Implementación",
                        content: "La integración del ICT requiere el diseño de fixtures especializadas, programación de secuencias de prueba y calibración de equipos. Nuestro equipo especializado maneja cada etapa del proceso."
                    },
                    {
                        title: "Beneficios Clave",
                        content: "• Detección temprana de defectos\n• Reducción de costos de reparación\n• Mejora en la calidad del producto\n• Trazabilidad completa del proceso\n• Optimización de tiempos de producción"
                    }
                ]
            }
        },
        2: {
            title: "Importancia, Funcionamiento y Claves de la Integración del FT (Functional Test)",
            category: "FT",
            year: "2025",
            image: "/FT.jpg",
            color: "#009393",
            content: {
                introduction: "El Functional Test (FT) representa la etapa final de verificación en el proceso de manufactura electrónica, asegurando que el producto funcione según las especificaciones diseñadas.",
                sections: [
                    {
                        title: "Fundamentos del FT",
                        content: "El Functional Test valida que el producto electrónico opere correctamente bajo condiciones reales de uso, verificando todas las funciones y características especificadas."
                    },
                    {
                        title: "Diferencia con ICT",
                        content: "Mientras el ICT verifica componentes individuales, el FT evalúa el funcionamiento integral del sistema completo, incluyendo interfaces, comunicaciones y rendimiento general."
                    },
                    {
                        title: "Metodologías de Prueba",
                        content: "Implementamos pruebas funcionales automatizadas que simulan condiciones reales de operación, incluyendo pruebas de estrés, temperatura y durabilidad."
                    },
                    {
                        title: "Impacto en Calidad",
                        content: "• Validación completa del producto\n• Detección de fallas de diseño\n• Verificación de especificaciones\n• Garantía de rendimiento\n• Cumplimiento de estándares industriales"
                    }
                ]
            }
        },
        3: {
            title: "Automatización Industrial y Médica",
            category: "Automatización",
            year: "2025",
            image: "/Automatizacion.jpg",
            color: "#20b9db",
            content: {
                introduction: "La automatización industrial y médica representa el futuro de la manufactura de precisión, integrando tecnologías avanzadas para mejorar eficiencia, calidad y seguridad.",
                sections: [
                    {
                        title: "Automatización Industrial",
                        content: "Implementamos sistemas automatizados que optimizan procesos de manufactura, reducen errores humanos y aumentan la productividad en entornos industriales complejos."
                    },
                    {
                        title: "Automatización Médica",
                        content: "Desarrollamos soluciones especializadas para la industria médica, cumpliendo con estrictos estándares de calidad y regulaciones para dispositivos médicos críticos."
                    },
                    {
                        title: "Tecnologías Integradas",
                        content: "Utilizamos robótica avanzada, sistemas de visión artificial, control de calidad automatizado y software de gestión integral para crear soluciones completas."
                    },
                    {
                        title: "Ventajas Competitivas",
                        content: "• Precisión extrema en procesos\n• Reducción de costos operativos\n• Mejora en seguridad laboral\n• Trazabilidad completa\n• Cumplimiento regulatorio automático"
                    }
                ]
            }
        },
        4: {
            title: "¿Por Qué los AMRs Son Clave Hoy?",
            category: "AMRs",
            year: "2025",
            image: "/AMR.jpg",
            color: "#1e40af",
            content: {
                introduction: "Los Autonomous Mobile Robots (AMRs) están revolucionando la logística y manufactura modernas, ofreciendo soluciones flexibles y eficientes para el transporte y manejo de materiales.",
                sections: [
                    {
                        title: "Evolución de la Robótica Móvil",
                        content: "Los AMRs representan la nueva generación de robots móviles autónomos que pueden navegar de forma inteligente en entornos dinámicos sin infraestructura fija."
                    },
                    {
                        title: "Aplicaciones Industriales",
                        content: "Desde el transporte de materiales hasta la inspección automatizada, los AMRs se adaptan a múltiples procesos industriales mejorando la eficiencia operativa."
                    },
                    {
                        title: "Tecnología de Navegación",
                        content: "Equipados con sensores LiDAR, cámaras y algoritmos de IA, los AMRs pueden mapear, planificar rutas y evitar obstáculos de forma autónoma."
                    },
                    {
                        title: "Impacto en la Industria",
                        content: "• Flexibilidad operativa total\n• Reducción de costos logísticos\n• Mejora en seguridad laboral\n• Escalabilidad según demanda\n• Integración con sistemas existentes"
                    }
                ]
            }
        },
        5: {
            title: "Precisión Absoluta- El Arte y Ciencia detrás de las Fixturas ICT",
            category: "Precisión",
            year: "2025",
            image: "/Fixturas.jpg",
            color: "#f59e0b",
            content: {
                introduction: "Las fixturas ICT representan la culminación de ingeniería de precisión, combinando diseño mecánico avanzado con tecnología electrónica para crear herramientas de testing ultra-precisas.",
                sections: [
                    {
                        title: "Ingeniería de Precisión",
                        content: "Cada fixture ICT es diseñada con tolerancias micrométricas, utilizando materiales de alta calidad y procesos de manufactura de precisión extrema."
                    },
                    {
                        title: "Diseño y Desarrollo",
                        content: "Nuestro proceso incluye análisis CAD/CAM avanzado, simulación de contactos, optimización térmica y validación exhaustiva antes de la producción."
                    },
                    {
                        title: "Materiales y Tecnologías",
                        content: "Empleamos aleaciones especiales, contactos de alta conductividad, sistemas de guiado de precisión y tecnologías de manufactura CNC avanzadas."
                    },
                    {
                        title: "Ventajas Técnicas",
                        content: "• Repetibilidad extrema\n• Durabilidad excepcional\n• Contacto eléctrico perfecto\n• Mantenimiento mínimo\n• Adaptabilidad a nuevos diseños"
                    }
                ]
            }
        }
    };

    const article = articles[id];

    if (!article) {
        return (
            <div className={styles.notFound}>
                <h1>Artículo no encontrado</h1>
                <Link to="/articles" className={styles.backLink}>
                    Volver a artículos
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.articleDetail}>
            

            {/* Introduction Section */}
            <section className={styles.introductionSection}>
                <div className={styles.container}>
                    <div className={styles.introductionContent}>
                        <h2 className={styles.introductionTitle}>
                            {article.content.introduction}
                        </h2>
                    </div>
                </div>
            </section>

            {/* Article Image Section */}
            <section className={styles.imageSection}>
                <div className={styles.container}>
                    <div className={styles.articleImageContainer}>
                        <img
                            src={article.image}
                            alt={article.title}
                            className={styles.articleImage}
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.articleContent}>
                        {article.content.sections.map((section, index) => (
                            <div key={index} className={styles.section}>
                                <h2 className={styles.sectionTitle}>{section.title}</h2>
                                <div className={styles.sectionContent}>
                                    {section.content.split('\n').map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h3>Información del Artículo</h3>
                            <div className={styles.sidebarItem}>
                                <strong>Categoría:</strong>
                                <span>{article.category}</span>
                            </div>
                            <div className={styles.sidebarItem}>
                                <strong>Año:</strong>
                                <span>{article.year}</span>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h3>¿Te interesa este tema?</h3>
                            <p>Contacta con nuestro equipo especializado para más información sobre nuestros servicios.</p>
                            <Link to="/contacto" className={styles.contactButton}>
                                Contactar Ahora
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Back to Articles */}
            <section className={styles.backSection}>
                <div className={styles.container}>
                    <Link to="/articles" className={styles.backButton}>
                        ← Volver a todos los artículos
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ArticleDetail;