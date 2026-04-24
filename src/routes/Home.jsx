function Home() {
  return (
    <div className="min-h-[92vh] bg-[#0A0A0B] text-white px-6 md:px-20 flex items-center relative overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Available for Internships</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none">
            Arooj <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Fatima
            </span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
            A Web Developer from Pakistan, building clean interfaces and scalable digital solutions with a focus on modern UI.
          </p>

          <div className="flex gap-6">
            <a href="/projects" className="px-8 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Explore Projects
            </a>
            <a href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Floating Info Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#121214] p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-mono">/status</span>
                <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">CS Student @ NAVTTC</span>
              </div>
              <div className="h-px bg-white/5 w-full"></div>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest font-bold text-[10px]">Current Focus</p>
                  <p className="text-2xl font-bold">React & UI Systems</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest font-bold text-[10px]">Academic Record</p>
                  <p className="text-2xl font-bold">3.5 CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;