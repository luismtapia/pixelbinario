import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Link2Icon } from "lucide-react";
import GalleryHeader from "./GalleryHeader";
import IconRenderer from "../../utils/IconRenderer";

const LinksContent = ({ data, searchTerm, setSearchTerm, theme }) => {
  const { title, tabs } = data;
  const linksData = tabs.links;

  const { bg, text, hoverBg, border, hoverBorder, groupHoverText, groupHoverBg } = theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <GalleryHeader
        title={`${title} Resources`}
        desc="Recursos externos fundamentales y activos para optimizar tu flujo de diseño."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="space-y-12 mt-10">
        {Object.entries(linksData).map(([sectionName, links]) => {
          // Filtrado por búsqueda
          const filtered = links.filter(
            (link) =>
              link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              link.desc.toLowerCase().includes(searchTerm.toLowerCase()),
          );

          if (filtered.length === 0) return null;

          return (
            <section key={sectionName}>
              {/* Título de la sección (ej: assets) */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-texto/40 uppercase tracking-[0.2em] text-sm">
                  {sectionName}
                </h2>
                <div className="h-[1px] flex-1 bg-white/5"></div>
              </div>

              {/* Grid de Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 ${hoverBorder} transition-all`}
                  >
                    {/* Icono dinámico vía IconRenderer */}
                    <div className={`flex-shrink-0 w-12 h-12 ${hoverBg} rounded-xl flex items-center justify-center ${text} ${groupHoverBg} group-hover:text-raisin transition-all duration-300`}>
                      <IconRenderer iconName={link.icon} size={24} />
                    </div>

                    {/* Información */}
                    <div className="flex-1 pr-4">
                      <h3 className={`text-blanco font-bold text-lg mb-1 ${groupHoverText} transition-colors`}>
                        {link.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {link.desc}
                      </p>

                      {/* URL simplificada */}
                      <span className="text-[10px] text-gray-500 font-mono flex items-center gap-2">
                        <Link2Icon size={10} />
                        {link.url.replace("https://", "")}
                      </span>
                    </div>

                    {/* Flecha decorativa superior derecha */}
                    <div className={`absolute top-6 right-6 text-texto/10 ${groupHoverText} transition-colors`}>
                      <ExternalLink
                        size={18}
                        className={`text-texto/20 ${groupHoverText} transition-colors`}
                      />
                    </div>
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

export default LinksContent;
