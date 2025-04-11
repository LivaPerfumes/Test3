import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Footer from '../components/Footer';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://script.google.com/macros/s/AKfycbwhey1oULXVViweimG3M2J3_xmdg6rbHNlHqnnXTT0VQ8wR-O48T21XAQ1H7rP8qk7CDA/exec", {
      method: 'POST',
      body: data,
    });

    const result = await response.json();
    if (result.result === 'success') {
      setStatus("Message sent successfully!");
      form.reset();

      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-16 bg-white text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="max-w-7xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Contact Us</h1>
          <p className="mt-4 text-lg text-purple-100">We'd love to hear from you!</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="John Smith" required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="e.g. 9876543210" required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="e.g. abc@gmail.com" required className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
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

              {status && (
                <p className="text-green-600 font-medium mt-2">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <Mail className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm">livaperfume@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm">(+91) 7902524012</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm">Whitefield, NH-75<br />Bangalore, Karnataka</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* ✅ Footer added here */}
            <Footer />
    </div>
  );
}
