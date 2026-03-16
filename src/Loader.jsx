import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Siri from './Siri';

const Loader = ({ setFinished }) => {
  
  useEffect(() => {
    // Simulamos un tiempo de carga (puedes ajustarlo o esperar a que carguen assets)
    const timer = setTimeout(() => {
      setFinished(true);
    }, 3000); // 3 segundos de show inicial
    return () => clearTimeout(timer);
  }, [setFinished]);

  return (
    <motion.div 
      style={containerStyles}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        // 1. Animación de entrada y escala en el centro
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.2, 1], // Efecto rebote suave
          opacity: 1,
        }}
        // 2. Animación de salida: se mueve a la esquina (0,0 de la pantalla aprox)
        transition={{ 
          duration: 1.5, 
          ease: "anticipate" 
        }}
        className="loader-logo"
      >
        {/* Aquí va tu Logo SVG o Imagen */}
        <h1 style={logoTextStyle}>TU LOGO</h1>
        <Siri />
      </motion.div>
    </motion.div>
  );
};

// Estilos rápidos (puedes pasarlos a CSS/Tailwind)
const containerStyles = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0f172a', // Color oscuro moderno
  zIndex: 9999,
};

const logoTextStyle = {
  color: 'white',
  fontSize: '3rem',
  fontWeight: 'bold',
  letterSpacing: '4px'
};

export default Loader;