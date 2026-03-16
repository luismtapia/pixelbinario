const LinksSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-anta">
    {['Adobe Color', 'Coolors', 'Happy Hues', 'Color Hunt','https://colorswall.com/'].map(link => (
      <a key={link} target='_blank' href={link} className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center hover:bg-zinc-700 transition-colors">
        <span className="text-white">{link}</span>
        <span className="text-golden">↗</span>
      </a>
    ))}
  </div>
);


export default LinksSection;