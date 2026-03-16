import React from "react";

const pixelBinarioSpecs = {
  identidadVisual: {
    variantes: ["Isotipo", "Logotipo", "Imagotipo", "Isologo (Opcional)"],
    modos: [
      "Transparente",
      "Monocromático",
      "Fondo Claro",
      "Fondo Oscuro",
      "Fondo Color Logo",
    ],
    formatos: ["SVG", "PDF", "PNG", "Favicon"],
  },
  publicidad: [
    { nombre: "Post Cuadrado", ratio: "1:1", dimensiones: "1200x1200px" },
    { nombre: "Post Landscape", ratio: "1.91:1", dimensiones: "1200x630px" },
    { nombre: "Reels/Stories", ratio: "9:16", dimensiones: "1080x1920px" },
    { nombre: "Portada", dimensiones: "830x315px" },
    { nombre: "Perfil", dimensiones: "1080x1080px" },
  ],
  impresion: {
    tarjeta: {
      lienzo: "9.6x5.6 cm",
      corte: "9.0x5.0 cm",
      safeArea: "8.4x4.4 cm",
      bleed: "3mm",
    },
  },
};

const SpecsTable = () => {
  return (
    <div className="min-h-screen bg-black p-8 font-mono text-gray-300">
      {/* Contenedor Principal con efecto de terminal */}
      <div className="max-w-4xl mx-auto border border-gray-800 bg-[#0a0a0a] shadow-2xl shadow-cyan-900/20 rounded-lg overflow-hidden">
        {/* Header Estilo IDE / Archivo */}
        <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Master_Kit.MD // Pixel Binario
          </span>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-black text-cyan-400 mb-8 border-b-2 border-cyan-900 pb-2">
            PIXEL BINARIO <span className="text-white font-light">//</span>{" "}
            MASTER_KIT_SPECS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Columna 1: Identidad y Formatos */}
            <div className="space-y-8">
              <section>
                <h3 className="text-pink-500 font-bold mb-3 flex items-center gap-2">
                  <span className="text-xs inline-block px-1 bg-pink-500 text-black">
                    01
                  </span>
                  IDENTIDAD VISUAL
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {pixelBinarioSpecs.identidadVisual.variantes.map((v) => (
                    <div
                      key={v}
                      className="bg-gray-900 p-2 border border-gray-800 border-l-cyan-500 border-l-2 italic text-gray-400"
                    >
                      {v}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-cyan-500 font-bold mb-3 flex items-center gap-2">
                  <span className="text-xs inline-block px-1 bg-cyan-500 text-black">
                    02
                  </span>
                  FORMATOS ENTREGABLES
                </h3>
                <div className="flex gap-3">
                  {pixelBinarioSpecs.identidadVisual.formatos.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] border border-gray-700 px-2 py-1 rounded bg-gray-900 text-cyan-200"
                    >
                      .{f}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Columna 2: Social Media Assets */}
            <section className="bg-gray-900/50 p-4 border border-gray-800 rounded">
              <h3 className="text-yellow-500 font-bold mb-4 flex items-center gap-2">
                <span className="text-xs inline-block px-1 bg-yellow-500 text-black">
                  03
                </span>
                SOCIAL MEDIA ASSETS
              </h3>
              <ul className="space-y-3">
                {pixelBinarioSpecs.publicidad.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b border-gray-800 pb-1 text-sm"
                  >
                    <span className="text-gray-400">[{item.nombre}]</span>
                    <span className="text-cyan-400 font-bold">
                      {item.dimensiones}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer: Print Specs */}
          <section className="mt-10 pt-6 border-t border-gray-800">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-xs inline-block px-1 bg-white text-black">
                04
              </span>
              PRINT DIMENSIONS (Business Card)
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-2 border border-dashed border-gray-700">
                <p className="text-[10px] text-gray-500 uppercase">Lienzo</p>
                <p className="text-sm font-bold">
                  {pixelBinarioSpecs.impresion.tarjeta.lienzo}
                </p>
              </div>
              <div className="p-2 border border-dashed border-red-900 bg-red-900/10">
                <p className="text-[10px] text-red-400 uppercase">Corte</p>
                <p className="text-sm font-bold text-red-200">
                  {pixelBinarioSpecs.impresion.tarjeta.corte}
                </p>
              </div>
              <div className="p-2 border border-dashed border-green-900 bg-green-900/10">
                <p className="text-[10px] text-green-400 uppercase">
                  Área Segura
                </p>
                <p className="text-sm font-bold text-green-200">
                  {pixelBinarioSpecs.impresion.tarjeta.safeArea}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SpecsTable;
