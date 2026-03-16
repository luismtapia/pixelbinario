//  ███████╗ ██╗  ██████╗  ███╗   ███╗  █████╗
//  ██╔════╝ ██║ ██╔════╝  ████╗ ████║ ██╔══██╗
//  █████╗   ██║ ██║  ███╗ ██╔████╔██║ ███████║
//  ██╔══╝   ██║ ██║   ██║ ██║╚██╔╝██║ ██╔══██║
//  ██║      ██║ ╚██████╔╝ ██║ ╚═╝ ██║ ██║  ██║
//  ╚═╝      ╚═╝  ╚═════╝  ╚═╝     ╚═╝ ╚═╝  ╚═╝

// import semitonoImg from "../../assets/semitono.webp";
// 1. Escanea la carpeta de imágenes automáticamente
const images = import.meta.glob('../../assets/figma/*.{png,jpg,jpeg,webp,svg}', { eager: true });

// 2. Función ayudante para obtener la imagen por su nombre
const getAsset = (name) => {
  const path = `../../assets/figma/${name}`;
  return images[path]?.default || images[path] || null;
};




export const FIGMA_DATA = {
  title: "Figma",
  workspaceDesc:
    "Gestiona tus herramientas de diseño, accede a tus proyectos favoritos y optimiza tu flujo creativo.",
  tabs: {
    dashboard: {
      stats: [
        { label: "Plugins Totales", value: "25", icon: "Layout" }, // 5 por cada categoría
        { label: "Proyectos", value: "3", icon: "Folder" },
        { label: "Favoritos", value: "0", icon: "Star" },
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
      // Recursos externos reales fundamentales para cualquier diseñador
      assets: [
        {
          id: "figma-community",
          title: "Figma Community",
          desc: "Archivos, plugins y widgets gratuitos.",
          url: "https://www.figma.com/community",
          icon: "Globe",
        },
        {
          id: "google-fonts",
          title: "Google Fonts",
          desc: "Librería de tipografías open source.",
          url: "https://fonts.google.com",
          icon: "Type",
        },
        {
          id: "uiverse",
          title: "Uiverse.io",
          desc: "Elementos UI en CSS y Tailwind.",
          url: "https://uiverse.io",
          icon: "Cpu",
        },
        {
          id: "mobbin",
          title: "Mobbin",
          desc: "Referencia de flujos reales de apps iOS/Android.",
          url: "https://mobbin.com",
          icon: "Smartphone",
        },
        {
          id: "refero",
          title: "Refero Design",
          desc: "La mejor galería de diseño web para escritorio.",
          url: "https://refero.design",
          icon: "Monitor",
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
        {
          id: 2,
          title: "Dashboard de Finanzas",
          desc: "Panel administrativo con gráficas interactivas y modo oscuro.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
          category: "Web Design",
          url: "#",
          tags: ["Dashboard", "Dark Mode"],
        },
        {
          id: 3,
          title: "Modelo pirámide",
          desc: "Landing page de Modelos en las pirámides de Egipto.",
          image: "/assets/figma/modelo_piramide.png",
          category: "UI/UX Design",
          url: "https://www.figma.com/design/ciQgfThhoiwbUdWHsMt8XS/Ejemplo-figma?node-id=0-1",
          tags: ["Auto Layout", "Ejemplo"],
        },
      ],
      componentes: [
        {
          id: "c1",
          title: "Botonera Pro",
          desc: "Set de botones con todos los estados y variantes.",
          icon: "MousePointer2",
        },
        {
          id: "c2",
          title: "Input System",
          desc: "Formularios accesibles con validaciones.",
          icon: "TextInput",
        },
      ],
    },
    ejemplos: {
      visual: [
        {
          id: "semitono-01",
          title: "Efecto Semitono Pro",
          desc: "Domina la técnica de medios tonos para crear texturas visuales dinámicas en tus proyectos web usando filtros avanzados.",
          img: getAsset("modelo_piramide.png"),
          url: "https://tu-link-al-tutorial.com",
          category: "Visual Effects",
        },
      ],
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
        {
          id: 2,
          title: "Advanced Auto Layout 5.0",
          desc: "Ejemplos prácticos de wrapping y min/max widths.",
          level: "Avanzado",
          duration: "12 min",
          url: "#",
          icon: "Layout",
        },
      ],
      otro: [
        {
          id: 3,
          title: "Variables & Tokens",
          desc: "Cómo estructurar colores y espaciados profesionalmente.",
          level: "Experto",
          duration: "20 min",
          url: "#",
          icon: "Code2",
        },
      ],
    },
    plugins: {
      // He mantenido tus plugins pero asegurando que los nombres de iconos coincidan con Lucide
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
      Illustrations: [
        {
          id: "blush",
          title: "Blush",
          desc: "Ilustraciones personalizables",
          icon: "Palette",
        },
        {
          id: "illustrations",
          title: "Illustrations",
          desc: "Librería de kits gratuitos",
          icon: "Brush",
        },
        {
          id: "storyset",
          title: "Storyset",
          desc: "Ilustraciones animables",
          icon: "Video",
        },
        {
          id: "nail-illustrations",
          title: "Nail Illustrations",
          desc: "Estilo artístico único",
          icon: "PenTool",
        },
        {
          id: "streamline",
          title: "Streamline",
          desc: "Iconos e ilustraciones premium",
          icon: "Compass",
        },
      ],
      Mockups: [
        {
          id: "device-models",
          title: "Device Models",
          desc: "Mockups de dispositivos 3D",
          icon: "Smartphone",
        },
        {
          id: "artboard",
          title: "Artboard Studio",
          desc: "Mockups de alta calidad",
          icon: "Monitor",
        },
        {
          id: "3d-transformer",
          title: "3D Transformer",
          desc: "Convierte capas en 3D",
          icon: "Box",
        },
        {
          id: "mockuups",
          title: "Mockuups Studio",
          desc: "Generador de escenas realistas",
          icon: "Laptop",
        },
        {
          id: "rotato-3d",
          title: "Rotato 3D",
          desc: "Mockups animados en 3D",
          icon: "Rotate3d",
        },
      ],
      Images: [
        {
          id: "unsplash",
          title: "Unsplash",
          desc: "Imágenes gratuitas HD",
          icon: "Image",
        },
        {
          id: "freepik",
          title: "Freepik",
          desc: "Recursos gráficos variados",
          icon: "FileImage",
        },
        {
          id: "pexels",
          title: "Pexels",
          desc: "Stock de fotos y videos",
          icon: "Camera",
        },
        {
          id: "lummi",
          title: "Lummi",
          desc: "Imágenes generadas por IA",
          icon: "Cpu",
        },
        {
          id: "foca-stock",
          title: "Foca Stock",
          desc: "Fotos de uso comercial",
          icon: "PictureInPicture",
        },
      ],
      Animations: [
        {
          id: "lottiefiles",
          title: "LottieFiles",
          desc: "Animaciones JSON",
          icon: "Play",
        },
        {
          id: "jitter",
          title: "Jitter",
          desc: "Motion design simple",
          icon: "Zap",
        },
        {
          id: "figmotion",
          title: "Figmotion",
          desc: "Animación basada en líneas de tiempo",
          icon: "Clock",
        },
        {
          id: "parallax",
          title: "Parallax",
          desc: "Efectos de profundidad",
          icon: "Layers",
        },
        {
          id: "motion",
          title: "Motion",
          desc: "Herramienta avanzada de animación",
          icon: "Activity",
        },
      ],
    },
    // Añadida sección de tutoriales que faltaba
    tutoriales: {
      principiante: [
        {
          id: "t1",
          title: "Intro a Figma",
          desc: "Conceptos básicos de diseño.",
          icon: "BookOpen",
        },
      ],
      avanzado: [
        {
          id: "t2",
          title: "Design Systems",
          desc: "Escalamiento de productos.",
          icon: "ShieldCheck",
        },
      ],
    },
  },
};
