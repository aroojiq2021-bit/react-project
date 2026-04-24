function Card({ title, desc, btn, style }) {
  return (
    <div className={`group p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl border border-gray-100 ${style}`}>
      <div className="w-12 h-12 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
        {title.charAt(0)}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-500 leading-relaxed mb-6">{desc}</p>
      <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
        {btn} <span>→</span>
      </button>
    </div>
  );
}
export default Card;