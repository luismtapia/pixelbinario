// --- SUB-COMPONENTE: DASHBOARD CONTENT ---

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Folder,
  Layout,
  Star,
  PlayCircle,
  X,
  Palette,
  Layers,
  Zap,
} from "lucide-react";
import IconRenderer from "../../utils/IconRenderer";
import PlaceholderContent from "./PlaceholderContent";

//!BORRAR
import { RESOURCES as RESOURCESTEMPORAL} from "../../data/resourcesData";


const DashboardContent = ({ data, theme, setActiveTab, favoritesCount }) => {
  const { title, workspaceDesc, tabs } = data;
  const { stats, distribution, recent, quickActions } = tabs.dashboard;
  const [isOpen, setIsOpen] = useState(false);

  const { bg, hover, groupHoverText, groupHoverBg, text, colorName, border, hoverBorder, glowBg } = theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "out" }}
      className="space-y-12"
    >
      {/* 1. HEADER DINÁMICO */}
      <header className="relative py-12 px-8 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
        {/* Círculo de luz ambiental */}
        <div className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 ${glowBg} rounded-full blur-[100px]`} />

        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`${text} font-black text-xs uppercase tracking-[0.3em] mb-4 block`}
          >
            Panel de Control
          </motion.span>
          <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
            {title} <span className={text}>Workspace</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            {workspaceDesc}
          </p>
        </div>
      </header>

      {/* 2. GRID DE STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className={`p-6 rounded-2xl bg-texto/5 border border-texto/10 flex items-center justify-between group ${hoverBorder} transition-colors cursor-pointer`}
          >
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className={`text-3xl font-black text-blanco ${groupHoverText} transition-colors`}>
                {/* Si es el stat de Favoritos, usamos el contador dinámico */}
                {stat.label === "Favoritos" ? favoritesCount : stat.value}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${hover} flex items-center justify-center ${text} group-hover:scale-110 transition-transform`}>
              <IconRenderer iconName={stat.icon} size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. GRID CENTRAL: DISTRIBUCIÓN + RECIENTES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Distribución de Recursos */}
        <div className="lg:col-span-1 space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
          <h3 className="text-blanco font-bold flex items-center gap-2 mb-4">
            <IconRenderer iconName="Star" size={18} className={text} />
            Distribución
          </h3>
          {distribution.map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                <span>{item.name}</span>
                <span className={text}>{item.pc}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pc}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className={`h-full ${bg} shadow-[0_0_10px_rgba(var(--color-${theme.colorName}),0.4)]`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Proyectos Recientes */}
        <div className="lg:col-span-2 bg-white/5 p-8 rounded-3xl border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-blanco font-bold">Actividad Reciente</h3>
            <button
              onClick={() => setActiveTab("Proyectos")}
              className={`text-xs font-bold ${text} hover:underline`}
            >
              Ver todos
            </button>
          </div>
          <div className="space-y-4">
            {recent.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ x: 10 }}
                className={`flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 ${hover} transition-all cursor-pointer group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-golden/20 flex items-center justify-center ${text} ${groupHoverBg} group-hover:text-raisin transition-colors`}>
                    <IconRenderer iconName={proj.icon} size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blanco mb-1">
                      {proj.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 uppercase font-black">
                      {proj.cat}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-600 font-medium">
                  {proj.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. ACCIONES RÁPIDAS (FOOTER) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quickActions.map((action, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            onClick={() => setActiveTab(action.tab)}
            className={`p-8 rounded-3xl border relative overflow-hidden group cursor-pointer transition-all ${
              action.variant === "gold"
                ? "bg-gradient-to-br from-golden/20 to-transparent border-golden/20"
                : "bg-white/5 border-white/10 hover:border-white/20"
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blanco mb-2">
                {action.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{action.desc}</p>
              <div className={`flex items-center gap-2 ${text} font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all`}>
                Ir ahora <IconRenderer iconName="ExternalLink" size={14} />
              </div>
            </div>
            {/* Icono de fondo decorativo */}
            <div className={`absolute -bottom-4 -right-4 w-32 h-32 text-white/5 group-hover:${text}/10 transition-colors rotate-12`}
>
              <IconRenderer iconName={action.icon} size={120} />
            </div>
          </motion.div>
        ))}
      </div>

      {/*otras acciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => setActiveTab("Ejemplos")}
          className="p-8 rounded-3xl bg-gradient-to-r from-golden/20 to-transparent border border-golden/20 group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-black text-blanco mb-2 tracking-tight">
                Learning Playground
              </h3>
              <p className="text-gray-400 text-sm">
                Explora archivos prácticos de Figma.
              </p>
            </div>
            <PlayCircle
              className={`${text} opacity-50 group-hover:opacity-100 transition-opacity`}
              size={32}
            />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => setActiveTab("Favoritos")}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 group cursor-pointer hover:border-white/20"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-black text-blanco mb-2 tracking-tight">
                Acceso Directo
              </h3>
              <p className="text-gray-400 text-sm">
                Tus favoritos seleccionados.
              </p>
            </div>
            <Star
              className={`text-gray-600 group-hover:${text} transition-colors`}
              size={32}
            />
          </div>
        </motion.div>
      </div>

      {/*TIPS PARA DISEÑO EN FIGMA*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => setIsOpen(true)}
          className="p-8 rounded-3xl bg-gradient-to-r from-golden/20 to-transparent border border-golden/20 group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-black text-blanco mb-2 tracking-tight">
                TIPS para diseño en figma
              </h3>
              <p className="text-gray-400 text-sm">
                La receta para la creacion de un buen ...
              </p>
            </div>
            <PlayCircle
              className={`${text} opacity-50 group-hover:opacity-100 transition-opacity`}
              size={32}
            />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => setActiveTab("Favoritos")}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 group cursor-pointer hover:border-white/20"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-black text-blanco mb-2 tracking-tight">
                Acceso Directo
              </h3>
              <p className="text-gray-400 text-sm">
                Tus favoritos seleccionados.
              </p>
            </div>
            <Star
              className="text-gray-600 group-hover:${text} transition-colors"
              size={32}
            />
          </div>
        </motion.div>
      </div>
      <PlaceholderContent title="Trabajando" icon={Folder} theme={theme} />


        <ColorsDashboard theme={theme} setActiveTab={setActiveTab} />
      {/*Modal */}
      <FigmaTipsModal isOpen={isOpen} onClose={() => setIsOpen(false)} theme={theme} />
    </motion.div>
  );
};

const FigmaTipsModal = ({ isOpen, onClose, theme }) => {
  // 1. Definimos las variantes para el contenedor (padre)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Tiempo entre la aparición de cada hijo
        delayChildren: 0.3,    // Espera a que el modal abra antes de empezar
      },
    },
  };

  // 2. Definimos las variantes para cada ítem (hijo)
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const tips = [
    { icon: Layout, title: "01. Estructura (Esqueleto-layout)", desc: "Crea sistemas de rejilla (Grids) y define el texto de fondo. Define variables de color y jerarquía tipográfica." },
    { icon: Palette, title: "02. Moodboard y Assets", desc: "Selecciona fotos de alta resolución y define la fuente tipográfica que marcará el carácter del proyecto." },
    { icon: Layers, title: "03. Componentes", desc: "Convierte elementos recurrentes en componentes. Esto facilita cambios globales con un solo click." },
    { icon: Zap, title: "04. Prototipado (Smart Animate)", desc: "Conecta pantallas. Mantén los nombres de las capas idénticos para que Smart Animate sea fluido." },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }} // Centrado manual con fixed
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: "20%", x: "-50%" }}
            className="fixed z-[101] top-1/2 left-1/2 w-full max-w-2xl bg-[#121212] border border-golden/30 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-golden/10 flex justify-between items-center bg-gradient-to-r from-golden/10 to-transparent">
              <h2 className="text-2xl font-black text-blanco tracking-tighter uppercase">
                Guía Maestra de Figma
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-golden/20 rounded-full transition-colors">
                <X className={`${theme.text} cursor-pointer`} size={24} />
              </button>
            </div>

            {/* Cuerpo con Stagger */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-8 grid gap-6 max-h-[70vh] overflow-y-auto"
            >
              {tips.map((tip, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 group"
                >
                  <div className="p-3 bg-golden/10 rounded-xl h-fit group-hover:bg-golden group-hover:text-raisin transition-colors duration-300">
                    <tip.icon className="${text} group-hover:text-inherit" />
                  </div>
                  <div>
                    <h4 className={`${theme.text} font-bold uppercase text-xs tracking-widest mb-1`}>
                      {tip.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};


export default DashboardContent;

// --- SUB-COMPONENTE: DASHBOARD DE COLORES ---
const ColorsDashboard = ({ theme, setActiveTab }) => {
  const data = RESOURCESTEMPORAL.colors?.tabs.dashboard || {
    stats: { totalResources: 45, lastUpdate: "Feb 2026" },
    featured: { title: "Teoría del Color 2.0" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <header className="mb-16 lg:mt-12 text-center">
        <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
          Color <span className={theme.text}>Mastery Hub</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explora paletas, generadores y herramientas de contraste para elevar
          la armonía visual de tus proyectos.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
            Paletas Curadas
          </p>
          <h3 className={`text-4xl font-black ${theme.text}`}>
            {data.stats.totalResources}
          </h3>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
            Tendencia Global
          </p>
          <h3 className="text-2xl font-bold text-blanco flex items-center gap-2">
            Verde Esmeralda{" "}
            <div className="w-4 h-4 rounded-full bg-[#50C878]"></div>
          </h3>
        </div>
        <button
          onClick={() => setActiveTab("Generadores")}
          className={`bg-white/5 border border-white/10 p-6 rounded-3xl hover:${theme.border} transition-all group text-left`}
        >
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-white">
            Herramienta Pro
          </p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-blanco">Generadores</h3>
            <Zap className={theme.text} />
          </div>
        </button>
      </div>

      {/* Featured Section */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 rounded-[2.5rem]`}
      >
        <div
          className={`absolute top-0 right-0 w-64 h-64 ${theme.bg} opacity-10 blur-[100px] -mr-20 -mt-20`}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div
            className={`w-24 h-24 rounded-3xl ${theme.bg} flex items-center justify-center shadow-2xl`}
          >
            <Palette size={48} className="text-raisin" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span
              className={`inline-block px-3 py-1 rounded-full bg-white/10 ${theme.text} text-[10px] font-black uppercase mb-4`}
            >
              Recurso Sugerido
            </span>
            <h2 className="text-3xl font-bold text-blanco mb-2">
              Accesibilidad y Contraste
            </h2>
            <p className="text-gray-400 max-w-lg italic">
              "Asegura que tus diseños sean inclusivos verificando los ratios de
              contraste WCAG."
            </p>
          </div>
          <button
            onClick={() => setActiveTab("Recursos")}
            className={`px-8 py-4 ${theme.bg} text-raisin font-black rounded-2xl hover:scale-105 transition-transform`}
          >
            VER HERRAMIENTAS
          </button>
        </div>
      </div>
    </motion.div>
  );
};