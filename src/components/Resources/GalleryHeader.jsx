import React from "react";
import { Search } from "lucide-react";

const GalleryHeader = ({ title, desc, setSearchTerm, theme }) => {
  return (
    <header className="mb-16 lg:mt-12 text-center">
      <h1 className="text-5xl font-extrabold text-blanco mb-4 tracking-tight">
        {title.split(" ")[0]}{" "}
        {/* El color del texto del título es dinámico */}
        <span className={theme?.text || "text-golden"}>
          {title.split(" ").slice(1).join(" ")}
        </span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">{desc}</p>
      
      <div className="relative max-w-lg mx-auto group">
        <Search
          /* El icono cambia de color cuando el input tiene foco gracias a group-focus-within */
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors 
            group-focus-within:${theme?.text || "text-golden"}`}
          size={20}
        />
        <input
          type="text"
          placeholder="Buscar..."
          className={`w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-blanco outline-none transition-all shadow-xl 
            focus:ring-2 
            ${theme?.focusRing || "focus:ring-golden/30"} 
            ${theme?.focusBorder || "focus:border-golden"}`}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>
    </header>
  );
};

export default GalleryHeader;