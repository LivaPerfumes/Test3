import React from 'react';
import { Instagram, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/livaperfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/livaperfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: contact@livaperfumes.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p>Stay updated with our latest products and offers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}