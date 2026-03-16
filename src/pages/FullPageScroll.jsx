import React from 'react';

const FullPageScroll = () => {
  const sections = [
    { title: 'Inicio', color: '#ff5f6d' },
    { title: 'Servicios', color: '#ffc371' },
    { title: 'Portafolio', color: '#2193b0' },
    { title: 'Contacto', color: '#6dd5ed' },
  ];

  const containerStyle = {
    height: '100vh',
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory', // La clave: fuerza el scroll vertical
  };

  const sectionStyle = (color) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    scrollSnapAlign: 'start', // El bloque se alinea al inicio al hacer scroll
  });

  return (
    <div style={containerStyle}>
      {sections.map((sec, i) => (
        <section key={i} style={sectionStyle(sec.color)}>
          <h1 style={{ fontSize: '4rem', color: 'white' }}>{sec.title}</h1>
        </section>
      ))}
    </div>
  );
};

export default FullPageScroll;