import { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Search, Menu } from 'lucide-react';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('inicio');

  const handleScroll = (id) => {
    setActiveSection(id);
    // Si no estamos en la Home, primero navegamos a la Home
    if (location.pathname !== '/') {
      navigate('/');
      // Esperamos un momento a que cargue la Home antes de scrollear
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si ya estamos en la Home, scrolleamos directamente
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Clase dinámica para los botones
  const getBtnStyle = (id) => {
    return `transition-colors px-1 py-1 cursor-pointer font-anta ${
      activeSection === id 
      ? 'text-golden border-b-2 border-golden' 
      : 'text-white hover:text-golden'
    }`;
  };

  // Esta función es por si el usuario está en otra página (ej. Colores)
  // y hace clic en "Nosotros", debe volver a la Home primero.
  const handleRedirect = (to) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Un pequeño delay para que cargue la home antes de buscar el ID
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Estilos que siempre tendrá el botón (base)
  const baseStyle = "px-1 py-1 cursor-pointer transition-all duration-300 border-b-2 font-anta";

  // Estilo cuando NO está activo (transparente)
  const inactiveStyle = "text-white hover:text-golden border-transparent";

  // Estilo cuando SI está activo (dorado)
  const activeStyle = "text-golden border-golden";

  return (
    <nav className="border-b border-taupe/20 bg-raisin/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 text-sm font-medium text-white">
              
              {/* <a href="#/#recursos" className="hover:text-golden transition-colors text-golden border-b-2 border-golden px-1 py-1">Recursos</a> */}
              <ScrollLink
                to="recursos"
                spy={true}
                smooth={true}
                offset={-80} 
                duration={500}
                activeClass={activeStyle} // Solo añade el color y el borde dorado
                className={`${baseStyle} ${inactiveStyle}`} // Estilo por defecto
                onClick={() => handleRedirect('recursos')}
              >
                Recursos
              </ScrollLink>

              <button 
                onClick={() => handleScroll('nosotros')} 
                className={getBtnStyle('nosotros')}
              >
                Nosotros
              </button>

              {/* CONTACTO */}
              <ScrollLink
                to="contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass={activeStyle} // Solo añade el color y el borde dorado
                className={`${baseStyle} ${inactiveStyle}`} // Estilo por defecto
                onClick={() => handleRedirect('contacto')}
              >
                Contacto
              </ScrollLink>



              {/* Estos siguen siendo rutas de React Router porque son páginas aparte */}
              <RouterLink to="/documentacion" className={`${baseStyle} transition-colors ${location.pathname === '/documentacion' ? activeStyle : inactiveStyle}`}>Documentación</RouterLink>
              <RouterLink to="/comunidad" className={`px-1 py-1 transition-all hover:text-golden ${location.pathname === '/comunidad' ? activeStyle : inactiveStyle}`}>Comunidad</RouterLink>
            </div>
          </div>


          {/* Logo */}
          <RouterLink to="/" onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
              setActiveSection('inicio');
            }} className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-golden font-gugi font-black text-2xl tracking-tighter">
              PIXEL<span className="text-white">BINARIO</span>
            </span>
          </RouterLink>


            
          {/* Buscador */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-taupe" />
              </div>
              <input
                type="text"
                className=" text-sm text-white rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-golden border border-transparent transition-all"
                placeholder="Buscar recursos"
              />
            </div>
            <button className="md:hidden text-taupe">
              <Menu size={24} />
            </button>
          </div>

          switch para modo oscuro


        </div>
      </div>
    </nav>
  );
};

export default Navbar;