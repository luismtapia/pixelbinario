import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Image as ImageIcon, ExternalLink, Sparkles, 
  Layers, Download, Star, Menu, X, Globe 
} from "lucide-react";
import BackButton from "../components/BackButton";
import { IMAGENES_RESOURCES, DESIGN_LINKS } from "../data/resourcesData";


// --- COMPONENTE DE CARTA (ESPECÍFICO PARA IMÁGENES) ---
const ImageResourceCard = ({ item, isFavorite, onToggleFavorite }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all shadow-xl"
  >
    <div className="p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-cyan-400/10 text-cyan-400 rounded-xl group-hover:bg-cyan-400 group-hover:text-black transition-colors">
          {item.icon ? React.cloneElement(item.icon, { size: 24 }) : <ImageIcon size={24} />}
        </div>
        <button 
          onClick={() => onToggleFavorite(item.id)}
          className={`p-2 rounded-lg transition-colors ${isFavorite ? 'text-cyan-400' : 'text-gray-600 hover:text-cyan-400'}`}
        >
          <Star size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-gray-400 line-clamp-2 mb-6">
        {item.desc}
      </p>

      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-cyan-400 text-white hover:text-black rounded-xl font-bold text-xs uppercase tracking-wider transition-all border border-white/10 hover:border-cyan-400"
      >
        Explorar Banco <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
);

// --- SECCIÓN DE LINKS DE IMÁGENES ---
const ImageLinksContent = ({ searchTerm }) => {
  // Aquí puedes filtrar links específicos de diseño que sean de categoría "Imágenes" o usar un nuevo objeto
  const imageLinks = DESIGN_LINKS["Herramientas"]?.filter(l => l.category === "Imágenes") || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {imageLinks.map(link => (
        <a key={link.id} href={link.url} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-400/10 transition-all">
          <div className="flex items-center gap-3">
             <Globe size={18} className="text-cyan-400" />
             <span className="text-white font-medium">{link.title}</span>
          </div>
          <ExternalLink size={16} className="text-gray-500" />
        </a>
      ))}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const ImagenesPage = () => {
  const [activeTab, setActiveTab] = useState("Bancos");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Bancos":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
            {Object.entries(IMAGENES_RESOURCES).map(([category, resources]) => {
              const filtered = resources.filter(r => r.title.toLowerCase().includes(searchTerm));
              if (filtered.length === 0) return null;
              return (
                <section key={category}>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{category}</h2>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filtered.map(res => (
                      <ImageResourceCard 
                        key={res.id} 
                        item={res} 
                        isFavorite={favorites.includes(res.id)} 
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </motion.div>
        );
      case "Links":
        return <ImageLinksContent searchTerm={searchTerm} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0a0a0c] min-h-screen text-white font-sans">
      <nav className="bg-[#0a0a0c]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5 h-16 flex items-center px-6 justify-between">
        <BackButton />
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
          {["dashboard", "Bancos", "Links", "Favoritos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase transition-all ${
                activeTab === tab ? "bg-cyan-400 text-black" : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black mb-4 tracking-tighter italic uppercase"
          >
            Visual <span className="text-cyan-400">Assets</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Bancos de imágenes, recursos IA y fotografía de alta calidad para tus proyectos.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar bancos de imágenes..." 
              className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-400 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </div>
        </header>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ImagenesPage;