function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white px-6 md:px-20 py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="text-6xl font-black mb-6 italic">About <span className="text-blue-500">Me.</span></h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-4xl">
            I am a goal-oriented Computer Science student passionate about building 
            modern web applications. I enjoy solving problems and continuously improving 
            my skills in frontend development and UI design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Section 1: Technical Skills */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-500">⚡</span> Technical Arsenal
            </h2>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> HTML, CSS, Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> JavaScript, React (Learning)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> MySQL Database
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> C++ / Object-Oriented Programming
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> MS Office (Word, Excel, PowerPoint)
              </li>
            </ul>
          </div>

          {/* Section 2: Strengths (Wapis Add Kar Di!) */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-purple-500">🚀</span> My Strengths
            </h2>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Quick learner and adaptable
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Strong attention to detail
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Teamwork & communication
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Self-motivated and consistent
              </li>
            </ul>
          </div>

        </div>

        {/* Section 3: Education (Full Details) */}
        <div className="mt-10 bg-gradient-to-br from-blue-600/20 to-purple-600/5 border border-white/10 p-12 rounded-[3rem]">
          <h2 className="text-3xl font-black mb-10">Education Journey</h2>
          
          <div className="space-y-10 relative">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10"></div>

            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform"></div>
              <h3 className="text-2xl font-bold text-white">BS Computer Science</h3>
              <p className="text-blue-400 font-mono text-sm mb-2">2024 – 2028</p>
              <p className="text-gray-400">Current CGPA: <span className="text-white font-bold">3.5</span></p>
            </div>

            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-gray-600 rounded-full group-hover:bg-purple-500 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white">ICS (Intermediate)</h3>
              <p className="text-purple-400 font-mono text-sm mb-2">Scholarship Holder</p>
              <p className="text-gray-400 text-lg">Scored: <span className="text-white font-bold">85%</span></p>
            </div>

            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-gray-600 rounded-full group-hover:bg-green-500 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white">Matriculation</h3>
              <p className="text-green-400 font-mono text-sm mb-2">Merit Seat</p>
              <p className="text-gray-400 text-lg">Scored: <span className="text-white font-bold">96%</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;