import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Database, Code, Layers, Zap, BookOpen, BarChart3, Link2 } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Estructuras de Datos",
      subtitle: "El Fundamento de la Programación Eficiente",
      content: "Organiza, almacena y accede a información de forma inteligente",
      bgGradient: "from-blue-600 via-purple-600 to-pink-600",
      icon: Database,
      showFormula: true
    },
    {
      id: 1,
      title: "¿Por Qué Importan?",
      subtitle: "La Fórmula de Niklaus Wirth",
      content: "ALGORITMOS + ESTRUCTURAS DE DATOS = PROGRAMAS",
      details: "Una buena estructura determina la eficiencia, velocidad y facilidad de mantenimiento de cualquier software",
      bgGradient: "from-emerald-600 to-teal-600",
      icon: Zap,
      animated: true
    },
    {
      id: 2,
      title: "Concepto Fundamental",
      subtitle: "¿Qué es una Estructura de Datos?",
      content: "Una colección organizada que agrupa diferentes tipos de información bajo un solo identificador",
      example: "Usuario { nombre, edad, email, teléfono }",
      bgGradient: "from-orange-500 to-red-600",
      icon: BarChart3,
      features: ["Agrupa información relacionada", "Permite acceso eficiente", "Facilita manipulación de datos"]
    },
    {
      id: 3,
      title: "Tipos de Estructuras",
      subtitle: "Estáticas vs Dinámicas",
      bgGradient: "from-indigo-600 to-blue-600",
      icon: Layers,
      comparison: [
        {
          title: "Estáticas",
          items: ["Tamaño fijo en memoria", "Definidas antes de ejecutar", "Ej: Arrays, Registros"],
          color: "bg-blue-100 border-blue-400"
        },
        {
          title: "Dinámicas",
          items: ["Tamaño variable", "Se adaptan en tiempo real", "Ej: Listas, Árboles"],
          color: "bg-purple-100 border-purple-400"
        }
      ]
    },
    {
      id: 4,
      title: "Componentes de una Estructura",
      subtitle: "Los Pilares Fundamentales",
      bgGradient: "from-green-600 to-emerald-600",
      icon: Code,
      components: [
        { name: "Miembros", desc: "Los componentes individuales" },
        { name: "Tipos de Dato", desc: "int, char, float, etc." },
        { name: "Nombres", desc: "Identificadores únicos" }
      ]
    },
    {
      id: 5,
      title: "Declaración de Estructuras",
      subtitle: "Paso 1: Crear el Molde",
      bgGradient: "from-cyan-600 to-blue-600",
      icon: Code,
      code: `struct almacen {
    char nombre[20];
    int cantidad;
    float precio;
    char fecha[8];
};`,
      codeHighlight: true
    },
    {
      id: 6,
      title: "Variables y Inicialización",
      subtitle: "Paso 2 y 3: Crear Instancias",
      bgGradient: "from-violet-600 to-purple-600",
      icon: Database,
      code: `struct almacen producto1 = {
    "Lata de Atún",
    1000,
    1520.23,
    "12-05-2013"
};`,
      codeHighlight: true
    },
    {
      id: 7,
      title: "Acceso a los Datos",
      subtitle: "Dos Métodos Principales",
      bgGradient: "from-rose-600 to-pink-600",
      icon: Link2,
      methods: [
        {
          name: "Operador Punto (.)",
          code: "producto.nombre = \"Nuevo\";",
          use: "Acceso directo a la variable"
        },
        {
          name: "Operador Flecha (->)",
          code: "ptr->nombre = \"Nuevo\";",
          use: "Acceso mediante puntero"
        }
      ]
    },
    {
      id: 8,
      title: "Memoria y Tamaño",
      subtitle: "¿Cuánto Espacio Ocupa?",
      bgGradient: "from-amber-600 to-orange-600",
      icon: Database,
      memory: [
        { field: "nombre[20]", type: "char", size: "20 bytes" },
        { field: "edad", type: "int", size: "2 bytes" },
        { field: "altura", type: "float", size: "4 bytes" },
        { field: "peso", type: "float", size: "4 bytes" }
      ],
      total: "30 bytes"
    },
    {
      id: 9,
      title: "Estructuras Avanzadas",
      subtitle: "Casos Complejos",
      bgGradient: "from-fuchsia-600 to-pink-600",
      icon: Layers,
      advanced: [
        { name: "Anidadas", desc: "Estructuras dentro de estructuras", icon: "⚙️" },
        { name: "Arrays", desc: "Listas de estructuras idénticas", icon: "📊" },
        { name: "Uniones", desc: "Comparten espacio en memoria", icon: "🔗" },
        { name: "Enumeraciones", desc: "Constantes nombradas", icon: "📝" }
      ]
    },
    {
      id: 10,
      title: "¿Qué es un Puntero?",
      subtitle: "La Herramienta Más Poderosa",
      bgGradient: "from-teal-600 to-cyan-600",
      icon: Link2,
      analogy: "Si las variables son casas, los punteros son sus direcciones",
      concept: "Una variable que almacena la dirección de memoria de otra variable"
    },
    {
      id: 11,
      title: "Declaración de Punteros",
      subtitle: "Sintaxis y Ejemplos",
      bgGradient: "from-lime-600 to-green-600",
      icon: Code,
      code: `int *puntero;           // Puntero a entero
char *texto;            // Puntero a carácter
float *decimal;         // Puntero a decimal
struct auto *coche;     // Puntero a estructura`,
      codeHighlight: true
    },
    {
      id: 12,
      title: "Operadores de Punteros",
      subtitle: "Los Dos Operadores Clave",
      bgGradient: "from-sky-600 to-blue-600",
      icon: Zap,
      operators: [
        {
          symbol: "&",
          name: "Dirección",
          desc: "Obtiene la dirección de memoria",
          example: "int x = 100; printf(\"%p\", &x);"
        },
        {
          symbol: "*",
          name: "Indirección",
          desc: "Accede al valor en esa dirección",
          example: "int *p = &x; printf(\"%d\", *p);"
        }
      ]
    },
    {
      id: 13,
      title: "Punteros y Arrays",
      subtitle: "Una Relación Fundamental",
      bgGradient: "from-red-600 to-rose-600",
      icon: BarChart3,
      insight: "El nombre de un array ES un puntero al primer elemento",
      equivalent: [
        "lista[0] ≡ *lista",
        "lista[1] ≡ *(lista + 1)",
        "lista[2] ≡ *(lista + 2)"
      ]
    },
    {
      id: 14,
      title: "Punteros a Funciones",
      subtitle: "Código Apuntando a Código",
      bgGradient: "from-purple-600 to-indigo-600",
      icon: Code,
      code: `double (*f)(double);  // Declaración
f = sin;               // Asignar función
double res = f(3.14);  // Usar función`,
      codeHighlight: true,
      use: "Permite pasar funciones como parámetros a otras funciones"
    },
    {
      id: 15,
      title: "Aplicaciones Prácticas",
      subtitle: "Dónde se Usan las Estructuras",
      bgGradient: "from-emerald-600 to-teal-600",
      icon: BookOpen,
      applications: [
        { icon: "👤", text: "Sistemas de Usuarios" },
        { icon: "💼", text: "Gestión de Empleados" },
        { icon: "📦", text: "Inventarios" },
        { icon: "🏦", text: "Sistemas Bancarios" },
        { icon: "🏥", text: "Registros Médicos" },
        { icon: "🎮", text: "Videojuegos" }
      ]
    },
    {
      id: 16,
      title: "Jerarquía de Estructuras",
      subtitle: "La Visión Completa",
      bgGradient: "from-blue-600 to-cyan-600",
      icon: Layers,
      hierarchy: [
        { level: "Estáticas", items: ["Primitivas", "Arrays", "Struct", "Union", "Enum"] },
        { level: "Dinámicas", items: ["Listas", "Pilas", "Colas", "Árboles", "Grafos"] }
      ]
    },
    {
      id: 17,
      title: "Beneficios Clave",
      subtitle: "¿Por Qué Dominarlas?",
      bgGradient: "from-yellow-500 to-orange-600",
      icon: Zap,
      benefits: [
        "✅ Organiza información de forma lógica",
        "✅ Permite acceso rápido y eficiente",
        "✅ Facilita la modificación de datos",
        "✅ Promueve reutilización de código",
        "✅ Escala a proyectos complejos",
        "✅ Mejora legibilidad y mantenimiento"
      ]
    },
    {
      id: 18,
      title: "Concepto: ¿Qué es un Apuntador?",
      subtitle: "Definición Formal y Características",
      bgGradient: "from-indigo-600 to-purple-600",
      icon: Link2,
      definition: "Una variable que almacena la dirección de memoria de otra variable u objeto",
      characteristics: [
        { title: "Dirección", desc: "Indica dónde está ubicado un dato en RAM" },
        { title: "Indirección", desc: "Acceso al valor sin conocer su dirección directa" },
        { title: "Flexibilidad", desc: "Trabajo dinámico con memoria" },
        { title: "Control", desc: "Asignación y liberación de memoria" }
      ]
    },
    {
      id: 19,
      title: "¿Por Qué Algunos Lenguajes Los Usan?",
      subtitle: "Razones Técnicas y Filosóficas",
      bgGradient: "from-cyan-600 to-teal-600",
      icon: Zap,
      reasons: [
        { icon: "💾", title: "Control de Memoria", desc: "Asignación dinámica y estructuras complejas" },
        { icon: "⚡", title: "Eficiencia", desc: "Evitar copias innecesarias de datos" },
        { icon: "🔧", title: "Flexibilidad", desc: "Pasar por referencia, crear genéricos" },
        { icon: "🖥️", title: "Hardware", desc: "Acceso directo a memoria de bajo nivel" }
      ]
    },
    {
      id: 20,
      title: "Lenguajes CON Apuntadores",
      subtitle: "Control Total del Programador",
      bgGradient: "from-orange-600 to-red-600",
      icon: Code,
      languagesWithPointers: [
        { name: "C", level: "⭐⭐⭐⭐⭐ Control", desc: "Máximo control, riesgo alto", use: "Sistemas operativos, drivers" },
        { name: "C++", level: "⭐⭐⭐⭐⭐ Control", desc: "Punteros + OOP + RAII", use: "Videojuegos, sistemas" },
        { name: "Rust", level: "⭐⭐⭐⭐ Seguro", desc: "Punteros seguros con borrow checker", use: "Sistemas seguros" },
        { name: "Go", level: "⭐⭐⭐ Simple", desc: "Punteros sin aritmética", use: "Servidores, APIs" }
      ]
    },
    {
      id: 21,
      title: "Lenguajes SIN Apuntadores",
      subtitle: "Abstracción y Seguridad",
      bgGradient: "from-green-600 to-emerald-600",
      icon: Database,
      languagesWithoutPointers: [
        { name: "Java", level: "✅ Seguro", desc: "Referencias implícitas, GC automático", use: "Aplicaciones empresariales" },
        { name: "Python", level: "✅ Fácil", desc: "Referencias transparentes", use: "Data Science, Web" },
        { name: "JavaScript", level: "✅ Dinámico", desc: "Gestión automática de memoria", use: "Frontend/Backend Web" },
        { name: "C#", level: "✅ Seguro", desc: "Referencias seguras, .NET gestiona", use: "Aplicaciones Windows" }
      ]
    },
    {
      id: 22,
      title: "Comparativa: Lenguajes de Programación",
      subtitle: "Matriz de Características",
      bgGradient: "from-violet-600 to-purple-600",
      icon: BarChart3,
      comparison2: [
        { lang: "C", punteros: "✅ Sí", control: "⭐⭐⭐⭐⭐", seguridad: "⭐", uso: "Sistemas" },
        { lang: "C++", punteros: "✅ Sí", control: "⭐⭐⭐⭐⭐", seguridad: "⭐⭐⭐", uso: "Juegos/Sistemas" },
        { lang: "Rust", punteros: "✅ Seguro", control: "⭐⭐⭐⭐", seguridad: "⭐⭐⭐⭐⭐", uso: "Sistemas" },
        { lang: "Go", punteros: "✅ Limitado", control: "⭐⭐⭐", seguridad: "⭐⭐⭐⭐", uso: "Servidores" },
        { lang: "Java", punteros: "❌ No", control: "⭐⭐", seguridad: "⭐⭐⭐⭐⭐", uso: "Empresa" },
        { lang: "Python", punteros: "❌ No", control: "⭐⭐", seguridad: "⭐⭐⭐", uso: "Data/Web" }
      ]
    },
    {
      id: 23,
      title: "Conclusión",
      subtitle: "El Viaje Apenas Comienza",
      content: "Las estructuras de datos son la base del pensamiento computacional",
      bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: Database,
      finalMessage: "Dominarlas te convierte en un programador competente, capaz de resolver problemas complejos de forma elegante y eficiente.",
      isLastSlide: true
    }
  ];

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

      return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col overflow-hidden">
      {/* Main Content - Fixed height */}
      <div className="flex-1 flex items-center justify-center p-3">
        <div className={`w-full h-full bg-gradient-to-br ${currentSlideData.bgGradient} rounded-2xl shadow-2xl overflow-hidden flex flex-col`}>
          {/* Slide Content */}
          <div className="flex-1 flex flex-col px-8 py-4 text-white relative overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
              <style>{`
                div::-webkit-scrollbar {
                  width: 8px;
                }
                div::-webkit-scrollbar-track {
                  background: transparent;
                }
                div::-webkit-scrollbar-thumb {
                  background: rgba(255,255,255,0.3);
                  border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: rgba(255,255,255,0.5);
                }
              `}</style>
            <div className="absolute top-8 right-8 opacity-20">
              <Icon size={120} />
            </div>
            </div>

            <div className="relative z-10">
              {/* Title */}
              <h1 className="text-3xl font-black mb-1 leading-tight">
                {currentSlideData.title}
              </h1>

              {/* Subtitle */}
              {currentSlideData.subtitle && (
                <h2 className="text-sm font-light mb-2 opacity-90">
                  {currentSlideData.subtitle}
                </h2>
              )}

              {/* Formula */}
              {currentSlideData.showFormula && (
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 mb-2 border border-white/30">
                  <p className="text-xs font-bold text-center">
                    ALGORITMOS + ESTRUCTURAS DE DATOS = PROGRAMAS
                  </p>
                </div>
              )}

              {/* Content */}
              {currentSlideData.content && (
                <p className="text-xs mb-2 leading-relaxed opacity-95">
                  {currentSlideData.content}
                </p>
              )}

              {/* Details */}
              {currentSlideData.details && (
                <p className="text-xs mb-2 leading-relaxed opacity-90">
                  {currentSlideData.details}
                </p>
              )}

              {/* Features */}
              {currentSlideData.features && (
                <div className="space-y-1 mb-2">
                  {currentSlideData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <span className="mr-1 text-xs">→</span>
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              {/* Example */}
              {currentSlideData.example && (
                <div className="bg-black/30 rounded-lg p-2 mb-2 font-mono text-xs border-l-4 border-white/50">
                  {currentSlideData.example}
                </div>
              )}

              {/* Comparison */}
              {currentSlideData.comparison && (
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  {currentSlideData.comparison.map((item, idx) => (
                    <div key={idx} className={`${item.color} border-2 rounded-lg p-1.5`}>
                      <h3 className="font-bold text-gray-800 mb-0.5 text-xs">{item.title}</h3>
                      <ul className="space-y-0.5">
                        {item.items.map((i, j) => (
                          <li key={j} className="text-gray-700 flex items-start text-xs">
                            <span className="mr-1">•</span>{i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Components */}
              {currentSlideData.components && (
                <div className="space-y-1 mb-2">
                  {currentSlideData.components.map((comp, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-1.5">
                      <h3 className="font-bold text-xs mb-0.5">{comp.name}</h3>
                      <p className="text-xs opacity-90">{comp.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Code */}
              {currentSlideData.code && (
                <div className="bg-black/50 rounded-lg p-2 mb-2 font-mono text-xs overflow-x-auto border border-white/20">
                  <pre className="text-yellow-300">{currentSlideData.code}</pre>
                </div>
              )}

              {/* Methods */}
              {currentSlideData.methods && (
                <div className="space-y-1 mb-2">
                  {currentSlideData.methods.map((method, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-1.5">
                      <h3 className="font-bold text-xs mb-0.5">{method.name}</h3>
                      <code className="bg-black/30 p-1 rounded text-yellow-300 block mb-0.5 text-xs">{method.code}</code>
                      <p className="text-xs opacity-90">{method.use}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Memory */}
              {currentSlideData.memory && (
                <div className="mb-2">
                  <table className="w-full text-xs mb-1.5">
                    <tbody>
                      {currentSlideData.memory.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/30">
                          <td className="py-0.5 font-mono text-xs">{row.field}</td>
                          <td className="py-0.5 text-xs">{row.type}</td>
                          <td className="py-0.5 text-right font-bold text-xs">{row.size}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="bg-yellow-300/20 rounded-lg p-1.5 text-xs font-bold">
                    Total: {currentSlideData.total}
                  </div>
                </div>
              )}

              {/* Advanced */}
              {currentSlideData.advanced && (
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  {currentSlideData.advanced.map((adv, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-1.5">
                      <div className="text-lg mb-0.5">{adv.icon}</div>
                      <h3 className="font-bold text-xs mb-0.5">{adv.name}</h3>
                      <p className="text-xs opacity-90">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Analogy */}
              {currentSlideData.analogy && (
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 mb-2 border border-white/30 text-center">
                  <p className="text-xs font-bold italic">{currentSlideData.analogy}</p>
                </div>
              )}

              {/* Concept */}
              {currentSlideData.concept && (
                <p className="text-xs mb-2 leading-relaxed opacity-95">
                  {currentSlideData.concept}
                </p>
              )}

              {/* Operators */}
              {currentSlideData.operators && (
                <div className="space-y-1 mb-2">
                  {currentSlideData.operators.map((op, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-1.5">
                      <div className="flex items-center mb-0.5">
                        <span className="text-2xl font-black mr-1">{op.symbol}</span>
                        <div>
                          <h3 className="font-bold text-xs">{op.name}</h3>
                          <p className="text-xs opacity-90">{op.desc}</p>
                        </div>
                      </div>
                      <code className="bg-black/30 p-1 rounded text-yellow-300 block text-xs">{op.example}</code>
                    </div>
                  ))}
                </div>
              )}

              {/* Equivalent */}
              {currentSlideData.equivalent && (
                <div className="space-y-0.5 mb-2">
                  {currentSlideData.equivalent.map((eq, idx) => (
                    <div key={idx} className="bg-black/30 rounded-lg p-1.5 font-mono text-xs text-yellow-300">
                      {eq}
                    </div>
                  ))}
                </div>
              )}

              {/* Use */}
              {currentSlideData.use && (
                <div className="bg-white/20 backdrop-blur rounded-lg p-1.5 text-xs mb-2">
                  <strong>Utilidad:</strong> {currentSlideData.use}
                </div>
              )}

              {/* Applications */}
              {currentSlideData.applications && (
                <div className="grid grid-cols-3 gap-1 mb-2">
                  {currentSlideData.applications.map((app, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-1.5 text-center">
                      <div className="text-2xl mb-0.5">{app.icon}</div>
                      <p className="font-semibold text-xs">{app.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Hierarchy */}
              {currentSlideData.hierarchy && (
                <div className="space-y-3 mb-6">
                  {currentSlideData.hierarchy.map((h, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <h3 className="font-bold text-xl mb-2">{h.level}</h3>
                      <div className="flex flex-wrap gap-2">
                        {h.items.map((item, j) => (
                          <span key={j} className="bg-white/30 px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Benefits */}
              {currentSlideData.benefits && (
                <div className="space-y-2 mb-6">
                  {currentSlideData.benefits.map((benefit, idx) => (
                    <p key={idx} className="text-lg font-semibold leading-relaxed">
                      {benefit}
                    </p>
                  ))}
                </div>
              )}

              {/* Final Message */}
              {currentSlideData.finalMessage && (
                <p className="text-xs leading-relaxed italic opacity-95">
                  {currentSlideData.finalMessage}
                </p>
              )}

              {/* Definition */}
              {currentSlideData.definition && (
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/30">
                  <p className="text-lg font-bold italic text-center">
                    "{currentSlideData.definition}"
                  </p>
                </div>
              )}

              {/* Characteristics */}
              {currentSlideData.characteristics && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {currentSlideData.characteristics.map((char, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">{char.title}</h3>
                      <p className="text-base opacity-90">{char.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reasons */}
              {currentSlideData.reasons && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {currentSlideData.reasons.map((reason, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-3xl mr-3">{reason.icon}</span>
                        <h3 className="font-bold text-lg">{reason.title}</h3>
                      </div>
                      <p className="text-base opacity-90">{reason.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Languages With Pointers */}
              {currentSlideData.languagesWithPointers && (
                <div className="space-y-3 mb-6">
                  {currentSlideData.languagesWithPointers.map((lang, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{lang.name}</h3>
                        <span className="text-xs bg-white/30 px-3 py-1.5 rounded">{lang.level}</span>
                      </div>
                      <p className="text-base opacity-90 mb-2">{lang.desc}</p>
                      <p className="text-sm opacity-75">💼 {lang.use}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Languages Without Pointers */}
              {currentSlideData.languagesWithoutPointers && (
                <div className="space-y-3 mb-6">
                  {currentSlideData.languagesWithoutPointers.map((lang, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{lang.name}</h3>
                        <span className="text-xs bg-white/30 px-3 py-1.5 rounded">{lang.level}</span>
                      </div>
                      <p className="text-base opacity-90 mb-2">{lang.desc}</p>
                      <p className="text-sm opacity-75">💼 {lang.use}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Comparison Table 2 */}
              {currentSlideData.comparison2 && (
                <div className="space-y-2 mb-6 max-h-96 overflow-y-auto pr-2">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                    <div className="grid grid-cols-5 gap-3 text-sm font-bold mb-2">
                      <div>Lenguaje</div>
                      <div>Punteros</div>
                      <div>Control</div>
                      <div>Seguridad</div>
                      <div>Uso</div>
                    </div>
                  </div>
                  {currentSlideData.comparison2.map((row, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                      <div className="grid grid-cols-5 gap-3 text-sm">
                        <div className="font-bold">{row.lang}</div>
                        <div>{row.punteros}</div>
                        <div>{row.control}</div>
                        <div>{row.seguridad}</div>
                        <div className="opacity-75">{row.uso}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="h-16 bg-black/30 flex items-center justify-between px-8 border-t border-white/20 gap-4 flex-shrink-0">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 text-white px-6 py-2 rounded-lg transition-all duration-200 font-semibold text-sm flex items-center gap-2 whitespace-nowrap"
            >
              <ChevronLeft size={18} />
              Anterior
            </button>

            {/* Progress Info */}
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-white/70 text-xs font-semibold">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <div className="h-1 w-full bg-white/20 rounded-full">
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 text-white px-6 py-2 rounded-lg transition-all duration-200 font-semibold text-sm flex items-center gap-2 whitespace-nowrap"
            >
              Siguiente
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-2 p-4 bg-gray-900/50">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-10 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            title={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Presentation;