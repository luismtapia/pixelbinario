import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder } from "lucide-react";

// ? DATOS
import { RESOURCES } from "../data/resources/index";
import { CATEGORY_NAV_CONFIG, getTheme } from "../data/categoryNav";


// Todo: COMPONENTES
import CategoryNav from "../components/Resources/CategoryNav";
import DashboardContent from "../components/Resources/DashboardContent";
import PluginsContent from "../components/Resources/PluginsContent";
import ProyectosContent from "../components/Resources/ProjectsContent";
import TutorialesContent from "../components/Resources/TutorialesContent";
import EjemplosContent from "../components/Resources/ExamplesContent";
import PlaceholderContent from "../components/Resources/PlaceholderContent";
import LinksContent from "../components/Resources/LinksContent";

const navConfig = CATEGORY_NAV_CONFIG.figma;
const theme = getTheme(navConfig);

const FigmaResourcesGallery = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentData = RESOURCES.figma;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeTab]);

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
      case "Links":
        return <LinksContent key="links" {...commonProps} />;
      case "Plugins":
        return <PluginsContent key="plugins" {...commonProps} />;

      case "Tutoriales":
        return <TutorialesContent key="tutoriales" {...commonProps} />;

      case "Proyectos":
        return <ProyectosContent key="proyectos" {...commonProps} />;

      case "Ejemplos":
        return <EjemplosContent key="ejemplos" data={currentData} />;

      case "Favoritos":
        return (
          <PlaceholderContent
            key="favoritos"
            title="Mis Ediciones"
            icon={Folder}
            theme={theme}
          />
        );

      default:
        return (
          <PlaceholderContent
            key="default"
            title="En proceso"
            icon={Folder}
            theme={theme}
          />
        );
    }
  };

  return (
    <div className="bg-raisin min-h-screen font-sans">

      <CategoryNav
        page={navConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      

      <main className="p-8 max-w-8xl mx-auto">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </main>
    </div>
  );
};

export default FigmaResourcesGallery;
