import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, PlayCircle, X } from "lucide-react";
import IconRenderer from "../../utils/IconRenderer";
import SwitchMode from "../../utils/IconRenderer";

import semitonoImg from "../../assets/semitono.webp";
import reactImg from "../SwitchMode";
import ButtonGo from "../ButtonGo";

// 1. Tus datos centralizados
const TUTORIAL_DATA = [
  {
    id: "semitono-01",
    title: "Efecto Semitono Pro",
    desc: "Domina la técnica de medios tonos para crear texturas visuales dinámicas en tus proyectos web usando filtros avanzados.",
    img: semitonoImg,
    url: "https://tu-link-al-tutorial.com",
    category: "Visual Effects",
  },
  {
    id: 1,
    title: "Efecto Semitono en React",
    desc: "Aprende a crear un filtro de semitono procedural usando shaders y CSS.",
    img: reactImg,
    url: "https://youtube.com/tu-link-al-tutorial",
    category: "Visual Design",
  },
  {
    id: 2,
    title: "Layouts con Framer Motion",
    desc: "Cómo animar transiciones de página de forma fluida y profesional.",
    img: "/pixelbinario/vite.svg", // Temporalmente usamos la misma porque /img/ no existe
    url: "https://tu-blog.com/tutorial-framer",
    category: "Desarrollo",
  },
];

const GalleryCard = ({ item, onSelect, theme }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="cursor-pointer group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-raisin"
      onClick={() => onSelect(item)}
    >
      {/* Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-golden/20 border-t-golden rounded-full animate-spin" />
        </div>
      )}

      <img
        src={item.img}
        alt={item.title}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded
            ? "opacity-60 group-hover:opacity-100 scale-100"
            : "opacity-0 scale-105"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex items-end">
        <div>
          <p
            className={`${theme.text} text-[10px] tracking-widest font-bold mb-1 uppercase`}
          >
            {item.category}
          </p>
          <h4 className="text-texto font-bold leading-tight group-hover:text-golden transition-colors">
            {item.title}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Verificar si el script de Instagram ya existe, si no, crearlo
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si ya existe, forzar el procesamiento del nuevo contenido
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center w-full bg-white rounded-xl overflow-hidden min-h-[450px]">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "1px",
          maxWidth: "540px",
          width: "99.375%",
        }}
      >
        {/* Este contenido se muestra mientras carga el widget */}
        <div className="p-8 text-center text-gray-400">
          Cargando publicación...
        </div>
      </blockquote>
    </div>
  );
};

const EjemplosContent = ({ data, theme }) => {
  const { title, tabs } = data;
  const ejemplosData = tabs.ejemplos;

  const {
    bg,
    text,
    hoverBg,
    border,
    hoverBorder,
    groupHoverText,
    groupHoverBg,
  } = theme;

  const [selectedExample, setSelectedExample] = React.useState(null);
  // const allExamples = Object.values(ejemplosData).flat();

  const sectionIcons = {
    posters: "Image",
    tecnicas: "Cpu",
    otro: "Layers",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <header className="mb-16 lg:mt-12 text-center">
        <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
          {title} <span className={text}>Playground</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Archivos prácticos y ejemplos interactivos para masterizar {title}{" "}
          paso a paso.
        </p>
        <SwitchMode />
        <ButtonGo />
      </header>

      {/* Renderizado por Secciones */}
      <div className="space-y-16">
        {/* Espaciado entre secciones */}
        {Object.entries(ejemplosData).map(([categoryName, items]) => {
          if (!items || items.length === 0) return null;

          return (
            <section key={categoryName} className="flex flex-col">
              {/* Título de la Subcategoría */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-texto capitalize flex items-center gap-3">
                  {categoryName}
                </h2>
                <div className="h-[1px] flex-1 bg-white/5"></div>
                <IconRenderer iconName={sectionIcons[categoryName]} className={text} />
              </div>

              {/* Grid de Cards por Sección */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    theme={theme}
                    onSelect={setSelectedExample}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal Detalle (Ajustado para local) */}
      <AnimatePresence>
        {selectedExample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedExample(null)}
          >
            <motion.div
              layoutId={selectedExample.id}
              className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LADO IZQUIERDO DEL MODAL */}
              <div className="md:w-1/2 bg-black/50 flex items-center justify-center relative overflow-hidden">
                <img
                  src={selectedExample.img}
                  className="w-full h-full object-cover"
                  alt="Preview Detalle"
                />
                {/* Overlay decorativo para el modal */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
              </div>

              {/* LADO DERECHO: INFO */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between bg-raisin">
                <div>
                  {/* Botón Cerrar y Tag */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-3 py-1 bg-golden/20 ${text} text-xs font-bold rounded-full`}>
                      TUTORIAL PASO A PASO
                    </span>
                    <button
                      onClick={() => setSelectedExample(null)}
                      className="text-gray-500 hover:text-texto text-2xl cursor-pointer"
                    >
                      <X size={32}/>
                    </button>
                  </div>

                  <h3 className="text-3xl font-bold text-texto mb-4">
                    {selectedExample.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {selectedExample.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={selectedExample.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-4 ${bg} hover:bg-yellow-500 text-raisin font-bold rounded-xl transition-all flex items-center justify-center gap-2`}
                  >
                    Ver Imagen en publicación
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

















      <div className="space-y-16">
        {Object.entries(ejemplosData).map(([category, items]) => {
          if (items.length === 0) return null;

          return (
            <section key={category}>
              {/* Título de subcategoría dentro de ejemplos */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-blanco capitalize flex items-center gap-3">
                  {category}
                </h2>
                <div className="h-[1px] flex-1 bg-white/5"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((example) => (
                  <div
                    key={example.id}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-1 overflow-hidden transition-all hover:border-golden/50"
                  >
                    <div className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                      {/* Lado Izquierdo: Icono dinámico */}
                      <div className="w-16 h-16 bg-golden/10 rounded-xl flex-shrink-0 flex items-center justify-center ${text} group-hover:bg-golden group-hover:text-raisin transition-all duration-300">
                        <IconRenderer iconName={example.icon} size={32} />
                      </div>

                      {/* Lado Derecho: Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-golden bg-golden/10 px-2 py-0.5 rounded">
                            {example.level}
                          </span>
                          <span className="text-[10px] text-gray-500 flex items-center gap-1">
                            <PlayCircle size={12} /> {example.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-blanco mb-2 group-hover:text-golden transition-colors">
                          {example.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {example.desc}
                        </p>

                        <div className="flex items-center gap-4">
                          <a
                            href={example.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-blanco flex items-center gap-2 group/link"
                          >
                            Explorar archivo
                            <ExternalLink
                              size={14}
                              className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                            />
                          </a>
                          <div className="h-4 w-[1px] bg-white/10" />
                          <button className="text-sm font-medium text-gray-500 hover:text-white transition-colors">
                            Recursos
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Efecto de luz */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-golden/0 via-golden/5 to-golden/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};

export default EjemplosContent;

// <AnimatePresence>
//   {selectedExample && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
//       onClick={() => setSelectedExample(null)}
//     >
//       <motion.div
//         layoutId={selectedExample.id}
//         className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* LADO IZQUIERDO: IMAGEN LOCAL */}
//         <div className="md:w-1/2 bg-black flex items-center justify-center">
//           <img
//             src={selectedExample.img}
//             className="w-full h-full object-cover"
//             alt="Preview"
//           />
//         </div>

//         {/* LADO DERECHO: INFO */}
//         <div className="md:w-1/2 p-8 flex flex-col justify-between bg-raisin">
//           <div>
//              {/* Botón Cerrar y Tag */}
//             <div className="flex justify-between items-start mb-6">
//               <span className="px-3 py-1 bg-golden/20 text-golden text-xs font-bold rounded-full">
//                 TUTORIAL PASO A PASO
//               </span>
//               <button onClick={() => setSelectedExample(null)} className="text-gray-500 hover:text-white text-2xl">×</button>
//             </div>

//             <h3 className="text-3xl font-bold text-white mb-4">{selectedExample.title}</h3>
//             <p className="text-gray-400 text-lg leading-relaxed mb-6">{selectedExample.desc}</p>
//           </div>

//           <div className="space-y-4">
//             <a
//               href={selectedExample.url}
//               target="_blank"
//               rel="noreferrer"
//               className="w-full py-4 bg-golden hover:bg-yellow-500 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
//             >
//               Ver Tutorial Completo
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
