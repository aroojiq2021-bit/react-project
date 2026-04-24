function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-20">
      
      {/* Container with Glassmorphism effect */}
      <div className="max-w-2xl w-full bg-white/70 backdrop-blur-xl border border-white p-12 rounded-[3rem] shadow-2xl text-center">
        
        {/* Decorative Badge */}
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
          Let's Collaborate
        </div>

        <h1 className="text-5xl font-black text-gray-900 mb-6">Get in Touch</h1>
        <p className="text-gray-500 mb-12 text-lg leading-relaxed">
          I am currently open to new opportunities and internships. 
          Feel free to reach out for collaborations or just to say hi!
        </p>

        {/* Contact Links Grid */}
        <div className="grid md:grid-cols-1 gap-6 mb-12">
          
          <a href="mailto:aroojiq2021@gmail.com" className="group flex items-center gap-6 p-6 rounded-2xl bg-white hover:shadow-lg transition-all border border-gray-100">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📧</div>
            <div className="text-left">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</p>
              <p className="text-lg font-bold text-gray-800">aroojiq2021@gmail.com</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/arooj-fatima" target="_blank" className="group flex items-center gap-6 p-6 rounded-2xl bg-white hover:shadow-lg transition-all border border-gray-100">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🔗</div>
            <div className="text-left">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">LinkedIn</p>
              <p className="text-lg font-bold text-gray-800">/in/arooj-fatima</p>
            </div>
          </a>

        </div>

        <a href="mailto:aroojiq2021@gmail.com" 
           className="inline-block w-full px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200">
          Send Me an Email
        </a>

      </div>
    </div>
  );
}

export default Contact;