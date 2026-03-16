const BASE_TABS = [
  { name: "Dashboard", icon: "Layout" },
  { name: "Links", icon: "LinkIcon" },
  { name: "Proyectos", icon: "Folder" },
  { name: "Tutoriales", icon: "PlayCircle" },
  { name: "Favoritos", icon: "Star" },
  { name: "Ejemplos", icon: "PlayCircle" },
];

const createTabs = (extraTabs = []) => [...BASE_TABS, ...extraTabs];

export const CATEGORY_NAV_CONFIG = {
  figma: {
    name: "golden",
    bg: "bg-golden",
    text: "text-golden",
    shadow: "shadow-golden",
    border: "border-golden/80",
    hover: "hover:bg-golden",
    hoverText: "hover:text-golden",
    hoverBorder: "hover:border-golden/40",
    focusRing: "focus:ring-golden/30",
    focusBorder: "focus:border-golden",
    groupHover: "group-hover:bg-golden",
    groupHoverText: "group-hover:text-golden",
    tabs: createTabs([{ name: "Plugins", icon: "Box" }]),
  },
  photoshop: {
    name: "photoshop",
    bg: "bg-photoshop",
    text: "text-photoshop",
    shadow: "shadow-photoshop",
    border: "border-photoshop/80",
    hover: "hover:bg-photoshop",
    hoverText: "hover:text-photoshop",
    hoverBorder: "hover:border-photoshop/40",
    focusRing: "focus:ring-photoshop/30",
    focusBorder: "focus:border-photoshop",
    groupHover: "group-hover:bg-photoshop",
    groupHoverText: "group-hover:text-photoshop",
    tabs: createTabs([{ name: "Recursos", icon: "PenTool" }]),
  },
  colores: {
    name: "colores",
    bg: "bg-colores",
    text: "text-colores",
    shadow: "shadow-colores/20",
    border: "border-colores/80",
    hover: "hover:bg-colores",
    hoverText: "hover:text-colores",
    hoverBorder: "hover:border-colores/40",
    focusRing: "focus:ring-colores/30",
    focusBorder: "focus:border-colores",
    groupHover: "group-hover:bg-colores",
    groupHoverText: "group-hover:text-colores",
    tabs: createTabs([
      { name: "Degradados", icon: "Layers" },
      { name: "Color Pair", icon: "Folder" },
      { name: "Paletas", icon: "Palette" },
      { name: "Generadores", icon: "Star" },
    ]),
  },
  fonts: {
    name: "fonts",
    bg: "bg-fonts",
    text: "text-fonts",
    shadow: "shadow-fonts/20",
    border: "border-fonts/80",
    hover: "hover:bg-fonts",
    hoverText: "hover:text-fonts",
    hoverBorder: "hover:border-fonts/40",
    focusRing: "focus:ring-fonts/30",
    focusBorder: "focus:border-fonts",
    groupHover: "group-hover:bg-fonts",
    groupHoverText: "group-hover:text-fonts",
    tabs: BASE_TABS.filter((t) =>
      ["Dashboard", "Links", "Proyectos", "Ejemplos"].includes(t.name),
    ),
  },
  web: {
    name: "web",
    bg: "bg-web",
    text: "text-web",
    shadow: "shadow-web/20",
    border: "border-web/80",
    hover: "hover:bg-web",
    hoverText: "hover:text-web",
    hoverBorder: "hover:border-web/40",
    focusRing: "focus:ring-web/30",
    focusBorder: "focus:border-web",
    groupHover: "group-hover:bg-web",
    groupHoverText: "group-hover:text-web",
    tabs: BASE_TABS,
  },
  imagenes: {
    name: "imagenes",
    bg: "bg-imagenes",
    text: "text-imagenes",
    shadow: "shadow-imagenes/20",
    border: "border-imagenes/80",
    hover: "hover:bg-imagenes",
    hoverText: "hover:text-imagenes",
    hoverBorder: "hover:border-imagenes/40",
    focusRing: "focus:ring-imagenes/30",
    focusBorder: "focus:border-imagenes",
    groupHover: "group-hover:bg-imagenes",
    groupHoverText: "group-hover:text-imagenes",
    tabs: BASE_TABS,
  },
  tutoriales: {
    name: "tutoriales",
    bg: "bg-tutoriales",
    text: "text-tutoriales",
    shadow: "shadow-tutoriales/20",
    border: "border-tutoriales/80",
    hover: "hover:bg-tutoriales",
    hoverText: "hover:text-tutoriales",
    hoverBorder: "hover:border-tutoriales/40",
    focusRing: "focus:ring-tutoriales/30",
    focusBorder: "focus:border-tutoriales",
    groupHover: "group-hover:bg-tutoriales",
    groupHoverText: "group-hover:text-tutoriales",
    tabs: [
      { name: "Dashboard", icon: "ImageIcon" },
      { name: "Links", icon: "LinkIcon" },
      { name: "Photoshop", icon: "LinkIcon" },
      { name: "Figma", icon: "Folder" },
      { name: "Programacion", icon: "Folder" },
      { name: "Ejemplos", icon: "Folder" },
      { name: "Extras", icon: "Folder" },
    ],
  },
  uiux: {
    name: "uiux",
    bg: "bg-golden",
    text: "text-golden",
    shadow: "shadow-golden/20",
    border: "border-golden/80",
    hover: "hover:bg-golden",
    hoverText: "hover:text-golden",
    hoverBorder: "hover:border-golden/40",
    focusRing: "focus:ring-golden/30",
    focusBorder: "focus:border-golden",
    groupHover: "group-hover:bg-golden",
    groupHoverText: "group-hover:text-golden",
    tabs: createTabs([
      { name: "Bancos", icon: "Image" },       // Para Pixabay, Unsplash, etc.
      { name: "Tips", icon: "Zap" },          // Para las reglas visuales (60-30-10, etc.)
      { name: "Inspiración", icon: "Eye" },   // Para Mobbin, Dribbble.
    ]),
  },
};

// export const getTheme = (config) => ({
//   colorName: config.name,
//   bg: config.bg,
//   text: config.text,
//   border: config.border,
//   shadow: config.shadow,

//   // Interacciones
//   hover: config.hover,
//   hoverText: config.hoverText,
//   hoverBorder: config.hoverBorder,

//   // Enfoque
//   focusRing: config.focusRing,
//   focusBorder: config.focusBorder,

//   // Grupo
//   groupHover: config.groupHover,
//   groupHoverText: config.groupHoverText,
// });

export const getTheme = (config) => {
  if (!config) return {};
  return {
    colorName: config.name,
    bg: config.bg,
    text: config.text,
    border: config.border,
    shadow: config.shadow,

    // Interacciones
    hover: config.hover,
    hoverText: config.hoverText,
    hoverBorder: config.hoverBorder,

    // Enfoque
    focusRing: config.focusRing,
    focusBorder: config.focusBorder,

    // Grupo
    groupHover: config.groupHover,
    groupHoverText: config.groupHoverText,
  };
};
