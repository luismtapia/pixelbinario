import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GalleryHeader from "./GalleryHeader";

const ProyectosContent = ({ data, theme, searchTerm, setSearchTerm }) => {
  // Extraemos la info de figmaData.tabs.projects
  const { title, tabs } = data;
  const projectsData = tabs.projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <GalleryHeader
        title={`Mis Proyectos en ${title}`}
        desc="Explora mi librería de sistemas de diseño, componentes reutilizables y prototipos de alta fidelidad."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="space-y-20">
        {Object.entries(projectsData).map(([sectionTitle, items]) => {
          const term = searchTerm.toLowerCase();
          const filtered = items.filter(
            (item) =>
              item.title.toLowerCase().includes(term) ||
              item.desc.toLowerCase().includes(term)
          );

          if (filtered.length === 0) return null;

          return (
            <section key={sectionTitle} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-bold text-blanco capitalize flex items-center gap-3">
                  <span className="w-1 h-8 bg-golden rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]"></span>
                  {sectionTitle}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-golden/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -8 }}
                    className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-golden/40 transition-all shadow-2xl"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image || "https://images.unsplash.com/photo-1613909209432-7b4886617572?q=80&w=400"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-raisin/90 via-raisin/20 to-transparent" />
                      <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-golden text-[10px] font-black uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blanco mb-3 group-hover:text-golden transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-5 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {item.tags?.filter(t => t !== "").map((tag) => (
                          <span key={tag} className="text-[9px] font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-golden/10 hover:bg-golden text-golden hover:text-raisin rounded-xl font-bold text-xs transition-all duration-300 border border-golden/20 hover:border-golden group/btn"
                      >
                        ABRIR EN {title.toUpperCase()}
                        <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProyectosContent;