// // este componente lo necesito para poder tener una lista de 3 colores como este ejemplo 
// // el degradado quiero



// import React, { useState } from 'react';
// import { Check, Clipboard } from 'lucide-react';

// const ColorCard = ({ name, hex, cmyk, pantone }) => {
//   const [copied, setCopied] = useState(false);

//   // Función para determinar si el texto debe ser negro o blanco según el fondo
//   const getContrastColor = (hexcolor) => {
//     const r = parseInt(hexcolor.substring(1, 3), 16);
//     const g = parseInt(hexcolor.substring(3, 5), 16);
//     const b = parseInt(hexcolor.substring(5, 7), 16);
//     const yiq = (r * 299 + g * 587 + b * 114) / 1000;
//     return yiq >= 128 ? 'text-zinc-900' : 'text-white';
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(hex);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const textColor = getContrastColor(hex);

//   return (
//     <div 
//       style={{ backgroundColor: hex }}
//       className={`relative w-full max-w-md p-8 rounded-[2rem] shadow-lg flex justify-between items-start transition-transform hover:scale-[1.02] cursor-pointer group mb-4`}
//       onClick={copyToClipboard}
//     >
//       {/* Nombre del Color (Estilo cursivo/manuscrito) */}
//       <h3 className={`${textColor} text-3xl font-serif italic opacity-90`}>
//         {name}
//       </h3>

//       {/* Información Técnica */}
//       <div className={`${textColor} text-right flex flex-col gap-1 font-mono text-sm`}>
//         <div className="flex items-center justify-end gap-2">
//           {copied ? <Check size={14} className="text-green-500" /> : <span className="opacity-70">{hex}</span>}
//         </div>
//         <div className="opacity-60 text-xs tracking-widest">
//           {cmyk}
//         </div>
//         <div className="opacity-60 text-xs tracking-widest uppercase">
//           {pantone}
//         </div>
//       </div>

//       {/* Feedback visual al copiar */}
//       {copied && (
//         <div className="absolute inset-0 bg-black/10 rounded-[2rem] flex items-center justify-center backdrop-blur-[2px]">
//           <span className={`${textColor} font-bold text-lg`}>COPIADO</span>
//         </div>
//       )}
//     </div>
//   );
// };

// // Ejemplo de implementación de la lista
// export const ColorShowcase = () => {
//   const brandColors = [
//     { name: "Off White", hex: "#FAEFD8", cmyk: "0 | 4 | 14 | 2", pantone: "P 7-1C" },
//     { name: "Bronze", hex: "#9F6637", cmyk: "0 | 36 | 65 | 38", pantone: "7573C" },
//     { name: "Black", hex: "#1D1D1B", cmyk: "0 | 0 | 7 | 89", pantone: "419C" },
//   ];

//   return (
//     <div className="p-10 bg-[#804012] min-h-screen flex flex-col items-center">
//       {brandColors.map((color, index) => (
//         <ColorCard key={index} {...color} />
//       ))}
      
//       {/* Sección especial para el degradado (como el pie de tu imagen) */}
//       <div className="w-full max-w-md mt-4 p-8 rounded-[2rem] bg-gradient-to-r from-[#D89C57] via-[#804012] to-[#794221] flex justify-between items-center border border-white/20">
//          <div className="w-4 h-4 rounded-full border border-white/50 bg-[#D89C57]"></div>
//          <div className="h-[1px] flex-1 bg-white/30 mx-2"></div>
//          <div className="w-4 h-4 rounded-full border border-white/50 bg-[#804012]"></div>
//          <div className="h-[1px] flex-1 bg-white/30 mx-2"></div>
//          <div className="w-4 h-4 rounded-full border border-white/50 bg-[#794221]"></div>
//       </div>
//     </div>
//   );
// };

// export default ColorShowcase;




import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ColorCard = ({ colorObj, index, allColors, isGradient = false }) => {
  const [copied, setCopied] = useState(false);
  
  // 1. El primer color (index 0) usa texto del segundo color (index 1).
  // 2. El segundo color (index 1) usa borde y texto del primer color (index 0).
  // 3. El tercer color (index 2) usa texto del primer color (index 0).
  
  let dynamicStyle = {};
  let textStyle = { color: allColors[0].hex }; // Por defecto usa el primer color

  if (index === 0) {
    textStyle = { color: allColors[1].hex };
  } else if (index === 1) {
    dynamicStyle = { border: `2px solid ${allColors[0].hex}` };
    textStyle = { color: allColors[0].hex };
  } else if (index === 2) {
    textStyle = { color: allColors[0].hex };
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorObj.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      style={{ backgroundColor: colorObj.hex, ...dynamicStyle }}
      className="relative w-full p-8 rounded-[2.5rem] flex justify-between items-start transition-all hover:scale-[1.01] cursor-pointer group mb-4"
      onClick={copyToClipboard}
    >
      <h3 style={textStyle} className="text-3xl font-serif italic opacity-90">
        {colorObj.name}
      </h3>

      <div style={textStyle} className="text-right flex flex-col gap-1 font-mono text-sm">
        <div className="flex items-center justify-end gap-2 font-bold">
          {copied ? <Check size={14} /> : colorObj.hex}
        </div>
        <div className="opacity-70 text-[10px] tracking-widest">{colorObj.cmyk}</div>
        <div className="opacity-70 text-[10px] tracking-widest uppercase">{colorObj.pantone}</div>
      </div>
    </div>
  );
};

export const PaletteSpecificGrid = ({ colors }) => {
  // El fondo general es el segundo color de la lista
  const backgroundColor = colors[1]?.hex || '#000';
  
  // El degradado solo usa el primero y el segundo color
  const gradientStyle = {
    background: `linear-gradient(to right, ${colors[0].hex}, ${colors[1].hex})`
  };

  return (
    <div 
      style={{ backgroundColor: backgroundColor }} 
      className="p-12 min-h-screen w-full flex flex-col items-center transition-colors duration-500"
    >
      <div className="w-full max-w-xl">
        {/* Render de los 3 colores principales */}
        {colors.map((color, index) => (
          <ColorCard 
            key={index} 
            colorObj={color} 
            index={index} 
            allColors={colors} 
          />
        ))}

        {/* Barra de degradado (Solo color 1 y color 2) */}
        <div 
          style={gradientStyle}
          className="w-full h-32 rounded-[2.5rem] mt-6 relative flex justify-around items-center px-12 shadow-2xl"
        >
          {/* Círculos indicadores del degradado */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-white/40" style={{ backgroundColor: colors[0].hex }} />
            <span className="text-[9px] font-mono text-white/60 tracking-tighter">{colors[0].hex}</span>
          </div>

          <div className="h-[1px] flex-1 bg-white/20 mx-4" />

          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-white/40" style={{ backgroundColor: colors[1].hex }} />
            <span className="text-[9px] font-mono text-white/60 tracking-tighter">{colors[1].hex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaletteSpecificGrid;