import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';

const GradientsGrid = () => {
  const [copiedText, setCopiedText] = useState("");

  const gradientsData = [
    { name: "Gold Classic", colors: ["#F6E073", "#C28F1A", "#F9E37A", "#B78C1A", "#F0D96C"] },
    { name: "Deep Gold", colors: ["#EAD779", "#BE922F", "#A9710F", "#F8E47B", "#CCA641"] },
    { name: "Silver Bright", colors: ["#B1B2B4", "#7A7B7F", "#F0F0F0", "#A7A8AC", "#EDEDED"] },
    { name: "Industrial Silver", colors: ["#C3C5C4", "#5D5E60", "#CDCED0", "#707173", "#DEDFE1"] },
    { name: "Bronze Soft", colors: ["#C4A588", "#895B40", "#EDCDB4", "#8B5D3B"] },
    { name: "Bronze Aged", colors: ["#AA7E63", "#F4D1B8", "#82543A", "#C9A992", "#9D7051"] },
    { name: "Rose Gold Luxury", colors: ["#DA8393", "#D26777", "#FEE1E3", "#DC7C88", "#F2B9C0"] },
    { name: "Rose Gold Soft", colors: ["#DC94A2", "#FDE3E2", "#E79192", "#222222"] },
    { name: "Emerald Crystal", colors: ["#95DFE5", "#5AA3A9", "#94E3E8", "#4D989D"] },
    { name: "Emerald Deep", colors: ["#439297", "#7CC3C9", "#40898F", "#8DEAE7", "#5AA5AA"] },
    { name: "Metallic Black Light", colors: ["#030303", "#434343", "#616161", "#494949", "#898989"] },
    { name: "Absolute Metallic Black", colors: ["#2E2E2E", "#626262", "#8B8B8B", "#414141", "#000000"] },
    { name: "Metallic Green Vivid", colors: ["#119F09", "#039600", "#1CE909", "#7FF56D", "#009800"] },
    { name: "Deep Forest Green", colors: ["#5FFC35", "#039C00", "#3EFF1F", "#009900", "#43FF27"] },
    { name: "Metallic Blue Sky", colors: ["#29364E", "#0CB6D7", "#8DD1E3", "#164E7E", "#21242B"] },
    { name: "Cyber Blue", colors: ["#242C3C", "#0B5F84", "#3CBDDC", "#75C9DB", "#0C8788"] },
    { name: "Metallic Red Pure", colors: ["#902E31", "#E6292C", "#EF9092", "#8C2D30"] },
    { name: "Burning Red", colors: ["#D8262C", "#F2A1A3", "#DD252B", "#922E31", "#B51313", "#732A2C"] },
    { name: "Metallic Orange", colors: ["#BE3901", "#FF9B15", "#FDC45B", "#E78524", "#CC4100"] },
    { name: "Sunset Metallic", colors: ["#B84A0B", "#FEA62B", "#FAD07E", "#DE6F13", "#F6861A", "#D05007"] },
  ];

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedText(color);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const copyFullGradient = (colors) => {
    const cssString = `background: linear-gradient(90deg, ${colors.join(', ')});`;
    navigator.clipboard.writeText(cssString);
    setCopiedText("CSS Gradient");
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 py-54">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        {/* <div>
          <h1 className="font-gugi text-5xl text-white mb-2 tracking-tighter">DEGRADADOS</h1>
          <p className="font-anta text-taupe max-w-xl">
            Colección de gradientes metálicos. Haz clic en un color para copiar su HEX o en el botón para el CSS completo.
          </p>
        </div> */}
        {copiedText && (
          <div className="px-4 py-2 bg-golden text-raisin font-anta font-bold rounded-full animate-bounce flex items-center gap-2">
            <Check size={16} /> ¡{copiedText} COPIADO!
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gradientsData.map((grad, idx) => (
          <div key={idx} className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 hover:border-golden/30 transition-all group">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-gugi text-xl text-white group-hover:text-golden transition-colors">
                {grad.name}
              </h3>
              <button 
                onClick={() => copyFullGradient(grad.colors)}
                className="p-2 text-taupe hover:text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-2 text-xs font-anta"
                title="Copiar código CSS"
              >
                <Copy size={14} /> CSS
              </button>
            </div>

            {/* Visualización del Degradado */}
            <div 
              className="h-24 w-full rounded-2xl mb-6 shadow-xl border border-white/10"
              style={{ background: `linear-gradient(90deg, ${grad.colors.join(', ')})` }}
            />

            {/* Muestras de colores individuales */}
            <div className="flex flex-wrap gap-3">
              {grad.colors.map((color, cIdx) => (
                <button
                  key={cIdx}
                  onClick={() => handleCopy(color)}
                  className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700 p-1.5 pr-3 rounded-xl border border-white/5 transition-all active:scale-95"
                >
                  <div 
                    className="w-6 h-6 rounded-lg border border-white/10" 
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[10px] font-anta text-taupe uppercase tracking-widest">{color}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientsGrid;