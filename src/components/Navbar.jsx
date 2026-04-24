import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 flex justify-between items-center px-8 md:px-20 py-4 shadow-sm">
      <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Arooj.
      </h2>
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>
      <Link to="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:shadow-lg transition-all">
        Hire Me
      </Link>
    </nav>
  );
}
export default Navbar;