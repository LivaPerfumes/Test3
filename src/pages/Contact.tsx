import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-300">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            <form className="mt-8 space-y-6">
              <div>
               <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="John Smith" required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="e.g. 7902524012" required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

               <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="e.g. Abc@gmail.com" required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" placeholder="Type here!!!" rows={4} required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
              </div>


              <div>
                <button type="submit" className="w-full bg-purple-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300">
                  ✉️ Send Message
                </button>
              </div>

              
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-500">Contact@livaperfumes.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-500">(+91) 7902524012</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-500">
                    Whitefield, NH-75 <br />
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}