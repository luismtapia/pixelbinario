// // import LinksContent from "../components/LinksContent";
// // import { links } from "../data/links"; // Asegura que la ruta sea correcta
// import { useState } from "react";

// const LinksRecursosPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="min-h-screen bg-raisin pt-20">
       
      
//        menu centrado, aparecio en inicio de arriba, contenido: recursos | tutoriales
//        un header mostrando titulo y descripcion → ejemplo para links de recursos es para poder acceder a paginas que son utiles como inspiracion, descarga de recursos, ia para crear videos, etc

// Aquí podrías poner un input para setSearchTerm

//  {/* <LinksContent links={links} searchTerm={searchTerm} /> */}

//     </div>
//   );
// }

// export default LinksRecursosPage;




import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Globe, BookOpen, Sparkles } from "lucide-react";
// import LinksContent from "../components/LinksContent"; // Asegúrate de que la ruta sea correcta
import { links } from "../data/links"; 

const LinksRecursosPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("recursos");

  return (
    <div className="min-h-screen bg-raisin text-blanco pt-28 pb-20 px-6">
      {/* 1. HEADER SECCIÓN */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-golden font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Explora la Red
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Links de <span className="text-golden">Recursos</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Accede a una colección curada de herramientas útiles: desde inspiración visual y 
            descarga de assets, hasta las últimas IAs para creación de video y diseño.
          </p>
        </motion.div>

        {/* 2. MENU CENTRADO (TABS) */}
        <nav className="flex justify-center mt-12">
          <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex gap-2">
            <button
              onClick={() => setActiveTab("recursos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "recursos" 
                ? "bg-golden text-raisin shadow-lg shadow-golden/20" 
                : "hover:bg-white/5 text-gray-400"
              }`}
            >
              <Globe size={18} />
              Recursos
            </button>
            <button
              onClick={() => setActiveTab("tutoriales")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "tutoriales" 
                ? "bg-golden text-raisin shadow-lg shadow-golden/20" 
                : "hover:bg-white/5 text-gray-400"
              }`}
            >
              <BookOpen size={18} />
              Tutoriales
            </button>
          </div>
        </nav>
      </header>

      {/* 3. BARRA DE BÚSQUEDA */}
      <div className="max-w-xl mx-auto mb-16 relative">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Buscar herramienta, categoría o tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-golden/50 focus:ring-1 focus:ring-golden/50 transition-all placeholder:text-gray-600 text-blanco"
        />
        {searchTerm && (
           <button 
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-5 text-gray-500 hover:text-golden text-xs font-bold"
           >
            Limpiar
           </button>
        )}
      </div>

      {/* 4. CONTENIDO DINÁMICO */}
      <main className="max-w-7xl mx-auto">
        {activeTab === "recursos" ? (
        //   <LinksContent links={links} searchTerm={searchTerm} />
          <section>
            linksconntent
          </section>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 border border-dashed border-white/10 rounded-3xl"
          >
            <Sparkles className="mx-auto mb-4 text-golden/40" size={48} />
            <h3 className="text-xl font-bold text-gray-400">Próximamente: Tutoriales</h3>
            <p className="text-gray-500">Estamos preparando las mejores guías paso a paso.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default LinksRecursosPage;