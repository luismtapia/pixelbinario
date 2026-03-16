import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ 
  label = "Regresar", 
  to = -1, 
  theme
}) => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(to)}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      /* Añadimos la escala base en las variantes para control total */
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.05 }, // Crece sutilmente al poner el cursor
        tap: { scale: 0.95 }    // Se contrae al hacer clic (efecto botón físico)
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        group flex items-center gap-3 py-2 px-2
        text-taupe ${theme.hoverText}
        transition-colors duration-300
        font-anta uppercase text-[10px] md:text-xs tracking-[0.2em]
        w-fit cursor-pointer outline-none 
        focus-visible:ring-2 focus-visible:ring-golden/50 rounded-lg
      `}
      aria-label={`Volver a ${label}`}
    >
      {/* Icono con desplazamiento lateral */}
      <motion.div
        variants={{
          rest: { x: 0 },
          hover: { x: -4 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center justify-center"
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
      </motion.div>

      {/* Texto con fade y subrayado animado */}
      <motion.span
        variants={{
          rest: { opacity: 0.8 },
          hover: { opacity: 1 }
        }}
        className="relative"
      >
        {label}
        <span className={`absolute -bottom-1 left-0 w-0 h-[1px] ${theme.bg} transition-all duration-300 group-hover:w-full`} />
      </motion.span>
    </motion.button>
  );
};

export default BackButton;




// // Otro
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const BackButton = ({ label = "Regresar", to = -1, className = "" }) => {
//   const navigate = useNavigate();

//   return (
//     <motion.button
//       onClick={() => navigate(to)}
//       initial="initial"
//       whileHover="hover"
//       whileTap="tap"
//       className={`
//         relative group flex items-center gap-3 px-6 py-2.5
//         rounded-xl overflow-hidden border border-golden/30
//         text-golden transition-colors duration-300
//         font-anta uppercase text-xs tracking-[0.2em]
//         cursor-pointer outline-none bg-transparent
//         ${className}
//       `}
//     >
//       {/* El "Llenado" de fondo (Capa del video) */}
//       <motion.div
//         variants={{
//           initial: { y: "100%" },
//           hover: { y: 0 }
//         }}
//         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//         className="absolute inset-0 bg-golden z-0"
//       />

//       {/* Contenido del botón (encima del fondo) */}
//       <div className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
//         <motion.div
//           variants={{
//             initial: { x: 0 },
//             hover: { x: -3 }
//           }}
//         >
//           <ArrowLeft size={18} strokeWidth={2} />
//         </motion.div>
        
//         <span className="font-semibold">{label}</span>
//       </div>
//     </motion.button>
//   );
// };

// export default BackButton;
















// import React from 'react';
// import styled from 'styled-components';

// const BackButton = () => {
//   return (
//     <StyledWrapper>
//       <button className="animated-button">
//         <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
//         </svg>
//         <span className="text">Modern Button</span>
//         <span className="circle" />
//         <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
//         </svg>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .animated-button {
//     position: relative;
//     display: flex;
//     align-items: center;
//     gap: 4px;
//     padding: 16px 36px;
//     border: 4px solid;
//     border-color: transparent;
//     font-size: 16px;
//     background-color: inherit;
//     border-radius: 100px;
//     font-weight: 600;
//     color: greenyellow;
//     box-shadow: 0 0 0 2px greenyellow;
//     cursor: pointer;
//     overflow: hidden;
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .animated-button svg {
//     position: absolute;
//     width: 24px;
//     fill: greenyellow;
//     z-index: 9;
//     transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .animated-button .arr-1 {
//     right: 16px;
//   }

//   .animated-button .arr-2 {
//     left: -25%;
//   }

//   .animated-button .circle {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 20px;
//     height: 20px;
//     background-color: greenyellow;
//     border-radius: 50%;
//     opacity: 0;
//     transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .animated-button .text {
//     position: relative;
//     z-index: 1;
//     transform: translateX(-12px);
//     transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .animated-button:hover {
//     box-shadow: 0 0 0 12px transparent;
//     color: #212121;
//     border-radius: 12px;
//   }

//   .animated-button:hover .arr-1 {
//     right: -25%;
//   }

//   .animated-button:hover .arr-2 {
//     left: 16px;
//   }

//   .animated-button:hover .text {
//     transform: translateX(12px);
//   }

//   .animated-button:hover svg {
//     fill: #212121;
//   }

//   .animated-button:active {
//     scale: 0.95;
//     box-shadow: 0 0 0 4px greenyellow;
//   }

//   .animated-button:hover .circle {
//     width: 220px;
//     height: 220px;
//     opacity: 1;
//   }`;

// export default BackButton;


// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const BackButton = ({ label = "Regresar", to = -1 }) => {
//   const navigate = useNavigate();

//   // Curva de animación suave (Bézier)
//   const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] };

//   return (
//     <motion.button
//       onClick={() => navigate(to)}
//       initial="rest"
//       whileHover="hover"
//       whileTap="tap"
//       className="relative flex items-center justify-center px-10 py-4 overflow-hidden font-anta uppercase text-xs tracking-[0.2em] rounded-lg cursor-pointer bg-transparent border-none ring-2 ring-lime-400 text-lime-400"
//     >
//       {/* 1. Círculo que se expande desde el centro */}
//       <motion.div
//         variants={{
//           rest: { scale: 0 },
//           hover: { scale: 12 },
//         }}
//         transition={transition}
//         className="absolute w-6 h-6 rounded-full bg-lime-400 z-0"
//       />

//       {/* Contenedor del contenido para manejar capas (z-index) */}
//       <div className="relative z-10 flex items-center justify-center min-w-[120px]">
        
//         {/* 2. Icono que ENTRA desde la izquierda (Invisible al inicio) */}
//         <motion.div
//           className="absolute left-[-20px]" 
//           variants={{
//             rest: { x: -20, opacity: 0, color: "#a3e635" },
//             hover: { x: 0, opacity: 1, color: "#862929" },
//           }}
//           transition={transition}
//         >
//           <ArrowLeft size={18} strokeWidth={2.5} />
//         </motion.div>

//         {/* 3. Texto (Se desplaza a la derecha para dar espacio a la flecha nueva) */}
//         <motion.span
//           variants={{
//             rest: { x: -10, color: "#a3e635" },
//             hover: { x: 15, color: "#862929" },
//           }}
//           transition={transition}
//         >
//           {label}
//         </motion.span>

//         {/* 4. Icono que SALE hacia la derecha (Visible al inicio) */}
//         <motion.div
//           className="absolute right-[-20px]"
//           variants={{
//             rest: { x: 0, opacity: 1, color: "#a3e635" },
//             hover: { x: 40, opacity: 0, color: "#862929" },
//           }}
//           transition={transition}
//         >
//           <ArrowLeft size={18} strokeWidth={2.5} />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// };

// export default BackButton;