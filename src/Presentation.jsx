import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, Pointer, Layers, Package, List } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add keyframes styles to head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatCube {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(3px, -8px) scale(1.05); }
      }
      @keyframes pulseSlow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
      }
      @keyframes gentleBob {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      @keyframes orbit0 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes orbit1 {
        0% { transform: rotate(120deg); }
        100% { transform: rotate(480deg); }
      }
      @keyframes orbit2 {
        0% { transform: rotate(240deg); }
        100% { transform: rotate(600deg); }
      }
      @keyframes expandFade {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.6; }
        100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
      }
      @keyframes pinDrop {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes slideArrow {
        0%, 100% { transform: translateX(0px); opacity: 0.6; }
        50% { transform: translateX(10px); opacity: 1; }
      }
      @keyframes slideArrowHead {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(10px); }
      }
      @keyframes glowPulse {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.2); }
      }
      @keyframes pointerPulse {
        0%, 100% { transform: scale(1) translateY(0); }
        50% { transform: scale(1.1) translateY(-5px); }
      }
      @keyframes hexagonPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes slideIn {
        0%, 100% { opacity: 0.5; transform: translateX(0); }
        50% { opacity: 1; transform: translateX(-5px); }
      }
      @keyframes arrowFlow {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes fadeInSlide {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fall {
        0% { transform: translateY(0); opacity: 0; }
        10% { opacity: 0.6; }
        90% { opacity: 0.6; }
        100% { transform: translateY(120vh); opacity: 0; }
      }
      @keyframes hexFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(10deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes boxPulse {
        0%, 100% { 
          transform: scale(1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        50% { 
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
        }
      }
      @keyframes arrowSlide {
        0%, 100% { 
          transform: translateX(0px);
          opacity: 0.7;
        }
        50% { 
          transform: translateX(8px);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const slides = [
    {
      id: 0,
      title: "Estructuras de Datos",
      subtitle: "Módulo 2: Fundamentos y Aplicaciones",
      type: "cover",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      icon: Database
    },
    {
      id: 1,
      title: "¿Qué son las Estructuras de Datos?",
      content: [
        "Colección de datos organizados lógicamente",
        "Facilitan la manipulación y acceso a información",
        "La información siempre está estructurada y organizada",
        "Ejemplo: Un diccionario ordena palabras alfabéticamente"
      ],
      gifUrl: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/data-structures/data-structures.png",
      gradient: "from-blue-500 to-cyan-500",
      icon: Layers
    },
    {
      id: 2,
      title: "La Ecuación Fundamental",
      subtitle: "Niklaus Wirth (Creador de PASCAL)",
      formula: "Algoritmos + Estructuras de Datos = Programas",
      content: [
        "Un buen programa necesita:",
        "✓ Algoritmo eficiente",
        "✓ Estructura de datos adecuada"
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: Code,
      hasNetworkBg: true,
      hasFlowDiagram: true
    },
    {
      id: 3,
      title: "Tipos de Estructuras",
      columns: [
        {
          title: "Estáticas",
          iconType: "static-blocks",
          items: [
            "Tamaño fijo en memoria",
            "Definido en compilación",
            "No cambia durante ejecución",
            "Ejemplo: Arrays de tamaño fijo"
          ],
          color: "blue"
        },
        {
          title: "Dinámicas",
          iconType: "dynamic-particles",
          items: [
            "Tamaño variable",
            "Cambia en tiempo de ejecución",
            "Más flexible",
            "Ejemplo: Listas enlazadas"
          ],
          color: "green"
        }
      ],
      gradient: "from-indigo-500 to-purple-500",
      icon: Package
    },
    {
      id: 4,
      title: "Estructuras (struct)",
      subtitle: "Agrupando diferentes tipos de datos",
      code: `struct almacen {
    char nombre[20];
    char proveedor[25];
    int cantidad;
    float precio;
    char fecha_compra[8];
};`,
      content: [
        "Agrupa variables de diferentes tipos",
        "Cada elemento se llama 'miembro'",
        "Facilita organización de datos relacionados"
      ],
      gradient: "from-cyan-500 to-blue-500",
      icon: Package
    },
    {
      id: 5,
      title: "Acceso a Estructuras",
      subtitle: "Dos formas de acceder a los miembros",
      columns: [
        {
          title: "Operador Punto (.)",
          iconType: "dot-operator",
          code: "producto.nombre = \"Atún\";\nproducto.cantidad = 100;",
          desc: "Acceso directo"
        },
        {
          title: "Operador Flecha (->)",
          iconType: "arrow-operator",
          code: "ptr->nombre = \"Atún\";\nptr->cantidad = 100;",
          desc: "Acceso mediante puntero"
        }
      ],
      gradient: "from-green-500 to-teal-500",
      icon: Code,
      hasNetworkBg: true
    },
    {
      id: 6,
      title: "Punteros (Apuntadores)",
      subtitle: "Variables que almacenan direcciones de memoria",
      content: [
        "Un puntero 'apunta' a otra variable",
        "Almacena la dirección de memoria",
        "Operador & obtiene la dirección",
        "Operador * accede al valor apuntado"
      ],
      hasCircuitBg: true,
      hasPointerDiagram: true,
      gradient: "from-orange-500 to-red-500",
      icon: Pointer
    },
    {
      id: 7,
      title: "Declaración de Punteros",
      code: `int *puntero1;      // Puntero a entero
float *puntero2;    // Puntero a float
char *puntero3;     // Puntero a char

int edad = 25;
int *p_edad = &edad;  // p_edad apunta a edad
printf("%d", *p_edad); // Imprime: 25`,
      content: [
        "Se declaran con asterisco (*)",
        "Deben inicializarse antes de usarse",
        "El tipo debe coincidir con la variable"
      ],
      hasCircuitBg: true,
      gradient: "from-red-500 to-pink-500",
      icon: Pointer
    },
    {
      id: 8,
      title: "Uniones y Enumeraciones",
      columns: [
        {
          title: "Uniones",
          iconType: "union-shapes",
          items: [
            "Miembros comparten memoria",
            "Tamaño = miembro más grande",
            "Solo un miembro activo a la vez"
          ],
          color: "purple"
        },
        {
          title: "Enumeraciones",
          iconType: "enum-list",
          items: [
            "Conjunto de constantes",
            "Valores enteros nombrados",
            "Mejoran legibilidad del código"
          ],
          color: "indigo"
        }
      ],
      gradient: "from-violet-500 to-purple-500",
      icon: List,
      hasWavyBg: true
    },
    {
      id: 9,
      title: "Aplicaciones Prácticas",
      content: [
        "🏢 Sistemas de gestión (inventarios, empleados)",
        "🎮 Desarrollo de videojuegos (objetos, personajes)",
        "📊 Bases de datos (registros estructurados)",
        "🌐 Redes y comunicaciones (paquetes de datos)",
        "🤖 Inteligencia Artificial (grafos, árboles)"
      ],
      gradient: "from-pink-500 to-rose-500",
      icon: Database
    },
    {
      id: 10,
      title: "Conceptos Avanzados de Estructuras",
      columns: [
        {
          title: "Estructuras Anidadas",
          gifUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
          items: [
            "Una estructura dentro de otra",
            "Reutilización de código",
            "Organización jerárquica"
          ],
          color: "blue"
        },
        {
          title: "Arreglos y Typedef",
          gifUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920324.png",
          items: [
            "Arreglos de estructuras",
            "Typedef para alias",
            "Simplifica declaraciones"
          ],
          color: "purple"
        }
      ],
      gradient: "from-indigo-600 to-blue-600",
      icon: Layers
    },
    {
      id: 11,
      title: "Concepto de Apuntadores",
      subtitle: "Definición y Características Fundamentales",
      content: [
        "📍 Variable que almacena direcciones de memoria",
        "🔗 Permite acceso indirecto a los datos",
        "⚡ Manipulación directa y eficiente de memoria",
        "🎯 Operador & obtiene dirección, * accede al valor",
        "⚠️ Potente pero requiere manejo cuidadoso"
      ],
      gifUrl: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      icon: Pointer
    },
    {
      id: 12,
      title: "¿Por Qué Usar Punteros?",
      subtitle: "Razones técnicas y filosóficas",
      columns: [
        {
          title: "Ventajas",
          gifUrl: "https://cdn-icons-png.flaticon.com/512/5610/5610944.png",
          items: [
            "Mayor eficiencia y velocidad",
            "Control directo de memoria",
            "Gestión dinámica de recursos",
            "Estructuras de datos complejas",
            "Menor uso de memoria"
          ],
          color: "green"
        },
        {
          title: "Desventajas",
          gifUrl: "https://cdn-icons-png.flaticon.com/512/5610/5610945.png",
          items: [
            "Fuente común de errores",
            "Difíciles de depurar",
            "Corrupción de memoria",
            "Curva de aprendizaje alta",
            "Problemas de seguridad"
          ],
          color: "red"
        }
      ],
      gradient: "from-emerald-500 to-teal-500",
      icon: Code
    },
    {
      id: 13,
      title: "Lenguajes CON Punteros Explícitos",
      content: [
        "🔷 C - Control total de memoria",
        "🔷 C++ - Orientado a objetos con punteros",
        "🔷 Pascal - Punteros más seguros",
        "🔷 Rust - Punteros con seguridad garantizada",
        "🔷 Go - Punteros limitados y seguros"
      ],
      subtitle: "Acceso directo a direcciones de memoria",
      gifUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      gradient: "from-blue-600 to-indigo-600",
      icon: Pointer
    },
    {
      id: 13,
      title: "Lenguajes SIN Punteros Explícitos",
      content: [
        "🟢 Java - Referencias automáticas, sin aritmética",
        "🟢 Python - Gestión automática de memoria",
        "🟢 JavaScript - Referencias ocultas al programador",
        "🟢 C# - Referencias gestionadas por CLR",
        "🟢 Ruby - Todo es referencia implícita"
      ],
      subtitle: "Abstracción y gestión automática",
      gifUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      gradient: "from-green-600 to-emerald-600",
      icon: Database
    },
    {
      id: 14,
      title: "¿Por Qué Esta Diferencia?",
      content: [
        "🎯 Filosofía de diseño: Bajo nivel vs Alto nivel",
        "🛡️ Seguridad: Prevenir errores de memoria",
        "📚 Facilidad de aprendizaje: Sintaxis más simple",
        "🚀 Rendimiento vs Productividad",
        "🔧 Casos de uso: Sistemas vs Aplicaciones"
      ],
      gradient: "from-purple-600 to-pink-600",
      icon: Layers
    },
    {
      id: 16,
      title: "Comparación Práctica",
      columns: [
        {
          title: "Con Punteros (C)",
          gifUrl: "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
          code: "int x = 10;\nint *ptr = &x;\n*ptr = 20;\n// x ahora es 20",
          desc: "Control directo de memoria"
        },
        {
          title: "Sin Punteros (Python)",
          gifUrl: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
          code: "x = 10\ny = x\ny = 20\n# x sigue siendo 10",
          desc: "Referencias automáticas"
        }
      ],
      gradient: "from-cyan-600 to-blue-600",
      icon: Code
    },
    {
      id: 17,
      title: "Conceptos Avanzados de Punteros",
      subtitle: "Del documento Estructuras de Datos Módulo 2",
      content: [
        "🔗 Punteros a punteros (indirección múltiple)",
        "📊 Punteros a arrays (navegación eficiente)",
        "🔢 Aritmética de punteros (ptr++, ptr+n)",
        "⚙️ Punteros a funciones (callbacks)",
        "🎯 Arrays de punteros (matrices dinámicas)"
      ],
      gradient: "from-orange-600 to-red-600",
      icon: Pointer
    },
    {
      id: 18,
      title: "Conclusiones",
      content: [
        "Las estructuras organizan datos complejos eficientemente",
        "Los punteros permiten manipulación directa de memoria",
        "No todos los lenguajes necesitan punteros explícitos",
        "La elección depende del proyecto, rendimiento y seguridad",
        "C/C++ para sistemas, Java/Python para aplicaciones",
        "Comprender ambos enfoques es fundamental"
      ],
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      icon: Database,
      type: "conclusion"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className={`bg-gradient-to-br ${slide.gradient} rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col justify-center transform transition-all duration-500 relative overflow-hidden`}>
            
            {/* FONDO DE CÓDIGO - AHORA RENDERIZADO PARA TODAS LAS DIAPOSITIVAS */}
            {slide.hasCircuitBg && (
              <div className="absolute inset-0 overflow-hidden" style={{opacity: 0.25, zIndex: 0}}>
                {/* Falling binary code effect */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={`binary-${i}`}
                    className="absolute text-white font-mono text-lg font-bold"
                    style={{
                      left: `${i * 6.5}%`,
                      top: '-10%',
                      animation: `fall ${6 + Math.random() * 3}s linear infinite`,
                      animationDelay: `${i * 0.4}s`
                    }}
                  >
                    <div style={{marginBottom: '25px'}}>0x</div>
                    <div style={{marginBottom: '25px'}}>*</div>
                    <div style={{marginBottom: '25px'}}>1</div>
                    <div style={{marginBottom: '25px'}}>&</div>
                    <div style={{marginBottom: '25px'}}>0</div>
                    <div style={{marginBottom: '25px'}}>→</div>
                    <div style={{marginBottom: '25px'}}>1</div>
                    <div style={{marginBottom: '25px'}}>*</div>
                    <div style={{marginBottom: '25px'}}>0x</div>
                    <div style={{marginBottom: '25px'}}>0</div>
                  </div>
                ))}

                {/* Hexagonal pattern */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`hex-${i}`}
                    className="absolute"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${15 + (i % 2) * 35}%`,
                      animation: `hexFloat ${5 + i * 0.8}s ease-in-out infinite`,
                      animationDelay: `${i * 0.6}s`
                    }}
                  >
                    <svg width="70" height="70" viewBox="0 0 100 100">
                      <path 
                        d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z" 
                        fill="none"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                ))}

                {/* Memory addresses floating */}
                {['0xFF', '0xA0', '0x2C', '0xB4', '0x7D', '0xE1'].map((addr, i) => (
                  <div
                    key={`addr-${i}`}
                    className="absolute text-white font-mono text-lg font-bold"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${30 + (i % 2) * 25}%`,
                      animation: `float ${4 + i * 1.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.8}s`,
                      opacity: 0.4
                    }}
                  >
                    {addr}
                  </div>
                ))}

                {/* Pointer symbols */}
                {['*ptr', '&var', '→', '*', '&'].map((symbol, i) => (
                  <div
                    key={`symbol-${i}`}
                    className="absolute text-white font-mono text-2xl font-bold"
                    style={{
                      left: `${20 + i * 18}%`,
                      top: `${50 + (i % 2) * 15}%`,
                      animation: `float ${5 + i * 1.2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                      opacity: 0.35
                    }}
                  >
                    {symbol}
                  </div>
                ))}

                {/* Sparkles */}
                <div className="absolute bottom-16 right-16" style={{animation: 'twinkle 3s ease-in-out infinite'}}>
                  <div className="text-white text-5xl opacity-50">✦</div>
                </div>
                <div className="absolute top-20 left-20" style={{animation: 'twinkle 3s ease-in-out infinite', animationDelay: '1.5s'}}>
                  <div className="text-white text-4xl opacity-45">✦</div>
                </div>
              </div>
            )}

            {/* FONDO ONDULADO PARA UNIONES Y ENUMERACIONES */}
            {slide.hasWavyBg && (
              <div className="absolute inset-0 overflow-hidden" style={{zIndex: 0}}>
                {/* Wavy shapes */}
                <svg className="absolute inset-0 w-full h-full" style={{opacity: 0.15}}>
                  <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: 'rgba(139, 92, 246, 0.4)'}} />
                      <stop offset="100%" style={{stopColor: 'rgba(168, 85, 247, 0.6)'}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated wave 1 */}
                  <path 
                    d="M 0,200 Q 250,100 500,200 T 1000,200 L 1000,400 L 0,400 Z" 
                    fill="url(#waveGradient1)"
                    style={{animation: 'waveMove 8s ease-in-out infinite'}}
                  />
                  
                  {/* Animated wave 2 */}
                  <path 
                    d="M 0,300 Q 250,250 500,300 T 1000,300 L 1000,500 L 0,500 Z" 
                    fill="rgba(139, 92, 246, 0.2)"
                    style={{animation: 'waveMove 10s ease-in-out infinite', animationDelay: '-2s'}}
                  />
                  
                  {/* Animated wave 3 */}
                  <path 
                    d="M 0,400 Q 250,350 500,400 T 1000,400 L 1000,600 L 0,600 Z" 
                    fill="rgba(168, 85, 247, 0.15)"
                    style={{animation: 'waveMove 12s ease-in-out infinite', animationDelay: '-4s'}}
                  />
                </svg>

                {/* Sparkle */}
                <div className="absolute bottom-16 right-16" style={{animation: 'twinkle 3s ease-in-out infinite'}}>
                  <div className="text-white text-5xl opacity-40">✦</div>
                </div>
              </div>
            )}

            {/* Cover Slide */}
            {slide.type === "cover" && (
              <div className="text-center space-y-8 relative overflow-hidden">
                {/* Animated floating data structures */}
                <div className="absolute inset-0 opacity-30">
                  {/* Tree structure top left */}
                  <div className="absolute top-20 left-20 animate-float" style={{animationDelay: '0s'}}>
                    <svg width="80" height="80" viewBox="0 0 100 100" className="text-white/60">
                      <circle cx="50" cy="20" r="8" fill="currentColor"/>
                      <line x1="50" y1="28" x2="35" y2="50" stroke="currentColor" strokeWidth="2"/>
                      <line x1="50" y1="28" x2="65" y2="50" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="35" cy="50" r="8" fill="currentColor"/>
                      <circle cx="65" cy="50" r="8" fill="currentColor"/>
                      <line x1="35" y1="58" x2="25" y2="75" stroke="currentColor" strokeWidth="2"/>
                      <line x1="35" y1="58" x2="45" y2="75" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="25" cy="75" r="6" fill="currentColor"/>
                      <circle cx="45" cy="75" r="6" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Linked list top right */}
                  <div className="absolute top-32 right-32 animate-float" style={{animationDelay: '0.5s'}}>
                    <svg width="120" height="60" viewBox="0 0 150 60" className="text-white/60">
                      <rect x="10" y="20" width="30" height="20" fill="currentColor" rx="4"/>
                      <rect x="60" y="20" width="30" height="20" fill="currentColor" rx="4"/>
                      <rect x="110" y="20" width="30" height="20" fill="currentColor" rx="4"/>
                      <path d="M 40 30 L 55 30" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <path d="M 90 30 L 105 30" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>

                  {/* Stack bottom left */}
                  <div className="absolute bottom-40 left-40 animate-float" style={{animationDelay: '1s'}}>
                    <svg width="70" height="90" viewBox="0 0 80 100" className="text-white/60">
                      <rect x="15" y="70" width="50" height="15" fill="currentColor" rx="2"/>
                      <rect x="15" y="50" width="50" height="15" fill="currentColor" rx="2"/>
                      <rect x="15" y="30" width="50" height="15" fill="currentColor" rx="2"/>
                      <rect x="15" y="10" width="50" height="15" fill="currentColor" rx="2"/>
                    </svg>
                  </div>

                  {/* Array bottom right */}
                  <div className="absolute bottom-32 right-40 animate-float" style={{animationDelay: '1.5s'}}>
                    <svg width="100" height="50" viewBox="0 0 120 50" className="text-white/60">
                      <rect x="10" y="15" width="20" height="20" fill="currentColor" rx="2"/>
                      <rect x="35" y="15" width="20" height="20" fill="currentColor" rx="2"/>
                      <rect x="60" y="15" width="20" height="20" fill="currentColor" rx="2"/>
                      <rect x="85" y="15" width="20" height="20" fill="currentColor" rx="2"/>
                    </svg>
                  </div>

                  {/* Graph center right */}
                  <div className="absolute top-1/2 right-20 animate-float" style={{animationDelay: '2s'}}>
                    <svg width="90" height="90" viewBox="0 0 100 100" className="text-white/60">
                      <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2"/>
                      <line x1="30" y1="30" x2="30" y2="70" stroke="currentColor" strokeWidth="2"/>
                      <line x1="70" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="2"/>
                      <line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="2"/>
                      <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="30" cy="30" r="8" fill="currentColor"/>
                      <circle cx="70" cy="30" r="8" fill="currentColor"/>
                      <circle cx="30" cy="70" r="8" fill="currentColor"/>
                      <circle cx="70" cy="70" r="8" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Pointer/Memory center left */}
                  <div className="absolute top-1/2 left-24 animate-float" style={{animationDelay: '2.5s'}}>
                    <svg width="100" height="80" viewBox="0 0 120 90" className="text-white/60">
                      <rect x="10" y="30" width="40" height="30" fill="currentColor" rx="4"/>
                      <path d="M 50 45 L 75 45" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrowhead2)"/>
                      <rect x="75" y="30" width="40" height="30" fill="currentColor" rx="4"/>
                      <defs>
                        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>

                  {/* Sparkles */}
                  <div className="absolute top-1/4 left-1/4 animate-pulse" style={{animationDelay: '0.3s'}}>
                    <div className="text-white/40 text-4xl">✦</div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '0.8s'}}>
                    <div className="text-white/40 text-3xl">✦</div>
                  </div>
                  <div className="absolute top-1/3 right-1/3 animate-pulse" style={{animationDelay: '1.3s'}}>
                    <div className="text-white/40 text-2xl">✦</div>
                  </div>
                </div>

                {/* Main content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="bg-white/20 backdrop-blur-lg rounded-full p-8">
                      <Database className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <h1 className="text-7xl font-bold text-white mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-3xl text-white/90 font-light">
                    {slide.subtitle}
                  </p>
                  
                  {/* Thematic Image Section */}
                  <div className="pt-8 space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
                      <div className="flex items-center justify-center gap-8">
                        {/* Thematic Image Placeholder */}
                        <div className="flex-shrink-0">
                          <div className="w-48 h-48 rounded-2xl bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden">
                            <div className="text-white text-8xl">💾</div>
                          </div>
                        </div>
                        
                        {/* Student Name */}
                        <div className="text-left">
                          <p className="text-white/70 text-xl mb-3">Presentado por:</p>
                          <h2 className="text-5xl font-bold text-white mb-2">Diego Andrés Bravo</h2>
                          <div className="h-1 w-32 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                      <p className="text-white text-xl">Presiona → para comenzar</p>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                  }
                  .animate-float {
                    animation: float 6s ease-in-out infinite;
                  }
                  @keyframes float-cube {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(3px, -8px) scale(1.05); }
                  }
                  .animate-float-cube {
                    animation: float-cube 4s ease-in-out infinite;
                  }
                  @keyframes pulse-slow {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.3); }
                  }
                  .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                  }
                  @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                  }
                  .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                  }
                `}</style>
              </div>
            )}

            {/* Conclusion Slide */}
            {slide.type === "conclusion" && (
              <div className="text-center space-y-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-lg rounded-full p-6">
                    <slide.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h2 className="text-6xl font-bold text-white mb-8">{slide.title}</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                  {slide.content.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
                    >
                      <p className="text-2xl text-white font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Content Slides */}
            {!slide.type && (
              <>
                {/* Animated network background for slide 1 */}
                {slide.id === 1 && (
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Network of 3D cubes and connections */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: 0}}>
                      {/* Connection lines - creating a network effect */}
                      <line x1="15%" y1="20%" x2="35%" y2="15%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="35%" y1="15%" x2="55%" y2="25%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="55%" y1="25%" x2="70%" y2="18%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="70%" y1="18%" x2="85%" y2="30%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      
                      <line x1="15%" y1="20%" x2="25%" y2="40%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="35%" y1="15%" x2="40%" y2="35%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="25%" y1="40%" x2="40%" y2="35%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="40%" y1="35%" x2="55%" y2="45%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="55%" y1="25%" x2="55%" y2="45%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="55%" y1="45%" x2="75%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="70%" y1="18%" x2="75%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="75%" y1="50%" x2="88%" y2="55%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="85%" y1="30%" x2="88%" y2="55%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      
                      <line x1="25%" y1="40%" x2="30%" y2="65%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="40%" y1="35%" x2="45%" y2="70%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="30%" y1="65%" x2="45%" y2="70%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="55%" y1="45%" x2="60%" y2="75%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="45%" y1="70%" x2="60%" y2="75%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="75%" y1="50%" x2="78%" y2="70%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="60%" y1="75%" x2="78%" y2="70%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="88%" y1="55%" x2="85%" y2="75%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                      <line x1="78%" y1="70%" x2="85%" y2="75%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                    </svg>

                    {/* 3D Isometric Cubes */}
                    {[
                      {x: 15, y: 20, delay: 0},
                      {x: 35, y: 15, delay: 0.2},
                      {x: 55, y: 25, delay: 0.4},
                      {x: 70, y: 18, delay: 0.6},
                      {x: 85, y: 30, delay: 0.8},
                      {x: 25, y: 40, delay: 1},
                      {x: 40, y: 35, delay: 1.2},
                      {x: 55, y: 45, delay: 1.4},
                      {x: 75, y: 50, delay: 1.6},
                      {x: 88, y: 55, delay: 1.8},
                      {x: 30, y: 65, delay: 2},
                      {x: 45, y: 70, delay: 2.2},
                      {x: 60, y: 75, delay: 2.4},
                      {x: 78, y: 70, delay: 2.6},
                      {x: 85, y: 75, delay: 2.8},
                    ].map((cube, i) => (
                      <div
                        key={i}
                        className="absolute transition-all duration-1000 ease-in-out"
                        style={{
                          left: `${cube.x}%`,
                          top: `${cube.y}%`,
                          animation: `floatCube 4s ease-in-out infinite`,
                          animationDelay: `${cube.delay}s`,
                          zIndex: 1
                        }}
                      >
                        {/* Isometric 3D Cube */}
                        <svg width="40" height="40" viewBox="0 0 50 50" className="opacity-60 drop-shadow-lg">
                          {/* Top face */}
                          <path d="M25 5 L40 15 L25 25 L10 15 Z" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.9)" strokeWidth="1"/>
                          {/* Left face */}
                          <path d="M10 15 L10 35 L25 45 L25 25 Z" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.7)" strokeWidth="1"/>
                          {/* Right face */}
                          <path d="M25 25 L25 45 L40 35 L40 15 Z" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.8)" strokeWidth="1"/>
                        </svg>
                      </div>
                    ))}

                    {/* Small circular nodes */}
                    {[
                      {x: 20, y: 28, delay: 0.3},
                      {x: 48, y: 20, delay: 0.7},
                      {x: 63, y: 35, delay: 1.1},
                      {x: 82, y: 43, delay: 1.5},
                      {x: 38, y: 52, delay: 1.9},
                      {x: 68, y: 62, delay: 2.3},
                      {x: 18, y: 55, delay: 2.7},
                    ].map((node, i) => (
                      <div
                        key={`node-${i}`}
                        className="absolute"
                        style={{
                          left: `${node.x}%`,
                          top: `${node.y}%`,
                          animation: `pulseSlow 3s ease-in-out infinite`,
                          animationDelay: `${node.delay}s`,
                        }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full opacity-60 shadow-lg shadow-white/50"></div>
                      </div>
                    ))}

                    {/* Bright particles/stars */}
                    {[
                      {x: 28, y: 12, delay: 0.5, size: 'text-sm'},
                      {x: 62, y: 8, delay: 1.2, size: 'text-xs'},
                      {x: 92, y: 22, delay: 1.8, size: 'text-sm'},
                      {x: 12, y: 48, delay: 2.4, size: 'text-xs'},
                      {x: 50, y: 58, delay: 3, size: 'text-sm'},
                      {x: 88, y: 68, delay: 3.6, size: 'text-xs'},
                      {x: 35, y: 82, delay: 4.2, size: 'text-sm'},
                    ].map((star, i) => (
                      <div
                        key={`star-${i}`}
                        className={`absolute ${star.size}`}
                        style={{
                          left: `${star.x}%`,
                          top: `${star.y}%`,
                          animation: `twinkle 2s ease-in-out infinite`,
                          animationDelay: `${star.delay}s`,
                        }}
                      >
                        <span className="text-white opacity-70">✦</span>
                      </div>
                    ))}

                    {/* Large sparkle in bottom right corner */}
                    <div 
                      className="absolute bottom-8 right-8" 
                      style={{
                        animation: `pulseSlow 3s ease-in-out infinite`,
                        animationDelay: '0.5s'
                      }}
                    >
                      <div className="text-white text-6xl opacity-50">✦</div>
                    </div>

                    {/* Small structure diagram at bottom center */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-40">
                      <svg width="120" height="80" viewBox="0 0 120 80">
                        {/* Root node */}
                        <rect x="50" y="5" width="20" height="20" fill="none" stroke="white" strokeWidth="2" rx="3"/>
                        <circle cx="60" cy="15" r="3" fill="white"/>
                        
                        {/* Connections */}
                        <line x1="60" y1="25" x2="30" y2="50" stroke="white" strokeWidth="2"/>
                        <line x1="60" y1="25" x2="60" y2="50" stroke="white" strokeWidth="2"/>
                        <line x1="60" y1="25" x2="90" y2="50" stroke="white" strokeWidth="2"/>
                        
                        {/* Child nodes */}
                        <rect x="20" y="50" width="20" height="20" fill="none" stroke="white" strokeWidth="2" rx="3"/>
                        <text x="30" y="65" fill="white" fontSize="12" textAnchor="middle">A</text>
                        
                        <circle cx="60" cy="60" r="12" fill="none" stroke="white" strokeWidth="2"/>
                        
                        <rect x="80" y="50" width="20" height="20" fill="none" stroke="white" strokeWidth="2" rx="3"/>
                        <circle cx="90" cy="60" r="4" fill="white"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Animated network background for slides with network */}
                {slide.hasNetworkBg && (
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Network of connections */}
                    <svg className="absolute inset-0 w-full h-full opacity-25" style={{zIndex: 0}}>
                      {/* Create a mesh network */}
                      {[...Array(25)].map((_, i) => {
                        const x1 = (Math.random() * 100);
                        const y1 = (Math.random() * 100);
                        const x2 = (Math.random() * 100);
                        const y2 = (Math.random() * 100);
                        return (
                          <line 
                            key={`line-${i}`}
                            x1={`${x1}%`} 
                            y1={`${y1}%`} 
                            x2={`${x2}%`} 
                            y2={`${y2}%`} 
                            stroke="rgba(255,255,255,0.3)" 
                            strokeWidth="1"
                            className="animate-pulse"
                            style={{animationDelay: `${i * 0.1}s`, animationDuration: '4s'}}
                          />
                        );
                      })}
                    </svg>

                    {/* Network nodes */}
                    {[...Array(20)].map((_, i) => {
                      const x = Math.random() * 95 + 2;
                      const y = Math.random() * 95 + 2;
                      return (
                        <div
                          key={`network-node-${i}`}
                          className="absolute"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            animation: `pulseSlow ${3 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.15}s`,
                          }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                        </div>
                      );
                    })}

                    {/* Floating cubes */}
                    {[...Array(6)].map((_, i) => {
                      const x = Math.random() * 90 + 5;
                      const y = Math.random() * 90 + 5;
                      return (
                        <div
                          key={`float-cube-${i}`}
                          className="absolute"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            animation: `floatCube ${5 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        >
                          <svg width="35" height="35" viewBox="0 0 50 50" className="opacity-30">
                            <path d="M25 5 L40 15 L25 25 L10 15 Z" fill="rgba(255,255,255,0.7)" stroke="rgba(255,255,255,0.8)" strokeWidth="1"/>
                            <path d="M10 15 L10 35 L25 45 L25 25 Z" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                            <path d="M25 25 L25 45 L40 35 L40 15 Z" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.7)" strokeWidth="1"/>
                          </svg>
                        </div>
                      );
                    })}

                    {/* Sparkles */}
                    {[...Array(8)].map((_, i) => {
                      const x = Math.random() * 95 + 2;
                      const y = Math.random() * 95 + 2;
                      return (
                        <div
                          key={`sparkle-${i}`}
                          className="absolute text-sm"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            animation: `twinkle ${2 + Math.random()}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        >
                          <span className="text-white opacity-40">✦</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
                    <slide.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-bold text-white">{slide.title}</h2>
                    {slide.subtitle && (
                      <p className="text-2xl text-white/80 mt-2">{slide.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Formula Display */}
                {slide.formula && (
                  <div className="mb-8 relative z-10">
                    {slide.hasFlowDiagram ? (
                      /* Flow diagram style for slide 2 */
                      <div className="flex items-center justify-center gap-4 px-8">
                        {/* Algoritmos box */}
                        <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border-2 border-cyan-400 rounded-3xl px-8 py-6 shadow-xl shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                          <p className="text-3xl font-bold text-white">Algoritmos</p>
                        </div>

                        {/* Plus symbol */}
                        <div className="text-5xl font-bold text-white animate-pulse">+</div>

                        {/* Estructuras de Datos box - larger */}
                        <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border-2 border-pink-400 rounded-3xl px-10 py-8 shadow-xl shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
                          <p className="text-3xl font-bold text-white text-center">Estructuras de</p>
                          <p className="text-3xl font-bold text-white text-center">Datos</p>
                        </div>

                        {/* Equals symbol */}
                        <div className="text-5xl font-bold text-white animate-pulse">=</div>

                        {/* Programas box */}
                        <div className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-sm border-2 border-indigo-400 rounded-3xl px-8 py-6 shadow-xl shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300">
                          <p className="text-3xl font-bold text-white">Programas</p>
                        </div>
                      </div>
                    ) : (
                      /* Original formula display */
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <p className="text-4xl font-mono text-white text-center font-bold">
                          {slide.formula}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Two Column Layout */}
                {slide.columns && (
                  <div className="grid grid-cols-2 gap-8">
                    {slide.columns.map((col, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300"
                      >
                        {/* Icon type rendering */}
                        {col.iconType === 'static-blocks' && (
                          <div className="mb-6 flex justify-center">
                            <div className="relative w-24 h-24" style={{animation: 'gentleBob 4s ease-in-out infinite'}}>
                              {/* Stack of blocks */}
                              <svg width="96" height="96" viewBox="0 0 100 100" className="drop-shadow-lg">
                                {/* Bottom block */}
                                <rect x="20" y="60" width="60" height="18" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" strokeWidth="2" rx="3"/>
                                <rect x="22" y="62" width="56" height="6" fill="rgba(255,255,255,0.6)"/>
                                
                                {/* Middle block */}
                                <rect x="20" y="38" width="60" height="18" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" strokeWidth="2" rx="3"/>
                                <rect x="22" y="40" width="56" height="6" fill="rgba(255,255,255,0.6)"/>
                                
                                {/* Top block */}
                                <rect x="20" y="16" width="60" height="18" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" strokeWidth="2" rx="3"/>
                                <rect x="22" y="18" width="56" height="6" fill="rgba(255,255,255,0.6)"/>
                              </svg>
                            </div>
                          </div>
                        )}
                        
                        {col.iconType === 'dynamic-particles' && (
                          <div className="mb-6 flex justify-center">
                            <div className="relative w-24 h-24">
                              {/* Central core */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-8 h-8 bg-white rounded-full opacity-80 animate-pulse"></div>
                              </div>
                              
                              {/* Orbiting particles */}
                              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div
                                  key={i}
                                  className="absolute top-1/2 left-1/2"
                                  style={{
                                    animation: `orbit${i % 3} ${3 + (i % 3)}s linear infinite`,
                                    animationDelay: `${i * 0.3}s`
                                  }}
                                >
                                  <div 
                                    className="w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"
                                    style={{
                                      transform: `translate(${30 + (i % 2) * 10}px, 0)`,
                                      opacity: 0.7 + (i % 3) * 0.1
                                    }}
                                  ></div>
                                </div>
                              ))}
                              
                              {/* Expanding rings */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div 
                                  className="w-16 h-16 border-2 border-white rounded-full opacity-40"
                                  style={{animation: 'expandFade 3s ease-out infinite'}}
                                ></div>
                              </div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div 
                                  className="w-16 h-16 border-2 border-white rounded-full opacity-40"
                                  style={{animation: 'expandFade 3s ease-out infinite', animationDelay: '1s'}}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {col.iconType === 'dot-operator' && (
                          <div className="mb-6 flex justify-center">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                              {/* Pin/Location marker with bounce */}
                              <svg 
                                width="80" 
                                height="80" 
                                viewBox="0 0 100 100" 
                                className="drop-shadow-lg"
                                style={{animation: 'pinDrop 2s ease-in-out infinite'}}
                              >
                                {/* Pin body */}
                                <ellipse cx="50" cy="85" rx="8" ry="3" fill="rgba(255,255,255,0.3)"/>
                                <path 
                                  d="M 50 20 C 35 20, 25 30, 25 45 C 25 60, 50 80, 50 80 C 50 80, 75 60, 75 45 C 75 30, 65 20, 50 20 Z" 
                                  fill="rgba(239, 68, 68, 0.9)"
                                  stroke="rgba(255,255,255,0.8)"
                                  strokeWidth="2"
                                />
                                {/* Center dot */}
                                <circle cx="50" cy="42" r="8" fill="white"/>
                              </svg>
                            </div>
                          </div>
                        )}
                        
                        {col.iconType === 'arrow-operator' && (
                          <div className="mb-6 flex justify-center">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                              {/* Animated arrow */}
                              <svg 
                                width="80" 
                                height="80" 
                                viewBox="0 0 100 100" 
                                className="drop-shadow-lg"
                              >
                                {/* Arrow shaft - with sliding animation */}
                                <rect 
                                  x="10" 
                                  y="45" 
                                  width="60" 
                                  height="10" 
                                  fill="rgba(255,255,255,0.8)"
                                  rx="5"
                                  style={{animation: 'slideArrow 2s ease-in-out infinite'}}
                                />
                                
                                {/* Arrow head - with sliding animation */}
                                <path 
                                  d="M 65 30 L 90 50 L 65 70 Z" 
                                  fill="rgba(255,255,255,0.9)"
                                  stroke="rgba(255,255,255,1)"
                                  strokeWidth="2"
                                  style={{animation: 'slideArrowHead 2s ease-in-out infinite'}}
                                />
                                
                                {/* Pointer glow effect */}
                                <circle 
                                  cx="90" 
                                  cy="50" 
                                  r="15" 
                                  fill="rgba(255,255,255,0.2)"
                                  style={{animation: 'glowPulse 2s ease-in-out infinite'}}
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                        
                        {col.gifUrl && !col.iconType && (
                          <div className="mb-4 flex justify-center">
                            <img 
                              src={col.gifUrl} 
                              alt={col.title}
                              className="w-32 h-32 object-contain rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="text-6xl text-center">💻</div>';
                              }}
                            />
                          </div>
                        )}
                        
                        {col.emoji && !col.gifUrl && !col.iconType && (
                          <div className="text-6xl mb-4 text-center">{col.emoji}</div>
                        )}
                        
                        <h3 className="text-3xl font-bold text-white mb-6 text-center">
                          {col.title}
                        </h3>
                        {col.code ? (
                          <>
                            <pre className="bg-gray-900/50 rounded-xl p-4 mb-4 overflow-x-auto">
                              <code className="text-green-300 text-sm">{col.code}</code>
                            </pre>
                            <p className="text-white/80 text-center text-lg">{col.desc}</p>
                          </>
                        ) : (
                          <ul className="space-y-3">
                            {col.items.map((item, i) => (
                              <li key={i} className="text-white text-xl flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Code Display */}
                {slide.code && !slide.columns && (
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <pre className="overflow-x-auto">
                      <code className="text-green-300 text-lg">{slide.code}</code>
                    </pre>
                  </div>
                )}

                {/* Content List */}
                {slide.content && (
                  <div className="space-y-4">
                    {slide.content.map((item, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transform hover:translate-x-2 transition-all duration-300"
                      >
                        <p className="text-white text-2xl flex items-center">
                          <span className="mr-4 text-3xl">•</span>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Image/GIF Display */}
                {slide.gifUrl && !slide.columns && !slide.hasPointerDiagram && (
                  <div className="flex justify-center my-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md">
                      <img 
                        src={slide.gifUrl} 
                        alt={slide.title}
                        className="w-full h-64 object-contain rounded-xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="text-6xl text-center py-8">💻</div>';
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Pointer Diagram - SOLO EL DE COLORES SÓLIDOS CON ANIMACIONES INFINITAS */}
                {slide.hasPointerDiagram && (
                  <div className="flex items-center justify-center gap-8 my-12 relative z-10">
                    {/* Puntero box - Azul sólido con animación de pulso */}
                    <div 
                      className="bg-blue-600 rounded-2xl px-10 py-8 shadow-xl"
                      style={{
                        animation: 'boxPulse 3s ease-in-out infinite',
                        animationDelay: '0s'
                      }}
                    >
                      <code className="text-white font-mono text-2xl font-bold">int *ptr</code>
                      <p className="text-white text-base mt-3 text-center">Puntero</p>
                    </div>

                    {/* Arrow 1 con animación de flujo continuo */}
                    <div style={{animation: 'arrowSlide 2s ease-in-out infinite'}}>
                      <svg width="50" height="30">
                        <defs>
                          <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}} />
                            <stop offset="50%" style={{stopColor: 'rgba(255,255,255,1)', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        <path d="M 5 15 L 40 15" stroke="url(#arrowGradient1)" strokeWidth="4" fill="none"/>
                        <path d="M 30 8 L 40 15 L 30 22" stroke="white" strokeWidth="4" fill="white"/>
                      </svg>
                    </div>

                    {/* Dirección box - Verde sólido con animación de pulso */}
                    <div 
                      className="bg-green-600 rounded-2xl px-10 py-8 shadow-xl"
                      style={{
                        animation: 'boxPulse 3s ease-in-out infinite',
                        animationDelay: '1s'
                      }}
                    >
                      <code className="text-white font-mono text-2xl font-bold">0x4fffd34</code>
                      <p className="text-white text-base mt-3 text-center">Dirección</p>
                    </div>

                    {/* Arrow 2 con animación de flujo continuo */}
                    <div style={{animation: 'arrowSlide 2s ease-in-out infinite', animationDelay: '0.5s'}}>
                      <svg width="50" height="30">
                        <defs>
                          <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}} />
                            <stop offset="50%" style={{stopColor: 'rgba(255,255,255,1)', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        <path d="M 5 15 L 40 15" stroke="url(#arrowGradient2)" strokeWidth="4" fill="none"/>
                        <path d="M 30 8 L 40 15 L 30 22" stroke="white" strokeWidth="4" fill="white"/>
                      </svg>
                    </div>

                    {/* Valor box - Morado sólido con animación de pulso */}
                    <div 
                      className="bg-purple-600 rounded-2xl px-10 py-8 shadow-xl"
                      style={{
                        animation: 'boxPulse 3s ease-in-out infinite',
                        animationDelay: '2s'
                      }}
                    >
                      <code className="text-white font-mono text-2xl font-bold">25</code>
                      <p className="text-white text-base mt-3 text-center">Valor</p>
                    </div>
                  </div>
                )}

                {/* Image/Emoji Display - Legacy */}
                {slide.image && (
                  <div className="text-center">
                    <div className="text-9xl mb-6 animate-bounce">{slide.image}</div>
                  </div>
                )}

                {/* Pointer Diagram - ELIMINAR ESTE BLOQUE COMPLETO */}
                {slide.diagram && !slide.hasPointerDiagram && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-6">
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="bg-blue-500 text-white rounded-lg p-6 text-2xl font-mono mb-2">
                          int *ptr
                        </div>
                        <p className="text-white text-lg">Puntero</p>
                      </div>
                      <div className="text-6xl text-white">→</div>
                      <div className="text-center">
                        <div className="bg-green-500 text-white rounded-lg p-6 text-2xl font-mono mb-2">
                          0x4fffd34
                        </div>
                        <p className="text-white text-lg">Dirección</p>
                      </div>
                      <div className="text-6xl text-white">→</div>
                      <div className="text-center">
                        <div className="bg-purple-500 text-white rounded-lg p-6 text-2xl font-mono mb-2">
                          25
                        </div>
                        <p className="text-white text-lg">Valor</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'w-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-white/60 text-sm">
            Diapositiva {currentSlide + 1} de {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;