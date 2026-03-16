import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importamos Framer Motion
import HeaderMenu from '../components/HeaderMenu';

import ColorsGrid from '../components/ColorsPage/ColorsGrid';
import PalettesGrid from '../components/ColorsPage/PalettesGrid';
import GradientsGrid from '../components/ColorsPage/GradientsGrid';
import LinksSection from '../components/ColorsPage/LinksSection';
import ColorCard from '../components/ColorsPage/ColorCard';





const ColorsPage = () => {
  const [activeTab, setActiveTab] = useState('colores');
  const [showFavorites, setShowFavorites] = useState(false);

  // Definimos la variante de animación para reutilizarla
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const colors = [
  { name: "Off White", hex: "#FAEFD8", cmyk: "0 | 4 | 14 | 2", pantone: "P 7-1C" },
  { name: "Bronze", hex: "#9F6637", cmyk: "0 | 36 | 65 | 38", pantone: "7573C" },
  { name: "Black", hex: "#1D1D1B", cmyk: "0 | 0 | 7 | 89", pantone: "419C" }
];




  return (
    <div className="min-h-screen bg-raisin">
      <HeaderMenu activeTab={activeTab} setActiveTab={setActiveTab} />

{/* <ColorCard/> */}
      {/* Padding superior aumentado a pt-32 para más espacio */}
      <div className="max-w-10xl mx-auto py-32 ">
        <main>
          {/* AnimatePresence permite animar componentes cuando desaparecen del DOM */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // CLAVE: Al cambiar el activeTab, Framer reinicia la animación
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* {activeTab === 'colores' && 
              <ColorCard 
                paletteName="Luxury Bronze" 
                colors={colors} 
                bgColor="#804012" 
              />
              } */}
              {activeTab === 'colores' && <ColorsGrid />}
              {activeTab === 'paletas' && <PalettesGrid showFavs={showFavorites} />}
              {activeTab === 'degradados' && <GradientsGrid showFavs={showFavorites} />}
              {activeTab === 'tutoriales' && <TutorialsSection />}
              {activeTab === 'links' && <LinksSection />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};


// --- SUB-COMPONENTES PARA EVITAR EL REFERENCE ERROR --- ya los tengo aparte






const TutorialsSection = () => (
  <div className="bg-zinc-900/80 p-10 rounded-3xl border border-golden/20 font-anta">
    <h3 className="text-golden text-2xl mb-4">Masterclass de Color</h3>
    <p className="text-taupe">Próximamente: Video tutoriales sobre cómo aplicar el contraste 60-30-10 en tus interfaces.</p>

  </div>
);



export default ColorsPage;


