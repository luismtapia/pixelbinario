import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Lightbulb, Layout, Eye, Layers, X } from "lucide-react";

// ? DATOS (Asegúrate de que RESOURCES tenga la propiedad 'uiux')
import { RESOURCES } from "../data/resources/index";
import { CATEGORY_NAV_CONFIG, getTheme } from "../data/categoryNav";

// Todo: COMPONENTES
import CategoryNav from "../components/Resources/CategoryNav";
import DashboardContent from "../components/Resources/DashboardContent";
import PluginsContent from "../components/Resources/PluginsContent";
import ProyectosContent from "../components/Resources/ProjectsContent"; // Usado para los Tips con Imagen
import TutorialesContent from "../components/Resources/TutorialesContent";
import EjemplosContent from "../components/Resources/ExamplesContent";
import PlaceholderContent from "../components/Resources/PlaceholderContent";
import LinksContent from "../components/Resources/LinksContent";

// 1. Cambiamos la configuración de navegación a la de UI/UX
const navConfig = CATEGORY_NAV_CONFIG.uiux;
const theme = getTheme(navConfig);

const UIUXResourcesGallery = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [imagesList, setImagesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  // 2. Apuntamos a los datos específicos de UI/UX
  const currentData = RESOURCES.uiux;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });


    try {
      // Usamos la ruta absoluta desde la raíz del proyecto para Vite (/src/...)
      const modules = import.meta.glob(
        "/src/assets/gallery/*.{webp,jpg,png,jpeg}",
        { eager: true },
      );
      const paths = Object.values(modules).map((mod) => mod.default || mod);

      setImagesList(paths);
    } catch (error) {
      console.error("Error cargando imágenes:", error);
    } finally {
      setLoading(false);
    }


  }, [activeTab]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };




  const renderContent = () => {
    const commonProps = {
      data: currentData,
      searchTerm,
      setSearchTerm,
      theme,
    };

    switch (activeTab) {
      case "Dashboard":
        return (
          <DashboardContent
            key="dashboard"
            {...commonProps}
            setActiveTab={setActiveTab}
          />
        );

      case "Bancos": // Adaptado del nombre 'Links' o 'Assets'
        return <LinksContent key="links" {...commonProps} />;

      case "Tips": // En UI/UX los Tips son fundamentales
        return (
          <ProyectosContent
            key="proyectos"
            {...commonProps}
            // Si quieres cambiar el título internamente en el componente:
            title="Principios de Diseño"
          />
        );

      case "Inspiración":
        return (
          <motion.div
            key="inspiracion-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <section className="bg-golden/5 p-8 rounded-3xl border border-golden/10">
              <div className="flex items-center gap-3 mb-8">
                <Layout className="text-golden" size={28} />
                <h2 className="text-3xl font-gugi uppercase tracking-tighter text-white">
                  Inspiración UI
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mapeamos desde currentData.tabs.inspiracion.galerias o currentData.examples según tu estructura */}
                {(
                  currentData.examples || currentData.tabs.inspiracion.galerias
                ).map((ex, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-video group border border-white/5"
                  >
                    {/* Degradado de fondo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                    {/* Texto inferior */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <p className="text-golden text-xs font-bold uppercase mb-1 tracking-widest">
                        Recurso Externo
                      </p>
                      <h4 className="text-xl text-white font-gugi">
                        {ex.title}
                      </h4>
                      <p className="text-taupe text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {ex.desc}
                      </p>
                    </div>

                    {/* Overlay de acción */}
                    <a
                      href={ex.link || ex.url}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-golden/20 backdrop-blur-sm"
                    >
                      <div className="bg-white/10 p-4 rounded-full border border-white/20">
                        <Eye className="text-white" size={32} />
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        );

      case "Tutoriales":
        return <TutorialesContent key="tutoriales" {...commonProps} />;

      case "Favoritos":
        return (
          <PlaceholderContent
            key="favoritos"
            title="Mis Recursos Guardados"
            icon={Folder}
            theme={theme}
          />
        );

      default:
        return (
          <PlaceholderContent
            key="default"
            title="Próximamente"
            icon={Lightbulb}
            theme={theme}
          />
        );
    }
  };

  return (
    <div className="bg-raisin min-h-screen font-sans">
      {/* Navegación adaptada al tema UI/UX (Golden/Taupe) */}
      <CategoryNav
        page={navConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* SECCIÓN: MOSAICO AUTOMÁTICO */}
        {!loading && imagesList.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Layers className="text-golden" size={28} />
              <h2 className="text-4xl font-gugi uppercase tracking-tighter">
                Mosaico de Assets
              </h2>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
              {imagesList.map((img, i) => (
                <motion.div
                  key={img} // Es mejor usar el path 'img' como key que el índice 'i'
                  variants={itemVariants}
                  initial="hidden" // Forzamos estado inicial
                  animate="visible" // Forzamos estado animado
                  onClick={() => setSelectedImg(img)}
                  className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group relative cursor-zoom-in bg-zinc-900"
                >
                  <img
                    src={img}
                    alt={`Asset ${i}`}
                    loading="lazy"
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="text-golden" size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}


      <main className="p-8 max-w-8xl mx-auto">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </main>




      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-golden">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg}
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UIUXResourcesGallery;
