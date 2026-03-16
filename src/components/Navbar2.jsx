import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Search, Menu, Moon, Sun } from 'lucide-react';

import SearchBar from './SearchBar';

const Navbar = ({ isDark, setIsDark }) => {
//   const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-40% 0px -40% 0px', // Detecta cuando la sección está al centro
      threshold: 0,
    });

    const sections = ['recursos', 'nosotros', 'contacto'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]); // Se reinicia si cambias de página


  const handleSearch = (query) => {
    console.log("Buscando:", query);
  };


  // Estilos dinámicos
  const baseStyle = "px-3 py-1 cursor-pointer transition-all duration-300 border-b-2 font-anta text-xs uppercase tracking-tighter";
  const inactiveStyle = " border-transparent hover:text-golden";
  const activeStyle = "text-golden border-golden bg-golden/5 shadow-[0_10px_20px_-10px_rgba(242,204,15,0.3)]";
  const degradado = "bg-gradient-to-r from-golden/50 via-transparent to-golden/50";

  return (
    <nav className=" bg-raisin/90 fixed top-0 left-0 w-full z-[100] transition-all duration-500 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* LADO IZQUIERDO: Navegación */}
          <div className="hidden md:flex items-center">
            <ScrollLink
              to="recursos"
              spy={true}
              smooth={true}
              offset={-150}
              onSetActive={() => setActiveSection('recursos')}
              className={`${baseStyle} ${activeSection === 'recursos' ? activeStyle : inactiveStyle}`}
            >
              Recursos
            </ScrollLink>

            <ScrollLink
                to="nosotros"
                spy={true}
                smooth={true}
                offset={-70}
                onSetActive={() => setActiveSection('nosotros')}
                className={`${baseStyle} ${activeSection === 'nosotros' ? activeStyle : inactiveStyle}`}
            >
                Nosotros
            </ScrollLink>

            <ScrollLink
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              onSetActive={() => setActiveSection('contacto')}
              className={`${baseStyle} ${activeSection === 'contacto' ? activeStyle : inactiveStyle}`}
            >
              Contacto
            </ScrollLink>

            <div className="h-4 w-[1px] bg-zinc-300 dark:bg-taupe/20 mx-2" />

            <RouterLink 
                to="/brand" 
                className={`${baseStyle} ${location.pathname === '/brand' ? activeStyle : inactiveStyle}`}
            >
              Brand
            </RouterLink>
            <RouterLink 
                to="/documentacion" 
                className={`${baseStyle} ${location.pathname === '/documentacion' ? activeStyle : inactiveStyle}`}
            >
              Docs
            </RouterLink>
          </div>

          {/* CENTRO: Logo */}
          <RouterLink to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute left-1/2 -translate-x-1/2 group">
            <div className="flex flex-col items-center">
              <span className="text-golden font-gugi font-black text-2xl tracking-tighter group-hover:drop-shadow-[0_0_8px_rgba(242,204,15,0.5)] transition-all">
                PIXEL<span className="text-blanco transition-colors duration-500">BINARIO</span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-golden to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </RouterLink>

          {/* LADO DERECHO: Herramientas */}
          <div className="flex items-center gap-6">
            <SearchBar onSearch={handleSearch} />

            {/* SWITCH MODO OSCURO */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="relative w-12 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full border border-zinc-300 dark:border-taupe/30 flex items-center px-1 transition-all hover:border-golden/50 group"
            >
              <div className={`absolute transition-all duration-500 flex items-center justify-center w-4 h-4 rounded-full ${isDark ? 'translate-x-6 bg-golden shadow-[0_0_10px_#f2cc0f]' : 'translate-x-0 bg-white shadow-md'}`}>
                {isDark ? <Moon size={10} className="text-raisin" /> : <Sun size={10} className="text-golden" />}
              </div>
            </button>

            <button className="md:hidden text-golden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;