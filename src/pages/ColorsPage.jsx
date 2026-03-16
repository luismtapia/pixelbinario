import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, 
  Star,
  Layout,
  Link as LinkIcon,
  Palette,
  Droplets,
  Grid,
  Zap,
  Sun,
  Moon,
  Copy,
  PlayCircle,
  Folder,
} from "lucide-react";


// ? DATOS
import { RESOURCES } from "../data/resources/index";
import { CATEGORY_NAV_CONFIG, getTheme } from "../data/categoryNav";

//!BORRAR
import { RESOURCES as RESOURCESTEMPORAL} from "../data/resourcesData";




// Todo: COMPONENTES
import CategoryNav from "../components/Resources/CategoryNav";
import DashboardContent from "../components/Resources/DashboardContent";
import PlaceholderContent from "../components/Resources/PlaceholderContent";
import GalleryHeader from "../components/Resources/GalleryHeader";
import ColorPairContent from "../components/Resources/ColorPairContent";

const navConfig = CATEGORY_NAV_CONFIG.colores;
const theme = getTheme(navConfig);



const ColorsLinksContent = ({ searchTerm, setSearchTerm, theme }) => {
  const linksData = RESOURCESTEMPORAL.colores?.tabs.links || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <GalleryHeader
        title="Color Directory"
        desc="Plataformas externas para masterizar la colorimetría."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(linksData).map(([category, links]) =>
          links
            .filter((l) => l.title.toLowerCase().includes(searchTerm))
            .map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden transition-all hover:bg-white/[0.05] hover:border-white/20"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${theme.bg} opacity-[0.03] blur-2xl group-hover:opacity-10 transition-opacity`}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-white/5 ${theme.text} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <LinkIcon size={24} />
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-gray-600 group-hover:text-white transition-colors"
                  />
                </div>

                <div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${theme.text} mb-1 block`}
                  >
                    {category}
                  </span>
                  <h4 className="text-white font-bold text-lg mb-1">
                    {link.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2 font-medium leading-relaxed">
                    {link.desc}
                  </p>
                </div>
              </motion.a>
            )),
        )}
      </div>
    </motion.div>
  );
};

const ColoresContent = ({ theme }) => {
  const paletas = RESOURCESTEMPORAL.colores?.tabs.paletas || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >

       <p>Color Pair</p>





      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paletas.map((paleta) => (
          <div
            key={paleta.id}
            className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-4 hover:border-white/20 transition-all"
          >
           
            {/* Visual de la Paleta */}
            <div className="flex h-40 w-full rounded-[1.8rem] overflow-hidden mb-5 shadow-2xl">
              {paleta.colors.map((hex, index) => (
                <motion.div
                  key={index}
                  whileHover={{ flex: 2 }}
                  className="flex-1 relative group/color cursor-pointer"
                  style={{ backgroundColor: hex }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <Copy size={16} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info de la Paleta */}
            <div className="px-2 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg">{paleta.title}</h3>
                <div className="flex gap-1.5 mt-2">
                  {paleta.colors.map((hex) => (
                    <span
                      key={hex}
                      className="text-[9px] font-mono text-gray-500 uppercase"
                    >
                      {hex}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className={`p-3 rounded-full bg-white/5 ${theme.text} hover:bg-white/10 transition-colors`}
              >
                <Star size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>


      


    </motion.div>
  );
};

const DegradadosContent = ({ searchTerm, setSearchTerm, theme }) => {
  const [copiedId, setCopiedId] = React.useState(null);
  const gradients = RESOURCESTEMPORAL.colores?.tabs.gradients || [];

  const filteredGradients = gradients.filter((grad) =>
    grad.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12 relative">
      {/* Toast Notification (Se mantiene igual) */}
      <AnimatePresence>
        {copiedId && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 px-6 py-3 bg-white text-raisin font-black rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20"
          >
            <div className={`p-1 rounded-full ${theme.bg}`}><Zap size={14} /></div>
            ¡Copiado al portapapeles!
          </motion.div>
        )}
      </AnimatePresence>

      <GalleryHeader
        title="Gradient Universe"
        desc="Librería de degradados CSS y efectos de malla para fondos modernos."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredGradients.length > 0 ? (
          filteredGradients.map((grad) => (
            <motion.div
              layout
              key={grad.id}
              className="relative group rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 p-6 transition-all hover:bg-white/10 hover:border-colores/50"
            >
              {/* Header: Titulo y Botones */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-2xl font-black text-blanco">{grad.title}</h3>

                <div className="flex gap-3">
                  {/* BOTÓN CSS CON TOOLTIP */}
                  <div className="relative group/tooltip">
                    <button 
                      onClick={() => copyToClipboard(grad.css, grad.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border backdrop-blur-md cursor-pointer active:scale-95 ${
                        copiedId === grad.id 
                        ? `${theme.bg} text-raisin border-transparent` 
                        : "bg-white/5 text-blanco border-blanco/5 hover:bg-colores/80"
                      }`}
                    >
                      {copiedId === grad.id ? <Zap size={14} className="animate-bounce" /> : <Copy size={14} />}
                      {copiedId === grad.id ? "COPIADO" : "CSS"}
                    </button>
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10 z-10">
                      Copiar código
                    </span>
                  </div>
                  
                  <button className={`p-2.5 rounded-2xl ${theme.bg} text-raisin hover:scale-110 transition-all shadow-lg`}>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              {/* Visualización del Degradado */}
              <div
                className="h-28 w-full rounded-[1.2rem] mb-6 shadow-xl transition-transform duration-700 group-hover:scale-[1.01]"
                style={{ background: grad.css }}
              />

              {/* Footer de la Card */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 justify-between w-full">
                  {grad.colors && grad.colors.map((color, index) => {
                    const isThisColorCopied = copiedId === `${grad.id}-${index}`;
                    
                    return (
                      <div key={index} className="relative group/colorBtn">
                        <button
                          onClick={() => copyToClipboard(color, `${grad.id}-${index}`)}
                          className={`flex items-center justify-center gap-2 p-1.5 pr-3 rounded-lg border transition-all cursor-pointer active:scale-95 shadow-sm ${
                            isThisColorCopied 
                              ? `${theme.bg} text-raisin border-transparent` 
                              : "bg-white/5 text-taupe border-white/5 hover:bg-colores/80 hover:text-white"
                          }`}
                        >
                          <div 
                            className={`w-5 h-5 rounded-md border ${isThisColorCopied ? 'border-black/20' : 'border-white/10'}`} 
                            style={{ backgroundColor: color }}
                          />
                          <span className={`text-[10px] font-anta uppercase tracking-widest ${isThisColorCopied ? 'font-bold' : ''}`}>
                            {isThisColorCopied ? "COPIADO" : color}
                          </span>
                          {isThisColorCopied && <Zap size={10} className="animate-bounce" />}
                        </button>

                        {/* Tooltip de color: Posicionado arriba para que no se corte */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover/colorBtn:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10 z-20">
                          {isThisColorCopied ? "¡Hecho!" : "Copiar hexadecimal"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Tipo de Gradiente: Una línea más abajo y alineado a la derecha */}
                <div className="flex justify-end">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme.text} opacity-80`}>
                    {grad.css.includes("radial") ? "Mesh / Radial" : "Linear Gradient"}
                  </span>
                </div>
              </div>

              {/* Efecto Glow de fondo */}
              <div 
                className="absolute -bottom-10 -left-10 w-40 h-40 opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500 pointer-events-none"
                style={{ background: grad.css }}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <p className="text-gray-500 font-medium">No hay degradados con ese nombre.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};






// --- SUB-COMPONENTE: RECURSOS DE COLOR ---
const ColorResourcesContent = ({
  searchTerm,
  setSearchTerm,
  theme,
  favorites,
  toggleFavorite,
}) => {
  const colorData = RESOURCESTEMPORAL.colores?.tabs.resources || {};

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <GalleryHeader
        title="Color Tools"
        desc="Selección de las mejores plataformas para crear armonías cromáticas."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />
      <div className="space-y-16">
        {Object.entries(colorData).map(([category, items]) => {
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
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((item) => (
                  <ColorResourceCard
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

// --- COMPONENTE PRINCIPAL ---
const ColorsResourcesGallery = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const currentData = RESOURCES.colores;

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
        return <DashboardContent key="dashboard"
            {...commonProps} setActiveTab={setActiveTab} />;
      case "Recursos":
        return (
          <ColorResourcesContent
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        );
      case "Paletas":
        return <ColoresContent  theme={theme} />;
         case "Color Pair":
        return <ColorPairContent  key="colorpaint" {...commonProps} />;
      case "Degradados":
        return <DegradadosContent searchTerm={searchTerm} setSearchTerm={setSearchTerm} theme={ theme} />;
      case "Links":
        return (
          <ColorsLinksContent
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        );
      case "Generadores":
        return (
          <ColorResourcesContent
            theme={theme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
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

// --- CARD ESPECÍFICA PARA COLORES ---
const ColorResourceCard = ({ item, theme, isFavorite, onFavoriteToggle }) => {
  const getIcon = () => {
    if (item.category?.includes("Generador")) return <Zap size={20} />;
    if (item.category?.includes("Gradientes")) return <Droplets size={20} />;
    return <Palette size={20} />;
  };

  return (
    <div className="relative group h-full">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block h-full bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/[0.08] transition-all flex items-center gap-4 shadow-sm hover:border-white/30`}
      >
        <div
          className={`flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center ${theme.text} group-hover:${theme.bg} group-hover:text-raisin transition-all`}
        >
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-blanco text-sm truncate group-hover:${theme.text} transition-colors uppercase`}
          >
            {item.title}
          </h3>
          <p className="text-[11px] text-taupe truncate">{item.desc}</p>
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

export default ColorsResourcesGallery;
