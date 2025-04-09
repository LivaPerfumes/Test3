import React from 'react';
import { Star, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-65"
            src="https://cdn.pixabay.com/photo/2018/05/13/21/32/shop-3398039_1280.jpg"
            alt="About Hero"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-8 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white sm:text-5xl lg:text-6xl">Our Story</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200">
            Crafting exceptional fragrances that tell unique stories
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              To create extraordinary fragrances that inspire confidence and leave lasting impressions, 
              while maintaining the highest standards of quality and sustainability.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Quality First</h3>
              <p className="mt-2 text-gray-500">
                We source only the finest ingredients from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Passion for Perfection</h3>
              <p className="mt-2 text-gray-500">
                Every fragrance is crafted with dedication and attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Customer Focus</h3>
              <p className="mt-2 text-gray-500">
                Your satisfaction is our top priority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2024, Liva Perfumes has quickly established itself as a premier destination 
                for luxury fragrances. Our journey began with a simple vision: to create unique scents 
                that capture moments and emotions.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we continue to innovate and create exceptional fragrances that resonate with our 
                customers, while maintaining our commitment to quality and sustainability.
              </p>
            </div>
            <div className="relative h-96">
            <img 
  src={`${import.meta.env.BASE_URL}read-e-catalog.jpg`} 
  alt="Liva Perfumes Logo"
  className="absolute inset-0 w-full h-full object-cover rounded-lg"
/>

            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Star className="h-8 w-8 text-purple-600 mx-auto" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Master Perfumers</h2>
            <p className="mt-4 text-xl text-gray-500">
              Our team of expert perfumers brings decades of experience and passion to every creation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}