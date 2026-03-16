import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Type, Download, Copy, Check, ExternalLink, Keyboard } from 'lucide-react';

import { links } from '../data/links.js';
import { fonts } from '../data/fonts.js';
import SearchBar from '../components/SearchBar.jsx';
import CatalogSection from '../components/FontsPage/CatalogSection.jsx';
import LinksSection from '../components/FontsPage/LinksSection.jsx';


// --- COMPONENTE PRINCIPAL ---
const FontsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("links"); // ESTADO PARA CONTROLAR EL NAV
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [previewText, setPreviewText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFonts = fonts.filter(font => 
    font.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    font.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recursosFuentes = links.filter(item => 
    item.categoria === "Fuentes" && 
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full min-h-screen bg-raisin text-white p-0 m-0 overflow-x-hidden font-anta">
      
      <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/5 bg-raisin/80">
        <div className="pt-4 pb-6 px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-taupe hover:text-golden transition-colors font-anta uppercase text-xs tracking-widest w-fit cursor-pointer"
          >
            <ArrowLeft size={16} /> Regresar
          </motion.button>

          <nav className="flex items-center gap-6 font-anta text-xs tracking-[0.2em] uppercase">
            <button 
              onClick={() => setActiveTab("links")}
              className={`transition-colors cursor-pointer ${activeTab === 'links' ? 'text-golden border-b border-golden/50 pb-1' : 'text-taupe hover:text-golden'}`}
            >
              Links
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full border transition-all ${
                activeTab === 'links' 
                ? 'bg-golden/20 border-golden/30 text-golden' 
                : 'bg-white/5 border-white/10 text-taupe group-hover:text-golden'
              }`}>
                {recursosFuentes.length}
              </span>
            </button>
            <span className="text-white/10">|</span>
            <button 
              onClick={() => setActiveTab("fuentes")}
              className={`transition-colors cursor-pointer ${activeTab === 'fuentes' ? 'text-golden border-b border-golden/50 pb-1' : 'text-taupe hover:text-golden'}`}
            >
              Fuentes
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full border transition-all ${
                activeTab === 'fuentes' 
                ? 'bg-golden/20 border-golden/30 text-golden' 
                : 'bg-white/5 border-white/10 text-taupe group-hover:text-golden'
              }`}>
                {filteredFonts.length}
              </span>
            </button>
          </nav>

          <div className="relative w-full md:w-80 group">
              <SearchBar placeholder="Buscar en recursos..." onSearch={setSearchTerm} />
          </div>
        </div>
      </header>

      

      <div className="px-8 pb-26 pt-12">
        <AnimatePresence mode="wait">
          {activeTab === "links" ? (
            <LinksSection key="links-tab" recursosFuentes={recursosFuentes} />
          ) : (
            <CatalogSection 
              key="catalog-tab"
              filteredFonts={filteredFonts}
              previewText={previewText}
              setPreviewText={setPreviewText}
              copyToClipboard={copyToClipboard}
              copiedId={copiedId}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FontsPage;