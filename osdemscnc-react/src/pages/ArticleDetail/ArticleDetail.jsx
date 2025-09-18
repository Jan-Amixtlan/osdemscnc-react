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
                        title: "🔍ÍNDICE",
                        content: "1. Introducción al ICT\n2. Importancia del ICT en la Manufactura Electrónica\n3. Funcionamiento del Sistema ICT\n4. Estructura de un Sistema ICT\n5. Claves para una Integración Exitosa\n6. Importancia del Servicio PostVenta, Capacitación y Soporte\n7. OSDEMS CNC como Proveedor Integral"
                    },
                    {
                        title: "📌Introducción al ICT",
                        content: "El In-Circuit Test (ICT) o prueba en circuito es una metodología de prueba electrónica que verifica la funcionalidad, calidad y rendimiento de las placas de circuito impreso (PCBs) mediante el acceso a los componentes individuales a través de un banco de pruebas especializado. Como proveedor de soluciones de manufactura avanzada, OSDEMS CNC (osdemscnc.com) ofrece sistemas ICT integrados que garantizan la máxima calidad en la producción electrónica."
                    },
                    {
                        title: "💡Importancia del ICT en la Manufactura Electrónica",
                        content: "1. Detección temprana de defectos \n •	Identifica fallas en componentes (resistencias, capacitores, integrados) y errores de ensamblaje (cortocircuitos, soldaduras frías) antes de que lleguen a etapas posteriores de producción. \n •	Reduce los costos de retrabajo y scrap al detectar problemas en fases iniciales del proceso. \n 2. Garantía de calidad y confiabilidad \n •	Asegura que cada PCB cumpla con las especificaciones técnicas y estándares de calidad requeridos. \n •	Mejora la confiabilidad del producto final, especialmente crítico en industrias como automotriz, aeronáutica y médica.\n 3. Optimización del proceso productivo \n •	Proporciona datos en tiempo real sobre el rendimiento de la línea de producción, permitiendo ajustes inmediatos. \n •	Facilita la trazabilidad de los defectos, ayudando a identificar tendencias y causas raíz.\n 4. Reducción de costos y tiempo\n •	Minimiza el riesgo de fallas en campo, que son significativamente más costosas de reparar.\n •	Acelera el time-to-market al asegurar que los productos sean enviados con la calidad adecuada desde el primer momento."
                    },
                    {
                        title: "⚙️Funcionamiento del Sistema ICT",
                        content: "1. Principio básico \n •	El sistema ICT utiliza un fixture (dispositivo de interfaz) que se adapta a la PCB específica mediante un conjunto de puntas de prueba (bed of nails) que hacen contacto con nodos eléctricos clave en el board. \n •	Un equipo de prueba (tester) aplica señales eléctricas y mide las respuestas para verificar valores de componentes, continuidad y funcionalidad básica. \n 2. Proceso de prueba \n    2.1. Configuración: El fixture se carga con el programa de prueba específico para la PCB. \n    2.2. Colocación: La placa se sitúa en el fixture y se asegura para garantizar contacto preciso. \n    2.3. Ejecución: El tester realiza mediciones de: \n       • Componentes pasivos: Resistencia, capacitancia, inductancia. \n       • Componentes activos: Verificación de polaridad y funcionalidad básica de diodos, transistores. \n       • Integrados: Detección de soldaduras abiertas o cortos. \n       • Continuidad: Verificación de conexiones correctas y ausencia de cortocircuitos. \n    2.4. Reporte: Genera un informe detallado de fallas, indicando ubicación y tipo de defecto. \n 3. Tecnologías avanzadas \n •	Boundary Scan (JTAG): Para testing de componentes digitales complejos y BGA. \n  •	Test de fugas: Para aplicaciones de alto voltaje o críticas para seguridad. \n •	Programación in-circuit: Permite cargar firmware o configurar dispositivos durante la prueba."
                    },
                    {
                        title: "🏗️ Estructura de un Sistema ICT",
                        content: "1. Hardware principal \n •	Tester ICT: Unidad central que contiene los recursos de medición (multímetros digitales, fuentes, generadores de señales). \n •	Fixture: Adaptador personalizado con puntas de prueba (nails) que alinean con los puntos de test de la PCB. \n •	Software de desarrollo: Para crear y depurar programas de prueba específicos para cada board. \n 2. Elementos críticos \n •	Puntas de prueba: Deben ser de alta calidad para garantizar contacto confiable y duradero. \n •	Interface de señal: Sistemas de multiplexación para manejar cientos de puntos de prueba. \n •	Sistema de sujeción: Mecanismo neumático o manual para asegurar la PCB durante el test."
                    },
                    {
                        title: "🔑 Claves para una Integración Exitosa",
                        content: "1. Diseño para la prueba (DFT - Design for Testability) \n •	Incluir puntos de prueba accesibles en el diseño de la PCB es fundamental para la efectividad del ICT. \n •	OSDEMS CNC ofrece asesoría en DFT para garantizar que los diseños de sus clientes sean fácilmente probables. \n 2. Selección del equipo adecuado \n •	Elegir un tester con la capacidad y escalabilidad necesarias para las PCBs actuales y futuras. \n •	Diseñar fixtures robustos y precisos para minimizar falsos rechazos. \n 3. Programación eficiente \n •	Desarrollar programas de prueba que maximicen la cobertura de faults mientras minimizan el tiempo de test. \n •	Implementar técnicas como guided probe para diagnóstico rápido de fallas. \n 4.  Integración con procesos existentes \n •	Conectar el sistema ICT con software MES (Manufacturing Execution System) para trazabilidad completa.\n •	Establecer flujos de información con estaciones de reparación para corrección rápida de defectos."
                    },
                    {
                        title: "🛠️ Importancia del Servicio PostVenta, Capacitación y Soporte",
                        content: "1. Instalación y puesta en marcha \n •	Una instalación profesional asegura que el equipo opere según especificaciones desde el primer día.\n •	OSDEMS CNC provee ingenieros de aplicación para instalación física, calibración y verificación. \n 2. Capacitación técnica \n •	Capacitación a operadores: Uso básico del equipo, carga de programas, interpretación de resultados. \n •	Capacitación a ingenieros: Programación avanzada, resolución de problemas, mantenimiento preventivo.\n •	Capacitación continua: Actualización sobre nuevas características y mejores prácticas.\n 3. Soporte técnico reactivo y proactivo\n •	Disponibilidad 24/7: Para resolver urgencias que puedan detener la línea de producción.\n •	Mantenimiento preventivo: Visitas programadas para calibrar, limpiar y verificar el sistema.\n •	Actualizaciones de software: Parches de seguridad y nuevas funcionalidades.\n 4. Suministro de consumibles y repuestos\n •	Proveer puntas de prueba, conectores y otros consumibles de alta calidad para garantizar confiabilidad.\n •	Disponibilidad rápida de repuestos críticos para minimizar downtime.\n 5. Mejora continua y optimización\n •	Análisis de datos de prueba para identificar oportunidades de optimizar programas o procesos.\n •	Revisión periódica del performance del sistema y recomendaciones de mejora."
                    },
                    {
                        title: "💼 OSDEMS CNC como Proveedor Integral",
                        content: "OSDEMS CNC se diferencia al ofrecer una solución completa que incluye: \n 1. Asesoría técnica especializada\n •	Análisis de necesidades y recomendación de la solución ICT óptima para cada aplicación.\n •	Soporte en diseño para la prueba (DFT) para maximizar cobertura y minimizar costos\n 2. Venta de equipos y fixtures\n •	Suministro de testers de marcas líderes y fabricación de fixtures de alta precisión.\n •	Garantías extendidas y planes de mantenimiento.\n 3. Desarrollo de programas de prueba\n •	Creación de programas ICT eficientes y con alta cobertura de defectos.\n •	Optimización continua basada en datos de producción.\n 4. Servicios de postventa de clase mundial\n •	Soporte técnico local: Ingenieros especializados disponibles para resolver problemas in situ.\n •	Planes de mantenimiento: Programas personalizados según volumen de producción y criticidad.\n •	Capacitación certificada: Cursos estructurados para todos los niveles de usuarios.\n •	Actualizaciones tecnológicas: Mantener el sistema al día con las últimas innovaciones."
                    },
                    {
                        title: "📋 Conclusión",
                        content: "La implementación exitosa de un sistema ICT requiere mucho más que la compra de un equipo; es un proyecto integral que involucra diseño, hardware, software, procesos y personas. El servicio postventa, capacitación y soporte técnico no son \"extras\" sino elementos críticos para garantizar el retorno de inversión y la efectividad continua del sistema.\n OSDEMS CNC se posiciona como un socio estratégico que acompaña a sus clientes en todo el ciclo de vida del sistema ICT, desde la selección e instalación hasta la operación diaria y mejora continua, asegurando así la máxima calidad y eficiencia en su producción electrónica."
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