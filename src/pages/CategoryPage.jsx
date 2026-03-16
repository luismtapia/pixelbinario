import React from "react";
import { useParams } from "react-router-dom"; // Importante para capturar la URL
import { RESOURCES } from "../data/resourcesData";

// Componente Interno (o impórtalo desde otro archivo)
const ResourceCard = ({ item }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-yellow-500 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-gray-900 rounded-lg text-yellow-500">
          {item.icon}
        </div>
      </div>
      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.desc}</p>
      <a 
        href={item.url} 
        target="_blank" // Recomendado para enlaces externos
        rel="noopener noreferrer"
        className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center group-hover:gap-2 transition-all"
      >
        Ver Recursos <span className="ml-1">→</span>
      </a>
    </div>
  );
};

const CategoryPage = () => {
  // 1. Obtenemos el nombre de la categoría desde la URL
  const { categoryName } = useParams();
  
  // 2. Buscamos la data en nuestro objeto RESOURCES
  const category = RESOURCES[categoryName];

  // 3. Manejo de error si la categoría no existe
  if (!category) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Categoría "{categoryName}" no encontrada</h2>
          <a href="/" className="text-yellow-500 underline">Volver al inicio</a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 pt-24 bg-[#0f0f0f] min-h-screen"> {/* pt-24 para que el navbar no lo tape */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-2 uppercase tracking-tighter">
          {category.title}
        </h1>
        <p className="text-gray-500 mb-12">Explora nuestra selección curada de herramientas y activos.</p>
        
        {Object.entries(category.sections).map(([sectionName, items]) => (
          <section key={sectionName} className="mb-16">
            <h2 className="text-yellow-500/80 uppercase tracking-[0.2em] text-xs font-bold mb-6 flex items-center">
              <span className="mr-4">// {sectionName}</span>
              <div className="h-[1px] bg-gray-800 flex-1"></div>
              <span className="ml-4 text-gray-600">{items.length} ITEMS</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(item => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;