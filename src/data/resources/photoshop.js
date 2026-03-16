//  ██████╗ ██╗  ██╗ ██████╗ ████████╗ ██████╗ ███████╗██╗  ██╗ ██████╗ ██████╗ 
//  ██╔══██╗██║  ██║██╔═══██╗╚══██╔══╝██╔═══██╗██╔════╝██║  ██║██╔═══██╗██╔══██╗
//  ██████╔╝███████║██║   ██║   ██║   ██║   ██║███████╗███████║██║   ██║██████╔╝
//  ██╔═══╝ ██╔══██║██║   ██║   ██║   ██║   ██║╚════██║██╔══██║██║   ██║██╔═══╝ 
//  ██║     ██║  ██║╚██████╔╝   ██║   ╚██████╔╝███████║██║  ██║╚██████╔╝██║     
//  ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝






// export const PHOTOSHOP_DATA = {
//   title: "photoshop",
//   workspaceDesc:
//     "Gestiona tus herramientas de diseño, accede a tus proyectos favoritos y optimiza tu flujo creativo.",
//   tabs: {
//     dashboard: {
//       stats: [
//         { label: "Plugins Totales", value: "25", icon: "Layout" }, // 5 por cada categoría
//         { label: "Proyectos", value: "3", icon: "Folder" },
//         { label: "Favoritos", value: "0", icon: "Star" },
//       ],
//       distribution: [
//         { name: "Sistemas de Diseño", pc: 85 },
//         { name: "Iconografía", pc: 40 },
//         { name: "Componentes Pro", pc: 65 },
//       ],
//       recent: [
//         {
//           id: 1,
//           title: "Design System 2.0",
//           cat: "UI Kit",
//           date: "Hace 2h",
//           icon: "Layers",
//         },
//         {
//           id: 2,
//           title: "Modelo pirámide",
//           cat: "Landing Page",
//           date: "Ayer",
//           icon: "Smartphone",
//         },
//       ],
//       quickActions: [
//         {
//           title: "Explorar Proyectos",
//           desc: "Continúa trabajando en tus últimos sistemas.",
//           icon: "Folder",
//           tab: "Proyectos",
//           variant: "gold",
//         },
//         {
//           title: "Librería de Plugins",
//           desc: "Busca herramientas para automatizar tareas.",
//           icon: "Layout",
//           tab: "Plugins",
//           variant: "normal",
//         },
//       ],
//     },
//     links: {
//       // Recursos externos reales fundamentales para cualquier diseñador
//       assets: [
//         {
//           id: "figma-community",
//           title: "Figma Community",
//           desc: "Archivos, plugins y widgets gratuitos.",
//           url: "https://www.figma.com/community",
//           icon: "Globe",
//         },
//         {
//           id: "google-fonts",
//           title: "Google Fonts",
//           desc: "Librería de tipografías open source.",
//           url: "https://fonts.google.com",
//           icon: "Type",
//         },
//         {
//           id: "uiverse",
//           title: "Uiverse.io",
//           desc: "Elementos UI en CSS y Tailwind.",
//           url: "https://uiverse.io",
//           icon: "Cpu",
//         },
//         {
//           id: "mobbin",
//           title: "Mobbin",
//           desc: "Referencia de flujos reales de apps iOS/Android.",
//           url: "https://mobbin.com",
//           icon: "Smartphone",
//         },
//         {
//           id: "refero",
//           title: "Refero Design",
//           desc: "La mejor galería de diseño web para escritorio.",
//           url: "https://refero.design",
//           icon: "Monitor",
//         },
//       ],
//     },
//     projects: {
//       paginas: [
//         {
//           id: 1,
//           title: "E-commerce Mobile App",
//           desc: "Sistema de diseño completo y prototipo de alta fidelidad para una tienda de moda.",
//           image:
//             "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
//           category: "UI/UX Design",
//           url: "#",
//           tags: ["Auto Layout", "Components"],
//         },
//         {
//           id: 2,
//           title: "Dashboard de Finanzas",
//           desc: "Panel administrativo con gráficas interactivas y modo oscuro.",
//           image:
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
//           category: "Web Design",
//           url: "#",
//           tags: ["Dashboard", "Dark Mode"],
//         },
//         {
//           id: 3,
//           title: "Modelo pirámide",
//           desc: "Landing page de Modelos en las pirámides de Egipto.",
//           image: "/assets/figma/modelo_piramide.png",
//           category: "UI/UX Design",
//           url: "https://www.figma.com/design/ciQgfThhoiwbUdWHsMt8XS/Ejemplo-figma?node-id=0-1",
//           tags: ["Auto Layout", "Ejemplo"],
//         },
//       ],
//       componentes: [
//         {
//           id: "c1",
//           title: "Botonera Pro",
//           desc: "Set de botones con todos los estados y variantes.",
//           icon: "MousePointer2",
//         },
//         {
//           id: "c2",
//           title: "Input System",
//           desc: "Formularios accesibles con validaciones.",
//           icon: "TextInput",
//         },
//       ],
//     },
//     ejemplos: {
//       visual: [
//         {
//           id: "semitono-01",
//           title: "Efecto Semitono Pro",
//           desc: "Domina la técnica de medios tonos para crear texturas visuales dinámicas en tus proyectos web usando filtros avanzados.",
//           img: getAsset("modelo_piramide.png"),
//           url: "https://tu-link-al-tutorial.com",
//           category: "Visual Effects",
//         },
//       ],
//       categoria1: [
//         {
//           id: 1,
//           title: "Glassmorphism Effects",
//           desc: "Aprende a crear capas translúcidas con desenfoque.",
//           level: "Intermedio",
//           duration: "5 min",
//           url: "#",
//           icon: "PlayCircle",
//         },
//         {
//           id: 2,
//           title: "Advanced Auto Layout 5.0",
//           desc: "Ejemplos prácticos de wrapping y min/max widths.",
//           level: "Avanzado",
//           duration: "12 min",
//           url: "#",
//           icon: "Layout",
//         },
//       ],
//       otro: [
//         {
//           id: 3,
//           title: "Variables & Tokens",
//           desc: "Cómo estructurar colores y espaciados profesionalmente.",
//           level: "Experto",
//           duration: "20 min",
//           url: "#",
//           icon: "Code2",
//         },
//       ],
//     },
//     plugins: {
//       // He mantenido tus plugins pero asegurando que los nombres de iconos coincidan con Lucide
//       Icons: [
//         {
//           id: "lucide",
//           title: "Lucide",
//           desc: "Iconos vectoriales limpios",
//           icon: "Box",
//         },
//         {
//           id: "phosphor",
//           title: "Phosphor",
//           desc: "Familia de iconos flexible",
//           icon: "Aperture",
//         },
//         {
//           id: "hugeicons",
//           title: "Hugeicons",
//           desc: "Librería de +25,000 iconos",
//           icon: "Grid",
//         },
//         {
//           id: "iconly",
//           title: "Iconly",
//           desc: "Set de iconos esenciales",
//           icon: "Smile",
//         },
//         {
//           id: "icon8",
//           title: "Icon 8",
//           desc: "Biblioteca masiva de activos",
//           icon: "Library",
//         },
//       ],
//       Illustrations: [
//         {
//           id: "blush",
//           title: "Blush",
//           desc: "Ilustraciones personalizables",
//           icon: "Palette",
//         },
//         {
//           id: "illustrations",
//           title: "Illustrations",
//           desc: "Librería de kits gratuitos",
//           icon: "Brush",
//         },
//         {
//           id: "storyset",
//           title: "Storyset",
//           desc: "Ilustraciones animables",
//           icon: "Video",
//         },
//         {
//           id: "nail-illustrations",
//           title: "Nail Illustrations",
//           desc: "Estilo artístico único",
//           icon: "PenTool",
//         },
//         {
//           id: "streamline",
//           title: "Streamline",
//           desc: "Iconos e ilustraciones premium",
//           icon: "Compass",
//         },
//       ],
//       Mockups: [
//         {
//           id: "device-models",
//           title: "Device Models",
//           desc: "Mockups de dispositivos 3D",
//           icon: "Smartphone",
//         },
//         {
//           id: "artboard",
//           title: "Artboard Studio",
//           desc: "Mockups de alta calidad",
//           icon: "Monitor",
//         },
//         {
//           id: "3d-transformer",
//           title: "3D Transformer",
//           desc: "Convierte capas en 3D",
//           icon: "Box",
//         },
//         {
//           id: "mockuups",
//           title: "Mockuups Studio",
//           desc: "Generador de escenas realistas",
//           icon: "Laptop",
//         },
//         {
//           id: "rotato-3d",
//           title: "Rotato 3D",
//           desc: "Mockups animados en 3D",
//           icon: "Rotate3d",
//         },
//       ],
//       Images: [
//         {
//           id: "unsplash",
//           title: "Unsplash",
//           desc: "Imágenes gratuitas HD",
//           icon: "Image",
//         },
//         {
//           id: "freepik",
//           title: "Freepik",
//           desc: "Recursos gráficos variados",
//           icon: "FileImage",
//         },
//         {
//           id: "pexels",
//           title: "Pexels",
//           desc: "Stock de fotos y videos",
//           icon: "Camera",
//         },
//         {
//           id: "lummi",
//           title: "Lummi",
//           desc: "Imágenes generadas por IA",
//           icon: "Cpu",
//         },
//         {
//           id: "foca-stock",
//           title: "Foca Stock",
//           desc: "Fotos de uso comercial",
//           icon: "PictureInPicture",
//         },
//       ],
//       Animations: [
//         {
//           id: "lottiefiles",
//           title: "LottieFiles",
//           desc: "Animaciones JSON",
//           icon: "Play",
//         },
//         {
//           id: "jitter",
//           title: "Jitter",
//           desc: "Motion design simple",
//           icon: "Zap",
//         },
//         {
//           id: "figmotion",
//           title: "Figmotion",
//           desc: "Animación basada en líneas de tiempo",
//           icon: "Clock",
//         },
//         {
//           id: "parallax",
//           title: "Parallax",
//           desc: "Efectos de profundidad",
//           icon: "Layers",
//         },
//         {
//           id: "motion",
//           title: "Motion",
//           desc: "Herramienta avanzada de animación",
//           icon: "Activity",
//         },
//       ],
//     },
//     // Añadida sección de tutoriales que faltaba
//     tutoriales: {
//       principiante: [
//         {
//           id: "t1",
//           title: "Intro a Figma",
//           desc: "Conceptos básicos de diseño.",
//           icon: "BookOpen",
//         },
//       ],
//       avanzado: [
//         {
//           id: "t2",
//           title: "Design Systems",
//           desc: "Escalamiento de productos.",
//           icon: "ShieldCheck",
//         },
//       ],
//     },
//   },
// };


//  ██████╗ ██╗  ██╗ ██████╗ ████████╗ ██████╗ ███████╗██╗  ██╗ ██████╗ ██████╗ 
//  ██╔══██╗██║  ██║██╔═══██╗╚══██╔══╝██╔═══██╗██╔════╝██║  ██║██╔═══██╗██╔══██╗
//  ██████╔╝███████║██║   ██║   ██║   ██║   ██║███████╗███████║██║   ██║██████╔╝
//  ██╔═══╝ ██╔══██║██║   ██║   ██║   ██║   ██║╚════██║██╔══██║██║   ██║██╔═══╝ 
//  ██║     ██║  ██║╚██████╔╝   ██║   ╚██████╔╝███████║██║  ██║╚██████╔╝██║     
//  ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝

const images = import.meta.glob('../../assets/photoshop/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const getAsset = (name) => {
  const path = `../../assets/photoshop/${name}`;
  return images[path]?.default || images[path] || null;
};

export const PHOTOSHOP_DATA = {
  title: "Photoshop",
  workspaceDesc:
    "Domina la edición profesional, gestiona tus pinceles y optimiza tu flujo de post-producción digital.",
  tabs: {
    dashboard: {
      stats: [
        { label: "Plugins/Acciones", value: "45", icon: "Zap" },
        { label: "Composiciones", value: "12", icon: "Layers" },
        { label: "Favoritos", value: "8", icon: "Star" },
      ],
      distribution: [
        { name: "Retoque Fotográfico", pc: 90 },
        { name: "Composición Digital", pc: 75 },
        { name: "Pinceles & Texturas", pc: 50 },
      ],
      recent: [
        {
          id: 1,
          title: "Retoque Editorial V1",
          cat: "Color Grading",
          date: "Hace 1h",
          icon: "Image",
        },
        {
          id: 2,
          title: "Poster Minimalista",
          cat: "Graphic Design",
          date: "Ayer",
          icon: "Palette",
        },
      ],
      quickActions: [
        {
          title: "Explorar Acciones",
          desc: "Automatiza procesos de exportación y retoque.",
          icon: "Play",
          tab: "Plugins",
          variant: "gold",
        },
        {
          title: "Librería de Pinceles",
          desc: "Nuevas texturas para tus composiciones.",
          icon: "Brush",
          tab: "Recursos",
          variant: "normal",
        },
      ],
    },
    links: {
      assets: [
        {
          id: "adobe-exchange",
          title: "Adobe Exchange",
          desc: "Plugins, extensiones y acciones oficiales.",
          url: "https://exchange.adobe.com/creativecloud/photoshop.html",
          icon: "Globe",
        },
        {
          id: "brusheezy",
          title: "Brusheezy",
          desc: "La mayor colección de pinceles gratuitos.",
          url: "https://www.brusheezy.com",
          icon: "Brush",
        },
       
        {
          id: "behance-ps",
          title: "Behance Photoshop",
          desc: "Inspiración de los mejores artistas digitales.",
          url: "https://www.behance.net/galleries/photoshop",
          icon: "Aperture",
        },
        {
          id: "texture-labs",
          title: "TextureLabs",
          desc: "Texturas y recursos cinematográficos gratis.",
          url: "https://texturelabs.org",
          icon: "Layers",
        },
      ],
      "Inspiración": [
            { id: "insp-1", title: "Behance", desc: "Inspiración y portafolios.", url: "https://behance.net", category: "Inspiración" },
            { id: "insp-2", title: "Dribbble", desc: "Red social para creativos y diseño visual.", url: "https://dribbble.com", category: "Inspiración" },
            { id: "insp-3", title: "Designspiration", desc: "Búsqueda de estética visual y color.", url: "https://designspiration.com", category: "Inspiración" },
            { id: "insp-4", title: "Cosmos", desc: "Curación moderna de referencias visuales.", url: "https://cosmos.so", category: "Inspiración" }
          ],
          "Logos": [
            { id: "logo-1", title: "Logobook", desc: "Galería de logotipos originales.", url: "https://logobook.com", category: "Logos" },
            { id: "logo-2", title: "Logomoose", desc: "Comunidad de diseño de logos.", url: "https://logomoose.com", category: "Logos" },
            { id: "logo-3", title: "LogoLounge", desc: "Base de datos profesional de logotipos.", url: "https://logolounge.com", category: "Logos" }
          ],
          "Tipografía": [
            { id: "font-1", title: "Fontshare", desc: "Fuentes gratuitas de alta calidad.", url: "https://fontshare.com", category: "Tipografía" }
          ],
          "Color": [
            
            { id: "color-1", title: "Adobe Color", desc: "Generador de paletas y armonías cromáticas.", url: "https://color.adobe.com", icon: "Palette", category: "Color" },
            
            { id: "color-1", title: "Colors.co", desc: "Generador de paletas y armonías cromáticas.", url: "https://coolors.co/", icon: "Palette", category: "Color" }
          ],
          "Web": [
            { id: "web-1", title: "Awwwards", desc: "Reconocimiento al mejor diseño web.", url: "https://awwwards.com", category: "Web" }
          ]
    },
    projects: {
      paginas: [
        {
          id: 1,
          title: "Retoque de Retrato High-End",
          desc: "Separación de frecuencias y Dodge & Burn avanzado para fotografía de moda.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
          category: "Retouching",
          url: "#",
          tags: ["Frequency Separation", "D&B"],
        },
        {
          id: 2,
          title: "Composición Surrealista",
          desc: "Integración de múltiples elementos con iluminación global coherente.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
          category: "Digital Art",
          url: "#",
          tags: ["Blending", "Masking"],
        },
        {
          id: 3,
          title: "Mockup de Producto 3D",
          desc: "Creación de sombras realistas y deformación de etiquetas.",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
          category: "Advertising",
          url: "#",
          tags: ["Smart Objects", "Warp"],
        },
      ],
      componentes: [
        {
          id: "c1",
          title: "Smart Objects Pro",
          desc: "Plantillas editables para branding y papelería.",
          icon: "FileCode",
        },
        {
          id: "c2",
          title: "Panel de Capas de Ajuste",
          desc: "Presets de curvas y niveles personalizados.",
          icon: "Sliders",
        },
      ],
    },
    ejemplos: {
      posters: [
        {
          id: "poster-01",
          title: "Pingüino",
          desc: "Pingüino viral va a podostep Por dolor de pies",
          img: getAsset("pinguino.webp"),
          url: "https://www.instagram.com/p/DVG9g-HERuN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          category: "Posters",
        },
        {
          id: "poster-02",
          title: "14 de Febrero",
          desc: "Dia del amor y la amistad",
          img: getAsset("amor_y_amistad.webp"),
          url: "https://www.instagram.com/p/DVCZEyAEYo-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          category: "Posters",
        },
      ],
      tecnicas: [
        {
          id: "semitono-01",
          title: "Efecto Semitono Pro",
          desc: "Domina la técnica de medios tonos para crear texturas visuales dinámicas usando filtros avanzados.",
          img: getAsset("semitono.webp"),
          url: "#",
          category: "Visual Effects",
        },
        {
          id: 1,
          title: "Double Exposure",
          desc: "Mezcla de retratos con paisajes usando modos de fusión.",
          level: "Intermedio",
          duration: "8 min",
          url: "#",
          icon: "Copy",
        },
        {
          id: 2,
          title: "Neural Filters 101",
          desc: "Uso de IA para suavizado de piel y cambio de expresiones.",
          level: "Básico",
          duration: "10 min",
          url: "#",
          icon: "Cpu",
        },
      ],
      otro: [
        {
          id: 3,
          title: "Matte Painting",
          desc: "Creación de escenarios cinematográficos a gran escala.",
          level: "Experto",
          duration: "45 min",
          url: "#",
          icon: "Mountain",
        },
      ],
    },
    plugins: {
      Icons: [
        { id: "flat-icon", title: "FlatIcon", desc: "Acceso a millones de iconos", icon: "Grid" },
        { id: "font-awesome", title: "Font Awesome", desc: "Iconos clásicos para web", icon: "Flag" },
      ],
      Illustrations: [
        { id: "envato", title: "Envato Elements", desc: "Gráficos premium", icon: "Sparkles" },
        { id: "adobe-stock", title: "Adobe Stock", desc: "Vectores e ilustraciones", icon: "Library" },
      ],
      Mockups: [
        { id: "yellow-images", title: "Yellow Images", desc: "Mockups de objetos 3D", icon: "Box" },
        { id: "placeit", title: "PlaceIt", desc: "Generador instantáneo", icon: "Smartphone" },
      ],
      Images: [
        { id: "camera-raw", title: "Camera Raw", desc: "Procesado de negativos digitales", icon: "Camera" },
        { id: "unsplash", title: "Unsplash", desc: "Imágenes HD libres", icon: "Image" },
      ],
      Animations: [
        { id: "timeline", title: "Timeline Video", desc: "Edición de video básica", icon: "Film" },
        { id: "gif-maker", title: "GIF Animator", desc: "Exportación de banners", icon: "Zap" },
      ],
    },
    tutoriales: {
      principiante: [
        {
          id: "t1",
          title: "Capas y Máscaras",
          desc: "La base de la edición no destructiva.",
          icon: "Layers",
        },
      ],
      avanzado: [
        {
          id: "t2",
          title: "Scripting en PS",
          desc: "Automatización avanzada con JavaScript.",
          icon: "Code",
        },
      ],
    },
  },
};