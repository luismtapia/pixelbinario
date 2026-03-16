import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import BackButton from "../BackButton";
import { useEffect } from "react";
import IconRenderer from "../../utils/IconRenderer";
import { getTheme } from "../../data/categoryNav";

const CategoryNav = ({
  page,
  activeTab,
  setActiveTab,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navLinks = page.tabs;
  const theme = getTheme(page);

  // Variantes para el contenedor (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Aparecen uno tras otro
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  // Variantes para cada item con efecto de escala al presionar
  const itemVariants = {
    hidden: { x: -20, opacity: 0, scale: 0.95 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: { x: 10, opacity: 0, scale: 0.95 },
    tap: { scale: 0.92, transition: { duration: 0.1 } }, // Efecto de hundimiento al tocar
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  //     document.body.style.touchAction = isMenuOpen ? "none" : "auto";
  //   };
  //   handleScroll();
  //   return () => { document.body.style.overflow = "unset"; };
  // }, [isMenuOpen]);

  

  return (
    <nav className="bg-raisin/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
        <BackButton theme={theme} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveTab(link.name)}
              className={`relative text-xs font-bold uppercase tracking-wider transition-all cursor-pointer px-4 py-2 rounded-lg ${
                activeTab === link.name
                  ? "text-raisin"
                  : `text-gray-400 ${theme.hoverText}`
              }`}
            >
              {activeTab === link.name && (
                <motion.div
                  layoutId="activeTabBackground"
                  className={`absolute inset-0 ${theme.bg} rounded-lg`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <IconRenderer iconName={link.icon} size={14} />
                {/* <link.icon size={14} /> */}
                {link.name}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white p-2 z-[110] relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div initial={false} animate={{ rotate: isMenuOpen ? 90 : 0 }}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu & Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay con desenfoque profundo */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 top-0 bg-black/50 z-40 md:hidden"
            />

            {/* Panel de Navegación */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute top-16 inset-x-0 z-50 bg-raisin/95 backdrop-blur-3xl border-b border-white/10 md:hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col p-6 gap-4"
              >
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    variants={itemVariants}
                    whileTap="tap" // Activa la escala al presionar
                    onClick={() => {
                      setActiveTab(link.name);
                      setTimeout(() => setIsMenuOpen(false), 150); // Pequeño delay para ver el efecto
                    }}
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-base font-bold transition-colors ${
                      activeTab === link.name
                        ? `${theme.bg} text-raisin shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ${theme.shadow}`
                        : `text-gray-300 bg-white/5 border border-white/5`
                    }`}
                  >
                    <IconRenderer iconName={link.icon} size={18} className={
                        activeTab === link.name ? "text-raisin" : theme.text
                      } />
                    <span className="flex-1 text-left">{link.name}</span>
                    {activeTab === link.name && (
                      <motion.div
                        layoutId="activeDot"
                        className="w-2 h-2 rounded-full bg-raisin"
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-12 flex flex-col items-center gap-6"
              >
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                  Síguenos
                </p>
                <div className="flex gap-8">
                  <a
                    href="#"
                    className={`text-texto ${theme.hoverText} transition-colors`}
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="#"
                    className={`text-texto ${theme.hoverText} transition-colors`}
                  >
                    <FaFacebook size={28} />
                  </a>
                  <a
                    href="#"
                    className={`text-texto ${theme.hoverText} transition-colors`}
                  >
                    <FaTiktok size={28} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default CategoryNav;
