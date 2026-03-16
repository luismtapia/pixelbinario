import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Función de utilidad para calcular contraste (Luminancia relativa)
const getLuminance = (hex) => {
  const rgb = hex.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16) / 255);
  const [r, g, b] = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Función que elige el mejor color de texto de una lista proporcionada
const getBestContrast = (backgroundHex, colorOptions) => {
  const bgL = getLuminance(backgroundHex);
  let bestColor = colorOptions[0];
  let maxRatio = 0;

  colorOptions.forEach(color => {
    const colorL = getLuminance(color);
    const ratio = (Math.max(bgL, colorL) + 0.05) / (Math.min(bgL, colorL) + 0.05);
    if (ratio > maxRatio) {
      maxRatio = ratio;
      bestColor = color;
    }
  });
  return bestColor;
};

const ColorCard = ({ colorObj, allColors }) => {
  const [copied, setCopied] = useState(false);
  
  // Seleccionamos el color de texto que mejor contraste con el fondo de ESTA tarjeta
  const textColor = getBestContrast(colorObj.hex, allColors);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorObj.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      style={{ backgroundColor: colorObj.hex }}
      className="relative w-full p-8 rounded-[2rem] shadow-sm flex justify-between items-start transition-all hover:brightness-110 cursor-pointer group"
      onClick={copyToClipboard}
    >
      <h3 style={{ color: textColor }} className="text-3xl font-serif italic opacity-90">
        {colorObj.name}
      </h3>

      <div style={{ color: textColor }} className="text-right flex flex-col gap-1 font-mono text-sm">
        <div className="flex items-center justify-end gap-2 font-bold">
          {copied ? <Check size={14} /> : colorObj.hex}
        </div>
        <div className="opacity-70 text-[10px] tracking-[0.2em]">{colorObj.cmyk}</div>
        <div className="opacity-70 text-[10px] tracking-[0.2em] uppercase">{colorObj.pantone}</div>
      </div>
    </div>
  );
};

export const CustomPaletteSection = ({ paletteName, colors, bgColor = "#f5f5f5" }) => {
  // Extraemos solo los strings de hex para los cálculos de contraste y degradados
  const hexArray = colors.map(c => c.hex);
  
  return (
    <div style={{ backgroundColor: bgColor }} className="p-10 rounded-[3rem] w-full max-w-2xl mx-auto flex flex-col gap-4">
      <h2 className="font-mono text-[10px] tracking-[0.5em] uppercase opacity-40 mb-2 text-center">
        Color Palette: {paletteName}
      </h2>

      {/* Grid de Colores */}
      {colors.map((color, index) => (
        <ColorCard key={index} colorObj={color} allColors={hexArray} />
      ))}

      {/* Barra de Degradado Dinámica */}
      <div 
        className="w-full h-24 rounded-[2rem] mt-2 flex justify-between items-center px-8 border border-white/10"
        style={{ 
          background: `linear-gradient(to right, ${hexArray.join(', ')})` 
        }}
      >
        {hexArray.map((hex, i) => (
          <React.Fragment key={i}>
            <div className="w-4 h-4 rounded-full border-2 border-white/30 shadow-inner" style={{ backgroundColor: hex }} />
            {i < hexArray.length - 1 && <div className="h-[1px] flex-1 bg-white/20 mx-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CustomPaletteSection;