import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Layers, Palette, ExternalLink, ChevronLeft, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderMenu = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { id: "colores", icon: <Palette size={24} className="lg:w-[30px] lg:h-[30px]" />, label: "Colores" },
    { id: "paletas", icon: <Palette size={24} className="lg:w-[30px] lg:h-[30px]" />, label: "Paletas" },
    { id: "tutoriales", icon: <Play size={24} className="lg:w-[30px] lg:h-[30px]" />, label: "Tutoriales" },
    { id: "degradados", icon: <Layers size={24} className="lg:w-[30px] lg:h-[30px]" />, label: "Degradados" },
    { id: "links", icon: <ExternalLink size={24} className="lg:w-[30px] lg:h-[30px]" />, label: "Link" },
  ];

  const activeItem = menuItems.find((item) => item.id === activeTab) || menuItems[0];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (isMenuOpen) return;
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else { 
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -200 }} 
      transition={{ duration: 0.4, ease: "easeInOut" }}
      // bg-raisin/80 aplica la transparencia y backdrop-blur el efecto de desenfoque de fondo
      className="fixed top-0 left-0 w-full z-[100] bg-raisin/80 backdrop-blur-md font-sans overflow-visible border-b border-white/5"
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start">
        
        {/* --- SECCIÓN SUPERIOR: TÍTULO (Sólida para legibilidad) --- */}
        <div className="relative flex-1 py-3 px-4 lg:px-8 bg-[#d1d5db] rounded-br-[30px] lg:rounded-br-[40px] flex items-center justify-between lg:justify-start min-w-0 lg:min-w-[500px] h-[70px] lg:h-[80px] z-50 shadow-lg">
          
          <div className="flex items-center">
            <Link to="/" className="mr-2 lg:mr-4 text-gray-800 hover:text-[#d4af37] transition-colors">
              <ChevronLeft size={30} className="lg:w-[40px] lg:h-[40px]" strokeWidth={2.5} />
            </Link>
            <div className="flex flex-col">
              <h1 className="font-gugi text-2xl sm:text-3xl lg:text-5xl text-gray-900 leading-none tracking-tight">
                RECURSOS DE <span className="text-[#d4af37]">COLOR</span>
              </h1>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          <div 
            className="hidden lg:block absolute top-0 right-[-40px] w-[40px] h-[40px] bg-transparent rounded-tl-[40px]"
            style={{ boxShadow: "-20px -20px 0 20px #d1d5db" }}
          ></div>
        </div>

        {/* --- SECCIÓN DERECHA: NAV Y LABEL --- */}
        <div className="flex flex-col items-center lg:items-end pt-0 lg:pt-3 px-6 lg:px-10 w-full lg:w-auto z-40">
          
          {/* MENÚ DE ICONOS (También con transparencia en móvil) */}
          <AnimatePresence>
            {(isMenuOpen || window.innerWidth >= 1024) && (
              <motion.div 
                initial={window.innerWidth < 1024 ? { y: -50, opacity: 0 } : {}}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className={`
                  ${isMenuOpen ? "flex shadow-2xl bg-raisin/95 backdrop-blur-xl" : "hidden lg:flex lg:bg-transparent"} 
                  flex gap-6 lg:gap-8 justify-center lg:justify-end 
                  w-full lg:w-auto absolute lg:relative top-[70px] lg:top-0 left-0 lg:left-auto 
                  p-6 lg:p-0 border-b lg:border-none border-[#d4af37]/30 z-30
                `}
              >
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`transition-all duration-300 outline-none ${
                      activeTab === item.id
                        ? "text-[#d4af37] scale-125 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.icon}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* LABEL DINÁMICO */}
          <div className="flex flex-col items-center lg:items-end w-full lg:min-w-[280px] mt-8 lg:mt-10 mb-4">
            <div className="overflow-hidden w-full text-center lg:text-right py-1"> 
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTab}
                  initial={{ x: 50, opacity: 0, filter: "blur(15px)" }}
                  animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ x: -30, opacity: 0, filter: "blur(10px)" }}
                  className="block text-[#d4af37] font-bold text-3xl lg:text-4xl uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                >
                  {activeItem.label}
                </motion.span>
              </AnimatePresence>
            </div>
            <motion.div 
              key={`line-${activeTab}`}
              className="h-[2px] w-[80%] lg:w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mt-1"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderMenu;