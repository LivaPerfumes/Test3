import React from 'react';
import { Instagram, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto"> {/* `mt-auto` pushes footer to bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/livaperfumes_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/917902524012?text=Hey Liva! I would like to know more about your products."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="tel:+917902524012"
                className="hover:text-purple-400"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: contact@livaperfumes.com</p>
            <p>Phone: +91 790 252 4012</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p>Stay updated with our latest products and offers</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold">©2025 Liva Perfumes </p>
        </div>
      </div>
    </footer>
  );

}