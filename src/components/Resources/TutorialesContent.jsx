import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { ExternalLink, Link as LinkIcon } from "lucide-react";

import GalleryHeader from "./GalleryHeader";
import { RESOURCES } from '../../data/resources/index';

const TutorialesContent = ({ data, searchTerm, setSearchTerm }) => {
  const { title } = data; 

  const filteredLinks = RESOURCES.tutoriales.filter((link) => {
    // 2. Lógica de Tags: verificamos si el tag de la página actual existe en el array del link
    // Ejemplo: si title es "Figma", buscamos "figma" en [ "Front-end", "figma", "web" ]
    const matchesTag = link.tags.some(tag => tag.toLowerCase() === title.toLowerCase());
    
    // 3. Búsqueda por texto
    const matchesSearch = link.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTag && matchesSearch;
  });

  const getPlatformIcon = (url, size = 20) => {
    const link = url.toLowerCase();
    if (link.includes("youtube.com") || link.includes("youtu.be")) return <FaYoutube size={size} />;
    if (link.includes("facebook")) return <FaFacebook size={size} />;
    if (link.includes("instagram")) return <FaInstagram size={size} />;
    if (link.includes("tiktok")) return <FaTiktok size={size} />;
    return <LinkIcon size={size} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <GalleryHeader
        title={`${title} Tutoriales`}
        desc={`Accesos directos a documentación y tutoriales de la comunidad de ${title}.`}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-golden/40 transition-all overflow-hidden"
          >

            <div className="absolute bottom-0 right-0 z-20">
              <p className="text-[10px] text-gray-500 p-2 font-medium tracking-widest mt-auto flex items-center gap-2">
                  <ExternalLink size={10} />
                </p>
              {/* <div className="w-5 h-5 rounded-lg bg-white/5 flex items-center justify-center text-golden mb-4 group-hover:scale-110 transition-transform duration-500">
                <ExternalLink size={10} />
              </div> */}
            </div>

            <div className="flex justify-end">
              <span className="bg-golden/10 text-golden px-2 py-1 rounded-bl-xl group-hover:bg-golden group-hover:text-raisin transition-colors">
                # {link.id}
              </span>
            </div>
          

            <div className="relative px-6 py-2 z-10 flex flex-col h-full">
              

              <div className="flex flex-col flex-1">
                <h3 className="text-blanco font-bold text-base mb-3 group-hover:text-golden transition-colors leading-tight">
                  {link.title}
                </h3>
                <p className="text-[10px] text-gray-500 mb-3 font-medium tracking-widest mt-auto flex items-center gap-2">
                   {link.url.substring(0, 90)}
                </p>
              </div>
            </div>

            {/* --- ICONO DE FONDO ESTILO "FOLDER" --- */}
            <div className="absolute -bottom-4 -right-4 text-golden/5 group-hover:text-golden/10 transition-all duration-500 rotate-12 group-hover:rotate-[20deg] pointer-events-none">
               {/* Clonamos el icono pero con un tamaño mucho mayor (w-32/h-32 aprox) */}
               {getPlatformIcon(link.url, 120)}
            </div>

            {/* Efecto de barrido de luz */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-golden/0 via-golden/5 to-golden/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </motion.a>
        ))}
      </div>

      {filteredLinks.length === 0 && (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 text-sm">No se encontraron enlaces con ese nombre.</p>
        </div>
      )}
    </motion.div>
  );
};




export default TutorialesContent;