import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ placeholder = "Buscar recursos", onSearch }) => {
  // Estado local para que el input sea fluido al escribir
  const [displayValue, setDisplayValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Lógica de Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(displayValue);
    }, 300); // 300ms de espera

    return () => {
      clearTimeout(handler); // Limpia el timer si el usuario sigue escribiendo
    };
  }, [displayValue, onSearch]);

  const handleClear = () => {
    setDisplayValue("");
  };

  return (
    <div className="relative hidden lg:block">
      <input
        type="text"
        value={displayValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setDisplayValue(e.target.value)}
        className="bg-white border border-zinc-200 text-xs text-zinc-800 rounded-full pl-10 pr-10 py-1.5 w-48 focus:w-56 focus:outline-none focus:border-golden transition-all duration-500 shadow-sm"
        placeholder={placeholder}
      />
      
      {/* Icono de Lupa Animado */}
      <motion.div
        animate={{ 
          scale: isFocused ? 1.2 : 1,
          color: isFocused ? "#D4AF37" : "#8E8E8E",
          x: isFocused ? 2 : 0 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Search size={14} />
      </motion.div>

      {/* Botón X Animado */}
      <AnimatePresence>
        {displayValue && (
          <motion.button
            key="clear-button"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-zinc-600 p-0.5"
          >
            <X size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;