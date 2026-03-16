import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layout,
  Play,
  BookOpen,
  Video,
  GraduationCap,
  PlayCircle,
  Sparkles,
  Camera,
  CheckCircle,
  Music2,
  Instagram,
  Facebook,
  LinkIcon,
} from "lucide-react";
import {
  TikTokEmbed,
  InstagramEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

// Componentes internos
import CategoryNav from "../components/Resources/CategoryNav";
import GalleryHeader from "../components/Resources/GalleryHeader";
import PlaceholderContent from "../components/Resources/PlaceholderContent";

// Data
import { CATEGORY_NAV_CONFIG, getTheme } from "../data/categoryNav";
import { RESOURCES, SOCIAL_SHOWCASE, SOCIAL_LINKS } from "../data/resourcesData";

const navConfig = CATEGORY_NAV_CONFIG.tutoriales;
const theme = getTheme(navConfig);

// --- 1. SUB-COMPONENTE: DASHBOARD ---
const TutorialsDashboard = ({ theme, setActiveTab }) => {
  const data = RESOURCES.tutoriales.tabs.dashboard;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <header className="mb-16 lg:mt-12 text-center">
        <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
          Learning <span className={theme.text}>Academy</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tu ruta personalizada para dominar el diseño, la edición y el arte
          digital.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <GraduationCap className={theme.text} size={24} />
          <p className="text-gray-500 text-sm font-bold uppercase mb-1">
            Cursos Disponibles
          </p>
          <h3 className={`text-4xl font-black ${theme.text}`}>
            {data.stats.totalCourses}
          </h3>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <CheckCircle className="text-green-500" size={24} />
          <p className="text-gray-500 text-sm font-bold uppercase mb-1">
            Progreso Total
          </p>
          <h3 className="text-4xl font-black text-blanco">
            {data.stats.completed}%
          </h3>
        </div>
        <button
          onClick={() => setActiveTab("TikTok")}
          className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all text-left"
        >
          <Video className={theme.text} size={24} />
          <p className="text-gray-500 text-sm font-bold uppercase mb-1">
            Contenido Rápido
          </p>
          <h3 className="text-2xl font-bold text-blanco">Tips Diarios</h3>
        </button>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 rounded-[2.5rem]">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div
            className={`w-24 h-24 rounded-3xl ${theme.bg} flex items-center justify-center`}
          >
            <BookOpen size={48} className="text-raisin" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-blanco mb-2">
              {data.featured.title}
            </h2>
            <p className="text-gray-400 max-w-lg italic">
              {data.featured.desc}
            </p>
          </div>
          <button
            onClick={() => setActiveTab("Biblioteca")}
            className={`px-8 py-4 ${theme.bg} text-raisin font-black rounded-2xl hover:scale-105 transition-all`}
          >
            VER CURSOS
          </button>
        </div>
      </div>

      {/* Sección de Links Minimalista */}
      <div className="space-y-4">
        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest px-2">
          Recursos Externos
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {RESOURCES.tutoriales.tabs.links.facebook.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <span className="text-blanco/80 group-hover:text-blanco font-medium transition-colors">
                  {link.title}
                </span>
              </div>
              <span className="text-[10px] text-gray-600 uppercase font-mono tracking-tighter">
                {link.category}
              </span>
            </a>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 gap-2">
        {SOCIAL_LINKS.map((item) => (
          <div key={item.id} className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-white/20 transition-all">
            
            <div className="flex flex-col">
              <div className="flex">
                <div className="px-3 bg-green">{item.id}</div>
                <div className="flex flex-col">
                  <span className="text-blanco text-sm font-medium">{item.title}</span>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    className="text-gray-500 text-xs truncate max-w-[250px] group-hover:text-blue-400"
                  >
                    {item.url}
                  </a>
                </div>
              </div>
              
            </div>
            <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 group-hover:bg-white/10">
              {item.category}
            </span>
          </div>
        ))}
      </div>



      <LinksContent theme={theme} categoryKey="Facebook" title="links" desc="links sin organizar" />

      
    </motion.div>
  );
};

// --- 2. SUB-COMPONENTE: SOCIAL SHOWCASE (Instagram, FB, TikTok) ---
const SocialShowcaseContent = ({ theme, categoryKey, title, desc }) => {
  const filteredData = SOCIAL_SHOWCASE.filter(
    (item) => item.category === categoryKey,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GalleryHeader
        title={title}
        desc={desc}
        theme={theme}
        hideSearch={true}
      />

      {filteredData.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-white/5 border border-white/10 p-3 rounded-[2.5rem] group hover:border-white/20 transition-all"
            >
              <div className="rounded-[2rem] overflow-hidden bg-black/40 min-h-[500px] flex items-center justify-center w-full">
                {item.type === "instagram" && (
                  <InstagramEmbed
                    url={item.url}
                    width="100%"
                    captioned={false}
                  />
                )}
                {item.type === "facebook" && (
                  <div className="w-full flex justify-center">
                    <FacebookEmbed url={item.url} width={325} />
                  </div>
                )}
                {item.type === "tiktok" && (
                  <TikTokEmbed url={item.url} width="100%" />
                )}
              </div>

              <div className="mt-4 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-white/5 ${theme.text}`}>
                    {item.kind === "video" ? (
                      <PlayCircle size={18} />
                    ) : (
                      <Camera size={18} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      {item.type === "instagram" && (
                        <Instagram size={12} className="text-pink-500" />
                      )}
                      {item.type === "facebook" && (
                        <Facebook size={12} className="text-blue-500" />
                      )}
                      {item.type === "tiktok" && (
                        <Music2 size={12} className="text-cyan-400" />
                      )}
                      <h4 className="text-white font-bold text-sm leading-none">
                        {item.title || "Tutorial"}
                      </h4>
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">
                      {item.type} {item.kind}
                    </p>
                  </div>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 italic">
            No hay contenido disponible para {categoryKey}.
          </p>
        </div>
      )}


      <LinksContent theme={theme} categoryKey={categoryKey} title={`${title} Links`} desc={desc} />




    </motion.div>
  );
};

// --- 3. SUB-COMPONENTE: BIBLIOTECA ---
const LibraryContent = ({ searchTerm, setSearchTerm, theme }) => {
  const libraryData = RESOURCES.tutoriales.tabs.biblioteca;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <GalleryHeader
        title="Knowledge Base"
        desc="Cursos completos y guías paso a paso."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />
      <div className="space-y-16">
        {Object.entries(libraryData).map(([category, items]) => {
          const filtered = items.filter(
            (i) =>
              i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              i.desc.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          if (filtered.length === 0) return null;

          return (
            <section key={category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-blanco flex items-center gap-3 italic uppercase">
                  <span className={`w-1 h-8 ${theme.bg} rounded-full`}></span>
                  {category}
                </h2>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((item) => (
                  <TutorialCard key={item.id} item={item} theme={theme} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

const TutorialCard = ({ item, theme }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white/5 border border-white/10 p-5 rounded-3xl hover:border-white/20 transition-all"
  >
    <div
      className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-white/5 ${theme.text} group-hover:${theme.bg} group-hover:text-raisin transition-all`}
    >
      <Play size={20} fill="currentColor" />
    </div>
    <h3 className="font-bold text-blanco mb-1 group-hover:text-white transition-colors">
      {item.title}
    </h3>
    <p className="text-xs text-gray-500 line-clamp-2">{item.desc}</p>
    <div className="mt-4 flex items-center justify-between">
      <span className="text-[10px] font-black uppercase text-gray-400">
        Tutorial
      </span>
      <ExternalLink
        size={14}
        className="text-gray-600 group-hover:text-white"
      />
    </div>
  </a>
);

const LinksContent = ({ theme, categoryKey, title, desc }) => {
  const filteredLinks = SOCIAL_LINKS.filter(
    (item) => item.category.toLowerCase() === categoryKey.toLowerCase()
  );

  const dynamicTitle = `${title} (${filteredLinks.length})`;

  // Configuración de las animaciones escalonadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Tiempo entre la entrada de cada hijo
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="space-y-10"
    >
      <GalleryHeader
        title={dynamicTitle}
        desc={desc}
        theme={theme}
        hideSearch={true}
      />

      <motion.div className="grid grid-cols-1 gap-3" variants={containerVariants}>
        {filteredLinks.length > 0 ? (
          filteredLinks.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants} // Cada item usa su propia variante de entrada
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/20 transition-all shadow-sm"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* ID Badge */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${theme.bg} flex items-center justify-center text-raisin font-black text-xs shadow-lg`}>
                  #{item.id}
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-blanco text-sm font-bold truncate group-hover:text-white transition-colors uppercase">
                    {item.title}
                  </span>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 text-[11px] truncate max-w-[200px] md:max-w-md hover:text-blue-400 flex items-center gap-1 transition-colors font-mono"
                  >
                    <LinkIcon size={10} />
                    {item.url}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`hidden md:block text-[9px] px-3 py-1 rounded-full border border-white/10 text-taupe group-hover:text-white transition-all uppercase tracking-widest font-black`}>
                  {item.category}
                </span>

                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-white/5 ${theme.text} opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hover:bg-white/10`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants} className="py-20 text-center border-2 border-dashed border-white/5 rounded-[2.5rem] bg-white/[0.01]">
            <p className="text-gray-500 font-medium font-anta italic">
              No se encontraron recursos registrados en "{categoryKey}"
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};




// --- 4. COMPONENTE PRINCIPAL ---
const TutorialesResourcesGallery = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <TutorialsDashboard theme={theme} setActiveTab={setActiveTab} />;
      case "Photoshop":
        return (
          <SocialShowcaseContent
            theme={theme}
            categoryKey="photoshop"
            title="Photoshop Hub"
            desc="Técnicas avanzadas y tutoriales de retoque digital."
          />
        );
      case "Figma":
        return (
          <SocialShowcaseContent
            theme={theme}
            categoryKey="figma"
            title="Figma Showcase"
            desc="Tips de UI/UX y flujos de trabajo en Figma."
          />
        );
      case "Extras":
        return (
          <LinksContent theme={theme} categoryKey="Ideas" title="Ideas Links" desc="Tips de UI/UX y flujos de trabajo en Figma." />
        );
      case "Ejemplos":
        return (
          <LinksContent theme={theme} categoryKey="ejemplos" title="ejemplos Links" desc="Ejemplos de " />
        );
      case "TikTok":
        return (
          <SocialShowcaseContent
            theme={theme}
            categoryKey="general" // O la categoría que uses para TikToks variados
            title="Quick Tips"
            desc="Trucos rápidos en formato vertical."
          />
        );

      case "Biblioteca":
        return (
          <LibraryContent
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        );

      default:
        return (
          <PlaceholderContent title={activeTab} icon={Layout} theme={theme} />
        );
    }
  };

  return (
    <div className="bg-raisin min-h-screen font-sans text-white">
      <CategoryNav
        navLinks={navConfig.tabs}
        categoryConfig={navConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="p-8 max-w-8xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}>{renderContent()}</motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default TutorialesResourcesGallery;
