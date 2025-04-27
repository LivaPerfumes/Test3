import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Tag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=2000',
    title: 'Discover Your Signature Scent',
    subtitle: 'Explore our collection of luxury fragrances crafted with the finest ingredients.',
    buttons: [
      {
        text: 'Shop Now',
        link: '/products',
        isExternal: false
      }
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1595425300377-c1eef204b2eb?auto=format&fit=crop&q=80&w=2000',
    title: 'Luxury in Every Drop',
    subtitle: 'Experience the art of perfumery with our exclusive collections.',
    buttons: [
      {
        text: 'Catalog 1',
        link: 'https://github.com',
        isExternal: true
      }
    ]
  },
  {
    url: 'https://images.unsplash.com/photo-1595426497183-b31ea6f7c49f?auto=format&fit=crop&q=80&w=2000',
    title: 'Elegance Bottled',
    subtitle: 'Find your perfect fragrance from our curated selection.',
    buttons: [
      {
        text: 'Catalog 2',
        link: 'https://github.com/1',
        isExternal: true
      }
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(product => product.featured);
  const newProducts = products.filter(product => product.isNew);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <div className="relative h-[60vh] sm:h-[60vh] mt-16">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={image.url}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  {image.title}
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                  {image.subtitle}
                </p>
                <div className="mt-6 sm:mt-8 space-y-4">
                  {image.buttons.map((button, buttonIndex) => (
                    button.isExternal ? (
                      <a
                        key={buttonIndex}
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-colors"
                      >
                        {button.text}
                      </a>
                    ) : (
                      <Link
                        key={buttonIndex}
                        to={button.link}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-colors"
                      >
                        {button.text}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-2 mb-8">
          <Tag className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Collections</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">About Liva</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600">
                Liva Perfumes brings you exceptional fragrances that capture the essence of luxury and sophistication. 
                Each scent is carefully crafted using the finest ingredients, creating unique and lasting impressions.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn more about us →
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[3/2]">
              <img
                src="https://images.unsplash.com/photo-1595425300377-c1eef204b2eb?auto=format&fit=crop&q=80&w=800"
                alt="About Liva"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}