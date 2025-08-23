export const systemPrompt = `
Soy el asistente virtual del portafolio de Jonathan Pérez (Jona). 
Estoy acá para que lo conozcas mejor: sus proyectos, habilidades, música y visión personal.

MI FUNCIÓN:
- Responder preguntas sobre Jonathan con la info oficial que me dieron.
- Mostrar sus proyectos, logros y también su lado humano.
- Mantener un tono amigable, cercano y profesional a la vez.

REGLAS:
1. Hablo solo sobre Jona con la información disponible.
2. Respondo en el idioma de la pregunta.
3. Si no tengo un dato, lo digo de frente (y si aplica, sugiero contactarlo).
4. Soy claro y conciso, pero con calidez.
5. Nunca invento info sobre Jona.
6. Ajusto el tono: técnico para skills/proyectos, humano para música/personalidad.

¡Preguntame lo que quieras saber sobre Jona!`


export const personalInfoEN = {
  basic: {
    name: "Jonathan Pérez",
    nickname: "Jona",
    location: "Uruguay",
    profession: "Full Stack Developer & Singer-Songwriter",
    languages: ["Spanish (native)", "English (intermediate-advanced)"]
  },
  
  education: {
    current: [
      "Holberton School Uruguay - Full Stack Developer",
      "Universidad de la República (UdelaR) - Business Administration Technician"
    ],
    skills: [
      "C", "Python", "JavaScript", "React", "Node.js",
      "Flutter", "Firebase", "MySQL", "Git", "HTML", "CSS",
      "RESTful APIs", "Docker (basic)", "Linux"
    ],
    softSkills: [
      "Problem solving",
      "Clear communication",
      "Teamwork",
      "Creativity",
      "Time management"
    ]
  },
  
  projects: {
    casse: {
      name: "Cassé",
      description: "Mobile app for buying and selling used electronic products. Promotes circular economy and sustainability.",
      tech: ["Flutter", "Firebase", "Firestore", "Authentication"],
      type: "Holberton Final Project"
    },
    airbnb: {
      name: "AirBNB Clone",
      description: "Complete AirBNB clone with backend and frontend. Includes booking system, users and admin panel.",
      tech: ["Python", "MySQL", "RESTful APIs", "HTML", "CSS"],
      type: "Holberton Group Project"
    },
    shell: {
      name: "Simple Shell",
      description: "Basic shell in C with process handling, commands and essential functionalities.",
      tech: ["C", "System calls", "Process management"],
      type: "Holberton Group Project"
    },
    portfolio: {
      name: "Personal Portfolio",
      description: "Interactive website showcasing projects, music and personal philosophy.",
      tech: ["React", "TailwindCSS", "JavaScript"],
      type: "Personal Project"
    }
  },
  
  music: {
    role: "Singer-Songwriter",
    description: "Uruguayan composer and performer who combines artistic sensitivity with technological vision.",
    passion: "Living music every day as authentic expression of emotions and human connection.",
    influences: ["Post Malone", "Dean Lewis", "Ed Sheeran", "The Weeknd", "Imagine Dragons"]
  },
  
  personality: {
    values: [
      "Perseverance",
      "Being present in the moment",
      "Goal visualization",
      "Applied creativity",
      "Authenticity"
    ],
    interests: [
      "Languages",
      "Science and technology",
      "Art house cinema",
      "Philosophy",
      "Football (loyal Barça fan)",
      "Art in all its forms",
      "Artificial Intelligence"
    ],
    workStyle: "Collaborative, flexible, with agile methodologies. Learns fast and teaches others. Likes to transform ideas into real projects."
  },
  
  contact: {
    available: "Freelance, collaborations, full-time",
    focus: "Projects that connect, excite and generate positive impact on society.",
    email: "jonaperez.dev@gmail.com",
    github: "https://github.com/Jonatha32",
    linkedin: "https://www.linkedin.com/in/jonathanperez-dev/"
  }
};

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
