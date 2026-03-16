


import React from "react";
import { motion } from "framer-motion";
import GalleryHeader from "./GalleryHeader";
import IconRenderer from "../../utils/IconRenderer";



// --- COMPONENTES ATÓMICOS ---
//  es de plugins
const ResourceCard = ({ item, isFavorite, onFavoriteToggle }) => (
  <div className="relative group h-full">
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full bg-white/5 p-3 rounded-xl border border-white/10 hover:border-golden/40 hover:bg-white/[0.07] transition-all flex items-center gap-4 shadow cursor-pointer"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-raisin transition-colors">
        {/* USAMOS TU NUEVO COMPONENTE AQUÍ */}
        <IconRenderer iconName={item.icon} size={20} />
      </div>
      
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-blanco text-sm truncate group-hover:text-golden transition-colors">
            {item.title}
          </h3>
          <IconRenderer iconName="ExternalLink" size={14} className="text-golden opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs text-gray-500 truncate">{item.desc}</p>
      </div>
    </a>

    <button
      onClick={(e) => {
        e.preventDefault();
        onFavoriteToggle(item.id);
      }}
      className={`absolute bottom-2 right-2 p-1.5 rounded-lg transition-all ${
        isFavorite
          ? "text-golden"
          : "text-gray-600 opacity-0 group-hover:opacity-100 hover:text-golden"
      }`}
    >
      {/* También podemos usarlo para la estrella */}
      <IconRenderer 
        iconName="Star" 
        size={16} 
        className={isFavorite ? "fill-current" : ""} 
      />
    </button>
  </div>
);



const PluginsContent = ({ data, theme, searchTerm, setSearchTerm }) => {
  // 1. Extraemos los datos dinámicamente
  // data = FIGMA_DATA, por lo tanto tabs.plugins contiene: { Icons: [], Illustrations: [], ... }
  const { title, tabs } = data;
  const pluginsData = tabs.plugins;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Título dinámico basado en el Workspace actual */}
      <GalleryHeader
        title={`${title} Plugins`}
        desc={`Herramientas seleccionadas de ${title} para potenciar tu flujo de trabajo.`}
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="space-y-16">
        {/* 2. Iteramos sobre las categorías (Icons, Illustrations, etc.) */}
        {Object.entries(pluginsData).map(([category, plugins]) => {
          const term = searchTerm.toLowerCase();

          // 3. Filtramos los ítems según el buscador
          const filtered = plugins.filter(
            (p) =>
              p.title.toLowerCase().includes(term) ||
              p.desc.toLowerCase().includes(term)
          );

          // Si no hay resultados en esta categoría, no la mostramos
          if (filtered.length === 0) return null;

          return (
            <section key={category}>
              {/* Header de Categoría */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-blanco flex items-center gap-3">
                  <span className="w-1 h-8 bg-golden rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]"></span>
                  {category}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase bg-golden/10 border border-golden/20 text-golden">
                  {filtered.length} ítems
                </span>
              </div>

              {/* Grid de Plugins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((plugin) => (
                  <ResourceCard 
                    key={plugin.id} 
                    item={plugin} 
                    // Si tienes favoritos aquí, puedes pasar:
                    // isFavorite={favorites.includes(plugin.id)}
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

export default PluginsContent;