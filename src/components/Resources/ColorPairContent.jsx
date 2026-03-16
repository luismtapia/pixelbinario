// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Copy, Check } from "lucide-react";
// import GalleryHeader from "./GalleryHeader";

// const ColorPairCard = ({ item }) => {
//   const [copiedColor, setCopiedColor] = useState(null);

//   const copyToClipboard = (hex, type) => {
//     navigator.clipboard.writeText(hex);
//     setCopiedColor(type);
//     setTimeout(() => setCopiedColor(null), 2000);
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="relative group bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-4 h-[400px] flex flex-col transition-all hover:border-golden/40"
//     >
//       {/* Área de Visualización (Canvas de comparación) */}
//       <div
//         className="flex-1 rounded-2xl flex flex-col items-center justify-center gap-6 shadow-inner relative overflow-hidden"
//         style={{ backgroundColor: item.bg }}
//       >
//         {/* Título con el color de contraste */}
//         <h3
//           className="text-6xl font-black tracking-tighter transition-transform group-hover:scale-105 duration-500"
//           style={{ color: item.text }}
//         >
//           {item.title}
//         </h3>

//         {/* Contenedor de Selectores Hex */}
//         <div className="flex flex-col gap-2 w-full px-6">

//           {/* Botón para copiar el color de TEXTO */}
//           <button
//             onClick={() => copyToClipboard(item.text, 'text')}
//             className="flex items-center justify-between px-4 py-2.5 rounded-xl border backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95"
//             style={{
//               backgroundColor: `${item.text}20`,
//               borderColor: `${item.text}40`,
//               color: item.text
//             }}
//           >
//             <div className="flex items-center gap-3">
//               <span className="text-[10px] font-black uppercase opacity-60">Texto</span>
//               <span className="text-sm font-mono font-bold uppercase">{item.text}</span>
//             </div>
//             {copiedColor === 'text' ? <Check size={14} /> : <Copy size={14} className="opacity-40" />}
//           </button>

//           {/* Botón para copiar el color de FONDO */}
//           <button
//             onClick={() => copyToClipboard(item.bg, 'bg')}
//             className="flex items-center justify-between px-4 py-2.5 rounded-xl border backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95"
//             style={{
//               backgroundColor: `${item.text}10`, // Usamos el color de texto con opacidad para que sea visible sobre el fondo
//               borderColor: `${item.text}20`,
//               color: item.text
//             }}
//           >
//             <div className="flex items-center gap-3">
//               <span className="text-[10px] font-black uppercase opacity-60">Fondo</span>
//               <span className="text-sm font-mono font-bold uppercase">{item.bg}</span>
//             </div>
//             {copiedColor === 'bg' ? <Check size={14} /> : <Copy size={14} className="opacity-40" />}
//           </button>

//         </div>
//       </div>

//     </motion.div>
//   );
// };

// const ColorPairContent = ({ data, theme, searchTerm, setSearchTerm }) => {
//   // Asumiendo que en tu data tienes data.tabs.colorPairs
//   const colorPairsData = data.tabs.colorPairs || [];

//   const filteredPairs = colorPairsData.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.3 }}
//     >
//       <GalleryHeader
//         title="Color Pairings"
//         desc="Combinaciones de alto contraste curadas para interfaces modernas y legibilidad perfecta."
//         setSearchTerm={setSearchTerm}
//         theme={theme}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredPairs.map((pair, index) => (
//           <ColorPairCard key={index} item={pair} />
//         ))}
//       </div>

//       {filteredPairs.length === 0 && (
//         <div className="text-center py-20 text-gray-500 italic">
//           No se encontraron combinaciones que coincidan con tu búsqueda.
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default ColorPairContent;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import GalleryHeader from "./GalleryHeader";

// const ColorSection = ({ title, bg, text }) => {
//   const [copied, setCopied] = useState(false);

//   const copyToClipboard = (hex) => {
//     navigator.clipboard.writeText(hex);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div
//       className="relative flex-1 flex flex-col items-center justify-center p-4 transition-colors duration-300"
//       style={{ backgroundColor: bg }}
//     >
//       <h3 className="text-5xl font-bold mb-6" style={{ color: text }}>
//         {title}
//       </h3>

//       <div className="flex items-center gap-3">
//         {/* Capsula de Hexadecimal fiel a la imagen */}
//         <div
//           className="flex items-center gap-4 px-6 py-2.5 rounded-full border bg-transparent"
//           style={{ borderColor: `${text}40`, color: text }}
//         >
//           <span className="text-sm font-medium opacity-80">Hex</span>
//           <span className="opacity-40">→</span>
//           <span className="font-mono text-sm font-bold uppercase tracking-wider">
//             {bg}
//           </span>
//         </div>

//         {/* Botón de Copiar */}
//         <button
//           onClick={() => copyToClipboard(bg)}
//           className="p-3 rounded-full hover:scale-110 active:scale-95 transition-all"
//           style={{ backgroundColor: `${text}10`, color: text }}
//         >
//           {copied ? (
//             <Check size={18} />
//           ) : (
//             <Copy size={18} className="opacity-60" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// const ColorPairCard = ({ item }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       className="relative group bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden p-4 h-full flex flex-col transition-all hover:border-golden/40"
//     >
//       <div className="rounded-[1.5rem] overflow-hidden flex flex-col h-[300px] shadow-2xl">
//         {/* Sección Superior (Ej: Bora) */}
//         <ColorSection title={item.title1} bg={item.color1} text={item.color2} />

//         {/* Sección Inferior (Ej: Skyline) */}
//         <ColorSection title={item.title2} bg={item.color2} text={item.color1} />
//       </div>

//       {/* Footer de la tarjeta */}
//       <div className="pt-4 px-2 flex justify-between items-center">
//         <div>
//           <p className="text-[10px] font-black text-texto/40 uppercase tracking-[0.2em]">
//             Nombre
//           </p>
//           <p className="text-[9px] text-golden/60 font-medium italic">
//             AA / AAA Compliant
//           </p>
//         </div>

//         {/* Swatch de referencia */}
//         <div className="flex -space-x-2">
//           <div
//             className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] shadow-lg"
//             style={{ backgroundColor: item.color1 }}
//           ></div>
//           <div
//             className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] shadow-lg"
//             style={{ backgroundColor: item.color2 }}
//           ></div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


const ColorSection = ({ title, bg, text, index, showIndex }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative flex-1 flex flex-col items-center justify-center p-4 transition-colors duration-300"
      style={{ backgroundColor: bg }}
    >
      {/* Botón de copiar - Esquina Superior Izquierda */}
      <button
        onClick={() => copyToClipboard(bg)}
        className="absolute top-3 left-3 p-2 rounded-full hover:bg-black/5 transition-all active:scale-90"
        style={{ color: text }}
      >
        {copied ? <Check size={16} /> : <Copy size={16} className="opacity-40 hover:opacity-100" />}
      </button>

      {/* Número de índice - Solo se muestra si showIndex es true (solo en la primera mitad) */}
      {showIndex && (
        <span 
          className="absolute top-3 right-4 text-s font-bold opacity-80"
          style={{ color: text }}
        >
          {index}
        </span>
      )}

      <h3 className="text-4xl font-bold mb-4 tracking-tighter" style={{ color: text }}>
        {title}
      </h3>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center px-6 py-2 rounded-full border bg-transparent"
          style={{ borderColor: `${text}20`, color: text }}
        >
          <span className="font-mono text-[11px] font-black uppercase tracking-widest">
            {bg}
          </span>
        </div>
      </div>
    </div>
  );
};

const ColorPairCard = ({ item, index }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative group bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden p-4 h-full flex flex-col transition-all hover:border-golden/40"
    >
      <div className="rounded-[1.5rem] overflow-hidden flex flex-col h-[300px] shadow-2xl">
        {/* Sección Superior: con número (showIndex={true}) */}
        <ColorSection 
          title={item.title1} 
          bg={item.color1} 
          text={item.color2} 
          index={index + 1} 
          showIndex={true}
        />

        {/* Sección Inferior: sin número (showIndex={false}) */}
        <ColorSection 
          title={item.title2} 
          bg={item.color2} 
          text={item.color1} 
          showIndex={false}
        />
      </div>

      <div className="pt-4 px-2 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
            {item.title1} & {item.title2}
          </p>
          <p className="text-[9px] text-golden/60 font-medium italic">
            AA / AAA Compliant
          </p>
        </div>

        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] shadow-lg" style={{ backgroundColor: item.color1 }}></div>
          <div className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] shadow-lg" style={{ backgroundColor: item.color2 }}></div>
        </div>
      </div>
    </motion.div>
  );
};

const ColorPairContent = ({ data, theme, searchTerm, setSearchTerm }) => {
  const colorPairsData = data?.tabs?.colorPairs || [];

  const filteredPairs = colorPairsData.filter(
    (item) =>
      item.title1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.color1.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-12"
    >
      <GalleryHeader
        title="Color Pairings"
        desc="Explora combinaciones de contraste para fondos y tipografías."
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredPairs.map((pair, index) => (
          <ColorPairCard key={index} item={pair} index={index} />
        ))}
      </div>

      {filteredPairs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No se encontraron combinaciones.
        </div>
      )}
    </motion.div>
  );
};

export default ColorPairContent;
