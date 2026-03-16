import { Code2, Palette, Terminal, Cpu } from 'lucide-react'; // Asumiendo que usas Lucide

const About = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-golden" />,
      title: "Estética Minimalista",
      desc: "Diseños limpios que priorizan la legibilidad y la experiencia de usuario."
    },
    {
      icon: <Terminal className="w-8 h-8 text-golden" />,
      title: "Código Eficiente",
      desc: "Soluciones técnicas optimizadas para el rendimiento y la escalabilidad."
    },
    {
      icon: <Cpu className="w-8 h-8 text-golden" />,
      title: "Innovación Constante",
      desc: "Exploramos las últimas fronteras del desarrollo web y la IA."
    }
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-golden/50 to-transparent animate-shimmer-once" />
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabecera de la sección */}
        <div className="text-center mb-16">
          <h2 className="font-gugi text-5xl text-golden mb-6 tracking-wider">NOSOTROS</h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-8 rounded-full" />
          <p className="font-anta text-taupe text-xl max-w-3xl mx-auto leading-relaxed">
            PixelBinario no es solo un repositorio de código; es un ecosistema donde la 
            <span className="text-golden"> precisión técnica</span> se encuentra con el <span className="text-golden">arte digital</span>. 
            Nacimos para cerrar la brecha entre lo que funciona y lo que inspira.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((f, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-taupe border border-zinc-700/50 hover:border-golden/40 transition-all duration-300 group"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-zinc-900 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-gugi text-xl text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="font-anta text-taupe/80 leading-snug">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer de la sección - Llamada a la acción o frase final */}
        <div className="mt-20 flex flex-col items-center border-t border-dorado/90  pt-12">
          <div className="flex gap-12 text-center">
            <div>
              <p className="text-3xl font-gugi text-golden">500+</p>
              <p className="text-xs text-taupe uppercase tracking-widest font-anta">Recursos</p>
            </div>
            <div className="w-px h-12 bg-dorado/80" />
            <div>
              <p className="text-3xl font-gugi text-golden">10k</p>
              <p className="text-xs text-taupe uppercase tracking-widest font-anta">Líneas de Código</p>
            </div>
          </div>
        </div>
      </div>




      {/* <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.
Lorem ipsum dolor sit amet consectetur adipiscing elit semper, gravida senectus condimentum erat dignissim nunc eleifend, dapibus nostra interdum auctor lacinia venenatis curae. Faucibus risus metus nunc senectus mauris parturient cum sapien, hendrerit porta imperdiet ridiculus rhoncus potenti vestibulum, etiam cubilia felis mattis maecenas tincidunt eu. Volutpat aliquet pulvinar proin facilisis dis praesent nec nunc ut, parturient tristique tempus convallis est urna mi fusce, massa vestibulum dui vehicula integer potenti montes euismod.
      Neque eleifend egestas hendrerit vel cum aenean at fermentum, iaculis himenaeos ut mollis turpis senectus accumsan congue, donec erat pretium montes nec euismod potenti. Conubia sociis per hendrerit luctus suscipit suspendisse venenatis tempus a, cum blandit gravida sagittis iaculis duis ullamcorper varius neque, ac interdum eget purus habitasse lectus imperdiet ante. Per eu lobortis sed netus laoreet, convallis dictumst etiam metus class pretium, augue sapien integer pellentesque.

    </p> */}

    
    </section>
  );
};

export default About;