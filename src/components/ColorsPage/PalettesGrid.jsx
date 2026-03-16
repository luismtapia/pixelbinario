import { Clipboard, Check, Search, Eye, X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const palettes = [
  { name: "Pixel Main", colors: ["#f2cc0f", "#212121", "#bfb4b0", "#ffffff"] },
  { name: "Cyber Neon", colors: ["#00f2ff", "#001aff", "#7000ff", "#ff00d9"] },
  { name: "Earth Tech", colors: ["#2d4a22", "#5e8c47", "#a68b6d", "#d9c5b2"] },
  { name: "Off white", colors: ["#FAEFD8", "#F5F5F0", "#EBEBE4", "#DEDEd6"] }, // Expandida para el grid
  { name: "Deep Wine & Gold", colors: ["#F2E5C6", "#F2D9A0", "#75162D", "#3B010B"] },
  { name: "Bronze Luxury", colors: ["#FAEFD8", "#9F6637", "#1D1D1B", "#804012"] },
  { name: "Future UI (Blue)", colors: ["#E0E7FF", "#94A3B8", "#475569", "#0F172A"] },
  { name: "Future UI (Purple)", colors: ["#C7D2FE", "#818CF8", "#4338CA", "#1E1B4B"] }
];

const PalettesGrid = () => {
  const [copied, setCopied] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPalette, setSelectedPalette] = useState(null);

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(""), 2000);
  };

  // Función para calcular luminancia y determinar si el contraste es apto
  const getContrastYIQ = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    // Fórmula de luminancia (YIQ)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  const filteredPalettes = palettes.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mt-12 px-4 relative">
      {/* Buscador */}
      <div className="relative hidden lg:block py-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-shadow border border-zinc-200/20 text-xs text-white rounded-full pl-10 pr-4 py-1.5 w-48 focus:w-64 focus:outline-none focus:border-golden transition-all duration-500 font-anta"
          placeholder="Buscar paleta..."
        />
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-taupe" />
      </div>

      {/* Grid de Paletas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPalettes.map((palette, index) => (
          <div key={index} className="bg-shadow p-6 rounded-3xl border border-taupe/10 flex flex-col hover:border-taupe/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-anta text-xl text-golden tracking-widest uppercase">
                {palette.name}
              </h3>
              <button 
                onClick={() => setSelectedPalette(palette)}
                className="p-2 bg-white/5 rounded-full hover:bg-golden hover:text-black transition-colors text-taupe"
              >
                <Eye size={18} />
              </button>
            </div>
            
            <div className="flex h-32 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              {palette.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => copyToClipboard(color)}
                  className="flex-1 group/color relative transition-transform hover:z-10 hover:scale-105"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 bg-black/20 transition-opacity">
                    {copied === color ? <Check className="text-white" /> : <Clipboard className="text-white" size={18} />}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-between gap-1">
              {palette.colors.map((color) => (
                <span key={color} className="font-anta text-[9px] text-taupe uppercase">
                  {color}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE CONTRASTE Y ACCESIBILIDAD */}
      {selectedPalette && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0f0f0f] border border-white/10 w-full max-w-3xl rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-transparent to-white/5">
              <div>
                <h2 className="font-anta text-golden text-2xl uppercase tracking-tighter">
                  Análisis de Contraste
                </h2>
                <p className="text-tau text-xs font-anta opacity-60 uppercase">{selectedPalette.name}</p>
              </div>
              <button onClick={() => setSelectedPalette(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <X size={28} />
              </button>
            </div>
            
            <div className="p-8 grid grid-cols-1 gap-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {selectedPalette.colors.map((color, i) => {
                const bestText = getContrastYIQ(color);
                return (
                  <div 
                    key={i} 
                    className="rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10"
                    style={{ backgroundColor: color }}
                  >
                    <div className="flex-1">
                      <h4 className="font-anta text-xs uppercase mb-2 opacity-70" style={{ color: bestText }}>Previsualización</h4>
                      <p className="text-2xl font-bold leading-tight" style={{ color: bestText }}>
                        La legibilidad es la clave del diseño de alto impacto.
                      </p>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-2 min-w-[140px]">
                       <div className="flex items-center gap-2">
                          {bestText === 'white' ? <CheckCircle2 size={14} className="text-green-400"/> : <AlertCircle size={14} className="text-yellow-400"/>}
                          <span className="text-[10px] text-white uppercase font-anta">Texto Blanco: {bestText === 'white' ? 'Óptimo' : 'Bajo'}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          {bestText === 'black' ? <CheckCircle2 size={14} className="text-green-400"/> : <AlertCircle size={14} className="text-yellow-400"/>}
                          <span className="text-[10px] text-white uppercase font-anta">Texto Negro: {bestText === 'black' ? 'Óptimo' : 'Bajo'}</span>
                       </div>
                       <div className="mt-2 pt-2 border-t border-white/10 text-center">
                          <code className="text-[10px] text-white/80">{color}</code>
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="p-6 bg-white/5 flex justify-center">
              <button 
                onClick={() => setSelectedPalette(null)}
                className="font-anta text-xs text-golden border border-golden/30 px-8 py-2 rounded-full hover:bg-golden hover:text-black transition-all"
              >
                CERRAR PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PalettesGrid;