import React from 'react';
import { ArrowDownRight } from 'lucide-react'; // O cualquier librería de iconos

const FontCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-8">
      {/* Contenedor Principal con el efecto de muesca */}
      <div className="relative group">
        
        {/* Botón de flecha superior izquierda */}
        <div className="absolute -top-6 -left-2 bg-[#222] border-2 border-white/20 p-2 rounded-xl z-10">
          <ArrowDownRight className="text-white w-6 h-6" />
        </div>

        {/* Cuerpo principal del card */}
        <div className="bg-[#222] text-white w-[450px] h-[250px] rounded-3xl rounded-tl-none border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
          <h1 className="text-7xl font-serif tracking-tight">Qasira</h1>
          
          {/* Adorno visual: "Pestaña" inferior derecha */}
          <div className="absolute bottom-0 right-0 bg-[#222] border-t border-l border-white/20 px-6 py-2 rounded-tl-2xl">
            <span className="text-sm font-light text-gray-300">ifonts.xyz</span>
          </div>
        </div>

        {/* Efecto de redondeo invertido (Corner Radius Inset) */}
        {/* Esto es lo que hace que la unión se vea orgánica */}
        <div className="absolute top-0 left-12 w-6 h-6 bg-[#222] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:be-full before:rounded-tl-full before:bg-gray-200"></div>
      </div>

      {/* Texto inferior */}
      <div className="mt-12 text-center uppercase tracking-[0.3em]">
        <p className="text-xs font-bold text-gray-500">Font Name</p>
        <h2 className="text-5xl font-black text-[#333]">QASIRA</h2>
      </div>
    </div>
  );
};

export default FontCard;