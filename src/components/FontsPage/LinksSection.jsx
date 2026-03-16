// --- SUB-COMPONENTE: LINKS DE HERRAMIENTAS ---
import { motion, AnimatePresence } from 'framer-motion';
import {ExternalLink } from 'lucide-react';
import FontCard from './FontCard';


const LinksSection = ({ recursosFuentes }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    id="links" 
    className="mb-24"
  >
    <div className="flex items-center gap-3 mb-10">
      <ExternalLink className="text-golden" size={28} />
      <h2 className="text-3xl text-golden font-anta uppercase tracking-tighter">
        Herramientas & Enlaces
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recursosFuentes.map((recurso, index) => (
        <motion.a
          key={index}
          href={recurso.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="relative group overflow-hidden bg-shadow border border-white/10 rounded-xl p-4 hover:border-golden/40 transition-all duration-300 block"
        >
          <div className="absolute inset-0 bg-golden/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-golden font-anta text-base tracking-wide">{recurso.name}</h3>
              <div className="p-1.5 bg-golden/5 rounded-lg group-hover:bg-golden/20 group-hover:text-golden transition-all">
                <ExternalLink size={12} className='text-golden' />
              </div>
            </div>
            <p className="text-taupe text-[11px] leading-tight line-clamp-2">{recurso.descripcion}</p>
          </div>
        </motion.a>
      ))}
    </div>

    <div>
      <FontCard/>
    </div>
  </motion.section>
);

export default LinksSection;