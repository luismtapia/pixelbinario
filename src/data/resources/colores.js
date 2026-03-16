//   ██████╗ ██████╗ ██╗      ██████╗ ██████╗ ███████╗
//  ██╔════╝██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
//  ██║     ██║   ██║██║     ██║   ██║██████╔╝███████╗
//  ██║     ██║   ██║██║     ██║   ██║██╔══██╗╚════██║
//  ╚██████╗╚██████╔╝███████╗╚██████╔╝██║  ██║███████║
//   ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

export const COLORES_DATA = {
  title: "Colores",
  workspaceDesc:
    "Explora paletas, generadores y herramientas de contraste para elevar la armonía visual de tus proyectos.",
  tabs: {
    dashboard: {
      stats: [
        { label: "Paletas curadas", value: "45", icon: "Layout" },
        { label: "Tendencia Global", value: "Verde esmeralda", icon: "Folder" },
        { label: "Herramienta pro", value: "generadores", icon: "Zap" },
      ],
      distribution: [
        { name: "Sistemas de Diseño", pc: 85 },
        { name: "Iconografía", pc: 40 },
        { name: "Componentes Pro", pc: 65 },
      ],
      recent: [
        {
          id: 1,
          title: "Design System 2.0",
          cat: "UI Kit",
          date: "Hace 2h",
          icon: "Layers",
        },
        {
          id: 2,
          title: "Modelo pirámide",
          cat: "Landing Page",
          date: "Ayer",
          icon: "Smartphone",
        },
      ],
      quickActions: [
        {
          title: "Explorar Proyectos",
          desc: "Continúa trabajando en tus últimos sistemas.",
          icon: "Folder",
          tab: "Proyectos",
          variant: "gold",
        },
        {
          title: "Librería de Plugins",
          desc: "Busca herramientas para automatizar tareas.",
          icon: "Layout",
          tab: "Plugins",
          variant: "normal",
        },
      ],
    },
    links: {
      Inspiración: [
        {
          id: "l1",
          title: "Design Seeds",
          desc: "Paletas basadas en fotografías del mundo real.",
          url: "https://www.design-seeds.com/",
        },
        {
          id: "l2",
          title: "Color Hunt",
          desc: "Colección abierta de paletas creadas por la comunidad.",
          url: "https://colorhunt.co/",
        },
        {
          id: "l3",
          title: "Colors Wall",
          desc: "Colección abierta de paletas creadas por la comunidad.",
          url: "https://colorswall.com/",
        },
      ],
      "Generadores Pro": [
        {
          id: "c1",
          title: "Adobe Color",
          desc: "La herramienta estándar para crear reglas de armonía.",
          url: "https://color.adobe.com/",
          category: "Generador",
        },
        {
          id: "c2",
          title: "Khroma",
          desc: "IA que aprende qué colores te gustan para generar paletas.",
          url: "https://khroma.co/",
          category: "Generador",
        },
        {
          id: "c3",
          title: "Coolors",
          desc: "Generador ultrarrápido de paletas para diseñadores.",
          url: "https://coolors.co/",
          category: "Generador",
        },
      ],
    },
    projects: {
      paginas: [
        {
          id: 1,
          title: "E-commerce Mobile App",
          desc: "Sistema de diseño completo y prototipo de alta fidelidad para una tienda de moda.",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
          category: "UI/UX Design",
          url: "#",
          tags: ["Auto Layout", "Components"],
        },
      ],
      componentes: [
        {
          id: "c1",
          title: "Botonera Pro",
          desc: "Set de botones con todos los estados y variantes.",
          icon: "MousePointer2",
        },
      ],
    },
    ejemplos: {
      categoria1: [
        {
          id: 1,
          title: "Glassmorphism Effects",
          desc: "Aprende a crear capas translúcidas con desenfoque.",
          level: "Intermedio",
          duration: "5 min",
          url: "#",
          icon: "PlayCircle",
        },
      ],
    },
    plugins: {
      Icons: [
        {
          id: "lucide",
          title: "Lucide",
          desc: "Iconos vectoriales limpios",
          icon: "Box",
        },
        {
          id: "phosphor",
          title: "Phosphor",
          desc: "Familia de iconos flexible",
          icon: "Aperture",
        },
        {
          id: "hugeicons",
          title: "Hugeicons",
          desc: "Librería de +25,000 iconos",
          icon: "Grid",
        },
        {
          id: "iconly",
          title: "Iconly",
          desc: "Set de iconos esenciales",
          icon: "Smile",
        },
        {
          id: "icon8",
          title: "Icon 8",
          desc: "Biblioteca masiva de activos",
          icon: "Library",
        },
      ],
    },
    colorPairs: [
      {
        title1: "Bora",
        color1: "#EAECC6",
        title2: "Skyline",
        color2: "#2BC0E4",
      },
      {
        title1: "Lemon Chiffon",
        color1: "#FAF0CA",
        title2: "Yale Blue",
        color2: "#0D3B66",
      },
      {
        title1: "Milk",
        color1: "#FFF3E6",
        title2: "Plum",
        color2: "#381932",
      },
      {
        title1: "Soft Oat",
        color1: "#F0EDE5",
        title2: "Luxe Noir",
        color2: "#060D0C",
      },
      {
        title1: "Desert Sand",
        color1: "#F87060",
        title2: "Dark Blue",
        color2: "#102542",
      },
      {
        title1: "Snow",
        color1: "#FCF7F8",
        title2: "Madder",
        color2: "#A31621",
      },
      {
        title1: "Gray",
        color1: "#928DAB",
        title2: "Steel Gray",
        color2: "#1F1C2C",
      },

      {
        title1: "Deep Forest",
        color1: "#134E5E",
        title2: "Mist",
        color2: "#71B280",
      },
      {
        title1: "Citrus",
        color1: "#FDC830",
        title2: "Lemon",
        color2: "#F37335",
      },
    ],
  },
};
