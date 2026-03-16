
const ResourceCard = ({ item }) => {
    return (
    <div className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 hover:border-yellow-500 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-gray-900 rounded-lg text-yellow-500">
          {item.icon}
        </div>
      </div>
      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.desc}</p>
      <a 
        href={item.url} 
        className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center group-hover:gap-2 transition-all"
      >
        Ver Recursos →
      </a>
    </div>
    );
  };

export default ResourceCard;