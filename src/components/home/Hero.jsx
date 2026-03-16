const Hero = () => {

    const degradado = "bg-gradient-to-r from-transparent via-golden/50 to-transparent";
  return (
    <div className="relative overflow-hidden p-6 bg-raisin/50 backdrop-blur-sm">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-golden/20 rounded-full blur-[100px] -z-10" />
       <header className="py-20 text-right">
          <h1 className="font-gugi text-golden text-6xl md:text-8xl mb-4 mr-12">
            PIXEL<span className="text-blanco">BINARIO</span>
          </h1>
          <p className="font-zcool-qing text-taupe text-2xl tracking-widest mr-56">
            HUB DE RECURSOS PARA CREATIVOS DIGITALES
          </p>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-20 text-center">
          {/* Aquí irán los siguientes componentes */}
          <h1 className="text-6xl font-bold mb-6">
            La base de <span className="text-golden font-zcool-kuaile">recursos</span> definitiva.
          </h1>
        </main>
        <div className="absolute bottom-6 right-6 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-golden/30 rounded-sm" />
          ))}
        </div>
    </div>
  );
};

export default Hero;




// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden border border-taupe/10 p-6 rounded-3xl bg-raisin/50 backdrop-blur-sm">
      
//       {/* 1. El Blur de la izquierda (Efecto de iluminación) */}
//       <div className="absolute -top-24 -left-24 w-96 h-96 bg-golden/20 rounded-full blur-[100px] -z-10" />

//       {/* 2. Detalle alusivo al nombre (Textura Binaria sutil) */}
//       <div className="absolute top-10 left-10 opacity-[0.03] font-mono text-xs select-none pointer-events-none -z-10 leading-tight">
//         {Array(10).fill("01101001 01101110 01100001 01110010 01101001 01101111").map((line, i) => (
//           <p key={i}>{line}</p>
//         ))}
//       </div>

//       <header className="relative py-20 flex flex-col">
//         {/* Logo alineado a la derecha */}
//         <h1 className="font-gugi text-golden text-6xl md:text-9xl mb-4 text-right tracking-tighter">
//           PIXEL<span className="text-blanco">BINARIO</span>
//         </h1>

//         {/* Eslogan en el centro con una línea decorativa */}
//         <div className="flex flex-col items-center">
//           <p className="font-zcool-qing text-taupe text-xl md:text-2xl tracking-[0.3em] text-center uppercase">
//             Hub de recursos para creativos digitales
//           </p>
//           <div className="w-24 h-[1px] bg-golden/40 mt-4 self-center" />
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-24 text-center">
//         {/* Título principal con tipografía KuaiLe */}
//         <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-blanco">
//           La base de <span className="text-golden font-zcool-kuai">recursos</span> <br /> 
//           definitiva para tu flujo creativo.
//         </h2>
        
//         {/* Placeholder para el buscador que diseñamos antes */}
//         <div className="max-w-xl mx-auto">
//             <div className="relative group">
//                 <input 
//                   type="text" 
//                   placeholder="Busca tipografías, assets, inspiración..."
//                   className="w-full bg-raisin border border-taupe/20 px-6 py-4 rounded-2xl shadow-input-base focus:shadow-[0_0_0_4px_var(--color-glow)] focus:border-golden outline-none transition-all duration-300"
//                 />
//                 <span className="absolute right-4 top-4 text-taupe/50 group-focus-within:text-golden transition-colors">
//                     ⌘K
//                 </span>
//             </div>
//         </div>
//       </main>

//       {/* Detalle pixelado decorativo en la esquina inferior derecha */}
//       <div className="absolute bottom-6 right-6 flex gap-1">
//         {[...Array(3)].map((_, i) => (
//           <div key={i} className="w-2 h-2 bg-golden/30 rounded-sm" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;





















/*
const ResourceCard = ({ title, category }) => {
  return (
    <div className="bg-zinc-900 border border-taupe/10 p-6 rounded-xl">
      <span className="font-zcool-qing text-golden tracking-wider text-sm uppercase">
        {category}
      </span>
      
      <h3 className="font-gugi text-2xl text-white mt-2">
        {title}
      </h3>
      
      <p className="font-anta text-taupe mt-4">
        Explora la documentación completa y ejemplos de uso.
      </p>
    </div>
  );
};
*/