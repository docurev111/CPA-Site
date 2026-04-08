import { Link, Outlet } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold tracking-tight text-gray-900">Sample CPA</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary-500" />
            <span className="text-lg font-bold">Sample CPA</span>
          </div>
          <p className="text-gray-400 text-sm text-center"> {new Date().getFullYear()} Sample CPA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
