import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Image,
  Lightbulb,
  Layout,
  ExternalLink,
  Zap,
  Eye,
  ArrowLeft,
  Layers,
  X,
} from "lucide-react";

// ? DATOS
import { RESOURCES } from "../data/resources/index";
import { CATEGORY_NAV_CONFIG, getTheme } from "../data/categoryNav";


// Todo: COMPONENTES
import CategoryNav from "../components/Resources/CategoryNav";

const navConfig = CATEGORY_NAV_CONFIG.figma;
const theme = getTheme(navConfig);


const UXUIPage = () => {
  const navigate = useNavigate();
  const [imagesList, setImagesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null); // Para el Lightbox



    const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentData = RESOURCES.figma;


  

  useEffect(() => {
    window.scrollTo(0, 0);

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
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const resources = {
    images: [
      {
        title: "Pixabay",
        desc: "Inmensa biblioteca de contenido libre.",
        link: "https://pixabay.com",
      },
      {
        title: "Vecteezy",
        desc: "Vectores, fotos y recursos creativos.",
        link: "https://vecteezy.com",
      },
      {
        title: "Zcool",
        desc: "Inspiración y recursos de la comunidad china.",
        link: "https://www.zcool.com.cn",
      },
      {
        title: "Unsplash",
        desc: "Fotografía de alta calidad gratuita.",
        link: "https://unsplash.com",
      },
      {
        title: "Shotdeck",
        desc: "Referencias cinematográficas para color.",
        link: "https://shotdeck.com",
      },
      {
        title: "Pexels",
        desc: "Stock de video y fotos curadas.",
        link: "https://pexels.com",
      },
    ],
    tips: [
      {
        title: "Jerarquía Visual",
        text: "No dependas solo del color. Usa variaciones de tamaño (font-size) y peso (bold/light) para crear un orden de lectura. El ojo debe saber qué es lo más importante en menos de un segundo.",
        image: "/src/assets/tips/hierarchy.webp",
      },
      {
        title: "Regla del 60-30-10",
        text: "Fórmula para equilibrio cromático: 60% color dominante (usualmente fondos neutros), 30% color secundario (componentes de UI) y 10% color de acento (exclusivo para CTAs y elementos de conversión).",
        image: "/src/assets/tips/hierarchy.webp",
      },
      {
        title: "Espaciado (White Space)",
        text: "El espacio vacío no es desperdicio, es legibilidad. Si una interfaz se siente saturada, aumenta los márgenes y el interlineado antes de reducir el tamaño de los elementos.",
        image: "/src/assets/tips/hierarchy.webp",
      },
      {
        title: "La Regla de Tercios",
        text: "Divide el lienzo con dos líneas horizontales y dos verticales equidistantes. Coloca los elementos clave en las intersecciones para crear una composición dinámica y equilibrada en lugar de simplemente centrarlo todo.",
        image: "/src/assets/tips/hierarchy.webp",
      },
      {
        title: "Padding de Seguridad",
        text: "Es el margen interno 'intocable'. Evita que el contenido se acerque demasiado a los bordes del contenedor o de la pantalla, previniendo la fatiga visual y proyectando un acabado profesional. 50% del elemento",
        image: "/src/assets/tips/hierarchy.webp",
      },
    ],
    examples: [
      {
        title: "Mobbin",
        desc: "Biblioteca de flujos de apps reales.",
        link: "https://mobbin.com",
      },
      {
        title: "Dribbble",
        desc: "Inspiración visual y tendencias.",
        link: "https://dribbble.com",
      },
      {
        title: "Digital Synopsis",
        desc: "Galería de inspiración sobre diseño, publicidad y creatividad visual.",
        link: "https://digitalsynopsis.com",
      },
    ],
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-raisin text-white m-0 p-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <CategoryNav
        page={navConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Botón Regresar */}
      <div className="pt-12 px-8 mb-6">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-taupe hover:text-golden transition-colors font-anta uppercase text-xs tracking-widest"
        >
          <ArrowLeft size={16} /> Regresar
        </motion.button>
      </div>

      <div className="space-y-24 px-8 pb-32">
        {/* SECCIÓN: BANCOS DE IMÁGENES */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Image className="text-golden" size={28} />
            <h2 className="text-3xl font-gugi uppercase tracking-tighter">
              Bancos de Imágenes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.images.map((res, i) => (
              <motion.a
                key={i}
                href={res.link}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-golden/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-golden font-bold font-anta">
                    {res.title}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-taupe group-hover:text-white"
                  />
                </div>
                <p className="text-taupe text-sm leading-relaxed">{res.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

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

        {/* SECCIÓN: TIPS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-400" size={28} />
            <h2 className="text-3xl font-gugi uppercase tracking-tighter">
              Tips de Diseño
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.tips.map((tip, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden group hover:bg-zinc-800/60 transition-all duration-300"
              >
                {/* Contenedor de Imagen */}
                <div className="h-48 overflow-hidden bg-zinc-800 relative">
                  {tip.image ? (
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Zap className="text-golden/20" size={48} />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-raisin/80 backdrop-blur-md p-2 rounded-lg border border-golden/20">
                    <Zap className="text-golden" size={18} />
                  </div>
                </div>

                {/* Contenido de Texto */}
                <div className="p-6">
                  <h4 className="text-white font-bold mb-3 font-anta text-xl group-hover:text-golden transition-colors">
                    {tip.title}
                  </h4>
                  <p className="text-taupe text-sm leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: INSPIRACIÓN */}
        <section className="bg-golden/5 p-8 rounded-3xl border border-golden/10">
          <div className="flex items-center gap-3 mb-8">
            <Layout className="text-golden" size={28} />
            <h2 className="text-3xl font-gugi uppercase tracking-tighter">
              Inspiración UI
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.examples.map((ex, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-video group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-golden text-xs font-bold uppercase mb-1">
                    Recurso
                  </p>
                  <h4 className="text-xl text-white font-gugi">{ex.title}</h4>
                </div>
                <a
                  href={ex.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-golden/20 backdrop-blur-sm"
                >
                  <Eye className="text-white" size={32} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

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
    </motion.div>
  );
};

export default UXUIPage;
