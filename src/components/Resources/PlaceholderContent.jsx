// src/components/Resources/PlaceholderContent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderContent = ({ title, icon: Icon, theme }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-24 px-6 mt-10 border-2 border-dashed border-white/5 rounded-[2rem] bg-white/[0.01] relative overflow-hidden"
    >
      {/* Efecto de luz de fondo sutil */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${theme.bg} opacity-5 blur-[100px] pointer-events-none`} />

      <div className={`relative w-20 h-20 mb-8 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group shadow-2xl`}>
        {/* Icono animado */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Icon size={40} className={`${theme.text} opacity-80`} strokeWidth={1.5} />
        </motion.div>
        
        {/* Decoración en las esquinas */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 ${theme.bg} rounded-full blur-[2px] opacity-50`} />
      </div>

      <h2 className="text-3xl font-bold text-blanco mb-3 tracking-tight">
        Sección <span className={theme.text}>{title}</span>
      </h2>
      
      <p className="text-gray-500 text-center max-w-sm leading-relaxed">
        Estamos preparando los mejores recursos de <span className="text-gray-300 font-medium">{title}</span> para ti. Vuelve pronto para explorar el contenido completo.
      </p>

      {/* Botón decorativo inactivo */}
      <div className="mt-10 flex gap-3">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`h-1 w-8 rounded-full bg-white/10 ${i === 1 ? theme.bg : ''} opacity-50`} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PlaceholderContent;