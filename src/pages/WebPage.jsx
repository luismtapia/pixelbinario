import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, ExternalLink, ArrowLeft, Copy, Check, Terminal, Cpu, Globe, Search, Map, Palette, Layout } from 'lucide-react';

const ProgrammingPage = () => {
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const allResources = [
    { 
      id: "logo-diff", 
      type: "links", 
      title: "Logo Diffusion", 
      desc: "IA generativa para despliegue de marcas y vectores.", 
      link: "https://logodiffusion.com", 
      icon: <Globe size={20}/> 
    },
    { 
      id: "ray-so", 
      type: "links", 
      title: "Ray.so", 
      desc: "Genera capturas hermosas de tus snippets de código.", 
      link: "https://ray.so", 
      icon: <Terminal size={20}/> 
    },
    { 
        id: "map-cn", 
        type: "links", 
        title: "Mapcn", 
        desc: "Componentes de mapas interactivos y personalizables para tus proyectos web.", 
        link: "https://www.mapcn.dev/", 
        icon: <Map size={20}/> 
    },
    { 
        id: "stitch-google", 
        type: "links", 
        title: "Stitch", 
        desc: "Herramienta de Google para crear y experimentar con sombreadores (shaders) visuales.", 
        link: "https://stitch.withgoogle.com/", 
        icon: <Palette size={20}/> 
    },
    { 
        id: "css-grid-generator", 
        type: "links", 
        title: "CSS Grid Generator", 
        desc: "Generador visual para diseñar layouts complejos de CSS Grid de forma intuitiva.", 
        link: "https://cssgridgenerator.io/", 
        icon: <Layout size={20}/> 
    },
    {
      id: "glass-card",
      type: "snippets",
      title: "Glassmorphism Card",
      desc: "Efecto de cristal traslúcido moderno.",
      code: "background: rgba(255, 255, 255, 0.05);\nbackdrop-filter: blur(12px);\nborder: 1px solid rgba(255, 255, 255, 0.1);",
      preview: "bg-white/5 backdrop-blur-md border border-white/10"
    },
    {
      id: "neon-glow",
      type: "snippets",
      title: "Neon Border",
      desc: "Borde con resplandor animado.",
      code: "box-shadow: 0 0 10px #D4AF37, 0 0 20px #D4AF37;\nborder: 1px solid #D4AF37;",
      preview: "border border-golden shadow-[0_0_15px_rgba(212,175,55,0.5)]"
    },
    {
      id: "cyan-neon",
      type: "snippets",
      title: "Cyan Neon Glow",
      desc: "Efecto de resplandor intenso con sombras internas y externas.",
      code: "border: 3px solid cyan;\nbox-shadow: 0px 0px 15px cyan,\n0px 0px 15px cyan inset;",
      preview: "border-[3px] border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8),inset_0_0_15px_rgba(0,255,255,0.8)]"
    },
  ];

  // FILTRADO UNIFICADO
  const filtered = allResources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || res.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const linksResources = filtered.filter(r => r.type === 'links');
  const snippetsResources = filtered.filter(r => r.type === 'snippets');

  return (
    <div className="w-full min-h-screen bg-raisin text-white p-0 m-0 overflow-x-hidden">
      
      {/* HEADER Y BUSCADOR */}
      <div className="pt-12 px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-taupe hover:text-golden transition-colors font-anta uppercase text-xs tracking-widest w-fit"
        >
          <ArrowLeft size={16} /> Regresar
        </motion.button>

        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe group-focus-within:text-golden transition-colors" size={16} />
          <input
            type="text"
            placeholder="FILTRAR RECURSOS..."
            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-golden/50 font-anta text-xs tracking-widest text-golden placeholder:text-taupe/30"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="px-8 space-y-24 pb-32">
        
        {/* SELECTOR DE CATEGORÍAS */}
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {["all", "links", "snippets"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg font-anta text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                activeCategory === cat 
                ? "bg-golden text-raisin shadow-[0_0_20px_rgba(212,175,55,0.3)] border-golden" 
                : "bg-white/5 text-taupe border-white/5 hover:border-golden/40"
              }`}
            >
              {cat === "all" ? "Ver Todo" : cat}
            </button>
          ))}
        </div>

        {/* CONTENEDOR DE RESULTADOS ANIMADO */}
        <motion.div layout className="space-y-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchTerm} // Forzamos el re-renderizado limpio al cambiar filtro
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              
              {/* SECCIÓN HERRAMIENTAS */}
              {linksResources.length > 0 && (
                <div className="mb-24">
                  <div className="flex items-center gap-3 mb-10">
                    <Cpu className="text-golden" size={28} />
                    <h2 className="text-3xl font-gugi uppercase tracking-tighter">Herramientas Dev</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {linksResources.map((res) => (
                      <a 
                        key={res.id} href={res.link} target="_blank" rel="noreferrer"
                        className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-golden/40 transition-all group flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-4 bg-golden/10 rounded-xl text-golden">{res.icon}</div>
                          <div>
                            <h3 className="text-golden font-bold font-anta">{res.title}</h3>
                            <p className="text-taupe text-xs">{res.desc}</p>
                          </div>
                        </div>
                        <ExternalLink size={18} className="text-taupe group-hover:text-white transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* SECCIÓN SNIPPETS */}
              {snippetsResources.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <Code2 className="text-golden" size={28} />
                    <h2 className="text-3xl font-gugi uppercase tracking-tighter">CSS Snippets</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {snippetsResources.map((snip) => (
                      <div 
                        key={snip.id}
                        className="bg-zinc-900/60 border border-white/5 rounded-3xl overflow-hidden flex flex-col hover:border-golden/40 transition-all"
                      >
                        <div className="h-40 w-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] flex items-center justify-center p-8 border-b border-white/5">
                          <div className={`w-full h-full rounded-xl flex items-center justify-center font-anta text-xs uppercase tracking-widest ${snip.preview}`}>
                            Vista Previa
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h4 className="text-white font-bold font-anta uppercase">{snip.title}</h4>
                              <p className="text-taupe text-[11px]">{snip.desc}</p>
                            </div>
                            <button 
                              onClick={() => copyToClipboard(snip.code, snip.id)}
                              className="flex items-center gap-2 bg-golden/10 hover:bg-golden text-golden hover:text-raisin px-4 py-2 rounded-full text-[10px] font-bold transition-all"
                            >
                              {copiedId === snip.id ? <Check size={12}/> : <Copy size={12}/>}
                              {copiedId === snip.id ? "COPIADO" : "COPIAR"}
                            </button>
                          </div>
                          <pre className="text-[12px] font-mono bg-black/60 p-4 rounded-xl text-blue-300 border border-white/5 overflow-x-auto">
                            <code>{snip.code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EMPTY STATE */}
              {filtered.length === 0 && (
                <div className="text-center py-20 text-taupe font-anta text-sm tracking-widest">
                  SIN RESULTADOS PARA LA BÚSQUEDA
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingPage;