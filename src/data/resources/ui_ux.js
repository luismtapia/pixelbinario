//  ██╗   ██╗ ██╗ ██╗   ██╗ ██╗   ██╗
//  ██║   ██║ ██║ ██║   ██║ ╚██╗ ██╔╝
//  ██║   ██║ ██║ ██║   ██║  ╚████╔╝ 
//  ██║   ██║ ██║ ██║   ██║   ██╔═██╗ 
//  ╚██████╔╝ ██║ ╚██████╔╝  ██╔╝ ██╗
//   ╚═════╝  ╚═╝  ╚═════╝   ╚═╝  ╚═╝

const images = import.meta.glob('../../assets/uiux/*.{png,jpg,jpeg,webp,svg}', { eager: true });

const getAsset = (name) => {
  const path = `../../assets/uiux/${name}`;
  return images[path]?.default || images[path] || null;
};

export const UIUX_DATA = {
  title: "UI/UX Hub",
  workspaceDesc:
    "Domina la experiencia de usuario y la estética visual. Recursos, reglas de composición y activos de alta calidad.",
  tabs: {
    dashboard: {
      stats: [
        { label: "Bancos de Assets", value: "6", icon: "Image" },
        { label: "Tips de Diseño", value: "5", icon: "Lightbulb" },
        { label: "Inspiración", value: "3", icon: "Layout" },
      ],
      distribution: [
        { name: "Psicología del Color", pc: 75 },
        { name: "Arquitectura de Info", pc: 50 },
        { name: "Accesibilidad (WCAG)", pc: 90 },
      ],
      recent: [
        {
          id: 1,
          title: "Anatomía del Botón",
          cat: "Micro-interacción",
          date: "Hace 1h",
          icon: "MousePointer2",
        },
        {
          id: 2,
          title: "User Flow: Checkout",
          cat: "UX Research",
          date: "Ayer",
          icon: "GitBranch",
        },
      ],
      quickActions: [
        {
            title: "Jerarquía Visual",
          desc: "Usa tamaño y peso para guiar el ojo en menos de un segundo.",
          icon: "Zap",
          tab: "Tips",
          image: getAsset("hierarchy.webp"),
          category: "Fundamentos",
          tags: ["Contraste", "Tipografía"],
        },
        {
          title: "Galería de Inspiración",
          desc: "Explora tendencias en Mobbin o Dribbble.",
          icon: "Eye",
          tab: "Inspiración",
          variant: "gold",
        },
        {
          title: "Reglas Maestras",
          desc: "Repasa los tips de composición y color.",
          icon: "Zap",
          tab: "Tips",
          variant: "normal",
        },
        
      ],
    },
    links: {
      assets: [
        {
          id: "pixabay",
          title: "Pixabay",
          desc: "Inmensa biblioteca de contenido libre.",
          url: "https://pixabay.com",
          icon: "Image",
        },
        {
          id: "vecteezy",
          title: "Vecteezy",
          desc: "Vectores, fotos y recursos creativos.",
          url: "https://vecteezy.com",
          icon: "Feather",
        },
        {
          id: "unsplash",
          title: "Unsplash",
          desc: "Fotografía de alta calidad gratuita.",
          url: "https://unsplash.com",
          icon: "Camera",
        },
        {
          id: "shotdeck",
          title: "Shotdeck",
          desc: "Referencias cinematográficas para color.",
          url: "https://shotdeck.com",
          icon: "Film",
        },
        {
          id: "zcool",
          title: "Zcool",
          desc: "Inspiración y recursos visuales de China.",
          url: "https://www.zcool.com.cn",
          icon: "Globe",
        },
      ],
    },
    projects: {
      // Usamos esta sección para los TIPS DE DISEÑO con sus imágenes
      tips: [
        {
          id: 1,
          title: "Jerarquía Visual",
          desc: "Usa tamaño y peso para guiar el ojo en menos de un segundo.",
          image: getAsset("hierarchy.webp"),
          category: "Fundamentos",
          tags: ["Contraste", "Tipografía"],
        },
        {
          id: 2,
          title: "Regla 60-30-10",
          desc: "60% fondo, 30% secundario, 10% acento (CTAs).",
          image: getAsset("color_rule.webp"),
          category: "Color",
          tags: ["Balance", "Cromática"],
        },
        {
          id: 3,
          title: "White Space",
          desc: "El espacio vacío no es desperdicio, es legibilidad.",
          image: getAsset("spacing.webp"),
          category: "Composición",
          tags: ["Padding", "Respiro"],
        },
        {
          id: 4,
          title: "Regla de Tercios",
          desc: "Coloca elementos clave en las intersecciones de la cuadrícula.",
          image: getAsset("rule_thirds.webp"),
          category: "Composición",
          tags: ["Layout", "Intersecciones"],
        },
      ],
    },
    inspiracion: {
      galerias: [
        {
          id: "mobbin",
          title: "Mobbin",
          desc: "Biblioteca de flujos de apps reales iOS/Android.",
          url: "https://mobbin.com",
          icon: "Smartphone",
        },
        {
          id: "dribbble",
          title: "Dribbble",
          desc: "Inspiración visual, tendencias y portafolios.",
          url: "https://dribbble.com",
          icon: "Dribbble",
        },
        {
          id: "digital-synopsis",
          title: "Digital Synopsis",
          desc: "Galería de creatividad visual y publicidad.",
          url: "https://digitalsynopsis.com",
          icon: "Sparkles",
        },
      ],
    },
  },
};