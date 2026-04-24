

const projects = [
  {
    title: "MyBrand Landing Page",
    desc: "Built a modern responsive landing page using Tailwind CSS focusing on clean UI and performance.",
    tags: ["Tailwind CSS", "UI Design", "Responsive"],
    color: "from-blue-500 to-cyan-400",
    link: "https://github.com/aroojiq2021-bit/Web-layout-by-tailwind-CSS"
  },
  {
    title: "QuickBite Food Delivery UI",
    desc: "Designed a visually appealing food delivery interface using HTML, CSS and Flexbox.",
    tags: ["HTML", "Flexbox", "CSS"],
    color: "from-orange-500 to-red-400",
    link:"https://quickbite-web.netlify.app/"
  },
  {
    title: "TrekNorth Travel Website",
    desc: "Developed travel agency UI using advanced CSS techniques including variables and responsive layout.",
    tags: ["Advanced CSS", "Layouts"],
    color: "from-green-500 to-emerald-400",
    link:"https://lambent-brioche-35f50a.netlify.app/"
  },
  {
    title: "Hostel Management System",
    desc: "Designed relational database system using MySQL for managing student records efficiently.",
    tags: ["MySQL", "Database", "Backend"],
    color: "from-purple-500 to-indigo-400",
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-[#fafafa] px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h1 className="text-6xl font-black text-gray-900 mb-4">
              My <span className="text-blue-600">Work.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-md">
              A showcase of my journey in web development and database management.
            </p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-bold text-gray-200">04</span>
            <p className="text-gray-400 font-medium uppercase tracking-tighter text-sm">Projects Completed</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top Accent Bar */}
              <div className={`h-3 w-full bg-gradient-to-r ${p.color}`}></div>

              <div className="p-10">
                {/* Tech Tags */}
                <div className="flex gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h2>
                
                <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                  {p.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <button className="flex items-center gap-2 font-bold text-gray-900 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                    View Project <span className="text-blue-600 text-xl">→</span>
                  </button>
                  
                  {/* Decorative Icon */}
                  <div className="opacity-10 group-hover:opacity-100 transition-opacity">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center p-16 bg-gray-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">Let's collaborate and build something amazing together.</p>
            <a href="/contact" className="inline-block px-10 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl">
              Get In Touch
            </a>
          </div>
          {/* Abstract circle decoration */}
          <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
        </div>

      </div>
    </div>
  );
}

export default Projects;