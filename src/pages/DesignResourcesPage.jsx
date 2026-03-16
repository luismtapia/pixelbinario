import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Search, X, Menu, Star, Layout, 
  Link as LinkIcon, Palette, Play, Sparkles, Globe, Type 
} from "lucide-react";
import { TikTokEmbed } from "react-social-media-embed";
import BackButton from "../components/BackButton";
// Importamos los datos segmentados
import { DESIGN_RESOURCES, DESIGN_LINKS, TIKTOK_DESIGN } from "../data/resourcesData";

// --- SUB-COMPONENTE: RENDERIZADOR DE SECCIONES (IGUAL AL DE FIGMA) ---
const SegmentedGrid = ({ data, searchTerm, accentColor }) => {
  return (
    <div className="space-y-16">
      {Object.entries(data).map(([category, items]) => {
        const filtered = items.filter(item => 
          item.title.toLowerCase().includes(searchTerm) || 
          (item.desc && item.desc.toLowerCase().includes(searchTerm))
        );

        if (filtered.length === 0) return null;

        return (
          <section key={category}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className={`w-1 h-8 rounded-full shadow-[0_0_15px_rgba(167,139,250,0.4)]`} 
                      style={{ backgroundColor: accentColor }}></span>
                {category}
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase bg-white/5 border border-white/10 text-gray-400">
                {filtered.length} ítems
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((item) => (
                <ResourceCard key={item.id} item={item} accentColor={accentColor} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

// --- SUB-COMPONENTE: CARTA DE RECURSO ---
const ResourceCard = ({ item, accentColor }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/[0.07] transition-all flex items-center gap-4 shadow-xl"
    style={{ '--hover-border': accentColor }}
  >
    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-violet-400 group-hover:bg-violet-400 group-hover:text-black transition-all">
      {item.icon ? React.cloneElement(item.icon, { size: 24 }) : <Globe size={24} />}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-white text-sm truncate group-hover:text-violet-400 transition-colors">{item.title}</h3>
        <ExternalLink size={14} className="text-gray-500 group-hover:text-violet-400 transition-opacity" />
      </div>
      <p className="text-xs text-gray-500 truncate">{item.desc}</p>
    </div>
  </a>
);

// --- COMPONENTE PRINCIPAL ---
const DesignResourcesGallery = () => {
  const [activeTab, setActiveTab] = useState("Diseño");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Diseño", icon: Palette },
    { name: "Links", icon: LinkIcon },
    { name: "Tutoriales", icon: Play },
    { name: "Favoritos", icon: Star },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Diseño":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <GalleryHeader title="Design Resources" desc="Fundamentos, guías y activos visuales." setSearchTerm={setSearchTerm} />
            <SegmentedGrid data={DESIGN_RESOURCES} searchTerm={searchTerm} accentColor="#a78bfa" />
          </motion.div>
        );
      case "Links":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <GalleryHeader title="Useful Links" desc="Herramientas web imprescindibles para tu día a día." setSearchTerm={setSearchTerm} />
            <SegmentedGrid data={DESIGN_LINKS} searchTerm={searchTerm} accentColor="#a78bfa" />
          </motion.div>
        );
      case "Tutoriales":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TIKTOK_DESIGN.map((video) => (
              <div key={video.id} className="w-full max-w-[325px] bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 p-2 shadow-2xl mx-auto">
                <TikTokEmbed url={video.url} width={325} />
                <div className="p-4 flex items-center gap-3 font-bold text-sm">
                  <Sparkles size={16} className="text-violet-400" /> {video.title}
                </div>
              </div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0a0a0c] min-h-screen text-white font-sans">
      <nav className="bg-[#0a0a0c]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5 h-16 flex items-center px-6 justify-between">
        <BackButton />
        <div className="hidden md:flex gap-2 bg-white/5 p-1 rounded-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveTab(link.name)}
              className={`relative px-5 py-2 rounded-lg text-xs font-black uppercase tracking-tighter transition-all ${
                activeTab === link.name ? "text-black" : "text-gray-400 hover:text-violet-400"
              }`}
            >
              {activeTab === link.name && (
                <motion.div layoutId="designTab" className="absolute inset-0 bg-violet-400 rounded-lg" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <link.icon size={14} /> {link.name}
              </span>
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
};

const GalleryHeader = ({ title, desc, setSearchTerm }) => (
  <header className="mb-16 text-center">
    <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase italic">
      {title.split(' ')[0]} <span className="text-violet-400">{title.split(' ')[1]}</span>
    </h1>
    <p className="text-gray-500 mb-8">{desc}</p>
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-400" size={20} />
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-violet-400 outline-none transition-all"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </div>
  </header>
);

export default DesignResourcesGallery;