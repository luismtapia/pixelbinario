import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  Layout,
  Link as LinkIcon,
  Play,
  PenTool,
  Folder,
  PlayCircle,
  Camera,
  Layers,
  ImageIcon,
  Instagram,
  Facebook,
} from "lucide-react";
import {
  TikTokEmbed,
  InstagramEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

// ? DATOS
import { RESOURCES } from "../data/resources/index";
import { CATEGORY_NAV_CONFIG, getTheme } from "../data/categoryNav";

import {
  RESOURCES as RESOURCESP,
  SOCIAL_SHOWCASE,
} from "../data/resourcesData";
// Shared Components
import CategoryNav from "../components/Resources/CategoryNav";
import DashboardContent from "../components/Resources/DashboardContent";
import PlaceholderContent from "../components/Resources/PlaceholderContent";

import GalleryHeader from "../components/Resources/GalleryHeader";
import LinksContent from "../components/Resources/LinksContent";
import EjemplosContent from "../components/Resources/ExamplesContent";

const navConfig = CATEGORY_NAV_CONFIG.photoshop;
const theme = getTheme(navConfig);

// --- SUB-COMPONENTE: DASHBOARD ---
const PhotoshopDashboard = ({ theme, setActiveTab }) => {
  const data = RESOURCESP.photoshop.tabs.dashboard;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <header className="mb-16 lg:mt-12 text-center">
        <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
          Photoshop <span className={theme.text}>Creative Hub</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Gestiona tus herramientas, proyectos y aprendizaje de retoque digital
          desde un solo lugar.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
            Recursos Totales
          </p>
          <h3 className={`text-4xl font-black ${theme.text}`}>
            {data.stats.totalResources}
          </h3>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
            Última Actualización
          </p>
          <h3 className="text-2xl font-bold text-blanco">
            {data.stats.lastUpdate}
          </h3>
        </div>
        <button
          onClick={() => setActiveTab("Tutoriales")}
          className={`bg-white/5 border border-white/10 p-6 rounded-3xl hover:${theme.border} transition-all group text-left`}
        >
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-white">
            Aprender Ahora
          </p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-blanco">Tutoriales</h3>
            <PlayCircle className={theme.text} />
          </div>
        </button>
      </div>

      {/* Featured Section */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 rounded-[2.5rem]`}
      >
        <div
          className={`absolute top-0 right-0 w-64 h-64 ${theme.bg} opacity-10 blur-[100px] -mr-20 -mt-20`}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div
            className={`w-24 h-24 rounded-3xl ${theme.bg} flex items-center justify-center shadow-2xl shadow-golden/20`}
          >
            <PenTool size={48} className="text-raisin" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span
              className={`inline-block px-3 py-1 rounded-full bg-white/10 ${theme.text} text-[10px] font-black uppercase mb-4`}
            >
              Destacado del mes
            </span>
            <h2 className="text-3xl font-bold text-blanco mb-2">
              {data.featured.title}
            </h2>
            <p className="text-gray-400 max-w-lg italic">
              "El estándar de oro para la edición fotográfica profesional y
              efectos creativos."
            </p>
          </div>
          <button
            onClick={() => setActiveTab("Plugins")}
            className={`px-8 py-4 ${theme.bg} text-raisin font-black rounded-2xl hover:scale-105 transition-transform`}
          >
            EXPLORAR PLUGINS
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- SUB-COMPONENTE: PLUGINS (ASSETS) ---
const PhotoshopAssetsContent = ({
  searchTerm,
  setSearchTerm,
  theme,
  favorites,
  toggleFavorite,
}) => {
  const photoshopData = RESOURCESP.photoshop.tabs.resources;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <GalleryHeader
        title="Photoshop Resources"
        desc="Extensiones y complementos para automatizar tareas complejas."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />
      <div className="space-y-16">
        {Object.entries(photoshopData).map(([category, items]) => {
          const filtered = items.filter(
            (p) =>
              p.title.toLowerCase().includes(searchTerm) ||
              p.desc.toLowerCase().includes(searchTerm),
          );
          if (filtered.length === 0) return null;

          return (
            <section key={category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-blanco flex items-center gap-3">
                  <span
                    className={`w-1 h-8 ${theme.bg} rounded-full shadow-lg`}
                  ></span>
                  {category}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                <span
                  className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase bg-white/5 border border-white/10 ${theme.text}`}
                >
                  {filtered.length} ítems
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((item) => (
                  <ResourceCard
                    key={item.id}
                    item={item}
                    theme={theme}
                    isFavorite={favorites.includes(item.id)}
                    onFavoriteToggle={toggleFavorite}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

// --- SUB-COMPONENTE: LINKS (CON ICONOS DE CATEGORÍA) ---
const PhotoshopLinksContent = ({ searchTerm, setSearchTerm, theme }) => {
  const linksData = RESOURCESP.photoshop.tabs.links;

  // Función para asignar un icono de Lucide según la categoría
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "inspiración":
        return <ImageIcon size={20} />;
      case "logos":
        return <PenTool size={20} />;
      case "tipografía":
        return <Layout size={20} />;
      case "color":
        return <div className={`w-3 h-3 rounded-full ${theme.bg}`} />;
      default:
        return <LinkIcon size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GalleryHeader
        title="Directorio de Links"
        desc="Recursos externos curados para tu flujo creativo."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="space-y-12">
        {Object.entries(linksData).map(([category, links]) => {
          const filtered = links.filter(
            (l) =>
              l.title.toLowerCase().includes(searchTerm) ||
              l.desc.toLowerCase().includes(searchTerm),
          );
          if (filtered.length === 0) return null;

          return (
            <section key={category}>
              <div className="flex items-center gap-4 mb-6">
                <h3
                  className={`text-xs font-black uppercase tracking-[0.3em] ${theme.text}`}
                >
                  {category}
                </h3>
                <div className="h-[1px] flex-1 bg-blanco/10 dark:bg-blanco/5"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`group flex items-center p-4 bg-blanco/[0.03] dark:bg-white/5 border border-blanco/10 dark:border-white/10 rounded-2xl hover:border-golden/50 transition-all`}
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-blanco/5 dark:bg-raisin flex items-center justify-center border border-blanco/5 dark:border-white/5 ${theme.text} group-hover:scale-110 transition-transform`}
                      >
                        {getCategoryIcon(category)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-blanco font-bold text-sm truncate">
                        {link.title}
                      </h4>
                      <p className="text-taupe text-[10px] uppercase font-medium">
                        {new URL(link.url).hostname.replace("www.", "")}
                      </p>
                    </div>
                    <ExternalLink
                      size={14}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${theme.text}`}
                    />
                  </motion.a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

// Pasamos 'categoryKey' para que el componente sepa si filtrar por "photoshop", "figma", etc.
const PhotoshopEjemplosContent = ({ theme, categoryKey = "photoshop" }) => {
  // 1. Filtramos la constante global por la categoría activa
  const filteredData = SOCIAL_SHOWCASE.filter(
    (item) => item.category === categoryKey,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
          Visual <span className={theme.text}>Showcase</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Proyectos destacados en {categoryKey} de mis redes sociales.
        </p>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto max-w-7xl">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-3 shadow-2xl transition-all hover:border-white/20 group"
          >
            {/* Indicador de Tipo de Contenido (Video o Imagen) */}
            <div className="absolute top-6 right-6 z-10 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20 text-white">
              {item.kind === "video" ? (
                <PlayCircle size={16} />
              ) : (
                <Camera size={16} />
              )}
            </div>

            {/* Renderizado Condicional por Plataforma */}
            <div className="rounded-[2rem] overflow-hidden bg-black/20 min-h-[300px] flex items-center justify-center">
              {item.type === "instagram" ? (
                <InstagramEmbed url={item.url} width="100%" captioned={false} />
              ) : (
                <FacebookEmbed url={item.url} width="100%" />
              )}
            </div>

            {/* Footer de la tarjeta con diferenciador de plataforma */}
            <div className="mt-4 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.type === "instagram" ? (
                  <Instagram size={18} className="text-pink-500" />
                ) : (
                  <Facebook size={18} className="text-blue-500" />
                )}
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${theme.text}`}
                >
                  {item.type} {item.kind}
                </span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// const PhotoshopEjemplosContent = ({ theme }) => {
//   const ejemplosData = RESOURCESP.photoshop.tabs.ejemplos || [];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       className="space-y-12"
//     >
//       <header className="mb-16 lg:mt-12 text-center">
//         <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
//           Visual <span className={theme.text}>Showcase</span>
//         </h1>
//         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//           Un vistazo a mis proyectos finales y composiciones creativas.
//         </p>
//       </header>

//       {/* Contenedor Masonry: columnas que se adaptan al alto de la imagen */}
//       <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto max-w-7xl">
//         {ejemplosData.map((post) => (
//           <div
//             key={post.id}
//             className="break-inside-avoid relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-3 shadow-2xl transition-all hover:border-white/20"
//           >
//             {/* Contenedor del Embed */}
//             <div className="rounded-[2rem] overflow-hidden bg-black/20">
//               <InstagramEmbed
//                 url={post.url}
//                 width="100%"
//                 captioned={false}
//               />
//             </div>

//             {/* Info y Link Footer */}
//             <div className="mt-4 px-4 py-2 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Camera size={14} className={theme.text} />
//                 <span className="text-xs font-bold text-blanco uppercase tracking-tighter">
//                   {post.title}
//                 </span>
//               </div>
//               <a
//                 href={post.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`p-2 rounded-full bg-white/5 ${theme.text} hover:scale-110 transition-transform`}
//               >
//                 <ExternalLink size={14} />
//               </a>
//             </div>

//             {/* Brillo decorativo sutil en la tarjeta */}
//             <div className={`absolute -inset-px rounded-[2.5rem] border-2 border-transparent group-hover:border-white/5 pointer-events-none transition-colors`} />
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// --- SUB-COMPONENTE: TUTORIALES TIKTOK ---

const TutorialesTikTokContent = ({ theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <header className="mb-16 lg:mt-12 text-center">
      <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
        Quick <span className={theme.text}>Tutorials</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
        Aprende trucos de Photoshop en segundos.
      </p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {SOCIAL_SHOWCASE.map((video) => (
        <div
          key={video.id}
          className="w-full max-w-[325px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 p-2 shadow-2xl transition-all hover:border-white/20"
        >
          <div className="flex justify-center">
            <TikTokEmbed url={video.url} width={325} />
          </div>
          <div className="p-4">
            <h3 className="text-blanco font-bold flex items-center gap-2">
              <Play size={14} className={theme.text} /> {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// --- COMPONENTE PRINCIPAL ---
const PhotoshopResourcesGallery = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const currentData = RESOURCES.photoshop;

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const renderContent = () => {
    const commonProps = {
      data: currentData,
      searchTerm,
      setSearchTerm,
      theme,
    };

    switch (activeTab) {
      case "Dashboard":
        return (
          <DashboardContent
            key="dashboard"
            {...commonProps}
            setActiveTab={setActiveTab}
          />
        );
      case "Links":
        return <LinksContent key="links" {...commonProps} />;
      case "Recursos":
        return (
          <PhotoshopAssetsContent
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        );

      case "Favoritos":
        return (
          <PhotoshopLinksContent
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        );
      case "Proyectos":
        return (
          <PlaceholderContent
            title="Mis Ediciones"
            icon={Folder}
            theme={theme}
          />
        );
      case "Ejemplos":
        return <EjemplosContent key="ejemplos" {...commonProps} />;
      // case "Ejemplos":
      //   return (
      //     <PhotoshopEjemplosContent
      //       title="Mis Ediciones"
      //       icon={Folder}
      //       theme={theme}
      //     />
      //   );
      case "Tutoriales":
        return <TutorialesTikTokContent theme={theme} />;
      default:
        return (
          <PlaceholderContent title={activeTab} icon={Layout} theme={theme} />
        );
    }
  };

  return (
    <div className="bg-raisin min-h-screen font-sans text-white">
      <CategoryNav
        page={navConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="p-8 max-w-8xl mx-auto">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </main>
    </div>
  );
};

// --- COMPONENTES ATÓMICOS REUTILIZABLES ---

const ResourceCard = ({ item, theme, isFavorite, onFavoriteToggle }) => {
  // Determinamos el icono por defecto basado en si es Pincel, Textura o Patrón
  const getIcon = () => {
    if (
      item.title.toLowerCase().includes("brush") ||
      item.category === "Pinceles"
    )
      return <PenTool size={20} />;
    if (item.category === "Texturas") return <Layers size={20} />;
    if (item.category === "Patrones") return <Layout size={20} />;
    return <Folder size={20} />;
  };

  return (
    <div className="relative group h-full">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block h-full bg-blanco/[0.03] dark:bg-white/5 p-4 rounded-2xl border border-blanco/10 dark:border-white/10 hover:bg-blanco/[0.05] dark:hover:bg-white/[0.07] transition-all flex items-center gap-4 shadow-sm hover:border-golden/40`}
      >
        <div
          className={`flex-shrink-0 w-12 h-12 bg-blanco/5 dark:bg-white/5 rounded-xl flex items-center justify-center ${theme.text} group-hover:${theme.bg} group-hover:text-raisin transition-all shadow-inner`}
        >
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-blanco text-sm truncate group-hover:${theme.text} transition-colors uppercase tracking-tight`}
          >
            {item.title}
          </h3>
          <p className="text-[11px] text-taupe truncate leading-relaxed">
            {item.desc}
          </p>
        </div>
      </a>
      <button
        onClick={() => onFavoriteToggle(item.id)}
        className={`absolute top-2 right-2 p-1.5 rounded-lg transition-all ${isFavorite ? theme.text : "text-taupe/40 opacity-0 group-hover:opacity-100"}`}
      >
        <Star size={14} fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </div>
  );
};

export default PhotoshopResourcesGallery;
