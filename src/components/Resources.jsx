import { Link } from 'react-router-dom';
import { categories } from '../data/categories';


const ResourcesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="font-gugi text-3xl text-golden mb-10 border-l-4 border-golden pl-4">
        EXPLORAR CATEGORÍAS
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          // <CategoryPage item={cat}/>

          <Link 
            to={cat.link}
            key={cat.id} 
            className="group relative bg-shadow border border-taupe/10 p-8 rounded-2xl hover:border-golden/50 transition-all cursor-pointer block"
          >
            {/* Efecto de brillo de fondo al pasar el mouse */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-golden/5 rounded-full blur-3xl group-hover:bg-golden/10 transition-colors" />

            <div className="flex items-start justify-between">
              <div className="p-3 bg-raisin rounded-lg text-golden border border-golden/20">
                {cat.icon}
              </div>
              <span className="text-taupe text-xs font-anta uppercase tracking-widest">
                {cat.count}
              </span>
            </div>

            <h3 className={`${cat.font} text-4xl text-white mt-6 group-hover:text-golden transition-colors`}>
              {cat.name}
            </h3>
            
            <p className="font-anta text-taupe mt-2 text-sm">
              Accede a la mejor selección de {cat.name.toLowerCase()} para tus proyectos.
            </p>

            <div className="mt-6 flex items-center text-golden text-sm font-bold font-anta group-hover:gap-2 transition-all">
              VER RECURSOS <span>→</span>
            </div>
          </Link>



        ))}
      </div>
    </section>
  );
};

export default ResourcesGrid;