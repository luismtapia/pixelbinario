import React from 'react';
import { Search, Heart, Plus } from 'lucide-react'; // Usaremos lucide-react para los iconos

const FloatingMenu = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center bg-white/70 backdrop-blur-md border border-white/20 py-4 px-3 rounded-[40px] shadow-2xl space-y-8">
      
      {/* Botón Buscar */}
      <button className="text-gray-700 hover:scale-110 transition-transform duration-200">
        <Search size={28} strokeWidth={1.5} />
      </button>

      {/* Botón Corazón */}
      <button className="text-black hover:scale-110 transition-transform duration-200">
        <Heart size={28} fill="black" />
      </button>

      {/* Botón Añadir */}
      <button className="relative flex items-center justify-center text-gray-700 hover:scale-110 transition-transform duration-200">
        {/* El círculo incompleto del icono en tu imagen */}
        <div className="absolute w-10 h-10 border-2 border-gray-400 rounded-full border-t-transparent -rotate-45"></div>
        <Plus size={24} />
      </button>
      
    </div>
  );
};

export default FloatingMenu;