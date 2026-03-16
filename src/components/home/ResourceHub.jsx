// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const DATA = {
//   Assets: ["Colors", "Fonts", "Images", "Icons", "3D Models"],
//   "UI/UX": ["Design Systems", "Wireframes", "UX Research", "Figma Plugins"],
//   Programacion: ["React Hooks", "Tailwind Snippets", "API Docs", "Next.js"],
//   "Motion & Graphics": ["After Effects", "Lottie Files", "Shaders", "SVG Anims"]
// };

// const ResourceHub = () => {
//   const [activeTab, setActiveTab] = useState("Assets");

//   return (
//     <div className="p-8 max-w-5xl mx-auto bg-background text-golden min-h-[400px] rounded-3xl border border-white/10">
      
//       {/* --- Navegación --- */}
//       <nav className="flex space-x-2 mb-12 bg-white/5 p-1.5 rounded-full w-fit mx-auto border border-white/5">
//         {Object.keys(DATA).map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
//               activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
//             }`}
//           >
//             {activeTab === tab && (
//               <motion.div
//                 layoutId="active-pill"
//                 className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full -z-10"
//                 transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//               />
//             )}
//             {tab}
//           </button>
//         ))}
//       </nav>

//       {/* --- Grid de Recursos --- */}
//       <motion.div 
//         layout
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
//       >
//         <AnimatePresence mode="popLayout">
//           {DATA[activeTab].map((item, index) => (
//             <motion.div
//               key={`${activeTab}-${item}`}
//               layout
//               initial={{ opacity: 0, y: 20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
//               transition={{ 
//                 type: "spring", 
//                 stiffness: 300, 
//                 damping: 25, 
//                 delay: index * 0.05 
//               }}
//               whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
//               className="group p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer flex flex-col justify-between h-32"
//             >
//               <span className="text-sm text-indigo-400 font-mono">0{index + 1}</span>
//               <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
//                 {item}
//               </h3>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default ResourceHub;




// import { useState, useRef } from 'react';
// import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// const DATA = {
//   Assets: ["Colors", "Fonts", "Images", "Icons", "3D Models"],
//   "UI/UX": ["Design Systems", "Figma", "Photoshop", "Wireframes", "UX Research", "Figma Plugins"],
//   Programacion: ["React Hooks", "Tailwind Snippets", "API Docs", "Next.js"],
//   "Motion & Graphics": ["After Effects", "Lottie Files", "Shaders", "SVG Anims"]
// };

// // --- Subcomponente de Tarjeta con efecto de brillo ---
// const ResourceCard = ({ item, index }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Suavizamos el movimiento del brillo
//   const springConfig = { damping: 20, stiffness: 150 };
//   const x = useSpring(mouseX, springConfig);
//   const y = useSpring(mouseY, springConfig);

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   // Máscara de degradado que sigue al mouse
//   const background = useMotionTemplate`
//     radial-gradient(
//       450px circle at ${x}px ${y}px, 
//       rgba(212, 175, 55, 0.15), 
//       transparent 80%
//     )
//   `;

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ delay: index * 0.05 }}
//       onMouseMove={handleMouseMove}
//       whileHover={{ y: -5 }}
//       className="group relative flex flex-col justify-between h-36 p-6 rounded-2xl bg-shadow border border-white/5 overflow-hidden cursor-pointer"
//     >
//       {/* El Brillo */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         style={{ background }}
//       />

//       <span className="text-xs font-mono text-golden/50 tracking-widest uppercase">
//         Item {index + 1}
//       </span>
      
//       <h3 className="text-xl font-medium text-texto group-hover:text-golden transition-colors duration-300 tracking-tight">
//         {item}
//       </h3>
//     </motion.div>
//   );
// };

// const ResourceNavbar = ({ activeTab, setActiveTab}) => {
//   return (
//     <nav className="flex items-center justify-center space-x-1 mb-16 bg-shadow/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 w-fit mx-auto sticky top-5 z-50">
//         {Object.keys(DATA).map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`relative px-8 py-2.5 text-sm font-medium transition-colors duration-300  ${
//               activeTab === tab ? "text-raisin" : "text-white hover:text-golden cursor-pointer"
//             }`}
//           >
//             {activeTab === tab && (
//               <motion.div
//                 layoutId="active-pill"
//                 className="absolute inset-0 bg-golden rounded-xl -z-10"
//                 transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
//               />
//             )}
//             <span className="relative z-10">{tab}</span>
//           </button>
//         ))}
//       </nav>
//   );
// }
// // --- Componente Principal ---
// const ResourceHub = () => {
//   const [activeTab, setActiveTab] = useState("Assets");

//   return (
//     /* Cambios: Se añadió 'border border-white/10' y 'rounded-3xl' (o el nivel de redondeado que prefieras) */
//     <div className="p-10 max-w-6xl mx-auto bg-background min-h-screen border border-white/10 rounded-3xl">
      
//       <ResourceNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Grid de Recursos */}
//       <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         <AnimatePresence mode="popLayout">
//           {DATA[activeTab].map((item, index) => (
//             <ResourceCard key={`${activeTab}-${item}`} item={item} index={index} />
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default ResourceHub;







import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
// Importaciones respetando tu formato
import { FaPalette, FaFont, FaTerminal, FaCode, FaMobileAlt, FaVideo } from "react-icons/fa";
import { 
  ExternalLink, Star, Layout, 
  Link as LinkIcon, Play, PenTool, 
  Folder, PlayCircle, Camera,
  Layers,
  ImageIcon,
  Box,
  Type,
  Search,
  Zap,
  Cpu
} from "lucide-react";

const DATA = {
  Assets: [
    { name: "Colors", desc: "Paletas cromáticas y sistemas de color.", icon: FaPalette, href: "/recursos/colores" },
    { name: "Fonts", desc: "Tipografías premium y emparejamientos.", icon: Type, href: "/recursos/fuentes" },
    { name: "Images", desc: "Stock de alta resolución y assets visuales.", icon: ImageIcon, href: "/recursos/imagenes" },
    { name: "Icons", desc: "Sets de iconos vectoriales y librerías.", icon: Star, href: "/recursos/iconos" },
    { name: "3D Models", desc: "Recursos GLTF y escenas para Three.js.", icon: Box, href: "/recursos/modelos-3d" },
  ],
  "UI/UX": [
    { name: "UI", desc: "User Interface, Reglas, experiencia", icon: Layout, href: "/recursos/ui" },
    { name: "Master kit", desc: "Entregables.", icon: Layout, href: "/recursos/masterkit" },
    { name: "Design Systems", desc: "Guías de estilo y componentes escalables.", icon: Layers, href: "/recursos/design-systems" },
    { name: "Figma", desc: "Comunidad, archivos y mejores prácticas.", icon: Layout, href: "/recursos/figma" },
    { name: "Photoshop", desc: "Edición avanzada de mapas de bits.", icon: Camera, href: "/recursos/photoshop" },
    { name: "Wireframes", desc: "Estructuras de baja fidelidad para UX.", icon: PenTool, href: "/recursos/wireframes" },
    { name: "UX Research", desc: "Metodologías y análisis de usuario.", icon: Search, href: "/recursos/ux-research" },
    { name: "Affinity Photo", desc: "Alternativa profesional de edición.", icon: ImageIcon, href: "/recursos/affinity" },
  ],
  Programacion: [
    { name: "Snippets CSS", desc: "Efectos visuales y layouts modernos.", icon: FaCode, href: "/recursos/css" },
    { name: "Tailwind Snippets", desc: "Componentes listos para copiar.", icon: Layout, href: "/recursos/tailwind" },
    { name: "Librerias", desc: "Paquetes NPM esenciales para React.", icon: Folder, href: "/recursos/librerias" },
    { name: "Flutter", desc: "Desarrollo móvil multiplataforma.", icon: FaMobileAlt, href: "/recursos/flutter" },
    { name: "Web", desc: "Estándares y tecnologías del navegador.", icon: ExternalLink, href: "/recursos/web" },
  ],
  "Motion & Graphics": [
    { name: "After Effects", desc: "Animación de alta gama y VFX.", icon: PlayCircle, href: "/recursos/after-effects" },
    { name: "Lottie Files", desc: "Animaciones vectoriales ligeras.", icon: Zap, href: "/recursos/lottie" },
    { name: "Shaders", desc: "Efectos visuales mediante código GPU.", icon: Cpu, href: "/recursos/shaders" },
    { name: "SVG Anims", desc: "Microinteracciones web eficientes.", icon: Play, href: "/recursos/svg-animations" },
    { name: "CapCut", desc: "Edición de video rápida y creativa.", icon: FaVideo, href: "/recursos/capcut" },
  ]
};

const ResourceCard = ({ item, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      450px circle at ${x}px ${y}px, 
      rgba(212, 175, 55, 0.15), 
      transparent 80%
    )
  `;

  const Icon = item.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Link
        to={item.href}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col justify-between h-44 p-6 rounded-2xl bg-shadow border border-white/5 overflow-hidden cursor-pointer block no-underline"
      >
        {/* El Brillo */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="text-golden group-hover:scale-110 transition-transform duration-300">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-mono text-golden/50 tracking-widest uppercase">
              Item {index + 1}
            </span>
          </div>
          
          <h3 className="text-lg font-medium text-white group-hover:text-golden transition-colors duration-300 tracking-tight">
            {item.name}
          </h3>
          <p className="text-xs text-white/50 mt-2 line-clamp-2 leading-relaxed group-hover:text-white/70 transition-colors font-anta">
            {item.desc}
          </p>
          <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-golden/5 group-hover:text-golden/10 transition-colors rotate-12" />
        </div>
      </Link>
    </motion.div>
  );
};


const ResourceNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex items-center justify-center space-x-1 mb-16 bg-shadow/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 w-fit mx-auto sticky top-5 z-50">
      {Object.keys(DATA).map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-8 py-2.5 text-sm font-medium transition-colors duration-300  ${
            activeTab === tab ? "text-raisin" : "text-white hover:text-golden cursor-pointer"
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-golden rounded-xl -z-10"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </nav>
  );
};

const ResourceHub = () => {
  const [activeTab, setActiveTab] = useState("Assets");

  return (
    <div className="p-10 max-w-6xl mx-auto bg-background min-h-screen border border-white/10 rounded-3xl">
      <ResourceNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {DATA[activeTab].map((item, index) => (
            <ResourceCard key={`${activeTab}-${item.name}`} item={item} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ResourceHub;