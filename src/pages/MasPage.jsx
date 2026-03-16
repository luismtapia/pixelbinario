import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  ExternalLink,
  ArrowLeft,
  Copy,
  Check,
  Terminal,
  Cpu,
  Globe,
  Search,
  Menu,
  X,
  LayoutDashboard,
  Bookmark,
} from "lucide-react";

const TutorialesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resources = [
    {
      id: "logodiff",
      category: "links",
      title: "Logo Diffusion",
      desc: "IA generativa para despliegue de marcas y vectores.",
      link: "https://logodiffusion.com",
      icon: <Globe size={20} />,
    },
    {
      id: "ray-so",
      category: "links",
      title: "Ray.so",
      desc: "Genera capturas hermosas de tus snippets de código.",
      link: "https://ray.so",
      icon: <Terminal size={20} />,
    },
    {
      id: "glass",
      category: "snippets",
      title: "Glass Card",
      desc: "Efecto de cristal traslúcido moderno.",
      code: "background: rgba(255, 255, 255, 0.05);\nbackdrop-filter: blur(12px);\nborder: 1px solid rgba(255, 255, 255, 0.1);",
      preview: "bg-white/5 backdrop-blur-md border border-white/10",
    },
  ];

  const filteredResources = resources.filter(
    (res) =>
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "all" || res.category === activeCategory),
  );

  return (
    <div className="w-full h-screen bg-raisin text-white flex overflow-hidden">
      

      {/* SIDEBAR */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed lg:relative inset-y-0 left-0 w-72 bg-black border-r border-golden/20 z-[120] flex flex-col overflow-hidden"
          >
            <div className="relative z-10 p-8 flex flex-col h-full bg-gradient-to-b from-black/50 to-transparent">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 bg-golden rounded-lg flex items-center justify-center text-raisin shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <Terminal size={24} />
                </div>
                <span className="font-gugi text-xl tracking-tighter text-golden">
                  DEV.HUB
                </span>
              </div>

              <nav className="space-y-4 flex-1">
                {[
                  { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
                  { icon: <Code2 size={20} />, label: "Snippets" },
                  { icon: <Bookmark size={20} />, label: "Favoritos" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10, color: "#D4AF37" }}
                    className="flex items-center gap-4 p-3 rounded-xl text-taupe/80 cursor-pointer transition-colors border border-transparent hover:border-golden/20 hover:bg-golden/5"
                  >
                    {item.icon}{" "}
                    <span className="font-anta text-sm uppercase tracking-widest">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </nav>

              <button
                onClick={() => navigate(-1)}
                className="mt-auto flex items-center gap-2 text-taupe hover:text-white transition-colors font-anta text-xs uppercase tracking-tighter"
              >
                <ArrowLeft size={16} /> Salir del Hub
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <header className="p-8 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-white/5 bg-raisin/50 backdrop-blur-xl sticky top-0 z-[100]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border border-golden/30 rounded-lg text-golden hover:bg-golden/10 transition-all"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h2 className="font-gugi text-xl uppercase tracking-widest text-white/50">
              Recursos
            </h2>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe group-focus-within:text-golden transition-colors"
              size={16}
            />
            <input
              type="text"
              placeholder="FILTRAR RECURSOS..."
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-golden/50 font-anta text-xs tracking-widest text-golden"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="p-8 lg:p-12 space-y-10">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["all", "links", "snippets"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg font-anta text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap ${activeCategory === cat ? "bg-golden text-raisin shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "bg-white/5 text-taupe border border-white/5"}`}
              >
                {cat === "all" ? "Ver Todo" : cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((res) => (
                <motion.div
                  layout
                  key={res.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-zinc-950 border border-white/5 p-1 rounded-3xl hover:border-golden/30 transition-all duration-500"
                >
                  <div className="bg-raisin/40 rounded-[22px] p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-zinc-900 rounded-xl text-golden shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]">
                            {res.icon}
                          </div>
                          <div>
                            <h4 className="font-anta text-lg uppercase tracking-tight text-white group-hover:text-golden transition-colors">
                              {res.title}
                            </h4>
                            <p className="text-taupe text-xs leading-relaxed">
                              {res.desc}
                            </p>
                          </div>
                        </div>
                        <a
                          href={res.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 hover:bg-white/5 rounded-full transition-colors"
                        >
                          <ExternalLink
                            size={16}
                            className="text-taupe/40 group-hover:text-white"
                          />
                        </a>
                      </div>

                      {res.code && (
                        <div className="mt-4 space-y-4">
                          <div
                            className={`h-28 rounded-xl ${res.preview} flex items-center justify-center text-[10px] uppercase tracking-[0.3em] opacity-60 border border-white/5`}
                          >
                            Preview
                          </div>
                          <pre className="text-[11px] bg-black/60 p-4 rounded-xl text-blue-300/80 font-mono border border-white/5 overflow-x-auto">
                            <code>{res.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>

                    {res.code && (
                      <button
                        onClick={() => copyToClipboard(res.code, res.id)}
                        className="mt-6 w-full py-3 bg-zinc-900 border border-white/5 rounded-xl font-anta text-[10px] tracking-[0.2em] hover:bg-golden hover:text-raisin transition-all flex items-center justify-center gap-2"
                      >
                        {copiedId === res.id ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                        {copiedId === res.id
                          ? "COPIADO CON ÉXITO"
                          : "COPIAR SNIPPET"}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TutorialesPage;
