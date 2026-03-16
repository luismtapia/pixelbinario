const Footer = () => (
  <footer id="contacto" className="py-24 relative overflow-hidden bg-raisin/30">
    
    {/* Contenedor de la línea de brillo */}
    <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-r from-transparent via-golden/50 to-transparent animate-shimmer-once" />
    </div>

    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative group">
        <h2 className="font-gugi text-4xl text-white mb-6 tracking-wider">CONTACTO</h2>
        <p className="font-anta text-taupe text-lg">
          ¿Tienes algún recurso que quieras compartir o una duda técnica?
        </p>
        <a 
          href="mailto:hola@pixelbinario.com" 
          className="relative inline-block text-golden font-bold mt-4 hover:text-white transition-colors duration-300"
        >
          hola@pixelbinario.com
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-golden scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </a>
      </div>

      <div className="font-anta text-taupe flex flex-col gap-3">
        <h4 className="text-white font-bold mb-2 tracking-widest uppercase text-sm">Redes</h4>
        <div className="flex flex-col gap-2">
          {['GitHub', 'LinkedIn', 'Instagram'].map((red) => (
            <a 
              key={red}
              href="#" 
              className="hover:text-golden hover:translate-x-2 transition-all duration-300 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-golden rounded-full opacity-0 hover:opacity-100 transition-opacity" />
              {red}
            </a>
          ))}
        </div>
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center">
      <p className="text-taupe/40 font-anta text-sm uppercase tracking-tighter">
        © {new Date().getFullYear()} PixelBinario — Estética & Código
      </p>
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


    
  </footer>
);

export default Footer;

