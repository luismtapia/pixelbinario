import React from "react";
import { Box, Layers, Image as ImageIcon, Play, Smile, PlayCircle, Layout, Palette, Type, Sparkles } from "lucide-react";
import { PenTool, Wind } from "lucide-react";



export const IMAGENES_RESOURCES = {
  

  "Bancos Gratuitos": [
    { id: "img1", title: "Unsplash", desc: "La fuente de imágenes de alta resolución más famosa.", url: "https://unsplash.com", icon: <ImageIcon /> },
    { id: "img2", title: "Pexels", desc: "Fotos y videos gratuitos compartidos por creadores.", url: "https://pexels.com", icon: <ImageIcon /> },
  ],
  "IA & Generativos": [
    { id: "img3", title: "Lummi", desc: "Colección masiva de imágenes generadas por IA.", url: "https://lummi.ai", icon: <Sparkles /> },
    { id: "img4", title: "Midjourney", desc: "Herramienta líder en generación de arte visual.", url: "https://midjourney.com", icon: <Sparkles /> },
  ],
  "Recursos PNG": [
    { id: "img5", title: "CleanPNG", desc: "Imágenes transparentes de alta calidad.", url: "https://cleanpng.com", icon: <Layers /> },
  ]
};

export const RESOURCES = {


  figma: {
    title: "Figma",
    tabs: {
      dashboard: {
        stats: {
          totalResources: "45+",
          lastUpdate: "Feb 2026",
          trending: "Minimalist Pastel"
        },
        featured: {
          title: "Teoría del Color Avanzada",
          desc: "Domina la psicología del color y el contraste en interfaces modernas."
        }
      },
      plugins: {
        Icons: [
          { id: "lucide", title: "Lucide", desc: "Iconos vectoriales limpios", icon: <Box size={20}/> },
          { id: "phosphor", title: "Phosphor", desc: "Familia de iconos flexible", icon: <Box size={20}/> },
          { id: "hugeicons", title: "Hugeicons", desc: "Librería de +25,000 iconos", icon: <Box size={20}/> },
          { id: "iconly", title: "Iconly", desc: "Set de iconos esenciales", icon: <Box size={20}/> },
          { id: "icon8", title: "Icon 8", desc: "Biblioteca masiva de activos", icon: <Box size={20}/> },
        ],
        Illustrations: [
          { id: "blush", title: "Blush", desc: "Ilustraciones personalizables", icon: <Smile size={20}/> },
          { id: "illustrations", title: "Illustrations", desc: "Librería de kits gratuitos", icon: <Smile size={20}/> },
          { id: "storyset", title: "Storyset", desc: "Ilustraciones animables", icon: <Smile size={20}/> },
          { id: "nail-illustrations", title: "Nail Illustrations", desc: "Estilo artístico único", icon: <Smile size={20}/> },
          { id: "streamline", title: "Streamline", desc: "Iconos e ilustraciones premium", icon: <Smile size={20}/> },
        ],
        Mockups: [
          { id: "device-models", title: "Device Models", desc: "Mockups de dispositivos 3D", icon: <Layers size={20}/> },
          { id: "artboard", title: "Artboard Studio", desc: "Mockups de alta calidad", icon: <Layers size={20}/> },
          { id: "3d-transformer", title: "3D Transformer", desc: "Convierte capas en 3D", icon: <Layers size={20}/> },
          { id: "mockuups", title: "Mockuups Studio", desc: "Generador de escenas realistas", icon: <Layers size={20}/> },
          { id: "rotato-3d", title: "Rotato 3D", desc: "Mockups animados en 3D", icon: <Layers size={20}/> },
        ],
        Images: [
          { id: "unsplash", title: "Unsplash", desc: "Imágenes gratuitas HD", icon: <ImageIcon size={20}/> },
          { id: "freepik", title: "Freepik", desc: "Recursos gráficos variados", icon: <ImageIcon size={20}/> },
          { id: "pexels", title: "Pexels", desc: "Stock de fotos y videos", icon: <ImageIcon size={20}/> },
          { id: "lummi", title: "Lummi", desc: "Imágenes generadas por IA", icon: <ImageIcon size={20}/> },
          { id: "foca-stock", title: "Foca Stock", desc: "Fotos de uso comercial", icon: <ImageIcon size={20}/> },
        ],
        Animations: [
          { id: "lottiefiles", title: "LottieFiles", desc: "Animaciones JSON", icon: <Play size={20}/> },
          { id: "jitter", title: "Jitter", desc: "Motion design simple", icon: <Play size={20}/> },
          { id: "figmotion", title: "Figmotion", desc: "Animación basada en líneas de tiempo", icon: <Play size={20}/> },
          { id: "parallax", title: "Parallax", desc: "Efectos de profundidad", icon: <Play size={20}/> },
          { id: "motion", title: "Motion", desc: "Herramienta avanzada de animación", icon: <Play size={20}/> },
        ]
      },
      projects: {
        paginas: [
          {
            id: 1,
            title: "E-commerce Mobile App",
            desc: "Sistema de diseño completo y prototipo de alta fidelidad para una tienda de moda.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400", // Cambia por tus capturas
            category: "UI/UX Design",
            url: "#",
            tags: ["Auto Layout", "Components"]
          },
          {
            id: 2,
            title: "E-commerce Mobile App",
            desc: "Sistema de diseño completo y prototipo de alta fidelidad para una tienda de moda.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400", // Cambia por tus capturas
            category: "UI/UX Design",
            url: "#",
            tags: ["Auto Layout", "Components"]
          },
          {
            id: 3,
            title: "Modelo piramide",
            desc: "Landing page de Modelos en las piramides de Egipto",
            image: "/assets/figma/modelo_piramide.png",
            // image: "https://www.facebook.com/share/p/1FuXYHuviA/",
            category: "UI/UX Design",
            url: "https://www.figma.com/design/ciQgfThhoiwbUdWHsMt8XS/Ejemplo-figma?node-id=0-1&t=ovTHpm02tSEsCrcP-1",
            tags: ["Auto Layout", "Ejemplo", ""]
          },
        ],
        componentes: [

        ]
      },
      ejemplos: {
        categoria1: [],
        otro: []
      },
      tutoriales: {

      }

    }
  },
  photoshop: {
    title: "Photoshop",
    tabs: { 
      dashboard: {
        stats: { totalResources: 24, lastUpdate: "2024-05-20" },
        featured: { id: "plug-1", title: "Nik Collection", category: "Plugins" },
        pinceles: {
          id: "pin-1", title: "", category: "resources"
        }
      }, 
      resources: {
        "Pinceles": [
          { 
            id: "brush-1", 
            title: "Kyle T. Webster Brushes", 
            desc: "Acceso a miles de pinceles profesionales incluidos con Adobe CC.", 
            url: "https://www.adobe.com/products/photoshop/brushes.html", 
            category: "Pinceles" 
          },
          { 
            id: "brush-2", 
            title: "Brusheezy", 
            desc: "La mayor comunidad de pinceles de Photoshop gratuitos del mundo.", 
            url: "https://www.brusheezy.com/", 
            category: "Pinceles" 
          },
          { 
            id: "brush-3", 
            title: "GrutBrushes", 
            desc: "Pinceles digitales que imitan herramientas de arte reales con gran fidelidad.", 
            url: "https://www.grutbrushes.com/", 
            category: "Pinceles" 
          }
        ],
        "Patrones": [
          { 
            id: "pat-1", 
            title: "Subtle Patterns", 
            desc: "Biblioteca de patrones minimalistas de alta calidad para fondos web y UI.", 
            url: "https://www.toptal.com/designers/subtlepatterns/", 
            category: "Patrones" 
          },
          { 
            id: "pat-2", 
            title: "Patternary", 
            desc: "Generador y repositorio de patrones geométricos y abstractos.", 
            url: "https://patternary.com/", 
            category: "Patrones" 
          },
          { 
            id: "pat-3", 
            title: "Transparent Textures", 
            desc: "Patrones transparentes para añadir profundidad sin perder el color de fondo.", 
            url: "https://www.transparenttextures.com/", 
            category: "Patrones" 
          }
        ],
        "Texturas": [
          { 
            id: "tex-1", 
            title: "TextureLabs", 
            desc: "Texturas cinemáticas de altísima resolución (8K) y overlays gratis.", 
            url: "https://texturelabs.org/", 
            category: "Texturas" 
          },
          { 
            id: "tex-2", 
            title: "Lost and Taken", 
            desc: "Colecciones masivas de texturas de papel, pintura y grunge.", 
            url: "https://lostandtaken.com/", 
            category: "Texturas" 
          },
          { 
            id: "tex-3", 
            title: "Poliigon", 
            desc: "Texturas fotorealistas de grado profesional para fotocomposición y 3D.", 
            url: "https://www.poliigon.com/", 
            category: "Texturas" 
          }
        ]
      }, 
      links: {
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
            { id: "color-1", title: "Adobe Color", desc: "Generador de paletas cromáticas.", url: "https://color.adobe.com", category: "Color" }
          ],
          "Web": [
            { id: "web-1", title: "Awwwards", desc: "Reconocimiento al mejor diseño web.", url: "https://awwwards.com", category: "Web" }
          ]
        }, 
      projects: {
        paginas: [
          { id: "proj-1", title: "Matte Painting: Sci-Fi", desc: "Composición avanzada de paisajes futuristas.", image: "https://images.unsplash.com/photo-1614728263952-84ea206f2c40", url: "#", category: "Composición", tags: ["PS", "Matte Painting"] }
        ],
        componentes: [
          { id: "comp-1", title: "Glassmorphism Actions", desc: "Acciones para crear efectos de cristal esmerilado.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe", url: "#", category: "UI Assets", tags: ["Actions", "Glass"] }
        ]
      },
      ejemplos: [
        { 
          id: "ig-1", 
          title: "Mascara de recorte", 
          url: "https://www.instagram.com/p/DUzSCALETJ9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          type: "instagram" 
        },
      ], 
      tutoriales: {
        "Fundamentos": [
          { id: "tut-1", title: "Máscaras de Capa", desc: "Dominando la edición no destructiva.", url: "#", category: "Básico" },
          { id: "tut-2", title: "Objetos Inteligentes", desc: "Flujo de trabajo escalable.", url: "#", category: "Intermedio" }
        ]
      } 
    }
  },
  diseno: {
    title: "Diseño",
    tabs: { dashboard: {}, plugins: {}, links: {}, projects: { paginas: [], componentes: [] }, ejemplos: {}, tutoriales: {} }
  },
  ui_ux: {
    title: "UI/UX",
    tabs: { dashboard: {}, plugins: {}, links: {}, projects: { paginas: [], componentes: [] }, ejemplos: {}, tutoriales: {} }
  },
  colores: {
    title: "Colores",
    tabs: {
    dashboard: {
      stats: {
        totalResources: "45+",
        lastUpdate: "Feb 2026",
        trending: "Minimalist Pastel"
      },
      featured: {
        title: "Teoría del Color Avanzada",
        desc: "Domina la psicología del color y el contraste en interfaces modernas."
      }
    },
    // Estos se mapean en el componente ColorResourcesContent
    resources: {
      "Generadores Pro": [
        { id: "c1", title: "Adobe Color", desc: "La herramienta estándar para crear reglas de armonía.", url: "https://color.adobe.com/", category: "Generador" },
        { id: "c2", title: "Khroma", desc: "IA que aprende qué colores te gustan para generar paletas.", url: "https://khroma.co/", category: "Generador" },
        { id: "c3", title: "Coolors", desc: "Generador ultrarrápido de paletas para diseñadores.", url: "https://coolors.co/", category: "Generador" }
      ],
      "Accesibilidad": [
        { id: "c4", title: "Contrast Checker", desc: "Verifica el contraste WCAG para legibilidad web.", url: "https://webaim.org/resources/contrastchecker/", category: "Herramientas" },
        { id: "c5", title: "Color Safe", desc: "Crea paletas accesibles basadas en las pautas WCAG.", url: "http://colorsafe.co/", category: "Herramientas" }
      ]
    },
    // Estos se mapean en ColoresContent (Paletas)
    paletas: [
      { id: "p1", title: "Midnight Cyber", colors: ["#0F172A", "#1E293B", "#334155", "#7ED4FF", "#FFFFFF"] },
      { id: "p2", title: "Sunset Vibes", colors: ["#FF5F6D", "#FFC371", "#FFD200", "#FFED00", "#FFFFFF"] },
      { id: "p3", title: "Forest Deep", colors: ["#064E3B", "#065F46", "#059669", "#34D399", "#A7F3D0"] },
      { id: "p4", title: "Nordic Frost", colors: ["#2E3440", "#3B4252", "#434C5E", "#88C0D0", "#E5E9F0"] }
    ],
    gradients: [
      { id: "g1", title: "Hyper Blue", colors: ["#0061ff", "#60efff"], css: "linear-gradient(135deg, #0061ff 0%, #60efff 100%)" },
      { id: "g2", title: "Deep Purple", colors: ["#667eea", "#764ba2"], css: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
      { id: "g3", title: "Mango Pulp", colors: ["#f093fb", "#f5576c"], css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
      { id: "g4", title: "Mesh Magic", colors: ["#110f1a", "#2f3e6a", "#722744"], css: "radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)" },
      { id: "g5", title: "Gold Classic", colors: ["#F6E073", "#C28F1A", "#F9E37A", "#B78C1A", "#F0D96C"], css: "linear-gradient(90deg, #F6E073 0%, #C28F1A 25%, #F9E37A 50%, #B78C1A 75%, #F0D96C 100%)" },
      { id: "g6", title: "Deep Gold", colors: ["#EAD779", "#BE922F", "#A9710F", "#F8E47B", "#CCA641"], css: "linear-gradient(90deg, #EAD779 0%, #BE922F 25%, #A9710F 50%, #F8E47B 75%, #CCA641 100%)" },
      { id: "g7", title: "Silver Bright", colors: ["#B1B2B4", "#7A7B7F", "#F0F0F0", "#A7A8AC", "#EDEDED"], css: "linear-gradient(90deg, #B1B2B4 0%, #7A7B7F 25%, #F0F0F0 50%, #A7A8AC 75%, #EDEDED 100%)" },
      { id: "g8", title: "Industrial Silver", colors: ["#C3C5C4", "#5D5E60", "#CDCED0", "#707173", "#DEDFE1"], css: "linear-gradient(90deg, #C3C5C4 0%, #5D5E60 25%, #CDCED0 50%, #707173 75%, #DEDFE1 100%)" },
      { id: "g9", title: "Bronze Soft", colors: ["#C4A588", "#895B40", "#EDCDB4", "#8B5D3B"], css: "linear-gradient(90deg, #C4A588 0%, #895B40 33%, #EDCDB4 66%, #8B5D3B 100%)" },
      { id: "g10", title: "Bronze Aged", colors: ["#AA7E63", "#F4D1B8", "#82543A", "#C9A992", "#9D7051"], css: "linear-gradient(90deg, #AA7E63 0%, #F4D1B8 25%, #82543A 50%, #C9A992 75%, #9D7051 100%)" },
      { id: "g11", title: "Rose Gold Luxury", colors: ["#DA8393", "#D26777", "#FEE1E3", "#DC7C88", "#F2B9C0"], css: "linear-gradient(90deg, #DA8393 0%, #D26777 25%, #FEE1E3 50%, #DC7C88 75%, #F2B9C0 100%)" },
      { id: "g12", title: "Rose Gold Soft", colors: ["#DC94A2", "#FDE3E2", "#E79192", "#f6bdc3"], css: "linear-gradient(90deg, #DC94A2 0%, #FDE3E2 33%, #E79192 66%, #f6bdc3 100%)" },
      { id: "g13", title: "Emerald Crystal", colors: ["#95DFE5", "#5AA3A9", "#94E3E8", "#4D989D"], css: "linear-gradient(90deg, #95DFE5 0%, #5AA3A9 33%, #94E3E8 66%, #4D989D 100%)" },
      { id: "g14", title: "Emerald Deep", colors: ["#439297", "#7CC3C9", "#40898F", "#8DEAE7", "#5AA5AA"], css: "linear-gradient(90deg, #439297 0%, #7CC3C9 25%, #40898F 50%, #8DEAE7 75%, #5AA5AA 100%)" },
      { id: "g15", title: "Metallic Black Light", colors: ["#030303", "#434343", "#616161", "#494949", "#898989"], css: "linear-gradient(90deg, #030303 0%, #434343 25%, #616161 50%, #494949 75%, #898989 100%)" },
      { id: "g16", title: "Absolute Metallic Black", colors: ["#2E2E2E", "#626262", "#8B8B8B", "#414141", "#000000"], css: "linear-gradient(90deg, #2E2E2E 0%, #626262 25%, #8B8B8B 50%, #414141 75%, #000000 100%)" },
      { id: "g17", title: "Metallic Green Vivid", colors: ["#119F09", "#039600", "#1CE909", "#7FF56D", "#009800"], css: "linear-gradient(90deg, #119F09 0%, #039600 25%, #1CE909 50%, #7FF56D 75%, #009800 100%)" },
      { id: "g18", title: "Deep Forest Green", colors: ["#5FFC35", "#039C00", "#3EFF1F", "#009900", "#43FF27"], css: "linear-gradient(90deg, #5FFC35 0%, #039C00 25%, #3EFF1F 50%, #009900 75%, #43FF27 100%)" },
      { id: "g19", title: "Metallic Blue Sky", colors: ["#29364E", "#0CB6D7", "#8DD1E3", "#164E7E", "#21242B"], css: "linear-gradient(90deg, #29364E 0%, #0CB6D7 25%, #8DD1E3 50%, #164E7E 75%, #21242B 100%)" },
      { id: "g20", title: "Cyber Blue", colors: ["#242C3C", "#0B5F84", "#3CBDDC", "#75C9DB", "#0C8788"], css: "linear-gradient(90deg, #242C3C 0%, #0B5F84 25%, #3CBDDC 50%, #75C9DB 75%, #0C8788 100%)" },
      { id: "g21", title: "Metallic Red Pure", colors: ["#902E31", "#E6292C", "#EF9092", "#8C2D30"], css: "linear-gradient(90deg, #902E31 0%, #E6292C 33%, #EF9092 66%, #8C2D30 100%)" },
      { id: "g22", title: "Burning Red", colors: ["#D8262C", "#F2A1A3", "#DD252B", "#922E31", "#B51313", "#732A2C"], css: "linear-gradient(90deg, #D8262C 0%, #F2A1A3 20%, #DD252B 40%, #922E31 60%, #B51313 80%, #732A2C 100%)" },
      { id: "g23", title: "Metallic Orange", colors: ["#BE3901", "#FF9B15", "#FDC45B", "#E78524", "#CC4100"], css: "linear-gradient(90deg, #BE3901 0%, #FF9B15 25%, #FDC45B 50%, #E78524 75%, #CC4100 100%)" },
      { id: "g24", title: "Sunset Metallic", colors: ["#B84A0B", "#FEA62B", "#FAD07E", "#DE6F13", "#F6861A", "#D05007"], css: "linear-gradient(90deg, #B84A0B 0%, #FEA62B 20%, #FAD07E 40%, #DE6F13 60%, #F6861A 80%, #D05007 100%)" },
      
      
      
      
      
      
      
      // Paletas extraídas del video (Continuando con el ID g25) estos mover a paletas
      { 
        id: "g25", 
        title: "Lujo y Elegancia", 
        colors: ["#13361c", "#212717", "#826343", "#cc9a48", "#dfdfdf"], 
        css: "linear-gradient(90deg, #13361c 0%, #212717 25%, #826343 50%, #cc9a48 75%, #dfdfdf 100%)" 
      },
      { 
        id: "g26", 
        title: "Respeto y Calidad", 
        colors: ["#E1A14D", "#532200", "#E9CFA0", "#B54120"], 
        css: "linear-gradient(90deg, #E1A14D 0%, #532200 33%, #E9CFA0 66%, #B54120 100%)" 
      },
      { 
        id: "g27", 
        title: "Cálido Glamuroso", 
        colors: ["#C8C8C8", "#2B231E", "#645C41", "#7F6F52"], 
        css: "linear-gradient(90deg, #C8C8C8 0%, #2B231E 33%, #645C41 66%, #7F6F52 100%)" 
      },
      { 
        id: "g28", 
        title: "Clásico Elegante", 
        colors: ["#FAF2F0", "#9E5355", "#E3998F", "#CE93A0"], 
        css: "linear-gradient(90deg, #FAF2F0 0%, #9E5355 25%, #E3998F 50%, #CE93A0 75%)" 
      },
      { 
        id: "g29", 
        title: "Profesional Lujoso", 
        colors: ["#B88D4D", "#FEE49D", "#121C0E", "#D9AD5D"], 
        css: "linear-gradient(90deg, #B88D4D 0%, #FEE49D 33%, #121C0E 66%, #D9AD5D 100%)" 
      },
      { 
        id: "g30", 
        title: "Sofisticado Moderno", 
        colors: ["#00151D", "#C76051", "#F1E3D3", "#311B1D"], 
        css: "linear-gradient(90deg, #00151D 0%, #C76051 33%, #F1E3D3 66%, #311B1D 100%)" 
      },
      { 
        id: "g31", 
        title: "Poder y Lujo", 
        colors: ["#14222E", "#050B13", "#6B000D", "#F3E3E2"], 
        css: "linear-gradient(90deg, #14222E 0%, #050B13 33%, #6B000D 66%, #F3E3E2 100%)" 
      }
    ],
    links: {
      "Inspiración": [
        { id: "l1", title: "Design Seeds", desc: "Paletas basadas en fotografías del mundo real.", url: "https://www.design-seeds.com/" },
        { id: "l2", title: "Color Hunt", desc: "Colección abierta de paletas creadas por la comunidad.", url: "https://colorhunt.co/" },
        { id: "l3", title: "Colors Wall", desc: "Colección abierta de paletas creadas por la comunidad.", url: "https://colorswall.com/" }
        
      ],
      "Teoría": [
        { id: "l3", title: "Interaction Design Foundation", desc: "Artículos profundos sobre la psicología del color.", url: "https://www.interaction-design.org/" }
      ]
    },
    projects: {
      paginas: [
        { id: "pg1", title: "Color System UI", desc: "Arquitectura de color para un SaaS." },
      ],
      componentes: [
        { id: "co1", title: "Theme Switcher", desc: "Toggle entre Dark/Light mode con CSS variables." }
      ]
    }
  }
  },
  web: {
    title: "Web",
    tabs: { dashboard: {}, plugins: {}, links: {}, projects: { paginas: [], componentes: [] }, ejemplos: {}, tutoriales: {} }
  },
  fonts: {
    title: "Fonts",
    tabs: { dashboard: {}, plugins: {}, links: {}, projects: { paginas: [], componentes: [] }, ejemplos: {}, tutoriales: {} }
  },
  imagenes: {
    title: "Imágenes",
    tabs: { dashboard: {}, plugins: {}, links: {}, projects: { paginas: [], componentes: [] }, ejemplos: {}, tutoriales: {} }
  },
  tutoriales: {
    title: "Tutoriales",
    tabs: { 
      dashboard: {
        stats: { totalCourses: "120+", completed: "45", lastUpdate: "15 Feb 2026" },
        featured: { title: "Mastering Color Grading", desc: "Aprende el arte de la corrección de color cinematográfica." }
      }, 
      plugins: {}, 
      links: {
        "facebook": [
              { id: "fb-1", title: "Behance", desc: "Inspiración y portafolios.", url: "https://behance.net", category: "Figma" },
              { id: "fb-2", title: "Dribbble", desc: "Red social para creativos y diseño visual.", url: "https://dribbble.com", category: "Photoshop" },
              { id: "fb-3", title: "Designspiration", desc: "Búsqueda de estética visual y color.", url: "https://designspiration.com", category: "Inspiración" },
              { id: "fb-4", title: "Cosmos", desc: "Curación moderna de referencias visuales.", url: "https://cosmos.so", category: "Inspiración" }
            ],
      }, 
      projects: { paginas: [], componentes: [] }, ejemplos: {}, tutoriales: {} 
    }
  },
};




export const SOCIAL_SHOWCASE = [
  { 
    id: "fb-1", 
    url: "https://www.facebook.com/reel/2285148228562185", 
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Video Tutorial Facebook"
  },
  { 
    id: "fb-2", 
    url: "https://www.facebook.com/reel/883993057946506", 
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #1"
  },
  { 
    id: "fb-3", 
    url: "https://www.facebook.com/reel/3006655816211225",
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #2"
  },
  { 
    id: "fb-4", 
    url: "https://www.facebook.com/reel/855857960490367", 
    category: "figma", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #3"
  },
  { 
    id: "fb-5", 
    url: "https://www.facebook.com/reel/1595153178296760", 
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #4"
  },
  { 
    id: "fb-6", 
    url: "https://www.facebook.com/reel/1568854150834479", 
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #5"
  },
  { 
    id: "fb-7", 
    url: "https://www.facebook.com/reel/717234651419815", 
    category: "figma", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #6"
  },
  { 
    id: "fb-8", 
    url: "https://www.facebook.com/reel/1811628299539209", 
    category: "figma", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #7"
},
{ 
    id: "fb-9", 
    url: "https://www.facebook.com/reel/2290088671403724", 
    category: "figma", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #8"
},
{ 
    id: "fb-10", 
    url: "https://www.facebook.com/reel/1604212704118129", 
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #9"
},
{ 
    id: "fb-11", 
    url: "https://www.facebook.com/reel/2412070182562204", 
    category: "photoshop", 
    type: "facebook",
    kind: "video",
    title: "Facebook Reel #10"
},









  {
    id: "tk-1",

    url: "https://www.tiktok.com/@appxion/video/7606943511602072852?is_from_webapp=1&sender_device=pc",

    category: "photoshop",

    type: "tiktok",

    kind: "video"
  }
];



export const INSTAGRAM_POSTS = [
  { id: 1, url: "https://www.instagram.com/p/CUb6666666/" },
  { id: 2, url: "https://www.instagram.com/p/CUb7777777/" },
  { id: 3, url: "https://www.instagram.com/p/CUb8888888/" },
  // ... añade los que quieras
];

export const TIKTOK_TUTORIALS = [
  { id: "t1", url: "https://www.tiktok.com/@appxion/video/7606943511602072852?is_from_webapp=1&sender_device=pc", title: "Texto contraste dividido" },
  { id: "t2", url: "https://www.tiktok.com/@user/video/987654321", title: "Recorte Perfecto" },
  // Añadir más URLs aquí
];



// borrar
// TODO: FIGMA 
export const FIGMA_RESOURCES = {

  Icons: [
    { id: "lucide", title: "Lucide", desc: "Iconos vectoriales limpios", icon: <Box size={20}/> },
    { id: "phosphor", title: "Phosphor", desc: "Familia de iconos flexible", icon: <Box size={20}/> },
    { id: "hugeicons", title: "Hugeicons", desc: "Librería de +25,000 iconos", icon: <Box size={20}/> },
    { id: "iconly", title: "Iconly", desc: "Set de iconos esenciales", icon: <Box size={20}/> },
    { id: "icon8", title: "Icon 8", desc: "Biblioteca masiva de activos", icon: <Box size={20}/> },
  ],
  Illustrations: [
    { id: "blush", title: "Blush", desc: "Ilustraciones personalizables", icon: <Smile size={20}/> },
    { id: "illustrations", title: "Illustrations", desc: "Librería de kits gratuitos", icon: <Smile size={20}/> },
    { id: "storyset", title: "Storyset", desc: "Ilustraciones animables", icon: <Smile size={20}/> },
    { id: "nail-illustrations", title: "Nail Illustrations", desc: "Estilo artístico único", icon: <Smile size={20}/> },
    { id: "streamline", title: "Streamline", desc: "Iconos e ilustraciones premium", icon: <Smile size={20}/> },
  ],
  Mockups: [
    { id: "device-models", title: "Device Models", desc: "Mockups de dispositivos 3D", icon: <Layers size={20}/> },
    { id: "artboard", title: "Artboard Studio", desc: "Mockups de alta calidad", icon: <Layers size={20}/> },
    { id: "3d-transformer", title: "3D Transformer", desc: "Convierte capas en 3D", icon: <Layers size={20}/> },
    { id: "mockuups", title: "Mockuups Studio", desc: "Generador de escenas realistas", icon: <Layers size={20}/> },
    { id: "rotato-3d", title: "Rotato 3D", desc: "Mockups animados en 3D", icon: <Layers size={20}/> },
  ],
  Images: [
    { id: "unsplash", title: "Unsplash", desc: "Imágenes gratuitas HD", icon: <ImageIcon size={20}/> },
    { id: "freepik", title: "Freepik", desc: "Recursos gráficos variados", icon: <ImageIcon size={20}/> },
    { id: "pexels", title: "Pexels", desc: "Stock de fotos y videos", icon: <ImageIcon size={20}/> },
    { id: "lummi", title: "Lummi", desc: "Imágenes generadas por IA", icon: <ImageIcon size={20}/> },
    { id: "foca-stock", title: "Foca Stock", desc: "Fotos de uso comercial", icon: <ImageIcon size={20}/> },
  ],
  Animations: [
    { id: "lottiefiles", title: "LottieFiles", desc: "Animaciones JSON", icon: <Play size={20}/> },
    { id: "jitter", title: "Jitter", desc: "Motion design simple", icon: <Play size={20}/> },
    { id: "figmotion", title: "Figmotion", desc: "Animación basada en líneas de tiempo", icon: <Play size={20}/> },
    { id: "parallax", title: "Parallax", desc: "Efectos de profundidad", icon: <Play size={20}/> },
    { id: "motion", title: "Motion", desc: "Herramienta avanzada de animación", icon: <Play size={20}/> },
  ]
};
export const FIGMA_PROJECTS = [
  {
    id: 1,
    title: "E-commerce Mobile App",
    desc: "Sistema de diseño completo y prototipo de alta fidelidad para una tienda de moda.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400", // Cambia por tus capturas
    category: "UI/UX Design",
    url: "#",
    tags: ["Auto Layout", "Components"]
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    desc: "Sistema de diseño completo y prototipo de alta fidelidad para una tienda de moda.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400", // Cambia por tus capturas
    category: "UI/UX Design",
    url: "#",
    tags: ["Auto Layout", "Components"]
  },
  {
    id: 3,
    title: "Modelo piramide",
    desc: "Landing page de Modelos en las piramides de Egipto",
    image: "/assets/figma/modelo_piramide.png",
    // image: "https://www.facebook.com/share/p/1FuXYHuviA/",
    category: "UI/UX Design",
    url: "https://www.figma.com/design/ciQgfThhoiwbUdWHsMt8XS/Ejemplo-figma?node-id=0-1&t=ovTHpm02tSEsCrcP-1",
    tags: ["Auto Layout", "Ejemplo", ""]
  },
  // Añade más aquí...
];
export const FIGMA_EXAMPLES = [
  {
    id: 1,
    title: "Glassmorphism Effects",
    desc: "Aprende a crear capas translúcidas con desenfoque de fondo real.",
    level: "Intermedio",
    duration: "5 min",
    url: "#",
    icon: <PlayCircle />
  },
  {
    id: 2,
    title: "Advanced Auto Layout 5.0",
    desc: "Ejemplos prácticos de wrapping y min/max widths en componentes.",
    level: "Avanzado",
    duration: "12 min",
    url: "#",
    icon: <Layout />
  }
];










































//  ██████╗ ██╗███████╗███████╗███╗   ██╗ ██████╗ 
//  ██╔══██╗██║██╔════╝██╔════╝████╗  ██║██╔═══██╗
//  ██║  ██║██║███████╗█████╗  ██╔██╗ ██║██║   ██║
//  ██║  ██║██║╚════██║██╔══╝  ██║╚██╗██║██║   ██║
//  ██████╔╝██║███████║███████╗██║ ╚████║╚██████╔╝
//  ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ 

export const DESIGN_RESOURCES = {
  "Fundamentos": [
    { id: "d1", title: "Teoría del Color", desc: "Guía completa de armonías", icon: <Palette size={20}/>, url: "#" },
    { id: "d2", title: "Tipografía", desc: "Jerarquía y emparejamiento", icon: <Type size={20}/>, url: "#" },
  ],
  "Composición": [
    { id: "d3", title: "Regla de Tercios", desc: "Mejora el layout visual", icon: <Layout size={20}/>, url: "#" },
  ]
};

export const DESIGN_LINKS = {
  "Inspiración": [
    { id: "l2", title: "Behance", desc: "Inspiración y portafolios.", url: "https://behance.net", category: "Inspiración" },
    { id: "l6", title: "Dribbble", desc: "Red social para creativos y diseño visual.", url: "https://dribbble.com", category: "Inspiración" },
    { id: "l7", title: "Designspiration", desc: "Búsqueda de estética visual y color.", url: "https://designspiration.com", category: "Inspiración" },
    { id: "l10", title: "Cosmos", desc: "Curación moderna de referencias visuales.", url: "https://cosmos.so", category: "Inspiración" }
  ],
  "Logos": [
    { id: "l4", title: "Logobook", desc: "Galería de logotipos originales.", url: "https://logobook.com", category: "Logos" },
    { id: "l5", title: "Logomoose", desc: "Comunidad de diseño de logos.", url: "https://logomoose.com", category: "Logos" },
    { id: "l8", title: "LogoLounge", desc: "Base de datos profesional de logotipos.", url: "https://logolounge.com", category: "Logos" }
  ],
  "Tipografía": [
    { id: "l3", title: "Fontshare", desc: "Fuentes gratuitas de alta calidad.", url: "https://fontshare.com", category: "Tipografía" }
  ],
  "Color": [
    { id: "l1", title: "Adobe Color", desc: "Generador de paletas cromáticas.", url: "https://color.adobe.com", category: "Color" },
    { id: "l11", title: "Color Method", desc: "Juego para perfeccionar tu ojo con el color.", url: "https://color.method.ac/", category: "Color" }
  ],
  "Web": [
    { id: "l9", title: "Awwwards", desc: "Reconocimiento al mejor diseño web.", url: "https://awwwards.com", category: "Web" },
    { id: "l12", title: "CSS Design Awards", desc: "Premios a la innovación en diseño digital.", url: "https://www.cssdesignawards.com/", category: "Web" },
    { id: "l13", title: "Avark", desc: "Inspiración de una agencia de diseño premium.", url: "https://avark.agency/", category: "Web" }
  ],
  "Practica": [
    { id: "l10", title: "Can't Unsee", desc: "Entrena tu ojo para el diseño UI.", url: "https://cantunsee.space/", category: "Practica" },
    { id: "l14", title: "Pixactly", desc: "Dibuja cajas para adivinar dimensiones en píxeles.", url: "https://pixactly.app/", category: "Practica" }
  ]
};


export const TIKTOK_DESIGN = [
  { id: "td1", url: "https://www.tiktok.com/@user/video/1", title: "Teoría del Color" },
  { id: "td2", url: "https://www.tiktok.com/@user/video/2", title: "Jerarquía Visual" },
];












//  ██╗   ██╗██╗      ██╗   ██╗██╗  ██╗
//  ██║   ██║██║      ██║   ██║╚██╗██╔╝
//  ██║   ██║██║█████╗██║   ██║ ╚███╔╝ 
//  ██║   ██║██║╚════╝██║   ██║ ██╔██╗ 
//  ╚██████╔╝██║      ╚██████╔╝██╔╝ ██╗
//   ╚═════╝ ╚═╝       ╚═════╝ ╚═╝  ╚═╝



















//  ██╗    ██╗███████╗██████╗ 
//  ██║    ██║██╔════╝██╔══██╗
//  ██║ █╗ ██║█████╗  ██████╔╝
//  ██║███╗██║██╔══╝  ██╔══██╗
//  ╚███╔███╔╝███████╗██████╔╝
//   ╚══╝╚══╝ ╚══════╝╚═════╝






//  ███████╗ ██████╗ ███╗   ██╗████████╗███████╗
//  ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝
//  █████╗  ██║   ██║██╔██╗ ██║   ██║   ███████╗
//  ██╔══╝  ██║   ██║██║╚██╗██║   ██║   ╚════██║
//  ██║     ╚██████╔╝██║ ╚████║   ██║   ███████║
//  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝











export const SOCIAL_LINKS = [
  { id: 1, title: "Soporte para Celular RadioShack", url: "https://www.radioshack.com.mx/store/Categor%C3%ADa/Todas/Originales-RadioShack/Cables-y-Accesorios-Celular-y-Automovil/Soportes-para-Celular/Soporte-para-Celular-Bici-y-Motocicleta-4-7-a-6-3-pulg-RadioShack/p/100134461", category: "Shopping" },
  { id: 2, title: "Flutter", url: "https://youtu.be/8GnUh6Pbgm4", category: "programacion" },
  { id: 3, title: "Google Photos Album", url: "https://photos.app.goo.gl/Y2NR5TYvRNU4pJdLA", category: "Photos" },
  { id: 27, title: "Lista de Cómics", url: "https://cbrcomics.net/lista-de-comics/", category: "Entertainment" },
  { id: 45, title: "Personalizar Centro de Control Xiaomi", url: "https://www.xiaomiadictos.com/asi-puedes-personalizar-y-cambiar-por-completo-el-centro-de-control-de-tu-xiaomi/", category: "Tech" },
  { id: 55, title: "CSS3 Patterns - Carbon", url: "https://projects.verou.me/css3patterns/#carbon", category: "programacion" },
  { id: 59, title: "SVG Wavey Transitions", url: "https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections", category: "programacion" },
  { id: 67, title: "Nudos elegantes de agujetas de zapatos", url: "https://www.facebook.com/share/r/1F8Z7cNt4J/", category: "ideas" },
  { id: 70, title: "Idea caja sorpresa", url: "https://www.facebook.com/reel/1349189356044340", category: "ideas" },
  { id: 71, title: "Idea piscina", url: "https://www.facebook.com/share/r/17gzUcMR5G/", category: "ideas" },
  { id: 72, title: "Idea de pergola", url: "https://www.facebook.com/share/14H5Ndd5bA/", category: "ideas" },
  { id: 73, title: "Idea casa", url: "https://www.facebook.com/share/v/1Ao3v2raRg/", category: "ideas" },
  { id: 74, title: "Receta", url: "https://www.facebook.com/share/r/18HVC1GHqL/", category: "recetas" },
  { id: 75, title: "Idea de mini pañuelos", url: "https://youtube.com/shorts/x5pPPk6mrvU", category: "ideas" },
  







  { id: 76, title: "Ideas para paletas de colores", url: "https://www.facebook.com/share/r/15Sz4pj2Yy/", category: "Facebook" },
  { id: 77, title: "Idea de un avion de papel", url: "https://www.facebook.com/share/v/1MFp7NdQYY/", category: "Facebook" },
  { id: 78, title: "Idea de pisadas de santa para navidad", url: "https://www.facebook.com/share/r/1CyooJv7FQ/", category: "Facebook" },
  { id: 79, title: "FacebookShare", url: "https://www.facebook.com/share/r/14ai7wmmP4/", category: "Facebook" },
  { id: 80, title: "FacebookShare", url: "https://www.facebook.com/share/p/19zuGjoH3g/", category: "Facebook" },
  
  { id: 81, title: "FacebookShare", url: "https://www.facebook.com/share/r/1AtPtkzubi/", category: "Facebook" },
  { id: 82, title: "FacebookShare", url: "https://www.facebook.com/share/v/15nMUFFaSr/", category: "Facebook" },
  { id: 83, title: "FacebookShare", url: "https://www.facebook.com/share/v/1B8W8tj39A/", category: "Facebook" },
  { id: 84, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BAhexy5U6/", category: "Facebook" },
  { id: 85, title: "FacebookShare", url: "https://www.facebook.com/share/r/185i2x6pUn/", category: "Facebook" },
  { id: 86, title: "FacebookShare", url: "https://www.facebook.com/share/r/1YDeCg5spF/", category: "Facebook" },
  { id: 87, title: "FacebookShare", url: "https://www.facebook.com/share/r/19kPHtFkKe/", category: "Facebook" },
  { id: 88, title: "FacebookShare", url: "https://www.facebook.com/share/r/1FJZECfFuu/", category: "Facebook" },
  { id: 89, title: "FacebookShare", url: "https://www.facebook.com/share/r/15cV6peSXT/", category: "Facebook" },
  



  { id: 90, title: "FacebookShare", url: "https://www.facebook.com/share/r/1AxNWcYao8/", category: "Facebook" },
  { id: 91, title: "FacebookShare", url: "https://www.facebook.com/share/p/15ffJxdQuT/", category: "Facebook" },
  { id: 92, title: "FacebookShare", url: "https://www.facebook.com/share/r/18eFnorB1B/", category: "Facebook" },
  { id: 93, title: "FacebookShare", url: "https://www.facebook.com/share/r/1EnS6EjFdU/", category: "Facebook" },
  { id: 94, title: "FacebookShare", url: "https://www.facebook.com/share/r/15xzuLTYDn/", category: "Facebook" },
  { id: 95, title: "FacebookShare", url: "https://www.facebook.com/share/r/18HswpL8Rq/", category: "Facebook" },
  { id: 96, title: "FacebookShare", url: "https://www.facebook.com/share/r/1DsZbVETUJ/", category: "Facebook" },
  { id: 97, title: "FacebookShare", url: "https://www.facebook.com/share/r/1ENu5JqyRh/", category: "Facebook" },
  { id: 98, title: "FacebookShare", url: "https://www.facebook.com/share/r/1Hbb9Y8sNv/", category: "Facebook" },
  { id: 99, title: "FacebookShare", url: "https://www.facebook.com/share/r/15v8pGWk9j/", category: "Facebook" },
  { id: 100, title: "FacebookShare", url: "https://www.facebook.com/share/r/1KKfnvcpU6/", category: "Facebook" },
  
  
  
  
  
  
  
  { id: 101, title: "FacebookShare", url: "https://www.facebook.com/share/r/18JVx1qdar/", category: "Facebook" },
  { id: 102, title: "Facebook Reel", url: "https://www.facebook.com/reel/595971696736922", category: "Facebook" },
  { id: 103, title: "FacebookShare", url: "https://www.facebook.com/share/r/12E2o3rdjAP/", category: "Facebook" },
  { id: 104, title: "FacebookShare", url: "https://www.facebook.com/share/r/19nxoaLMa1/", category: "Facebook" },
  { id: 105, title: "Facebook", url: "https://www.facebook.com/share/p/1E7FRXmDGs/", category: "Facebook" },
  { id: 106, title: "Facebook", url: "https://www.facebook.com/share/p/1BdqTzJwxh/", category: "Facebook" },
  { id: 107, title: "FacebookShare", url: "https://www.facebook.com/share/r/18mjDBBKeK/", category: "Facebook" },
  { id: 108, title: "FacebookShare", url: "https://www.facebook.com/share/r/1DMQ1bw2V9/", category: "Facebook" },
  { id: 109, title: "FacebookShare", url: "https://www.facebook.com/share/r/1AEzWsR1kE/", category: "Facebook" },
  { id: 110, title: "FacebookShare", url: "https://www.facebook.com/share/r/1EngXTe1L1/", category: "Facebook" },
  { id: 111, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HNwRdZVKY/", category: "Facebook" },
  { id: 112, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HZwzHzmVF/", category: "Facebook" },
  { id: 113, title: "FacebookShare", url: "https://www.facebook.com/share/r/1ADyMMyPpY/", category: "Facebook" },
  { id: 114, title: "Bing Rewards Sweepstakes", url: "https://rewards.bing.com/sweepstakes/million/about", category: "Web" },
  { id: 115, title: "FacebookShare", url: "https://www.facebook.com/share/r/16DPUACu3r/", category: "Facebook" },
  { id: 116, title: "Bebidas de Recesión en EU", url: "https://www.elimparcial.com/dinero/2025/04/08/surgen-bebidas-de-recesion-en-comercios-de-eu/", category: "News" },
  { id: 117, title: "Facebook", url: "https://www.facebook.com/share/p/163j5iHoyk/", category: "Facebook" },
  { id: 118, title: "Diplomado CONDUSEF", url: "https://inscripcion-diplomado.condusef.gob.mx/", category: "Education" },
  { id: 119, title: "FacebookShare", url: "https://www.facebook.com/share/r/15PFqtPzna/", category: "Facebook" },
  { id: 120, title: "FacebookShare", url: "https://www.facebook.com/share/r/19WpezGh9M/", category: "Facebook" },
  { id: 121, title: "Facebook", url: "https://www.facebook.com/share/1AddHQPuSP/", category: "Facebook" },
  { id: 122, title: "Facebook", url: "https://www.facebook.com/share/p/16MskRDu9C/", category: "Facebook" },
  { id: 123, title: "ChatGPT para Estudiar", url: "https://www.genbeta.com/inteligencia-artificial/chatgpt-mi-mejor-aliada-para-estudiar-este-prompt-hice-que-leyera-apuntes-creara-test-interactivo", category: "AI" },
  { id: 124, title: "Facebook", url: "https://www.facebook.com/share/p/19FTFGqqhS/", category: "Facebook" },
  { id: 125, title: "Amazon Link", url: "https://a.co/d/aUDGHI3", category: "Shopping" },
  { id: 126, title: "Amazon Producto", url: "https://www.amazon.com.mx/dp/B0D3HVLFVH/", category: "Shopping" },
  { id: 127, title: "Facebook", url: "https://www.facebook.com/share/1LbKSzi5k4/", category: "Facebook" },
  { id: 128, title: "Flutter UI Cookies (GitHub)", url: "https://github.com/rajayogan/flutterui-cookies", category: "Development" },
  { id: 129, title: "FacebookShare", url: "https://www.facebook.com/share/r/1MCiFaXMNF/", category: "Facebook" },
  { id: 130, title: "Facebook Reel", url: "https://www.facebook.com/reel/671538155920571", category: "Facebook" },
  { id: 131, title: "Google Image Search", url: "https://images.app.goo.gl/tPx9rmvePrQkMjHZ8", category: "Images" },
  { id: 132, title: "YouTube Shorts", url: "https://youtube.com/shorts/1vMLJ0zrwg8", category: "Facebook" },
  { id: 133, title: "Google Shared UI", url: "https://share.google/UI3VWK8MVT1Tcd4MN", category: "Facebook" },
  { id: 134, title: "Google Shared Resource", url: "https://share.google/8isZonmPGAwS7vita", category: "Facebook" },
  { id: 135, title: "Microsoft Copilot Share", url: "https://copilot.microsoft.com/shares/vF2tgijQuEodU2HkML7RD", category: "AI" },
  { id: 136, title: "YouTube Shorts", url: "https://youtube.com/shorts/p7Obc5C-Hk4", category: "Facebook" },
  { id: 137, title: "Google Shared Resource", url: "https://share.google/8Irm6NrHxq7Gb7ycF", category: "Facebook" },
  { id: 138, title: "FacebookShare", url: "https://www.facebook.com/share/r/1FDR2fFZe2/", category: "Facebook" },
  { id: 139, title: "Facebook", url: "https://www.facebook.com/share/v/1QnC8478S7/", category: "Facebook" },
  { id: 140, title: "Facebook", url: "https://www.facebook.com/share/1GN6WhuX6u/", category: "Facebook" },
  { id: 141, title: "Google Shared Resource", url: "https://share.google/tYVlUGzZdxKGN8pXI", category: "Facebook" },
  { id: 142, title: "Facebook", url: "https://www.facebook.com/share/v/1AQHtwWmTe/", category: "Facebook" },
  { id: 143, title: "FacebookShare", url: "https://www.facebook.com/share/r/1GaN8XiwbL/", category: "Facebook" },
  { id: 144, title: "Facebook", url: "https://www.facebook.com/share/v/17FtKzPAYt/", category: "Facebook" },
  { id: 145, title: "Facebook", url: "https://www.facebook.com/share/1C4D2Xhm1x/", category: "Facebook" },
  { id: 146, title: "Como hacer una FORMA PERSONALIZADA en PHOTOSHOP", url: "https://youtu.be/NE5glzuRLf8", category: "Photoshop" },
  { id: 147, title: "Facebook", url: "https://www.facebook.com/share/v/175aJQEqgN/", category: "Facebook" },
  { id: 148, title: "Facebook", url: "https://www.facebook.com/share/v/1AsmURBmR7/", category: "Facebook" },
  { id: 149, title: "Facebook", url: "https://www.facebook.com/share/v/1FWZwdPFVP/", category: "Facebook" },
  { id: 150, title: "Facebook", url: "https://www.facebook.com/share/v/1EyUffZQBb/", category: "Facebook" },
  
  { id: 151, title: "Facebook", url: "https://www.facebook.com/share/v/1XeuNuiAXy/", category: "Facebook" },
  { id: 152, title: "Facebook", url: "https://www.facebook.com/share/v/1D7psVKRyJ/", category: "Facebook" },
  { id: 153, title: "FacebookShare", url: "https://www.facebook.com/share/r/1F9k62TBPB/", category: "Facebook" },
  { id: 154, title: "FacebookShare", url: "https://www.facebook.com/share/r/15QdcC4nfn/", category: "Facebook" },
  { id: 155, title: "Facebook", url: "https://www.facebook.com/share/v/1CqhtDrzi1/", category: "Facebook" },
  { id: 156, title: "Facebook", url: "https://www.facebook.com/share/v/14MBG7EVnRJ/", category: "Facebook" },
  { id: 157, title: "Facebook", url: "https://www.facebook.com/share/v/1AMnxqXVc4/", category: "Facebook" },
  { id: 158, title: "Facebook", url: "https://www.facebook.com/share/v/1Cbr5vNyk1/", category: "Facebook" },
  { id: 159, title: "Facebook", url: "https://www.facebook.com/share/v/1FxRVbgcC9/", category: "Facebook" },
  { id: 160, title: "GitHub Portfolio Download", url: "https://github.com/luismtapia/portafolio/blob/master/DOWNLOAD.md", category: "Development" },
  { id: 161, title: "FacebookShare", url: "https://www.facebook.com/share/r/17GCAyZ75E/", category: "Facebook" },
  { id: 162, title: "Facebook", url: "https://www.facebook.com/share/v/1EKzrF3tbd/", category: "Facebook" },
  { id: 163, title: "Facebook", url: "https://www.facebook.com/share/v/14KQfS2q8yM/", category: "Facebook" },
  { id: 164, title: "Google Business", url: "https://posts.gle/CaUXquAAD3HuKKep8", category: "Web" },
  { id: 165, title: "Facebook", url: "https://www.facebook.com/share/p/17cys9GSPS/", category: "Facebook" },
  { id: 166, title: "Santander Open Academy LMS", url: "https://lms.santanderopenacademy.com/courses/171/modules", category: "Education" },
  { id: 167, title: "Facebook", url: "https://www.facebook.com/share/1Z8ZPBbq4z/", category: "Facebook" },
  { id: 168, title: "FacebookShare", url: "https://www.facebook.com/share/r/17Fy2RXTnw/", category: "Facebook" },
  { id: 169, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BGPHzCPTP/", category: "Facebook" },
  { id: 170, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BdzdGMbQN/", category: "Facebook" },
  { id: 171, title: "FacebookShare", url: "https://www.facebook.com/share/r/16RFKDFJTb/", category: "Facebook" },
  { id: 172, title: "GitHub Profile - twangodev", url: "https://github.com/twangodev", category: "Development" },
  { id: 173, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HdcT5VMFc/", category: "Facebook" },
  { id: 174, title: "FacebookShare", url: "https://www.facebook.com/share/r/17rQ6TNJLz/", category: "Facebook" },
  { id: 175, title: "FacebookShare", url: "https://www.facebook.com/share/r/16mvrW1uuc/", category: "Facebook" },
  { id: 176, title: "Facebook", url: "https://www.facebook.com/share/v/17P7F8BjYd/", category: "Facebook" },
  { id: 177, title: "FacebookShare", url: "https://www.facebook.com/share/r/1DM44E3DYf/", category: "Facebook" },
  { id: 178, title: "FacebookShare", url: "https://www.facebook.com/share/r/17LSMY2dEV/", category: "Facebook" },
  { id: 179, title: "Facebook", url: "https://www.facebook.com/share/v/17Q1kdxhvb/", category: "Facebook" },
  { id: 180, title: "Facebook", url: "https://www.facebook.com/share/v/1FS82JS2bw/", category: "Facebook" },
  { id: 181, title: "Facebook", url: "https://www.facebook.com/share/v/17WjEq3Lrr/", category: "Facebook" },
  { id: 182, title: "FacebookShare", url: "https://www.facebook.com/share/r/1JXLmQ1FTC/", category: "Facebook" },
  { id: 183, title: "FacebookShare", url: "https://www.facebook.com/share/r/197Qkn3MUY/", category: "Facebook" },
  { id: 184, title: "FacebookShare", url: "https://www.facebook.com/share/r/1KPwGgqiCQ/", category: "Facebook" },
  { id: 185, title: "FacebookShare", url: "https://www.facebook.com/share/r/19GMmCBnbr/", category: "Facebook" },
  { id: 186, title: "FacebookShare", url: "https://www.facebook.com/share/r/1F4DVguqNW/", category: "Facebook" },
  { id: 187, title: "FacebookShare", url: "https://www.facebook.com/share/r/1F7cLDtJnn/", category: "Facebook" },
  { id: 188, title: "FacebookShare", url: "https://www.facebook.com/share/r/17R6EjCekA/", category: "Facebook" },
  { id: 189, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HGYsoznsU/", category: "Facebook" },
  { id: 190, title: "FacebookShare", url: "https://www.facebook.com/share/r/1GuTxReokA/", category: "Facebook" },
  { id: 191, title: "FacebookShare", url: "https://www.facebook.com/share/r/1EUXCz5G9a/", category: "Facebook" },
  { id: 192, title: "Facebook", url: "https://www.facebook.com/share/v/14Q79s8UqLa/", category: "Facebook" },
  { id: 193, title: "Facebook", url: "https://www.facebook.com/share/v/16Lt7dQaZe/", category: "Facebook" },
  { id: 194, title: "FacebookShare", url: "https://www.facebook.com/share/r/1DVYDkinjG/", category: "Facebook" },
  { id: 195, title: "FacebookShare", url: "https://www.facebook.com/share/r/16iqcxjNgF/", category: "Facebook" },
  { id: 196, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BnFVuxkir/", category: "Facebook" },
  { id: 197, title: "Facebook", url: "https://www.facebook.com/share/p/1B1YBnQ6ux/", category: "Facebook" },
  { id: 198, title: "Facebook", url: "https://www.facebook.com/share/1AJqeNJ74u/", category: "Facebook" },
  { id: 199, title: "Facebook", url: "https://www.facebook.com/share/17roBAngMj/", category: "Facebook" },
  
  { id: 200, title: "Facebook", url: "https://www.facebook.com/share/v/17hK2QtM5W/", category: "Facebook" },
  { id: 201, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BSneGJu8w/", category: "Facebook" },
  { id: 202, title: "Facebook", url: "https://www.facebook.com/share/v/1ZLL6jGvAk/", category: "Facebook" },
  { id: 203, title: "FacebookShare", url: "https://www.facebook.com/share/r/16WN58CyxS/", category: "Facebook" },
  { id: 204, title: "FacebookShare", url: "https://www.facebook.com/share/r/14QnmtmYPH4/", category: "Facebook" },
  { id: 205, title: "FacebookShare", url: "https://www.facebook.com/share/r/16n3fGyPZz/", category: "Facebook" },
  { id: 206, title: "Facebook", url: "https://www.facebook.com/share/v/16Yj7K4sSx/", category: "Facebook" },
  { id: 207, title: "Facebook", url: "https://www.facebook.com/share/v/16wa4NDKgf/", category: "Facebook" },
  { id: 208, title: "FacebookShare", url: "https://www.facebook.com/share/r/1SF1J6P3Bm/", category: "Facebook" },
  { id: 209, title: "FacebookShare", url: "https://www.facebook.com/share/r/1C1JmwaB8D/", category: "Facebook" },
  { id: 210, title: "FacebookShare", url: "https://www.facebook.com/share/r/1G6PVubJB2/", category: "Facebook" },
  { id: 211, title: "FacebookShare", url: "https://www.facebook.com/share/r/1KoxMZrA8f/", category: "Facebook" },
  { id: 212, title: "FacebookShare", url: "https://www.facebook.com/share/r/1E86ZG8WZ9/", category: "Facebook" },
  { id: 213, title: "FacebookShare", url: "https://www.facebook.com/share/r/1bwh9GgC3h/", category: "Facebook" },
  { id: 214, title: "FacebookShare", url: "https://www.facebook.com/share/r/1D7EDEMtuP/", category: "Facebook" },
  { id: 215, title: "FacebookShare", url: "https://www.facebook.com/share/r/1EniLWnYRB/", category: "Facebook" },
  { id: 216, title: "FacebookShare", url: "https://www.facebook.com/share/r/1PTktfk2qs/", category: "Facebook" },
  { id: 217, title: "FacebookShare", url: "https://www.facebook.com/share/r/1Am6E2MkcZ/", category: "Facebook" },
  { id: 218, title: "FacebookShare", url: "https://www.facebook.com/share/r/17yPbu2P4d/", category: "Facebook" },
  { id: 219, title: "Facebook", url: "https://www.facebook.com/share/v/1EcEngiWEz/", category: "Facebook" },
  { id: 220, title: "FacebookShare", url: "https://www.facebook.com/share/r/1AALCLTT3b/", category: "Facebook" },
  { id: 221, title: "FacebookShare", url: "https://www.facebook.com/share/r/16jwotsyqW/", category: "Facebook" },
  { id: 222, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HPvT7guuP/", category: "Facebook" },
  { id: 223, title: "Facebook", url: "https://www.facebook.com/share/v/1D46xvxtuA/", category: "Facebook" },
  { id: 224, title: "FacebookShare", url: "https://www.facebook.com/share/r/16eMhGuV7G/", category: "Facebook" },
  { id: 225, title: "Facebook", url: "https://www.facebook.com/share/v/1HJ8btrEE2/", category: "Facebook" },
  { id: 226, title: "FacebookShare", url: "https://www.facebook.com/share/r/1C4XuGN4eR/", category: "Facebook" },
  { id: 227, title: "FacebookShare", url: "https://www.facebook.com/share/r/17iT1jz1BC/", category: "Facebook" },
  { id: 228, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BxsriRYMS/", category: "Facebook" },
  { id: 229, title: "Facebook", url: "https://www.facebook.com/share/v/1BGa4w46er/", category: "Facebook" },
  { id: 230, title: "Facebook", url: "https://www.facebook.com/share/v/17Tj8xGTQ8/", category: "Facebook" },
  { id: 231, title: "Facebook", url: "https://www.facebook.com/share/v/1WQsCgAoDy/", category: "Facebook" },
  { id: 232, title: "FacebookShare", url: "https://www.facebook.com/share/r/15TQR9hpDeK/", category: "Facebook" },
  { id: 233, title: "Facebook", url: "https://www.facebook.com/share/v/18Mq1fDheQ/", category: "Facebook" },
  { id: 234, title: "FacebookShare", url: "https://www.facebook.com/share/r/16iTS3rQx9/", category: "Facebook" },
  { id: 235, title: "Facebook", url: "https://www.facebook.com/share/v/1C3MBLw2a4/", category: "Facebook" },
  { id: 236, title: "FacebookShare", url: "https://www.facebook.com/share/r/1CD3Duvink/", category: "Facebook" },
  { id: 237, title: "FacebookShare", url: "https://www.facebook.com/share/r/1Ae4peVdh8/", category: "Facebook" },
  { id: 238, title: "FacebookShare", url: "https://www.facebook.com/share/r/1C9UWK4Za2/", category: "Facebook" },
  { id: 239, title: "FacebookShare", url: "https://www.facebook.com/share/r/14TB216VfqQ/", category: "Facebook" },
  { id: 240, title: "FacebookShare", url: "https://www.facebook.com/share/r/17uRDzwLsQ/", category: "Facebook" },
  { id: 241, title: "FacebookShare", url: "https://www.facebook.com/share/r/1C4BxmxcXj/", category: "Facebook" },
  { id: 242, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HfanpJVeq/", category: "Facebook" },
  { id: 243, title: "FacebookShare", url: "https://www.facebook.com/share/r/1C5mYixMbX/", category: "Facebook" },
  { id: 244, title: "FacebookShare", url: "https://www.facebook.com/share/r/1BNRdwYKnx/", category: "Facebook" },
  { id: 245, title: "Google Maps Redirect", url: "https://maps.app.goo.gl/KbsTTWEmBzp6hiMD8", category: "Facebook" },
  { id: 246, title: "FacebookShare", url: "https://www.facebook.com/share/r/16wQAqH6FP/", category: "Facebook" },
  { id: 247, title: "FacebookShare", url: "https://www.facebook.com/share/r/1EtUcmFUEW/", category: "Facebook" },
  { id: 248, title: "FacebookShare", url: "https://www.facebook.com/share/r/1AHbitQYJa/", category: "Facebook" },
  { id: 249, title: "FacebookShare", url: "https://www.facebook.com/share/r/1GSn1PrZ1X/", category: "Facebook" },
  { id: 250, title: "FacebookShare", url: "https://www.facebook.com/share/r/1HMUbrAQBk/", category: "Facebook" },
  
  { id: 251, title: "FacebookShare", url: "https://www.facebook.com/share/r/17ebRSV3Zs/", category: "Facebook" },
  { id: 252, title: "FacebookShare", url: "https://www.facebook.com/share/r/1Etjfo4Wmg/", category: "Facebook" },
  { id: 253, title: "FacebookShare", url: "https://www.facebook.com/share/r/15UagpUFoRF/", category: "Facebook" },
  { id: 254, title: "FacebookShare", url: "https://www.facebook.com/share/r/183sCZE6Az/", category: "Facebook" },
  { id: 255, title: "Facebook", url: "https://www.facebook.com/share/v/1B6wwE8Tuc/", category: "Facebook" },
  { id: 256, title: "FacebookShare", url: "https://www.facebook.com/share/r/1FVwzcrePb/", category: "Facebook" },
  { id: 257, title: "Facebook", url: "https://www.facebook.com/share/v/1XrdpbYMSb/", category: "Facebook" },
  { id: 258, title: "Google Shared Images", url: "https://share.google/images/NarE85wcH5KTXcYwr", category: "Facebook" },
  { id: 259, title: "Google Shared Images", url: "https://share.google/images/7zZyPq3TnxSQPK59i", category: "Facebook" },
  { id: 260, title: "FacebookShare", url: "https://www.facebook.com/share/r/1WWHkCiBL9/", category: "Facebook" },
  { id: 261, title: "FacebookShare", url: "https://www.facebook.com/share/r/1MiVnpAbTd/", category: "Facebook" },
  { id: 262, title: "FacebookShare", url: "https://www.facebook.com/share/r/176ieLabA5/", category: "Facebook" },
  { id: 263, title: "FacebookShare", url: "https://www.facebook.com/share/r/1ZJezcMvyS/", category: "Facebook" },
  { id: 264, title: "FacebookShare", url: "https://www.facebook.com/share/r/1T4T27W6Wr/", category: "Facebook" },
  { id: 265, title: "FacebookShare", url: "https://www.facebook.com/share/r/1DgVyGaQZE/", category: "Facebook" },
  { id: 266, title: "Facebook", url: "https://www.facebook.com/share/v/1BrNJcfD9S/", category: "Facebook" },
  { id: 267, title: "FacebookShare", url: "https://www.facebook.com/share/r/185p9VtTmD/", category: "Facebook" },
  { id: 268, title: "Facebook", url: "https://www.facebook.com/share/v/17A4fCuZ5H/", category: "Facebook" },
  { id: 269, title: "Facebook Share Link", url: "https://www.facebook.com/share/1B8bEdcD29/", category: "Facebook" },
  { id: 270, title: "FacebookShare", url: "https://www.facebook.com/share/r/1ByV2Tc5pa/", category: "Facebook" },
  { id: 271, title: "FacebookShare", url: "https://www.facebook.com/share/r/16j4B5PYkU/", category: "Facebook" },
  { id: 272, title: "FacebookShare", url: "https://www.facebook.com/share/r/1ZyS2xc8mm/", category: "Facebook" },
  { id: 273, title: "Facebook", url: "https://www.facebook.com/share/p/1C2snnNd1L/", category: "Facebook" },





  { id: 0, title: "", url: "", category: "Separador" },



  { id: 274, title: "Efecto Relampago", url: "https://www.facebook.com/share/r/1G1EmHVfTy/", category: "Facebook" },
  { id: 275, title: "Quitar fondo verde de un arbol", url: "https://www.facebook.com/share/r/19pSh9f7y4/", category: "Facebook" },
  { id: 276, title: "Ideas de photoshop", url: "https://www.facebook.com/share/r/1AsdThxW7z/", category: "Facebook" },





  { id: 277, title: "Tips de Branding y Estrategia", url: "https://www.facebook.com/share/r/17Smth1CDb/", category: "Branding" },
  { id: 278, title: "Texto a Voz: ElevenLabs Showcase", url: "https://www.facebook.com/share/v/1AbBa5KUTQ/", category: "IA & Voz" },
  { id: 279, title: "Tutorial: Curvas de Bézier en Figma", url: "https://www.facebook.com/share/18LuZSns8S/", category: "Figma" },
  { id: 280, title: "Animación de Logo Corporativo", url: "https://www.facebook.com/share/v/1aorWCNCq8/", category: "Motion Graphics" },
  { id: 281, title: "Inspiración de Landing Page", url: "https://www.facebook.com/share/r/17ncv7D1Wy/", category: "Diseño Web" },
  { id: 282, title: "Layout Web Minimalista", url: "https://www.facebook.com/share/r/1Dj6RF8Mye/", category: "Diseño Web" },
  { id: 283, title: "Creación de Formas: Corazón en Photoshop", url: "https://www.facebook.com/share/v/1DhuJNJbR4/", category: "Photoshop" },
  { id: 284, title: "Animación de Logotipos", url: "https://www.facebook.com/share/r/1AXRk7awJk/", category: "Motion Graphics" },
  { id: 285, title: "Efecto de Partículas Dinámicas", url: "https://www.facebook.com/share/r/1AWUP6Zi9B/", category: "Photoshop" },
  { id: 286, title: "Logo Motion Design", url: "https://www.facebook.com/share/r/1GJ5kjQu2R/", category: "Motion Graphics" },
  { id: 287, title: "Composición de Logos Animados", url: "https://www.facebook.com/share/r/17yBQuRbbF/", category: "Motion Graphics" },
  { id: 288, title: "Edición de Video Profesional", url: "https://www.facebook.com/share/r/1DUBiznx2h/", category: "Motion Graphics" },
  { id: 289, title: "Componentes Creativos en Figma", url: "https://www.facebook.com/share/r/1P5iuyWXLk/", category: "Figma" },
  { id: 290, title: "Efecto de Texto de Hielo", url: "https://www.facebook.com/share/r/1DG6xyfuQg/", category: "Photoshop" },
  { id: 291, title: "Microinteracciones: Animación de Botones", url: "https://www.facebook.com/share/r/181dG9TR2n/", category: "Figma" },
  { id: 292, title: "Inspiración: Arquitectura de Información Web", url: "https://www.facebook.com/share/r/183e2kfSXT/", category: "Diseño Web" },
  { id: 293, title: "Prototipado Avanzado en Figma", url: "https://www.facebook.com/share/r/18DGESCK15/", category: "Figma" },
  { id: 294, title: "Diseño de Interfaz E-commerce", url: "https://www.facebook.com/share/r/16s5Gadrr4/", category: "Diseño Web" },
  { id: 295, title: "Layout de Portafolio Creativo", url: "https://www.facebook.com/share/r/1BuPfg5niY/", category: "Diseño Web" },
  { id: 296, title: "Efecto de Sombra de Texto Avanzada", url: "https://www.facebook.com/share/v/1bRaASwhuf/", category: "Photoshop" },
  { id: 297, title: "Botón Animado Interactivo en figma", url: "https://www.facebook.com/share/r/1CzigQJ28q/", category: "figma" },
  { id: 299, title: "Kit de Recursos UI/UX", url: "https://www.facebook.com/share/1D4nvCNfWw/", category: "UI/UX" },
  { id: 300, title: "Estructura Web Eccommerce", url: "https://www.facebook.com/share/r/1CGUh62gBy/", category: "Diseño Web" },
  { id: 301, title: "Marketing: Diseño de Volantes Creativos", url: "https://www.facebook.com/share/r/184CgUBnB5/", category: "Marketing" },



  { id: 1, title: "Poster con gradiente en Photoshop", url: "https://www.facebook.com/share/r/17YPRtUQaq/", category: "Photoshop", subcategory: "Photoshop" },
  { id: 2, title: "Texto distorcionado", url: "https://www.facebook.com/share/r/1CDNSMzDyA/", category: "Photoshop" },
  { id: 3, title: "Mixer brush tool", url: "https://www.facebook.com/share/r/18QHzi5vbr/", category: "Photoshop" },
  { id: 4, title: "Invitación inspiración post design", url: "https://www.facebook.com/share/r/1CnJkdAoqn/", category: "Photoshop" },
  { id: 5, title: "Texto cortado sobre encimado", url: "https://www.facebook.com/share/r/1C7ViWJ1aH/", category: "Photoshop" },
  { id: 6, title: "Clipping mask Photoshop", url: "https://www.facebook.com/share/v/1Ks4aoHcZm/", category: "Photoshop" },
  { id: 7, title: "Imágenes geniales - recurso de imagen", url: "https://drive.google.com/drive/mobile/folders/1dUtaVhclqi2t6qa4kbuj5OxqpkWCCwGB?fbclid=IwdGRjcAPr3hdjbGNrA-vXa2V4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHuclL8sC6IRc3s3PPxlfkJcUhc1-e0EjZ4crInQhU_e9Ek5-j1Bz_rp4Molc_aem_g8LobhgrSzS1T8kj-iQ24A", category: "Recursos" },
  { id: 8, title: "Efecto de video trancision", url: "https://www.facebook.com/share/r/184qtpPi2k/", category: "Motion Graphics" },
  { id: 9, title: "Animación de logo", url: "https://www.facebook.com/share/r/17p1QZymn4/", category: "Motion Graphics" },
  { id: 10, title: "Solo inspiración", url: "https://www.facebook.com/share/v/19SqhmJH7n/", category: "Motion Graphics" },
  { id: 11, title: "Animación", url: "https://www.facebook.com/share/r/1AEtEeZP3G/", category: "Motion Graphics" },
  { id: 12, title: "Video profesional ideas de marketing", url: "https://www.facebook.com/share/r/1ZVY4PSpVM/", category: "Motion Graphics" },
  { id: 13, title: "Animación de logo", url: "https://www.facebook.com/share/r/16nNcgZqsq/", category: "Motion Graphics" },
  { id: 14, title: "Efectos de animación 2026", url: "https://www.facebook.com/share/r/1KVV2FzJKK/", category: "Motion Graphics" },
  { id: 15, title: "Idea video de marketing", url: "https://www.facebook.com/share/r/1CF8V4522v/", category: "Motion Graphics" },
  { id: 16, title: "Creación de videos con ia", url: "https://www.facebook.com/share/r/1DqeeH9qnN/", category: "Motion Graphics" },
  { id: 17, title: "Css background attachment", url: "https://www.facebook.com/share/r/1F7xifmjqv/", category: "Programación" },
  { id: 18, title: "Image masking css", url: "https://www.facebook.com/share/r/1D53CwgAgU/", category: "Programación" },
  { id: 19, title: "Template diseño web", url: "https://www.facebook.com/share/v/1KAaRc49ew/", category: "Programación" },
  { id: 20, title: "Diseño web", url: "https://www.facebook.com/share/r/1Br5L8HRSz/", category: "Programación" },
  { id: 21, title: "Inspiración diseño web", url: "https://www.facebook.com/share/r/14MDBKmtA7s/", category: "Programación" },
  { id: 22, title: "Hover scroll infinito", url: "https://www.facebook.com/share/r/1AchYTRogD/", category: "Programación" },
  { id: 23, title: "Colores y web y figma", url: "https://www.facebook.com/share/r/1AUqjcAwiq/", category: "Programación" },
  { id: 24, title: "Diseño web", url: "https://www.facebook.com/share/r/1VcGk6qgQA/", category: "Programación" },
  { id: 25, title: "Diseño web y figma", url: "https://www.facebook.com/share/r/1APTzqaZHo/", category: "Programación" },
  { id: 26, title: "Diseño web", url: "https://www.facebook.com/share/r/181Px6uv4f/", category: "Programación" }
];