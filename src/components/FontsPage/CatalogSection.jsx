   // --- SUB-COMPONENTE: CATÁLOGO DE FUENTES ---

import { motion, AnimatePresence } from 'framer-motion';
import { Type, Download, Copy, Check, ExternalLink, Keyboard } from 'lucide-react';


const CatalogSection = ({ filteredFonts, previewText, setPreviewText, copyToClipboard, copiedId }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    id="fuentes"
  >
    <div className="flex items-center gap-3 mb-10">
      <Type className="text-golden" size={28} />
      <h2 className="text-3xl text-golden font-anta uppercase tracking-tighter">Catálogo de Fuentes</h2>
    </div>

    <div className="relative w-full xl:w-1/2 group mb-12">
      <div className="absolute -top-6 left-0 flex items-center gap-2 text-[10px] text-golden font-anta tracking-[0.2em] uppercase opacity-60">
        <Keyboard size={12} /> Simulador de texto en vivo
      </div>
      <input
        type="text"
        value={previewText}
        placeholder="ESCRIBE ALGO PARA PROBAR..."
        className="w-full bg-golden/5 border-b-2 border-golden/20 py-4 px-2 focus:outline-none focus:border-golden font-anta text-xl text-white transition-all"
        onChange={(e) => setPreviewText(e.target.value)}
      />
    </div>

    <div className="grid grid-cols-1 gap-6">
      <AnimatePresence mode="popLayout">
        {filteredFonts.map((font) => (
          <motion.div
            key={font.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-shadow border border-white/5 rounded-3xl overflow-hidden hover:border-golden/30 transition-all group"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 flex items-center justify-center bg-golden/20 border-b lg:border-b-0 lg:border-r border-white/5 min-h-[150px]">
                <span style={{ fontFamily: font.family }} className="text-4xl md:text-5xl lg:text-6xl text-center break-all">
                  {previewText || font.name}
                </span>
              </div>

              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-golden font-anta text-xl uppercase">{font.name}</h3>
                    <span className="text-[10px] bg-golden/10 text-golden px-2 py-1 rounded border border-golden/20 font-anta uppercase tracking-widest">
                      {font.category}
                    </span>
                  </div>
                  <p className="text-taupe text-sm mb-6">{font.desc}</p>
                </div>

                <div className="space-y-4">
                  <div className="relative group/code">
                    <pre className="text-[10px] font-mono bg-black/60 p-3 rounded-xl text-blue-300/80 border border-white/5 overflow-x-auto">
                      <code>{font.import}</code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(font.import, font.id)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-golden/10 hover:bg-golden text-golden hover:text-raisin rounded-lg transition-all"
                    >
                      {copiedId === font.id ? <Check size={14}/> : <Copy size={14}/>}
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <a href={font.downloadUrl} className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-anta text-[10px] tracking-widest transition-all flex items-center justify-center gap-2 uppercase group-hover:border-golden/20">
                      <Download size={14} className="text-golden" /> Descargar Pack
                    </a>
                    <a href={font.googleLink} target="_blank" rel="noreferrer" className="p-3 bg-golden/10 hover:bg-golden text-golden hover:text-raisin rounded-xl transition-all border border-golden/20">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {filteredFonts.length === 0 && (
        <div className="text-center py-20 text-taupe font-anta text-sm tracking-widest uppercase">
          No se encontraron tipografías
        </div>
      )}
    </div>
  </motion.section>
);

export default CatalogSection;