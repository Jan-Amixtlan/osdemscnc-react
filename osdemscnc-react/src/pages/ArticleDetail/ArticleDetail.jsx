import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ArticleDetail.module.css';

const ArticleDetail = () => {
    const { id } = useParams();

    // Función para convertir markdown de tabla a HTML
    const parseContent = (content) => {
        // Detectar si el contenido contiene una tabla markdown
        if (content.includes('|') && content.includes('---')) {
            const lines = content.split('\n');
            let tableHtml = '';
            let inTable = false;
            let regularContent = [];

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();

                if (line.includes('|') && line !== '' && !inTable) {
                    // Inicio de tabla
                    inTable = true;
                    tableHtml += '<table>';

                    // Header row
                    const headers = line.split('|').map(h => h.trim()).filter(h => h !== '');
                    tableHtml += '<thead><tr>';
                    headers.forEach(header => {
                        tableHtml += `<th>${header}</th>`;
                    });
                    tableHtml += '</tr></thead><tbody>';

                    // Skip separator line
                    i++;
                } else if (line.includes('|') && inTable) {
                    // Data row
                    const cells = line.split('|').map(c => c.trim()).filter(c => c !== '');
                    tableHtml += '<tr>';
                    cells.forEach(cell => {
                        // Procesar markdown básico en celdas (negrita)
                        const processedCell = cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                 .replace(/<br>/g, '<br/>');
                        tableHtml += `<td>${processedCell}</td>`;
                    });
                    tableHtml += '</tr>';
                } else if (inTable && (line === '' || !line.includes('|'))) {
                    // Fin de tabla
                    inTable = false;
                    tableHtml += '</tbody></table>';
                    regularContent.push({ type: 'table', content: tableHtml });
                    tableHtml = '';

                    if (line !== '') {
                        regularContent.push({ type: 'paragraph', content: line });
                    }
                } else if (!inTable) {
                    // Contenido regular
                    if (line !== '') {
                        regularContent.push({ type: 'paragraph', content: line });
                    }
                }
            }

            // Si terminamos en tabla
            if (inTable) {
                tableHtml += '</tbody></table>';
                regularContent.push({ type: 'table', content: tableHtml });
            }

            return regularContent;
        } else {
            // Contenido regular sin tablas
            return content.split('\n').map(line => ({ type: 'paragraph', content: line }));
        }
    };

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
                        title: "🔍Índice",
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
                introduction: "Importancia, Funcionamiento y Claves de la Integración del FT (Functional Test)",
                sections: [
                    {
                        title: "🔍 Índice",
                        content: "1. Introducción al FT \n 2. Importancia del FT en la Manufactura Electrónica\n3. Funcionamiento del Sistema FT\n 4. Estructura de un Sistema FT\n 5. Claves para una Integración Exitosa\n 6. Importancia del Servicio PostVenta, Capacitación y Soporte \n 7. OSDEMS CNC como Proveedor Integral"
                    },
                    {
                        title: "📌 Introducción al FT",
                        content: "El Functional Test (FT) o prueba funcional es un proceso de validación que verifica que una unidad bajo prueba (UUT) opere según las especificaciones de diseño y funcionalidad requeridas. A diferencia de las pruebas estructurales como el ICT, el FT simula las condiciones reales de operación para asegurar que el producto final cumpla con todas sus funciones previstas. Como proveedor de soluciones de manufactura avanzada, OSDEMS CNC (osdemscnc.com) ofrece sistemas FT integrados que garantizan la máxima calidad y funcionalidad en la producción electrónica."
                    },
                    {
                        title: "💡 Importancia del FT en la Manufactura Electrónica",
                        content: "1. Validación de funcionalidad completa\n •	Verifica que el producto opere correctamente en condiciones reales o simuladas, asegurando que cumpla con los requisitos del cliente y las normativas aplicables.\n •	Detecta fallas que las pruebas estructurales (como ICT) no pueden identificar, como errores de software, problemas de timing o interacciones entre componentes.\n 2. Garantía de calidad y confiabilidad del producto final\n •	Reduce el riesgo de fallas en campo, que son significativamente más costosas y pueden dañar la reputación de la marca. \n •	Especialmente crítico en industrias con altos estándares de calidad y seguridad como automotriz, aeroespacial, médica y dispositivos críticos.\n 3. Aseguramiento de la experiencia del usuario\n •	Valida no solo la funcionalidad eléctrica sino también aspectos mecánicos, de software y de interfaz de usuario.\n •	En productos complejos (ej: consolas, equipos médicos), el FT es la única forma de asegurar que todas las funciones interactúen correctamente.\n 4. Complemento esencial a otras pruebas\n •	Mientras el ICT verifica componentes individuales y conexiones, el FT valida el comportamiento integrado del sistema. \n •	Proporciona la última línea de defensa antes de que el producto sea embarcado al cliente final."
                    },
                    {
                        title: "⚙️ Funcionamiento del Sistema FT",
                        content: "1. Principio básico\n•	El sistema FT aplica estímulos a la unidad bajo prueba (UUT) y mide las respuestas, comparándolas con los valores esperados según las especificaciones de diseño.\n•	Puede involucrar pruebas eléctricas, de software, mecánicas, térmicas y de interfaz de usuario, dependiendo de la complejidad del producto.\n2. Proceso de prueba típico\n 2.1.	Configuración: La UUT se coloca en el fixture de prueba y se conecta a interfaces eléctricas, mecánicas y de software.\n2.2. Aplicación de estímulos: El sistema aplica señales de entrada, potencia, datos o comandos según la secuencia de prueba programada.\n2.3. Medición de respuestas: Se capturan las salidas eléctricas, respuestas de software, comportamientos mecánicos, etc.\n2.4. Análisis y decisión: Las respuestas se comparan con los límites aceptables definidos en las especificaciones.\n2.5. Reporte de resultados: Se genera un reporte detallado con pass/fail y datos de diagnóstico en caso de falla.\n3. Tipos comunes de pruebas funcionales\n•	Pruebas de consumo energético: Verifican que el consumo de corriente esté dentro de especificaciones.\n •	Pruebas de interfaces de comunicación: Validan protocolos como UART, I2C, SPI, USB, Ethernet, etc.\n •	Pruebas de software y firmware: Verifican la correcta ejecución de funciones programadas.\n •	Pruebas de interfaces de usuario: Validan displays, botones, LEDs, audios, etc.\n •	Pruebas de rendimiento: Miden parámetros como velocidad de procesamiento, ancho de banda, etc."
                    },
                     {
                        title: "🏗️ Estructura de un Sistema FT",
                        content: "1. Hardware principal\n•	Equipo de medición e instrumentación: Multímetros, osciloscopios, analizadores de espectro, fuentes de alimentación, etc.\n•	Fixture de prueba: Adaptador mecánico y eléctrico que interface entre el equipo de prueba y la UUT.\n•	Interfaces de estímulo y captura: Tarjetas de adquisición de datos, generadores de señal, cargas programables, etc.\n•	Controlador: Computadora industrial o PLC que orchesta la secuencia de prueba.\n2. Software especializado\n•	Entorno de desarrollo: Para crear, depurar y mantener los programas de prueba (ej: LabVIEW, TestStand, Python, C++).\n•	Secuencias de prueba: Programas específicos para cada producto que definen los pasos de prueba, estímulos y criterios de pass/fail.\n•	Sistema de reportes: Para generar resultados, estadísticas y datos para traceability.\n3. Interfaces específicas por producto\n•	Adaptadores mecánicos: Para posicionar correctamente la UUT y conectar interfaces no eléctricas.\n•	Probes y conectores: Para hacer contacto eléctrico con puntos de test en la UUT.\n•	Sistemas de visión: Para verificar displays, LEDs o componentes mecánicos."
                    },
                    {
                        title: "🔑 Claves para una Integración Exitosa",
                        content: "1. Definición clara de requisitos\n•	Establecer especificaciones de prueba detalladas basadas en los requisitos del producto y casos de uso reales.\n•	Involucrar a todas las partes interesadas (diseño, manufactura, calidad) en la definición de las pruebas.\n2. Diseño del fixture y interfaces\n•	Desarrollar fixtures robustos que aseguren repetibilidad y confiabilidad en las mediciones. \n•	Desarrollar fixtures robustos que aseguren repetibilidad y confiabilidad en las mediciones.\n3. Desarrollo de software modular y mantenible\n•	Crear arquitecturas de software escalables y reutilizables para reducir tiempo de desarrollo en futuros productos.\n•	Implementar manejo de exceptions y diagnóstico automático de fallas para facilitar troubleshooting.\n4. Validación y correlación\n•	Validar exhaustivamente el sistema de prueba contra unidades conocidas buenas y malas.\n•	Asegurar correlación entre diferentes sistemas de prueba y entre manufactura y desarrollo.\n5. Integración con sistemas de manufactura\n•	Conectar el FT con sistemas MES (Manufacturing Execution System) para traceability completa.\n•	Implementar flujos de información automáticos con estaciones de reparación y control de calidad."
                    },
                    {
                        title: "🛠️ Importancia del Servicio PostVenta, Capacitación y Soporte",
                        content: "1. Puesta en marcha y validación\n•	Instalación física y commissioning del sistema por personal.\n•	Validación in situ con unidades reales de producción para asegurar cumplimiento de especificaciones.\n2. Capacitación técnica integral\n•	Capacitación para operadores: Uso del sistema, carga de UUT, interpretación de resultados.\n•	Capacitación para ingenieros: Programación, modificación de secuencias, troubleshooting.\n•	Capacitación para mantenimiento: Mantenimiento preventivo, reemplazo de consumibles, calibración.\nSoporte técnico especializado\n•	Soporte reactivo: Resolución rápida de problemas que afecten la producción, con disponibilidad 24/7 para casos críticos.\n•	Soporte proactivo: Monitoreo remoto, actualizaciones preventivas y recomendaciones de mejora.\n•	Mantenimiento programado: Visitas periódicas para calibración, verificación de performance y actualizaciones.\n4. Actualizaciones y mejoras continuas\n•	Actualizaciones de software para añadir funcionalidades, mejorar performance o corregir issues.\n•	Adaptación del sistema a cambios en el producto o procesos de manufactura.\n•	Optimización de tiempos de ciclo y cobertura de prueba basada en datos de producción.\n5. Suministro de repuestos y consumibles\n•	Provisión de componentes críticos, interfaces, conectores y consumibles con garantía de calidad.\n•	Disponibilidad de repuestos para minimizar downtime en caso de fallas."
                    },
                    {
                        title: "💼 OSDEMS CNC como Proveedor Integral",
                        content: "OSDEMS CNC se diferencia al ofrecer una solución completa de FT que incluye:\n1. Consultoría y diseño de solución \n•	Análisis de requisitos y recomendación de la estrategia de prueba óptima para cada aplicación.\n•	Diseño de arquitectura de hardware y software balanceando performance, costo y flexibilidad.\n2. Desarrollo e integración llave en mano\n•	Diseño y fabricación de fixtures e interfaces mecánicas de alta precisión.\n•	Desarrollo de software de prueba a medida con interfaces intuitivas y sistemas de reporteo.\n•	Integración con equipos de medición e instrumentación de marcas líderes.\n3. ervicios de postventa de clase mundial\n•	Soporte local: Ingenieros especializados disponibles para resolución rápida de problemas.\n•	Planes de mantenimiento: Contratos personalizados según volumen de producción y criticidad.\n•	Capacitación certificada: Programas estructurados para todos los niveles de usuarios.\n•	Mejora continua: Análisis de datos de prueba para identificar oportunidades de optimización.\n4. Ventajas competitivas de OSDEMS CNC\n•	Expertise técnico: Conocimiento profundo en electrónica, software, mecánica y procesos de manufactura.\n•	Flexibilidad: Soluciones adaptadas a las necesidades específicas de cada cliente, desde PYMEs hasta grandes manufactureros.\n•	Compromiso con la calidad: Sistemas que cumplen con los más altos estándares industriales y normativas aplicables.\n•	Partnership a largo plazo: Relaciones basadas en confianza y resultados, no solo en transacciones comerciales."
                    },
                    {
                        title: "📋 Conclusión",
                        content: "La implementación de un sistema Functional Test efectivo es un elemento crítico para asegurar la calidad, funcionalidad y confiabilidad de productos electrónicos complejos. Más que una simple estación de prueba, el FT representa la última garantía antes de que el producto llegue al cliente final.\n OSDEMS CNC se posiciona como un socio estratégico que provee soluciones integrales de FT, acompañando a sus clientes desde el diseño de la estrategia de prueba hasta la operación diaria y mejora continua del sistema. Nuestro enfoque en servicio postventa, capacitación y soporte técnico asegura que los sistemas de prueba no solo se instalen correctamente sino que mantengan su efectividad a lo largo del tiempo, maximizando el retorno de inversión y minimizando el riesgo de calidad para nuestros clientes.\n Para más información sobre cómo podemos implementar una solución de Functional Test en su línea de producción, visite osdemscnc.com o contacte a nuestro equipo de especialistas. "
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
                introduction: "Automatización Industrial y Médica",
                sections: [
                    {
                        title: "🔍 Índice",
                        content: "1. Introducción a la Automatización\n2. Importancia Estratégica\n 3. Funcionamiento y Estructura de Sistemas Clave\n 4. Claves para Integración Exitosa\n 5. Aplicaciones Industriales vs. Médicas\n 6. Servicio PostVenta y Soporte: Factor Crítico\n 7. OSDEMS CNC como Proveedor Integral"
                    },
                    {
                        title: "📌 Introducción a la Automatización",
                        content: "La automatización industrial y médica representa la evolución tecnológica que integra sistemas mecánicos, electrónicos y de software para realizar operaciones con mínima intervención humana. OSDEMS CNC (osdemscnc.com) se especializa en el diseño, implementación y soporte de soluciones de automatización personalizadas para sectores industriales y médicos, optimizando procesos críticos con enfoque en precisión, confiabilidad y trazabilidad."
                    },
                    {
                        title: "💡 Importancia Estratégica de la Automatización",
                        content: "1. Eficiencia Operativa y Productividad\n•	Reducción de tiempos de ciclo mediante flujos continuos y sincronizados.\n•	Minimización de errores humanos en operaciones repetitivas o de alta precisión.\n•	Optimización de recursos (mano de obra, energía, materiales) a través de control adaptativo.\n2. Calidad y Trazabilidad\n•	Consistencia en outputs mediante parámetros controlados y repetibles.\n•	Registro automático de datos (lotes, serial numbers, mediciones) para cumplimiento normativo.\n•	Detección temprana de desviaciones con sistemas de inspección in-line.\n3. Seguridad y Ergonomía\n•	Reducción de riesgos laborales en operaciones peligrosas (manejo de químicos, cargas pesadas).\n•	Ambientes controlados para procesos críticos (salas limpias, atmósferas inertes.\nEscalabilidad y Flexibilidad\n•	Sistemas modulares que adaptan capacidad según demanda.\n•	Reconfiguración rápida para cambios de producto o volúmenes."
                    },
                    {
                        title: "⚙️ Funcionamiento y Estructura de Sistemas Clave",
                        content: "1. Bandas Transportadoras Automatizadas\n•	Función: Movimiento coordinado de materiales entre estaciones de proceso\n•	Estructura:\no	Actuadores: Motores AC/DC, servomotores para control de velocidad y posición.\no	Sensores: Fotoeléctricos, inductivos, codificadores para tracking de productos.\no	Control: PLCs y HMIs para gestión de rutas, acumulación y sincronización.\n•	Integración: Con sistemas de clasificación, pesaje y empaque.\n2. Estaciones de Rework Automatizadas\n•	Función: Corrección automatizada de defectos en PCBs o componentes.\n•	Estructura:\no	Sistemas de visión: Cámaras de alta resolución para identificación de fallas.\no	Brazo robótico: Para remoción/colocación de componentes (SMD, THT).\no	Estación de soldadura: Hot air, IR o láser para resoldadura precisa.\n•	Integración: Con ICT/FT feeders para diagnóstico y reparación.\n3. Mesas de Retrabajo y Reparación\n•	Función: Intervención semi-automatizada para prototipos o lotes pequeños.\n•	Estructura:\no	Posicionadores multi-eje: Para manipulación precisa de assemblies.\no	Herramientas intercambiables: Soldadoras, dispensadores, extractores.\no	Interfaz ergonómica: Pantallas táctiles, ayudas visuales (VR/AR).\n•	Integración: Con bancos de prueba y documentación digital (MES/ERP).\n\n| Sistema | Función Principal | Componentes Críticos | Nivel de Automatización |\n|---------|---------|---------------------|-------------|\n| **Bandas Transportadoras** | Movimiento de materiales | Motores, sensores, PLCs | Alta (completamente automático) |\n| **Estaciones de Rework** | Corrección de defectos | Visión artificial, robots, soldadura | Media-Alta (supervisión mínima) |\n| **Mesas de Reparación** | Intervención precisa | Posicionadores, herramientas, HMI | Media (operador asistido) | \n Tabla 1: Comparativa de Sistemas de Automatización Clave"
                    },
                    {
                        title: "🏗️ Claves para Integración Exitosa",
                        content: "1. Diseño Centrado en Procesos\n•	Análisis de flujos: Identificación de cuellos de botella y oportunidades.\n•	Simulación digital: Emulación de operaciones para optimizar layouts (Digital Twin).\n2. Selección de Tecnologías\n•	Escalabilidad: Componentes modulares que permitan expansión futura.\n•	Interoperabilidad: Protocolos estándar (OPC UA, EtherCAT) para conectividad.\n3. Implementación por Etapas\n•	Pilotos controlados: Validación progresiva de funcionalidades.\n•	Migración gradual: Minimización de disrupciones operativas durante instalación.\n4. Capacitación Temprana\n•	Involucramiento de usuarios: Operarios y técnicos en fases de diseño y prueba.\n•	Training en tecnologías específicas: Programación PLC, robótica, HMI."
                    },
                    {
                        title: "🏭 Aplicaciones Industriales vs. Médicas",
                        content: "1. Entornos Industriales\n•	Automotriz: Ensamble de componentes, testing de motores, pintura.\n•	Electrónica: Populación de PCBs, soldadura, inspección AOI.\n•	Alimentos: Empaque, paletización, control de calidad.\n2. Entornos Médicos\n•	Dispositivos Médicos: Manufactura de implants, instrumental quirúrgico.\n•	Farmacéutica: Llenado estéril, inspección de viales, packaging.\n•	Laboratorios: Manipulación de muestras, análisis automatizado.\n\n| Parámetro | Entorno Industrial | Entorno Médico |\n|---------------|--------------|---------------------|\n| **Precisión** | ±0.1 mm (typical) | ±0.01 mm (critical) |\n| **Trazabilidad** | Lote, serial number | UDI (Unique Device Identification), lote, paciente |\n| **Ambiente** | IP54, resistente a polvo | Salas limpias (ISO 5-8), esterilidad |\n| **Cumplimiento Normativo** | ISO 9001, IATF 16949 | ISO 13485, FDA 21 CFR Part 820, GMP |\n| **Limpieza/Mantenimiento** | Limpieza general | Desinfección, validación de limpieza | \n Tabla 2: Requerimientos Específicos por Sector"
                    },
                    {
                        title: "",
                        content: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
                    },
                    {
                        title: "",
                        content: ""
                    },
                    {
                        title: "",
                        content: ""
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
                                    {parseContent(section.content).map((item, pIndex) => (
                                        item.type === 'table' ? (
                                            <div key={pIndex} dangerouslySetInnerHTML={{ __html: item.content }} />
                                        ) : (
                                            <p key={pIndex}>{item.content}</p>
                                        )
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