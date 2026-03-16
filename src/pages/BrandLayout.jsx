import React from 'react';
import TestColors from '../utils/TestColors';

const BrandLayout = ({ 
  brandName = "Nombre de Marca", 
  logoUrl = "https://via.placeholder.com/150", 
  colors = ["#13361c", "#826343", "#cc9a48", "#dfdfdf"] 
}) => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
      <h2>{brandName}</h2>
      {/* Header: Layout Presentación (Blanco, Negro, Color de Logo) */}
      <div className="grid grid-cols-3 gap-4 mb-8 h-48">
        <div className="bg-white border rounded-lg flex items-center justify-center shadow-sm">
          <span className="text-sm font-semibold tracking-widest uppercase">Blanco</span>
        </div>
        <div className="bg-black border rounded-lg flex items-center justify-center shadow-sm">
          <span className="text-sm font-semibold tracking-widest uppercase text-white">Negro</span>
        </div>
        <div className="bg-[#cc9a48] border rounded-lg flex items-center justify-center shadow-sm">
          <span className="text-sm font-semibold tracking-widest uppercase text-white">Color de Logo</span>
        </div>
      </div>

      {/* Sección: Portada (Hero Section) */}
      <div className="w-full bg-slate-200 h-64 rounded-xl mb-8 flex items-center justify-center overflow-hidden relative shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <h1 className="text-4xl font-light tracking-tighter z-10 uppercase italic">Portada / Hero</h1>
      </div>

      {/* Sección: Logo y Tarjeta de Presentación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Espacio para el Logo circular del boceto */}
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-xl border border-dashed border-gray-300">
          <div className="w-40 h-40 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center mb-4 overflow-hidden">
            <img src={logoUrl} alt="Logo" className="w-24 h-24 object-contain opacity-50" />
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Logo Principal</span>
        </div>

        {/* Tarjeta de Presentación */}
        <div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b pb-2">Tarjeta de Presentación</h2>
          <div className="relative w-full h-40 bg-gray-50 rounded-lg border flex items-center justify-center group">
            <div className="w-48 h-28 bg-white shadow-xl rounded border transform -rotate-6 absolute translate-x-4"></div>
            <div className="w-48 h-28 bg-white shadow-xl rounded border transform rotate-3 z-10 flex p-4 items-end">
              <div className="w-full h-2 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Paleta de Colores y Tipografía */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Paleta de Colores</h3>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className="w-12 h-12 rounded-full border shadow-sm" 
                style={{ backgroundColor: color }}
                title={color}
              ></div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 border-l pl-8 border-gray-200">
          <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Tipografía</h3>
          <div className="space-y-2">
            <p className="text-3xl font-serif">Aa Bb Cc Dd</p>
            <p className="text-xl font-sans font-light">Elegance is simplicity.</p>
            <p className="text-xs text-gray-400 uppercase tracking-[0.3em]">Montserrat / Playfair Display</p>
          </div>
        </div>
      </div>


      <TestColors />

    </div>
  );
};

export default BrandLayout;



