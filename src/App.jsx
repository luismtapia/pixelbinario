import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// COMPONENTES
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import ResourcesGrid from "./components/Resources";
import Navbar2 from "./components/Navbar2";

import Loader from "./Loader";

import CategoryPage from "./pages/CategoryPage";

// // PÁGINAS

import LinksRecursosPage from "./pages/LinksRecursosPage";
import ColorsPage from "./pages/ColorsPage";
import PhotoshopPage from "./pages/PhotoshopPage";
import FigmaPage from "./pages/FigmaPage";
import UXUIPage from "./pages/UXUIPage";
import WebPage from "./pages/WebPage";
import FontsPage from "./pages/FontsPage";
import TutorialesPage from "./pages/TutorialesPage";
import ImagesPage from "./pages/ImagesPage";
import DesignResourcesPage from "./pages/DesignResourcesPage";
import OtroPage from "./pages/OtroPage";
import MasPage from "./pages/MasPage";
import ColoresOldPage from "./pages/ColoresOldPage";
import MasterKit from "./pages/MasterKit";
import UIPage from "./pages/UIPage";


// OTROS
import About from "./components/Home/About";
import Footer from "./components/Home/Footer";
import FloatingMenu from "./components/FloatingMenu";
import BrandLayout from "./pages/BrandLayout";
import ResourceHub from "./components/home/ResourceHub";

// Maneja la lógica del Navbar
function Layout({ children, isDark, setIsDark, isLoading }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-raisin text-blanco transition-colors duration-500 font-sans">
      <AnimatePresence>
        {isHome && !isLoading && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <Navbar2 isDark={isDark} setIsDark={setIsDark} />
          </motion.div>
        )}
      </AnimatePresence>

      {
        // isHome && <Navbar2 isDark={isDark} setIsDark={setIsDark} />
      }

      <main>{children}</main>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false); // Carga inicial
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <Router>
      {/* 1. Mostramos el Loader primero */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" setFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Layout isDark={isDark} setIsDark={setIsDark}>
            <Routes>
              {/* Ruta Principal: Home */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <section>
                      <header className="relative py-12 px-8 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-golden/10 rounded-full blur-[100px]" />

                        <div className="relative z-10">
                          <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-golden font-black text-xs uppercase tracking-[0.3em] mb-4 block"
                          >
                            Panel de Control
                          </motion.span>
                          <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
                            Figma <span className="text-golden">Workspace</span>
                          </h1>
                          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                            Gestiona tus herramientas de diseño, accede a tus
                            proyectos favoritos y optimiza tu flujo creativo
                            desde un solo lugar.
                          </p>
                        </div>
                      </header>
                    </section>
                    <section className="m-10">
Profesionalmente, para que un motion graphic de branding no se sienta como una "lista de elementos" sino como una historia coherente, debes seguir una estructura de Descompresión → Evolución → Revelación.

Aquí tienes una propuesta de organización (Storyboard de flujo)

El Gancho (Búsqueda y Concepto)

. La Construcción Matemática (El Loader)

3. La Narrativa Etimológica (Scene 5)

4. El Cierre (Intro y Logo Final)


                    </section>

<section>
  Links de recursos → 
  <Link to="/recursos/links" className="hover:text-golden underline">
    ir
  </Link>
</section>

                    <ResourceHub />
                    <section id="recursos">
                      <ResourcesGrid />
                    </section>
                    <section id="nosotros">
                      <About />
                    </section>
                    <section id="contacto">
                      <Footer />
                    </section>
                  </>
                }
              />
              <Route path="/brand" element={<BrandLayout />} />
<Route path="/recursos/links" element={<LinksRecursosPage />} />
              {/* <Route path="/recursos/:categoryName" element={<CategoryPage />} /> */}

              <Route path="/recursos/colores" element={<ColorsPage />} />
              <Route path="/recursos/masterkit" element={<MasterKit />} />
              <Route path="/recursos/ui" element={<UIPage />} />
              <Route path="/recursos/web" element={<WebPage />} />
              <Route path="/recursos/photoshop" element={<PhotoshopPage />} />
              <Route path="/recursos/fuentes" element={<FontsPage />} />
              <Route path="/recursos/figma" element={<FigmaPage />} />
              <Route path="/recursos/uxui" element={<UXUIPage />} />
              <Route path="/recursos/tutoriales" element={<TutorialesPage />} />
              <Route path="/recursos/imagenes" element={<ImagesPage />} />
              <Route
                path="/recursos/diseno"
                element={<DesignResourcesPage />}
              />
              <Route path="/recursos/otro" element={<OtroPage />} />
              <Route path="/recursos/mas" element={<MasPage />} />
              <Route path="/recursos/coloresold" element={<ColoresOldPage />} />
            </Routes>
          </Layout>
        </motion.div>
      )}
    </Router>
  );
}

export default App;
