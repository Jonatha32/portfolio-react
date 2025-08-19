export const systemPrompt = `
Eres F3nix, asistente personal de Jonathan Pérez (Jona). Eres inteligente, útil y confiable.

TU PERSONALIDAD:
- Amigable y profesional
- Puedes hacer conversación natural
- Tienes libertad para expresarte con tu propio estilo
- Siempre honesto sobre tus limitaciones

SOBRE JONATHAN (tu referencia completa):
Tienes acceso a toda su información personal, proyectos, habilidades, música, valores e intereses. Usa estos datos como base para responder preguntas sobre él.

REGLAS DE ORO:
1. Responde en el MISMO idioma que te preguntan (español/inglés)
2. Para preguntas sobre Jonathan: usa la información disponible como referencia
3. Para preguntas generales: responde normalmente con tu conocimiento
4. Si no sabes algo específico sobre Jonathan: "No tengo esa información"
5. Nunca inventes datos sobre Jonathan que no estén en tu referencia

Puedes ser creativo en CÓMO respondes, pero siempre preciso en QUÉ respondes.
`;

export const personalInfo = {
  basic: {
    name: "Jonathan Pérez",
    nickname: "Jona",
    location: "Uruguay",
    profession: "Desarrollador Full Stack & Cantautor",
    languages: ["Español (nativo)", "Inglés (intermedio-avanzado)"]
  },
  
  education: {
    current: [
      "Holberton School Uruguay - Desarrollador Full Stack",
      "Universidad de la República (UdelaR) - Técnico en Administración de Empresas"
    ],
    skills: [
      "C", "Python", "JavaScript", "React", "Node.js",
      "Flutter", "Firebase", "MySQL", "Git", "HTML", "CSS",
      "APIs RESTful", "Docker (básico)", "Linux"
    ],
    softSkills: [
      "Resolución de problemas",
      "Comunicación clara",
      "Trabajo en equipo",
      "Creatividad",
      "Gestión del tiempo"
    ]
  },
  
  projects: {
    casse: {
      name: "Cassé",
      description: "App móvil para comprar y vender productos electrónicos usados. Promueve economía circular y sostenibilidad.",
      tech: ["Flutter", "Firebase", "Firestore", "Authentication"],
      type: "Proyecto Final Holberton"
    },
    airbnb: {
      name: "AirBNB Clone",
      description: "Clon completo de AirBNB con backend y frontend. Incluye sistema de reservas, usuarios y panel de administración.",
      tech: ["Python", "MySQL", "APIs RESTful", "HTML", "CSS"],
      type: "Proyecto grupal Holberton"
    },
    shell: {
      name: "Simple Shell",
      description: "Shell básico en C con manejo de procesos, comandos y funcionalidades esenciales.",
      tech: ["C", "System calls", "Process management"],
      type: "Proyecto grupal Holberton"
    },
    portfolio: {
      name: "Portafolio Personal",
      description: "Sitio web interactivo que muestra proyectos, música y filosofía personal.",
      tech: ["React", "TailwindCSS", "JavaScript"],
      type: "Proyecto personal"
    }
  },
  
  music: {
    role: "Cantautor",
    description: "Compositor e intérprete uruguayo que combina sensibilidad artística con visión tecnológica.",
    passion: "Vivir la música todos los días como expresión auténtica de emociones y conexión humana.",
    influences: ["Post Malone", "Dean Lewis", "Ed Sheeran", "The Weeknd", "Imagine Dragons"],
  },
  
  personality: {
    values: [
      "Perseverancia",
      "Presencia en el momento",
      "Visualización de objetivos",
      "Creatividad aplicada",
      "Autenticidad"
    ],
    interests: [
      "Idiomas",
      "Ciencia y tecnología",
      "Cine de autor",
      "Filosofía",
      "Fútbol (hincha fiel del Barça)",
      "Arte en todas sus formas",
      "Inteligencia Artificial"
    ],
    workStyle: "Colaborativo, flexible, con metodologías ágiles. Aprende rápido y enseña a otros. Le gusta transformar ideas en proyectos reales."
  },
  
  contact: {
    available: "Freelance, colaboraciones, tiempo completo",
    focus: "Proyectos que conecten, emocionen y generen impacto positivo en la sociedad.",
    email: "jonaperez.dev@gmail.com",
    github: "https://github.com/Jonatha32",
    linkedin: "https://www.linkedin.com/in/jonathanperez-dev/"
  }
};
