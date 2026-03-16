import { Check, Search } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importación de tu componente externo
import ColorCard2 from './ColorCard';
import SearchBar from '../SearchBar';

const colorPalettes = [
  {
    id: 1,
    name: "Earth Tones",
    colors: [
        { name: "Off White", hex: "#FAEFD8", cmyk: "0 | 4 | 14 | 2", pantone: "P 7-1C" },
        { name: "Bronze", hex: "#9F6637", cmyk: "0 | 36 | 65 | 38", pantone: "7573C" },
        { name: "Black", hex: "#1D1D1B", cmyk: "0 | 0 | 7 | 89", pantone: "419C" }
    ]
  },
  {
    id: 2,
    name: "Deep Forest",
    colors: [
        { name: "Sage", hex: "#B2AC88", cmyk: "20 | 10 | 40 | 25", pantone: "5845C" },
        { name: "Moss Green", hex: "#4A5D23", cmyk: "60 | 30 | 100 | 50", pantone: "574C" },
        { name: "Deep Charcoal", hex: "#2C312E", cmyk: "70 | 50 | 60 | 80", pantone: "447C" }
    ]
  },
  {
    id: 3,
    name: "Midnight Pastel",
    colors: [
      { name: "Soft Cream", hex: "#FDF5E6", cmyk: "0 | 2 | 10 | 1", pantone: "7527C" },
      { name: "Electric Violet", hex: "#7B61FF", cmyk: "65 | 70 | 0 | 0", pantone: "2725C" },
      { name: "Ink Blue", hex: "#0F172A", cmyk: "90 | 70 | 40 | 85", pantone: "296C" }
    ]
  },
  {
    id: 4,
    name: "Vintage Wine",
    colors: [
        { name: "Champagne Beige", hex: "#F2E5C6", cmyk: "5 | 8 | 22 | 0", pantone: "7527C" },
        { name: "Sand Gold", hex: "#F2D9A0", cmyk: "6 | 14 | 42 | 0", pantone: "468C"  },
        { name: "Deep Wine", hex: "#3B010B", cmyk: "45 | 95 | 70 | 65", pantone: "4975C"  }
    ],
    }
];

const ColorCard = ({ colorObj, index, allColors, onCopy, copiedHex }) => {
  let dynamicStyle = {};
  let textStyle = { color: allColors[0].hex };

  if (index === 0) {
    textStyle = { color: allColors[1].hex };
  } else if (index === 1) {
    dynamicStyle = { border: `2px solid ${allColors[0].hex}` };
    textStyle = { color: allColors[0].hex };
  } else if (index === 2) {
    textStyle = { color: allColors[0].hex };
  }

  const isCopied = copiedHex === colorObj.hex;

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      style={{ backgroundColor: colorObj.hex, ...dynamicStyle }}
      className="relative w-full p-4 rounded-[1rem] flex justify-between items-start transition-all cursor-pointer group mb-4 shadow-sm overflow-hidden"
      onClick={() => onCopy(colorObj.hex)}
    >
      <h3 style={textStyle} className="text-3xl font-serif italic opacity-90">
        {colorObj.name}
      </h3>

      <div style={textStyle} className="text-right flex flex-col gap-1 font-mono text-sm">
        <div className="flex items-center justify-end gap-2 font-bold">
          {isCopied ? <Check size={14} /> : colorObj.hex}
        </div>
        <div className="opacity-70 text-[10px] tracking-widest">{colorObj.cmyk}</div>
        <div className="opacity-70 text-[10px] tracking-widest uppercase">{colorObj.pantone}</div>
      </div>

      <AnimatePresence>
        {isCopied && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center backdrop-blur-[4px] bg-black/10"
          >
            <span style={textStyle} className="font-bold text-lg tracking-widest uppercase">
              Copiado
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ColorsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(null);

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  const filteredPalettes = colorPalettes.filter(palette =>
    palette.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const defaultColores = colorPalettes[0].colors;

  return (
    <div className="w-full min-h-screen py-12 px-4 bg-zinc-50 overflow-x-hidden">
      {/* BUSQUEDA */}
      <div className="max-w-8xl mx-auto mb-12 relative flex justify-center lg:justify-start">
        <SearchBar placeholder="Buscar Color" value={searchTerm} onSearch={setSearchTerm}  />
      </div> 

      {/* GRID DE PALETAS */}
      <motion.div 
        layout
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredPalettes.map((palette, pIdx) => {
            const sectionBg = palette.colors[1].hex;
            const thirdColor = palette.colors[2].hex; 
            
            return (
              <motion.div 
                key={palette.id} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.5, 
                  delay: pIdx * 0.1, 
                  ease: "easeOut" 
                }}
                style={{ backgroundColor: sectionBg }}
                className="flex flex-col p-4 rounded-[1rem] shadow-xl relative"
              >
                <h2 className="text-white/50 text-xs uppercase tracking-[0.3em] mb-8 ml-4 font-bold">
                  {palette.name}
                </h2>
                
                <div className="flex-1">
                  {palette.colors.map((color, idx) => (
                    <ColorCard
                      key={idx}
                      index={idx}
                      colorObj={color}
                      allColors={palette.colors}
                      onCopy={handleCopy}
                      copiedHex={copied}
                    />
                  ))}
                </div>

                {/* Barra de degradado */}
                <div
                  style={{
                    background: `linear-gradient(to right, ${palette.colors[0].hex}, ${palette.colors[1].hex})`
                  }}
                  className="w-full h-20 rounded-[1rem] mt-4 relative flex justify-between items-center px-8 shadow-inner"
                >
                  <div className="flex flex-col items-center gap-1">
                    <div 
                      className="w-3 h-3 rounded-full border border-black/40"
                    />
                    <span className="text-[9px] font-mono font-medium" style={{ color: thirdColor }}>
                      {palette.colors[0].hex}
                    </span>
                  </div>

                  <div 
                    className="h-[1px] flex-1 mx-4 opacity-30" 
                    style={{ backgroundColor: thirdColor }} 
                  />

                  <div className="flex flex-col items-center gap-1">
                    <div 
                      className="w-3 h-3 rounded-full border border-white/40"
                    />
                    <span className="text-[9px] font-mono font-medium" style={{ color: thirdColor }}>
                      {palette.colors[1].hex}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Componente Adicional */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto border-t border-zinc-200 pt-12"
      >
        <ColorCard2 
          paletteName="Luxury Bronze" 
          colors={defaultColores} 
          bgColor="#804012" 
        />
      </motion.div>
    </div>
  );
};

export default ColorsGrid;