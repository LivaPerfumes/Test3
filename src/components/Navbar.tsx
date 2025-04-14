import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center justify-start w-1/3">
            <Link to="/" className="flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Liva Perfumes Logo"
                style={{ 
                  height: '60px', 
                  width: '65px',
                  marginLeft: '-10px', 
                  marginTop: '105px', 
                  transform: 'scale(5.4)',
                }}
              />
            </Link>
          </div>

          {/* Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl md:text-6xl lg:text-2xl font-extrabold text-black-300 hover:text-black-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Liva Perfumes
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t text-center">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full"
              >
                <div className="w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
