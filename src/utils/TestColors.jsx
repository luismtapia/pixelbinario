const TestColors = () => {
  const categories = [
    { id: 'golden', name: 'Figma' },
    { id: 'photoshop', name: 'Photoshop' },
    { id: 'colores', name: 'Colores' },
    { id: 'tutoriales', name: 'Tutoriales' }
  ];

  return (
    <div className="p-10 flex flex-wrap gap-4 bg-raisin min-h-screen">
      {categories.map((cat) => (
        <div 
          key={cat.id}
          className={`p-6 rounded-2xl transition-all border-2 
            bg-${cat.id}/10 border-${cat.id} shadow-lg shadow-${cat.id}/20`}
        >
          <h3 className={`text-${cat.id} font-anta text-xl`}>{cat.name}</h3>
          <p className="text-taupe text-sm">V4 Dynamic Test</p>
          <button className={`mt-4 px-4 py-2 rounded-lg bg-${cat.id} text-raisin font-bold`}>
            Click Me
          </button>
        </div>
      ))}
    </div>
  );
};

export default TestColors;